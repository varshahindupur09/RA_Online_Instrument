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
df.rename(columns={"responses.ACT_attention_check": "Attention_Check_Tests"}, inplace=True)
df.rename(columns={"responses.attention_check": "Attention_Check_Dashboard"}, inplace=True)

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



# Convert timestamps to datetime if not already done
df["time_user_entered_current_page"] = pd.to_datetime(df["time_user_entered_current_page.$date"], errors="coerce")

# Extract the timestamps for Feedback and Structured-Col-Dashboard pages
dashboard_times = df[df["test_name"].str.contains("Dashboard", na=False, case=False)][["prolific_id", "time_user_entered_current_page"]]
feedback_times = df[df["test_name"].str.contains("Feedback-Questions", na=False, case=False)][["prolific_id", "time_user_entered_current_page"]]

# Rename columns for clarity before merging
dashboard_times = dashboard_times.rename(columns={"time_user_entered_current_page": "dashboard_time"})
feedback_times = feedback_times.rename(columns={"time_user_entered_current_page": "feedback_time"})

# Merge to align feedback time with its respective prolific_id
time_diff = feedback_times.merge(dashboard_times, on="prolific_id", how="left")

# Compute the difference (Feedback time - Dashboard time)
time_diff["Time_Difference_Dashboard"] = (time_diff["feedback_time"] - time_diff["dashboard_time"]).dt.total_seconds()

# Keep only necessary columns
time_diff = time_diff[["prolific_id", "Time_Difference_Dashboard"]]



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

    # rotation_test_1_data_filter.loc[:, "Rotation_Test_1_Each_Question_Score"] = rotation_test_1_data_filter.apply(
    #     calculate_correctness, axis=1
    # )
    rotation_test_1_data_filter = rotation_test_1_data_filter.copy()
    rotation_test_1_data_filter["Rotation_Test_1_Each_Question_Score"] = rotation_test_1_data_filter.apply(
        calculate_correctness, axis=1
    )

    # Deduplicate `prolific_id` for valid mapping
    rotation_test_1_data_filter = rotation_test_1_data_filter.drop_duplicates(subset="prolific_id")


# Calculate correctness scores for Rotation-Test-2
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

    # rotation_test_2_data_filter.loc[:, "Rotation_Test_2_Each_Question_Score"] = rotation_test_2_data_filter.apply(
    #     calculate_correctness, axis=1
    # )
    rotation_test_2_data_filter = rotation_test_2_data_filter.copy()
    rotation_test_2_data_filter["Rotation_Test_2_Each_Question_Score"] = rotation_test_2_data_filter.apply(
        calculate_correctness, axis=1
    )

    # Deduplicate `prolific_id` for valid mapping
    rotation_test_2_data_filter = rotation_test_2_data_filter.drop_duplicates(subset="prolific_id")

# Correct answers for Dashboard - Structural-Col-Dashboard
correct_answers_scd = {
    "responses.SCD_question1": "UK",
    "responses.SCD_question2": "Mexico and UK",
    "responses.SCD_question3": "Mexico",
    "responses.SCD_question4": "Japan",
    "responses.SCD_question5": "US",
    "responses.SCD_question6": "UK",
    "responses.SCD_question7": "Mexico",
    "responses.SCD_question8": "Brazil",
    "responses.SCD_question9": "Brazil",
    "responses.SCD_question10": "Japan",
    "responses.SCD_question11": "US",
    "responses.SCD_question12": "Japan",
    "responses.SCD_question13": "Mexico",
    "responses.SCD_question14": "US",
    "responses.SCD_question15": "Japan",
    "responses.SCD_question16": "Canada",
    "responses.SCD_question17": "Japan",
    "responses.SCD_question18": "Japan",
    "responses.SCD_question19": "Mexico",
    "responses.SCD_question20": "TRN01",
    "responses.SCD_question21": "Mexico",
    "responses.SCD_question22": "US",
    "responses.SCD_question23": "TRN02",
    "responses.SCD_question24": "Japan"
}

