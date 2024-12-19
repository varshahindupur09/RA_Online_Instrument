import pymongo
import pandas as pd
from bson import json_util
import json
from io import StringIO

# MongoDB connection string
mongo_uri = "mongodb+srv://hindupurv:monopoly2024@online-instrument-origi.qg8wzeg.mongodb.net/?retryWrites=true&w=majority&appName=online-instrument-original"

try:
    # Establish a connection to MongoDB
    client = pymongo.MongoClient(mongo_uri)
    print("Connected to MongoDB successfully.")
except Exception as e:
    print("Could not connect to MongoDB:", e)
    exit()

# Correct database name
db_name = 'test'  # Changed from 'online-instrument-original' to 'test'
collection_name = 'surveyresponses'

try:
    # List all databases
    databases = client.list_database_names()
    print(f"Databases: {databases}")

    # Access the database
    db = client[db_name]
    
    # List all collections in the database
    collections = db.list_collection_names()
    print(f"Collections in database '{db_name}': {collections}")

    # Fetch data from the specified collection
    collection = db[collection_name]
    data = list(collection.find())
    print(f"Data fetched from collection '{collection_name}' in database '{db_name}'")
except Exception as e:
    print(f"Error accessing database '{db_name}' or collection '{collection_name}':", e)
    exit()

# Check if data is not empty
if not data:
    print("No data found in the collection.")
else:
    # Convert MongoDB documents to JSON for normalizationt
    try:
        json_data = json_util.dumps(data)
        json_data_io = StringIO(json_data)  # Use StringIO to wrap the JSON string
        df = pd.json_normalize(json.load(json_data_io))

        df.rename(columns={"responses.ACT_attention_check" : "Attention_Check_1"}, inplace=True)
        df.rename(columns={"responses.attention_check" : "Attention_Check_2"}, inplace=True)

        df.sort_values(by=["prolific_id", "page_number"]).reset_index(drop=True)
        df["incentive_calculation"] = pd.to_numeric(df["incentive_calculation"], errors="coerce")
        test_filter = df["current_visit_test_name"].isin(["/paper-folding-test-part-1", "/paper-folding-test-part-2"])
        df.loc[test_filter, "Paper_Folding_Test_Bonus"] = df.loc[test_filter, "incentive_calculation"]
        result = pd.concat([group for _, group in df.groupby(["prolific_id", "page_number"])] + [pd.DataFrame(columns=df.columns)], ignore_index=True)

        df["Financial_Literacy_Score"] = df[["responses.FL_question_1", "responses.FL_question_2", "responses.FL_question_3"]].fillna("").agg(" | ".join, axis=1)
        rotation_columns = [
        "responses.RT1_question1", "responses.RT1_question2", "responses.RT1_question3", "responses.RT1_question4",
        "responses.RT1_question5", "responses.RT1_question6", "responses.RT1_question7", "responses.RT1_question8",
        "responses.RT1_question9", "responses.RT1_question10", "responses.RT2_question1", "responses.RT2_question2",
        "responses.RT2_question3", "responses.RT2_question4", "responses.RT2_question5", "responses.RT2_question6",
        "responses.RT2_question7", "responses.RT2_question8", "responses.RT2_question9", "responses.RT2_question10"
        ]

        rotation_test_filter = df["current_visit_test_name"].str.contains("rotation-test", na=False)
        df.loc[rotation_test_filter, "Rotation_Test_Bonus"] = df.loc[rotation_test_filter, "incentive_calculation"]

        # Group by `prolific_id` and calculate aggregated columns
        aggregated = df.groupby("prolific_id").agg(
            Attention_Check_1=("Attention_Check_1", "first"),
            Attention_Check_2=("Attention_Check_2", "first"),
            Paper_Folding_Test_Bonus=("Paper_Folding_Test_Bonus", "sum"),
            Rotation_Test_Bonus=("Rotation_Test_Bonus", "sum")
        ).reset_index()

        aggregated["Paper_Folding_Test_Score"] = aggregated["Paper_Folding_Test_Bonus"] / 0.05
        aggregated["Rotation_Test_Score"] = aggregated["Rotation_Test_Bonus"] / 0.05
        desired_columns_order = ["prolific_id", "Attention_Check_1", "Attention_Check_2", "Paper_Folding_Test_Score", "Paper_Folding_Test_Bonus", "Rotation_Test_Score", "Rotation_Test_Bonus"]
        aggregated = aggregated[desired_columns_order]
        
        filenameExcel = "SummaryDataMongoDBToExcel2.xlsx"

        # Save the DataFrame to an Excel file
        aggregated.to_excel(filenameExcel, index=False)

        print("Data has been successfully fetched from MongoDB Atlas and converted to an Excel file.")
    except Exception as e:
        print(f"An error occurred while creating bucket: {e}")


