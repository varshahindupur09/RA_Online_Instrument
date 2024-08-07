import pymongo
import pandas as pd

# Replace the following with your MongoDB connection string
mongo_uri = "mongodb+srv://hindupurv:pokemongo123@online-instrument-origi.qg8wzeg.mongodb.net/?retryWrites=true&w=majority&appName=online-instrument-original"
client = pymongo.MongoClient(mongo_uri)

# Replace 'database_name' and 'collection_name' with your database and collection names
db = client['online-instrument-original']
collection = db['test.surveyresponses']

# Fetch data from MongoDB
data = list(collection.find())

# Convert MongoDB documents to a DataFrame
df = pd.json_normalize(data)

# Save the DataFrame to an Excel file
df.to_excel("instrument.xlsx", index=False)

print("Data has been successfully fetched from MongoDB Atlas and converted to an Excel file.")