# Columns for SCD questions
scd_columns = [
    "responses.SCD_question1", "responses.SCD_question2", "responses.SCD_question3", "responses.SCD_question4",
    "responses.SCD_question5", "responses.SCD_question6", "responses.SCD_question7", "responses.SCD_question8",
    "responses.SCD_question9", "responses.SCD_question10", "responses.SCD_question11", "responses.SCD_question12",
    "responses.SCD_question13", "responses.SCD_question14", "responses.SCD_question15", "responses.SCD_question16",
    "responses.SCD_question17", "responses.SCD_question18", "responses.SCD_question19", "responses.SCD_question20",
    "responses.SCD_question21", "responses.SCD_question22", "responses.SCD_question23", "responses.SCD_question24"
]

# Filter SCD test data where `test_name` is "Structural-Col-Dashboard"
scd_data_filter = df[df["test_name"].str.contains("Structural-Col-Dashboard", na=False, case=False)]

# Calculate correctness scores for SCD Test
if not scd_data_filter.empty:
    def calculate_scd_scores(row):
        scores = []
        total_answered = 0
        for col in scd_columns:
            if col in row and pd.notna(row[col]):
                participant_response = row[col].strip()
                # # print("##### Prolofic ID: ", row["prolific_id"])
                # if row["prolific_id"] == "67373b81834499a073b86c6e":
                #     print("Participant Response: ", participant_response, type(participant_response))
                #     if participant_response == "":
                #         print("Participant Response is empty *****")
                correct_answer = correct_answers_scd[col]
                # Check if the participant's response matches the correct answer
                if participant_response.lower() == correct_answer.lower():
                    scores.append(1)  # Correct answer
                    total_answered += 1
                elif participant_response == "":
                    scores.append(-1)  # Unanswered questions
                else:
                    scores.append(0)  # Incorrect answer
                    total_answered += 1
        return scores, total_answered

    # Apply the calculation
    scd_data_filter = scd_data_filter.copy()
    scd_data_filter["SCD_Each_Question_Score"], scd_data_filter["SCD_Total_Answered_Count"] = zip(*scd_data_filter.apply(calculate_scd_scores, axis=1))

    # Calculate total score
    scd_data_filter["SCD_Total_Score"] = scd_data_filter["SCD_Each_Question_Score"].apply(sum)

    # Deduplicate `prolific_id` for valid mapping
    scd_data_filter = scd_data_filter.drop_duplicates(subset="prolific_id")


# Correct answers for Financial-Literacy
correct_answers_fl = {
    "responses.FL_question_1": "more-than-$102",
    "responses.FL_question_2": "less-than-today",
    "responses.FL_question_3": "false",
}


financial_literacy_columns = [
    "responses.FL_question_1", "responses.FL_question_2", "responses.FL_question_3" ]


# Calculate correctness scores for financial_literacy_data_filter
if not financial_literacy_data_filter.empty:
    def calculate_financial_literacy_score(row):
        score = 0
        responses = []
        for col in financial_literacy_columns:
            if col in row and pd.notna(row[col]):
                participant_response = row[col].strip()
                responses.append(participant_response)
                correct_answer = correct_answers_fl[col]  # Get the first correct answer
                if participant_response.lower() == correct_answer.lower():
                    score += 1  # Increment the score for each correct answer
        # print(f"Participant Responses: {responses}, Score: {score}") 
        # row["Participant_Responses"] = ", ".join(responses)
        return score, ", ".join(responses)

    # financial_literacy_data_filter.loc[:, "Financial_Literacy_Score"] = financial_literacy_data_filter.apply(
    #     calculate_financial_literacy_score, axis=1
    # )

    financial_literacy_data_filter = financial_literacy_data_filter.copy()
    financial_literacy_data_filter["Participant_Responses"] = None
    financial_literacy_data_filter["Financial_Literacy_Score"], financial_literacy_data_filter["Participant_Responses"] = zip(
        *financial_literacy_data_filter.apply(lambda row: calculate_financial_literacy_score(row), axis=1)
    )

    # Deduplicate `prolific_id` for valid mapping
    financial_literacy_data_filter = financial_literacy_data_filter.drop_duplicates(subset="prolific_id")

