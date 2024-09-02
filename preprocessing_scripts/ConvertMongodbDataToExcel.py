import pymongo
import pandas as pd
from bson import json_util
import json
from io import StringIO

# MongoDB connection string
mongo_uri = "mongodb+srv://hindupurv:pokemongo123@online-instrument-origi.qg8wzeg.mongodb.net/?retryWrites=true&w=majority&appName=online-instrument-original"

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
    # print(df)

    filenameExcel = "SurveyResponsesInExcelPythonCode.xlsx"
    # Save the DataFrame to an Excel file
    df.to_excel(filenameExcel, index=False)

    print("Data has been successfully fetched from MongoDB Atlas and converted to an Excel file.")
