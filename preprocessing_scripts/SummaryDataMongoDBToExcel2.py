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

# Database and collection
db_name = 'test'
collection_name = 'surveyresponses'

try:
    # Fetch data
    db = client[db_name]
    collection = db[collection_name]
    data = list(collection.find())
    print(f"Data fetched from collection '{collection_name}' in database '{db_name}'")
except Exception as e:
    print(f"Error accessing database or collection: {e}")
    exit()

if not data:
    print("No data found in the collection.")
    exit()

# Convert MongoDB documents to DataFrame
json_data = json_util.dumps(data)
json_data_io = StringIO(json_data)
df = pd.json_normalize(json.load(json_data_io))

# Rename columns for readability
df.rename(columns={"responses.ACT_attention_check": "Attention_Check_1"}, inplace=True)
df.rename(columns={"responses.attention_check": "Attention_Check_2"}, inplace=True)

# Sort and group by participant (prolific_id)
df.sort_values(by=["prolific_id", "page_number"], inplace=True)

# Add `Paper_Folding_Test_Bonus` for relevant tests
df["incentive_calculation"] = pd.to_numeric(df["incentive_calculation"], errors="coerce")
test_filter = df["current_visit_test_name"].isin(["/paper-folding-test-part-1", "/paper-folding-test-part-2"])
df.loc[test_filter, "Paper_Folding_Test_Bonus"] = df.loc[test_filter, "incentive_calculation"]

# Add Rotation_Test_Bonus column
rotation_test_filter = df["test_name"].str.contains("rotation-test", na=False, case=False)
df.loc[rotation_test_filter, "Rotation_Test_Bonus"] = df.loc[rotation_test_filter, "incentive_calculation"]

# Filter Rotation-Test-1 and Rotation-Test-2 data
rotation_test_1_data_filter = df[df["test_name"].str.contains("Rotation-Test-1", na=False, case=False)]
rotation_test_2_data_filter = df[df["test_name"].str.contains("Rotation-Test-2", na=False, case=False)]

# financial literacy filter
financial_literacy_data_filter = df[df["test_name"].str.contains("Financial-Literacy", na=False, case=False)]

# Correct answers for Rotation-Test-1
correct_answers_rt1 = {
    "responses.RT1_question1": ['different', 'same', 'same', 'different', 'same', 'different', 'same', 'different'],
    "responses.RT1_question2": ['same', 'same', 'same', 'same', 'same', 'same', 'different', 'same'],
    "responses.RT1_question3": ['different', 'same', 'different', 'same', 'different', 'same', 'same', 'different'],
    "responses.RT1_question4": ['same', 'different', 'same', 'different', 'same', 'same', 'different', 'same'],
    "responses.RT1_question5": ['different', 'same', 'different', 'same', 'same', 'different', 'same', 'different'],
    "responses.RT1_question6": ['same', 'same', 'different', 'same', 'same', 'different', 'different', 'same'],
    "responses.RT1_question7": ['same', 'different', 'same', 'different', 'same', 'different', 'different', 'same'],
    "responses.RT1_question8": ['same', 'same', 'same', 'different', 'same', 'different', 'different', 'same'],
    "responses.RT1_question9": ['same', 'same', 'same', 'same', 'different', 'different', 'same', 'same'],
    "responses.RT1_question10": ['different', 'same', 'same', 'different', 'same', 'same', 'same', 'different']
}

# Correct answers for Rotation-Test-2
correct_answers_rt2 = {
    "responses.RT2_question1": ["same", "same", "different", "different", "same", "same", "different", "different"],
    "responses.RT2_question2": ["same", "same", "different", "different", "same", "same", "different", "same"],
    "responses.RT2_question3": ["different", "different", "same", "different", "different", "different", "same", "different"],
    "responses.RT2_question4": ["same", "same", "different", "same", "same", "same", "different", "same"],
    "responses.RT2_question5": ["same", "different", "different", "different", "same", "different", "same", "different"],
    "responses.RT2_question6": ["same", "same", "different", "different", "same", "same", "different", "same"],
    "responses.RT2_question7": ["different", "different", "same", "different", "different", "same", "different", "different"],
    "responses.RT2_question8": ["same", "same", "different", "different", "same", "same", "same", "same"],
    "responses.RT2_question9": ["same", "different", "different", "same", "different", "different", "same", "same"],
    "responses.RT2_question10": ["different", "different", "same", "same", "same", "different", "same", "different"]
}

# Correct answers for Financial-Literacy
correct_answers_fl = {
    "responses.FL_question1": ["More than $102"],
    "responses.FL_question2": ["Less than today"],
    "responses.FL_question3": ["False"],
}


rotation_columns_rt1 = [
    "responses.RT1_question1", "responses.RT1_question2", "responses.RT1_question3", "responses.RT1_question4",
    "responses.RT1_question5", "responses.RT1_question6", "responses.RT1_question7", "responses.RT1_question8",
    "responses.RT1_question9", "responses.RT1_question10"
]

rotation_columns_rt2 = [
    "responses.RT2_question1", "responses.RT2_question2", "responses.RT2_question3", "responses.RT2_question4",
    "responses.RT2_question5", "responses.RT2_question6", "responses.RT2_question7", "responses.RT2_question8",
    "responses.RT2_question9", "responses.RT2_question10"
]