# Correct answers for Structural-Bar-Dashboard
correct_answers_sbd = {
    "responses.SBD_question1": "UK",
    "responses.SBD_question2": "Mexico and UK",
    "responses.SBD_question3": "Mexico",
    "responses.SBD_question4": "Japan",
    "responses.SBD_question5": "US",
    "responses.SBD_question6": "UK",
    "responses.SBD_question7": "Mexico",
    "responses.SBD_question8": "Brazil",
    "responses.SBD_question9": "Brazil",
    "responses.SBD_question10": "Japan",
    "responses.SBD_question11": "US",
    "responses.SBD_question12": "Japan",
    "responses.SBD_question13": "Mexico",
    "responses.SBD_question14": "US",
    "responses.SBD_question15": "Japan",
    "responses.SBD_question16": "Canada",
    "responses.SBD_question17": "Japan",
    "responses.SBD_question18": "Japan",
    "responses.SBD_question19": "Mexico",
    "responses.SBD_question20": "TRN01",
    "responses.SBD_question21": "Mexico",
    "responses.SBD_question22": "US",
    "responses.SBD_question23": "TRN02",
    "responses.SBD_question24": "Japan"
}

# Columns for Structural-Bar-Dashboard questions
sbd_columns = [
    "responses.SBD_question1", "responses.SBD_question2", "responses.SBD_question3", "responses.SBD_question4",
    "responses.SBD_question5", "responses.SBD_question6", "responses.SBD_question7", "responses.SBD_question8",
    "responses.SBD_question9", "responses.SBD_question10", "responses.SBD_question11", "responses.SBD_question12",
    "responses.SBD_question13", "responses.SBD_question14", "responses.SBD_question15", "responses.SBD_question16",
    "responses.SBD_question17", "responses.SBD_question18", "responses.SBD_question19", "responses.SBD_question20",
    "responses.SBD_question21", "responses.SBD_question22", "responses.SBD_question23", "responses.SBD_question24"
]

# Filter SBD test data where `test_name` is "Structural-Bar-Dashboard"
sbd_data_filter = df[df["test_name"].str.contains("Structural-Bar-Dashboard", na=False, case=False)]

# Calculate correctness scores for SBD Test
if not sbd_data_filter.empty:
    def calculate_sbd_scores(row):
        scores = []
        total_answered = 0
        for col in sbd_columns:
            if col in row and pd.notna(row[col]):
                participant_response = row[col].strip()
                correct_answer = correct_answers_sbd[col]
                # Check if the participant's response matches the correct answer
                if participant_response.lower() == correct_answer.lower():
                    scores.append(1)  # Correct answer
                    total_answered += 1
                elif participant_response == "": # Unanswered questions
                    scores.append(-1)
                else:
                    scores.append(0)  # Incorrect answer
                    total_answered += 1

        return scores, total_answered

    # Apply the calculation
    sbd_data_filter = sbd_data_filter.copy()
    sbd_data_filter["SBD_Each_Question_Score"], sbd_data_filter["SBD_Total_Answered_Count"] = zip(*sbd_data_filter.apply(calculate_sbd_scores, axis=1))

    # Calculate total score
    sbd_data_filter["SBD_Total_Score"] = sbd_data_filter["SBD_Each_Question_Score"].apply(sum)

    # # Calculate how many questions were answered - correct/incorrect 
    # sbd_data_filter["SBD_Total_Answered_Count"] = sbd_data_filter["SBD_Each_Question_Score"].apply(lambda x: sum(x) if isinstance(x, list) else 0)

    # Deduplicate `prolific_id` for valid mapping
    sbd_data_filter = sbd_data_filter.drop_duplicates(subset="prolific_id")


