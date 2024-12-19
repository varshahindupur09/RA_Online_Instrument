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
    # Convert MongoDB documents to JSON for normalization
    json_data = json_util.dumps(data)
    json_data_io = StringIO(json_data)  # Use StringIO to wrap the JSON string
    df = pd.json_normalize(json.load(json_data_io))

    # Debugging: Print the DataFrame to ensure it is correct
    print("\nConverted DataFrame:")
    # print(df.head())

    # Define the desired column order
    # Reorder the DataFrame
    desired_order = ["prolific_id", "test_name", "page_number", "Financial_Literacy", "responses.FL_question_1", "responses.FL_question_2", "responses.FL_question_3", "responses.PFT1_question_1" ,"responses.PFT1_question_2" ,"responses.PFT1_question_3" ,"responses.PFT1_question_4" ,"responses.PFT1_question_5" ,"responses.PFT1_question_6" ,"responses.PFT1_question_7" ,"responses.PFT1_question_8" , "responses.PFT1_question_9" ,"responses.PFT1_question_10" ,"responses.PFT2_question_1" ,"responses.PFT2_question_2" ,"responses.PFT2_question_3", "responses.PFT2_question_4", "responses.PFT2_question_5", "responses.PFT2_question_6", "responses.PFT2_question_7", "responses.PFT2_question_8", "responses.PFT2_question_9", "responses.PFT2_question_10", "responses.SRT_question1", "responses.SRT_question2", "responses.ACT_question_attempt_1", "responses.ACT_question_attempt_2", "responses.ACT_attention_check", "responses.RT1_question1", "responses.RT1_question2", "responses.RT1_question3", "responses.RT1_question4", "responses.RT1_question5", "responses.RT1_question6", "responses.RT1_question7", "responses.RT1_question8", "responses.RT1_question9", "responses.RT1_question10", "responses.RT2_question1", "responses.RT2_question2", "responses.RT2_question3", "responses.RT2_question4", "responses.RT2_question5", "responses.RT2_question6", "responses.RT2_question7", "responses.RT2_question8", "responses.RT2_question9", "responses.RT2_question10", "responses.CBG_question", "responses.SCD_question1", "responses.SCD_question2", "responses.SCD_question3", "responses.SCD_question4", "responses.SCD_question5", "responses.SCD_question6", "responses.SCD_question7", "responses.SCD_question8", "responses.SCD_question9", "responses.SCD_question10", "responses.SCD_question11", "responses.SCD_question12", "responses.SCD_question13", "responses.SCD_question14", "responses.SCD_question15", "responses.SCD_question16", "responses.SCD_question17", "responses.SCD_question18", "responses.SCD_question19", "responses.SCD_question20", "responses.SCD_question21", "responses.SCD_question22", "responses.SCD_question23", "responses.SCD_question24", "graph_question_durations", "per_graph_durations", "responses.attention_check", "responses.mentalDemand", "responses.physicalDemand", "responses.temporalDemand", "responses.performance", "responses.effort", "responses.frustration", "responses.age", "responses.education-level", "responses.work-experience", "responses.management-experience", "responses.employment-sector", "responses.text-feedback", "incentive_calculation", "total_pay_till_now", "current_visit_test_name", "next_visit_test_name", "last_visited_test_name" ,"chart_number", "consent","__v", "_id"]
    
    base_pay = 4
    # df['total_pay_till_now'] = base_pay + df['incentive_calculation'].cumsum()
    df['incentive_calculation'] = pd.to_numeric(df['incentive_calculation'], errors='coerce').fillna(0)
    sumdata = 0
    for v in df['incentive_calculation']:
        if not v:
            v=0
        v = float(v)
        sumdata += v
    print("sum is ", sumdata)
    # print(df['incentive_calculation'].sum())
    df['total_pay_till_now'] = sumdata + 4

    # df["Financial_Literacy"] = f"{df['responses.FL_question_1']},{df['responses.FL_question_2']},{df['responses.FL_question_3']}"

    # df = df[desired_order]
    available_columns = [col for col in desired_order if col in df.columns]
    missing_columns = [col for col in desired_order if col not in df.columns]

    # Optional: Print missing columns for debugging
    if missing_columns:
        print(f"Warning: The following columns are not in the DataFrame and will be skipped: {missing_columns}")

    # Reorder the DataFrame
    df = df[available_columns]

    filenameExcel = "SurveyResponsesInExcelPythonCode.xlsx"
    # Save the DataFrame to an Excel file
    df.to_excel(filenameExcel, index=False)

    print("Data has been successfully fetched from MongoDB Atlas and converted to an Excel file.")
    # code completed