financial_literacy_columns = [
    "responses.FL_question1", "responses.FL_question2", "responses.FL_question3" ]

# Calculate correctness scores for Rotation-Test-1
if not rotation_test_1_data_filter.empty:
    def calculate_correctness(row):
        scores = []
        for col in rotation_columns_rt1:
            if col in row and pd.notna(row[col]):
                participant_responses = str(row[col]).split(",")
                correct_answers = correct_answers_rt1[col]
                correct_count = sum(1 for p, c in zip(participant_responses, correct_answers) if p.strip() == c)
                scores.append(correct_count)
        return scores

    rotation_test_1_data_filter.loc[:, "Rotation_Test_1_Each_Question_Score"] = rotation_test_1_data_filter.apply(
        calculate_correctness, axis=1
    )

    # Deduplicate `prolific_id` for valid mapping
    rotation_test_1_data_filter = rotation_test_1_data_filter.drop_duplicates(subset="prolific_id")


# Calculate correctness scores for Rotation-Test-1
if not rotation_test_2_data_filter.empty:
    def calculate_correctness(row):
        scores = []
        for col in rotation_columns_rt2:
            if col in row and pd.notna(row[col]):
                participant_responses = str(row[col]).split(",")
                correct_answers = correct_answers_rt2[col]
                correct_count = sum(1 for p, c in zip(participant_responses, correct_answers) if p.strip() == c)
                scores.append(correct_count)
        return scores

    rotation_test_2_data_filter.loc[:, "Rotation_Test_2_Each_Question_Score"] = rotation_test_2_data_filter.apply(
        calculate_correctness, axis=1
    )

    # Deduplicate `prolific_id` for valid mapping
    rotation_test_2_data_filter = rotation_test_2_data_filter.drop_duplicates(subset="prolific_id")


# Calculate correctness scores for financial_literacy_data_filter
if not financial_literacy_data_filter.empty:
    def calculate_correctness(row):
        scores = []
        for col in financial_literacy_columns:
            if col in row and pd.notna(row[col]):
                participant_responses = str(row[col]).split(",")
                correct_answers = correct_answers_fl[col]
                correct_count = sum(1 for p, c in zip(participant_responses, correct_answers) if p.strip() == c)
                scores.append(correct_count)
        return scores

    financial_literacy_data_filter.loc[:, "Financial_Literacy_Score"] = financial_literacy_data_filter.apply(
        calculate_correctness, axis=1
    )

    # Deduplicate `prolific_id` for valid mapping
    financial_literacy_data_filter = financial_literacy_data_filter.drop_duplicates(subset="prolific_id")

# Group by `prolific_id` and calculate aggregated columns
aggregated = df.groupby("prolific_id").agg(
    Attention_Check_1=("Attention_Check_1", "first"),
    Attention_Check_2=("Attention_Check_2", "first"),
    Paper_Folding_Test_Bonus=("Paper_Folding_Test_Bonus", "sum"),
    Rotation_Test_Bonus=("Rotation_Test_Bonus", "sum")
).reset_index()

# Add additional calculated columns
aggregated["Paper_Folding_Test_Score"] = aggregated["Paper_Folding_Test_Bonus"] / 0.05
aggregated["Rotation_Test_Score"] = aggregated["Rotation_Test_Bonus"] / 0.05
aggregated["Rotation_Test_1_Each_Question_Score"] = None

# Map scores for Rotation-Test-1 to `aggregated`
if not rotation_test_1_data_filter.empty:
    scores = rotation_test_1_data_filter.set_index("prolific_id")["Rotation_Test_1_Each_Question_Score"]
    aggregated.loc[aggregated["prolific_id"].isin(scores.index), "Rotation_Test_1_Each_Question_Score"] = \
        aggregated["prolific_id"].map(scores)
    
aggregated["Rotation_Test_2_Each_Question_Score"] = None

# Map scores for Rotation-Test-1 to `aggregated`
if not rotation_test_2_data_filter.empty:
    scores = rotation_test_2_data_filter.set_index("prolific_id")["Rotation_Test_2_Each_Question_Score"]
    aggregated.loc[aggregated["prolific_id"].isin(scores.index), "Rotation_Test_2_Each_Question_Score"] = \
        aggregated["prolific_id"].map(scores)
    
aggregated["Financial_Literacy_Score"] = None

# Map scores for Financial_Literacy_Score to `aggregated`
if not financial_literacy_data_filter.empty:
    scores = financial_literacy_data_filter.set_index("prolific_id")["Financial_Literacy_Score"]
    aggregated.loc[aggregated["prolific_id"].isin(scores.index), "Financial_Literacy_Score"] = \
        aggregated["prolific_id"].map(scores)

# Reorder columns to match the desired output format
desired_columns_order = [
    "prolific_id", "Attention_Check_1", "Attention_Check_2", "Paper_Folding_Test_Score", "Paper_Folding_Test_Bonus",
    "Rotation_Test_Score", "Rotation_Test_Bonus", "Rotation_Test_1_Each_Question_Score", "Rotation_Test_2_Each_Question_Score", "Financial_Literacy_Score"
]

aggregated = aggregated[desired_columns_order]

# Save results to Excel
output_file = "SummaryDataMongoDBToExcel2.xlsx"
aggregated.to_excel(output_file, index=False)
print(f"Results have been saved to {output_file}.")