# Correct answers for TimeSeries-Bar-Dashboard
correct_answers_tbd = {
    "responses.TBD_question1": "Upward",
    "responses.TBD_question2": "CRT04",
    "responses.TBD_question3": "2017-2018",
    "responses.TBD_question4": "Downward",
    "responses.TBD_question5": "2019",
    "responses.TBD_question6": "CRT02",
    "responses.TBD_question7": "TRN03",
    "responses.TBD_question8": "CHP04",
    "responses.TBD_question9": "TRN02",
    "responses.TBD_question10": "Downward",
    "responses.TBD_question11": "Downward",
    "responses.TBD_question12": "Upward",
    "responses.TBD_question13": "2015",
    "responses.TBD_question14": "Downward",
    "responses.TBD_question15": "No clear trend",
    "responses.TBD_question16": "CHP02",
    "responses.TBD_question17": "No clear trend",
    "responses.TBD_question18": "TRN01",
    "responses.TBD_question19": "No clear trend",
    "responses.TBD_question20": "TRN04",
    "responses.TBD_question21": "CRT02",
    "responses.TBD_question22": "CRT04",
    "responses.TBD_question23": "Upward",
    "responses.TBD_question24": "CHP04"
}

# Columns for Structural-Bar-Dashboard questions
tbd_columns = [
    "responses.TBD_question1", "responses.TBD_question2", "responses.TBD_question3", "responses.TBD_question4",
    "responses.TBD_question5", "responses.TBD_question6", "responses.TBD_question7", "responses.TBD_question8",
    "responses.TBD_question9", "responses.TBD_question10", "responses.TBD_question11", "responses.TBD_question12",
    "responses.TBD_question13", "responses.TBD_question14", "responses.TBD_question15", "responses.TBD_question16",
    "responses.TBD_question17", "responses.TBD_question18", "responses.TBD_question19", "responses.TBD_question20",
    "responses.TBD_question21", "responses.TBD_question22", "responses.TBD_question23", "responses.TBD_question24"
]

# Filter SBD test data where `test_name` is "Structural-Bar-Dashboard"
tbd_data_filter = df[df["test_name"].str.contains("TimeSeries-Bar-Dashboard", na=False, case=False)]

# Calculate correctness scores for SBD Test
if not tbd_data_filter.empty:
    def calculate_tbd_scores(row):
        scores = []
        total_answered = 0
        for col in tbd_columns:
            if col in row and pd.notna(row[col]):
                participant_response = row[col].strip()
                correct_answer = correct_answers_tbd[col]
                # Check if the participant's response matches the correct answer
                if participant_response.lower() == correct_answer.lower():
                    scores.append(1)  # Correct answer
                    total_answered += 1
                elif participant_response == "":
                    scores.append(-1) # Unanswered questions
                else:
                    scores.append(0)  # Incorrect answer
                    total_answered += 1
        return scores, total_answered

    # Apply the calculation
    tbd_data_filter = tbd_data_filter.copy()
    tbd_data_filter["TBD_Each_Question_Score"], tbd_data_filter["TBD_Total_Answered_Count"] = zip(*tbd_data_filter.apply(calculate_tbd_scores, axis=1))

    # Calculate total score
    tbd_data_filter["TBD_Total_Score"] = tbd_data_filter["TBD_Each_Question_Score"].apply(sum)

    # Deduplicate `prolific_id` for valid mapping
    tbd_data_filter = tbd_data_filter.drop_duplicates(subset="prolific_id")



# Correct answers for TimeSeries-Col-Dashboard
correct_answers_tcd = {
    "responses.TCD_question1": "Upward",
    "responses.TCD_question2": "CRT04",
    "responses.TCD_question3": "2017-2018",
    "responses.TCD_question4": "Downward",
    "responses.TCD_question5": "2019",
    "responses.TCD_question6": "CRT02",
    "responses.TCD_question7": "TRN03",
    "responses.TCD_question8": "CHP04",
    "responses.TCD_question9": "TRN02",
    "responses.TCD_question10": "Downward",
    "responses.TCD_question11": "Downward",
    "responses.TCD_question12": "Upward",
    "responses.TCD_question13": "2015",
    "responses.TCD_question14": "Downward",
    "responses.TCD_question15": "No clear trend",
    "responses.TCD_question16": "CHP02",
    "responses.TCD_question17": "No clear trend",
    "responses.TCD_question18": "TRN01",
    "responses.TCD_question19": "No clear trend",
    "responses.TCD_question20": "TRN04",
    "responses.TCD_question21": "CRT02",
    "responses.TCD_question22": "CRT04",
    "responses.TCD_question23": "Upward",
    "responses.TCD_question24": "CHP04"
}

