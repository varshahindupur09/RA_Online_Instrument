import pymongo
import pandas as pd
from bson import json_util
import json
from io import StringIO
import boto3

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
    # create bucket 
    try:
        json_data = json_util.dumps(data)
        s3_client = boto3.client('s3')
        bucket_name = 'mongo-online-instrunent-data'
        s3_client.create_bucket(Bucket=bucket_name) # create bucket
        s3_client.head_bucket(Bucket=bucket_name) # exists or not
    except Exception as e:
        print(f"An error occurred while creating bucket: {e}")

    # transfer data to S3 bucket
    s3_client.put_object(Bucket=bucket_name, Key="OI_Survey_Data.json", Body=json_data)