# Columns for Structural-Bar-Dashboard questions
tcd_columns = [
    "responses.TCD_question1", "responses.TCD_question2", "responses.TCD_question3", "responses.TCD_question4",
    "responses.TCD_question5", "responses.TCD_question6", "responses.TCD_question7", "responses.TCD_question8",
    "responses.TCD_question9", "responses.TCD_question10", "responses.TCD_question11", "responses.TCD_question12",
    "responses.TCD_question13", "responses.TCD_question14", "responses.TCD_question15", "responses.TCD_question16",
    "responses.TCD_question17", "responses.TCD_question18", "responses.TCD_question19", "responses.TCD_question20",
    "responses.TCD_question21", "responses.TCD_question22", "responses.TCD_question23", "responses.TCD_question24"
]

# Filter SBD test data where `test_name` is "Structural-Bar-Dashboard"
tcd_data_filter = df[df["test_name"].str.contains("TimeSeries-Col-Dashboard", na=False, case=False)]

# Calculate correctness scores for SBD Test
if not tcd_data_filter.empty:
    def calculate_tcd_scores(row):
        scores = []
        total_answered = 0
        for col in tcd_columns:
            if col in row and pd.notna(row[col]):
                participant_response = row[col].strip()
                correct_answer = correct_answers_tcd[col]
                # Check if the participant's response matches the correct answer
                if participant_response.lower() == correct_answer.lower():
                    scores.append(1)  # Correct answer
                    total_answered += 1
                elif participant_response == "":
                    scores.append(-1)  # Unanswered questions
                else:
                    scores.append(0)  # Incorrect answer
                    total_answered += 1
        return scores, total_answered

    # Apply the calculation
    tcd_data_filter = tcd_data_filter.copy()
    tcd_data_filter["TCD_Each_Question_Score"], tcd_data_filter["TCD_Total_Answered_Count"] = zip(*tcd_data_filter.apply(calculate_tcd_scores, axis=1))

    # Calculate total score
    tcd_data_filter["TCD_Total_Score"] = tcd_data_filter["TCD_Each_Question_Score"].apply(sum)

    # Deduplicate `prolific_id` for valid mapping
    tcd_data_filter = tcd_data_filter.drop_duplicates(subset="prolific_id")

# Group by `prolific_id` and calculate aggregated columns
aggregated = df.groupby("prolific_id").agg(
    Attention_Check_Tests=("Attention_Check_Tests", "first"),
    Attention_Check_Dashboard=("Attention_Check_Dashboard", "first"),
    Paper_Folding_Test_Bonus=("Paper_Folding_Test_Bonus", "sum"),
    Rotation_Test_Bonus=("Rotation_Test_Bonus", "sum"),
    Financial_Literacy_Score=("responses.FL_question_1", "count"),
).reset_index()

# Add additional calculated columns
aggregated["Paper_Folding_Test_Score"] = aggregated["Paper_Folding_Test_Bonus"] / 0.05
aggregated["Rotation_Test_Score"] = aggregated["Rotation_Test_Bonus"] / 0.05
aggregated["Rotation_Test_1_Each_Question_Score"] = None
aggregated["Rotation_Test_1_Total_Correct_Count"] = None


# Map scores for Rotation-Test-1 to `aggregated`
if not rotation_test_1_data_filter.empty:
    scores = rotation_test_1_data_filter.set_index("prolific_id")["Rotation_Test_1_Each_Question_Score"]
    aggregated.loc[aggregated["prolific_id"].isin(scores.index), "Rotation_Test_1_Each_Question_Score"] = aggregated["prolific_id"].map(scores)
    
    rotation_test_1_data_filter["Rotation_Test_1_Total_Correct_Count"] = rotation_test_1_data_filter["Rotation_Test_1_Each_Question_Score"].apply(lambda x: sum(x) if isinstance(x, list) else 0)
    total_correct_scores = rotation_test_1_data_filter.set_index("prolific_id")["Rotation_Test_1_Total_Correct_Count"]
    aggregated.loc[aggregated["prolific_id"].isin(total_correct_scores.index), "Rotation_Test_1_Total_Correct_Count"] =  aggregated["prolific_id"].map(total_correct_scores)
    
aggregated["Rotation_Test_2_Each_Question_Score"] = None
aggregated["Rotation_Test_2_Total_Correct_Count"] = None

# Map scores for Rotation-Test-1 to `aggregated`
if not rotation_test_2_data_filter.empty:
    scores = rotation_test_2_data_filter.set_index("prolific_id")["Rotation_Test_2_Each_Question_Score"]
    aggregated.loc[aggregated["prolific_id"].isin(scores.index), "Rotation_Test_2_Each_Question_Score"] = aggregated["prolific_id"].map(scores)

    rotation_test_2_data_filter["Rotation_Test_2_Total_Correct_Count"] = rotation_test_2_data_filter["Rotation_Test_2_Each_Question_Score"].apply(lambda x: sum(x) if isinstance(x, list) else 0)
    total_correct_scores = rotation_test_2_data_filter.set_index("prolific_id")["Rotation_Test_2_Total_Correct_Count"]
    aggregated.loc[aggregated["prolific_id"].isin(total_correct_scores.index), "Rotation_Test_2_Total_Correct_Count"] =  aggregated["prolific_id"].map(total_correct_scores)
    
aggregated["Financial_Literacy_Score"] = None

# Map scores for Financial_Literacy_Score to `aggregated`
if not financial_literacy_data_filter.empty:
    scores = financial_literacy_data_filter.set_index("prolific_id")["Financial_Literacy_Score"]
    aggregated.loc[aggregated["prolific_id"].isin(scores.index), "Financial_Literacy_Score"] = \
        aggregated["prolific_id"].map(scores)

if not financial_literacy_data_filter.empty:
    responses = financial_literacy_data_filter.set_index("prolific_id")["Participant_Responses"]
    aggregated["FL_Participant_Responses"] = None  # Add column for participant responses
    aggregated.loc[aggregated["prolific_id"].isin(responses.index), "FL_Participant_Responses"] = \
        aggregated["prolific_id"].map(responses)
    
# Map scores for SCD Test to `aggregated`
if not scd_data_filter.empty:
    scores = scd_data_filter.set_index("prolific_id")["SCD_Total_Score"]
    aggregated["SCD_Total_Score"] = None  # Add column for total score
    aggregated.loc[aggregated["prolific_id"].isin(scores.index), "SCD_Total_Score"] = \
        aggregated["prolific_id"].map(scores)

    question_scores = scd_data_filter.set_index("prolific_id")["SCD_Each_Question_Score"]
    aggregated["SCD_Each_Question_Score"] = None  # Add column for individual question scores
    aggregated.loc[aggregated["prolific_id"].isin(question_scores.index), "SCD_Each_Question_Score"] = \
        aggregated["prolific_id"].map(question_scores)
    
    # Add total answered count to `aggregated`
    total_answered = scd_data_filter.set_index("prolific_id")["SCD_Total_Answered_Count"]
    aggregated["SCD_Total_Answered_Count"] = None  # Add column for total answered
    aggregated.loc[aggregated["prolific_id"].isin(total_answered.index), "SCD_Total_Answered_Count"] = aggregated["prolific_id"].map(total_answered)
    
# Map scores for SBD Test to `aggregated`
if not sbd_data_filter.empty:
    scores = sbd_data_filter.set_index("prolific_id")["SBD_Total_Score"]
    aggregated["SBD_Total_Score"] = None  # Add column for total score
    aggregated.loc[aggregated["prolific_id"].isin(scores.index), "SBD_Total_Score"] = \
        aggregated["prolific_id"].map(scores)

    question_scores = sbd_data_filter.set_index("prolific_id")["SBD_Each_Question_Score"]
    aggregated["SBD_Each_Question_Score"] = None  # Add column for individual question scores
    aggregated.loc[aggregated["prolific_id"].isin(question_scores.index), "SBD_Each_Question_Score"] = \
        aggregated["prolific_id"].map(question_scores)
    
    # Add total answered count to `aggregated`
    total_answered = sbd_data_filter.set_index("prolific_id")["SBD_Total_Answered_Count"]
    aggregated["SBD_Total_Answered_Count"] = None  # Add column for total answered
    aggregated.loc[aggregated["prolific_id"].isin(total_answered.index), "SBD_Total_Answered_Count"] = aggregated["prolific_id"].map(total_answered)
    
# Map scores for TBD Test to `aggregated`
if not tbd_data_filter.empty:
    scores = tbd_data_filter.set_index("prolific_id")["TBD_Total_Score"]
    aggregated["TBD_Total_Score"] = None  # Add column for total score
    aggregated.loc[aggregated["prolific_id"].isin(scores.index), "TBD_Total_Score"] = \
        aggregated["prolific_id"].map(scores)

    question_scores = tbd_data_filter.set_index("prolific_id")["TBD_Each_Question_Score"]
    aggregated["TBD_Each_Question_Score"] = None  # Add column for individual question scores
    aggregated.loc[aggregated["prolific_id"].isin(question_scores.index), "TBD_Each_Question_Score"] = \
        aggregated["prolific_id"].map(question_scores)
    
    # Add total answered count to `aggregated`
    total_answered = tbd_data_filter.set_index("prolific_id")["TBD_Total_Answered_Count"]
    aggregated["TBD_Total_Answered_Count"] = None  # Add column for total answered
    aggregated.loc[aggregated["prolific_id"].isin(total_answered.index), "TBD_Total_Answered_Count"] = aggregated["prolific_id"].map(total_answered)
    
# Map scores for TCD Test to `aggregated`
if not tcd_data_filter.empty:
    scores = tcd_data_filter.set_index("prolific_id")["TCD_Total_Score"]
    aggregated["TCD_Total_Score"] = None  # Add column for total score
    aggregated.loc[aggregated["prolific_id"].isin(scores.index), "TCD_Total_Score"] = \
        aggregated["prolific_id"].map(scores)

    question_scores = tcd_data_filter.set_index("prolific_id")["TCD_Each_Question_Score"]
    aggregated["TCD_Each_Question_Score"] = None  # Add column for individual question scores
    aggregated.loc[aggregated["prolific_id"].isin(question_scores.index), "TCD_Each_Question_Score"] = \
        aggregated["prolific_id"].map(question_scores)
    
    # Add total answered count to `aggregated`
    total_answered = tcd_data_filter.set_index("prolific_id")["TCD_Total_Answered_Count"]
    aggregated["TCD_Total_Answered_Count"] = None  # Add column for total answered
    aggregated.loc[aggregated["prolific_id"].isin(total_answered.index), "TCD_Total_Answered_Count"] = aggregated["prolific_id"].map(total_answered)
    
# Filter data for Feedback-Questions
feedback_data_filter = df[df["test_name"].str.contains("Feedback-Questions", na=False, case=False)]

if not feedback_data_filter.empty:
    # Extract feedback responses into separate columns
    feedback_data_filter = feedback_data_filter.copy()
    feedback_data_filter["Feedback_MentalDemand"] = pd.to_numeric(feedback_data_filter["responses.mentalDemand"], errors="coerce")
    feedback_data_filter["Feedback_PhysicalDemand"] = pd.to_numeric(feedback_data_filter["responses.physicalDemand"], errors="coerce")
    feedback_data_filter["Feedback_TemporalDemand"] = pd.to_numeric(feedback_data_filter["responses.temporalDemand"], errors="coerce")
    feedback_data_filter["Feedback_Performance"] = pd.to_numeric(feedback_data_filter["responses.performance"], errors="coerce")
    feedback_data_filter["Feedback_Effort"] = pd.to_numeric(feedback_data_filter["responses.effort"], errors="coerce")
    feedback_data_filter["Feedback_Frustration"] = pd.to_numeric(feedback_data_filter["responses.frustration"], errors="coerce")

    # Deduplicate on `prolific_id` to avoid duplicate entries
    feedback_data_filter = feedback_data_filter.drop_duplicates(subset="prolific_id")

    # Add feedback responses to the aggregated DataFrame
    aggregated["Feedback_MentalDemand"] = None
    aggregated["Feedback_PhysicalDemand"] = None
    aggregated["Feedback_TemporalDemand"] = None
    aggregated["Feedback_Performance"] = None
    aggregated["Feedback_Effort"] = None
    aggregated["Feedback_Frustration"] = None

    for col in ["Feedback_MentalDemand", "Feedback_PhysicalDemand", "Feedback_TemporalDemand", "Feedback_Performance", "Feedback_Effort", "Feedback_Frustration"]:
        values = feedback_data_filter.set_index("prolific_id")[col]
        aggregated.loc[aggregated["prolific_id"].isin(values.index), col] = aggregated["prolific_id"].map(values)

# Filter data for Demographics-Questions
demographic_data_filter = df[df["test_name"].str.contains("Demographics-Questions", na=False, case=False)]

if not demographic_data_filter.empty:
    # Extract demographic responses into separate columns
    demographic_data_filter = demographic_data_filter.copy()
    demographic_data_filter["Demographics_Age"] = pd.to_numeric(demographic_data_filter["responses.age"], errors="coerce")
    demographic_data_filter["Demographics_Education_Level"] = demographic_data_filter["responses.education-level"]
    demographic_data_filter["Demographics_Work_Experience"] = demographic_data_filter["responses.work-experience"]
    demographic_data_filter["Demographics_Management_Experience"] = demographic_data_filter["responses.management-experience"]
    demographic_data_filter["Demographics_Employment_Sector"] = demographic_data_filter["responses.employment-sector"]
    
    # Deduplicate on `prolific_id` to avoid duplicate entries
    demographic_data_filter = demographic_data_filter.drop_duplicates(subset="prolific_id")

    # Add demographic responses to the aggregated DataFrame
    aggregated["Demographics_Age"] = None
    aggregated["Demographics_Education_Level"] = None
    aggregated["Demographics_Work_Experience"] = None
    aggregated["Demographics_Management_Experience"] = None
    aggregated["Demographics_Employment_Sector"] = None

    # Map each demographic column from demographic_data_filter to aggregated
    for col in ["Demographics_Age", "Demographics_Education_Level", "Demographics_Work_Experience", 
                "Demographics_Management_Experience", "Demographics_Employment_Sector"]:
        values = demographic_data_filter.set_index("prolific_id")[col]
        aggregated.loc[aggregated["prolific_id"].isin(values.index), col] = aggregated["prolific_id"].map(values)

# Merge this back into the aggregated dataset
aggregated = aggregated.merge(time_diff, on="prolific_id", how="left")


# Reorder columns to match the desired output format
desired_columns_order = [
    "prolific_id", "Attention_Check_Tests", "Attention_Check_Dashboard", 
    "Paper_Folding_Test_Score", "Paper_Folding_Test_Bonus",
    "Rotation_Test_Score", "Rotation_Test_Bonus", "Rotation_Test_1_Each_Question_Score", "Rotation_Test_1_Total_Correct_Count", 
    "Rotation_Test_2_Each_Question_Score", "Rotation_Test_2_Total_Correct_Count",
    "Financial_Literacy_Score",
    "FL_Participant_Responses",
    "SCD_Total_Score", "SCD_Each_Question_Score", "SCD_Total_Answered_Count",
    "SBD_Total_Score", "SBD_Each_Question_Score", "SBD_Total_Answered_Count",
    "TBD_Total_Score", "TBD_Each_Question_Score", "TBD_Total_Answered_Count",
    "TCD_Total_Score", "TCD_Each_Question_Score", "TCD_Total_Answered_Count",
    "Time_Difference_Dashboard",
    "Feedback_MentalDemand", "Feedback_PhysicalDemand", "Feedback_TemporalDemand", "Feedback_Performance", "Feedback_Effort", "Feedback_Frustration",
    "Demographics_Age", "Demographics_Education_Level", "Demographics_Work_Experience", "Demographics_Management_Experience", "Demographics_Employment_Sector"
]

aggregated = aggregated[desired_columns_order]

# Save results to Excel
output_file = "TotalDashboardScoresEfficiencyAnalaysis.xlsx"
aggregated.to_excel(output_file, index=False)
print(f"Results have been saved to {output_file}.")
