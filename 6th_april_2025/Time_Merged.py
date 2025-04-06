import pandas as pd
import re

# === 1. File Path ===
file_path = 'Time_Merged_v1_time_payment.xlsx'

# === 2. Check available sheets ===
xls = pd.ExcelFile(file_path)
print("✅ Available sheets in the Excel file:")
print(xls.sheet_names)

# === 3. Load Sheets ===
sheet1 = pd.read_excel(xls, sheet_name='Base_Sheet')
sheet2 = pd.read_excel(xls, sheet_name='Time_Payment')

# === 4. Clean column names ===
sheet1.columns = sheet1.columns.str.strip().str.replace('\xa0', '', regex=False).str.replace('\u200b', '', regex=False)
sheet2.columns = sheet2.columns.str.strip().str.replace('\xa0', '', regex=False).str.replace('\u200b', '', regex=False)

# === 5. Rename ID columns for consistency ===
sheet1.rename(columns={'prolific_id': 'Prolific_ID'}, inplace=True)
sheet2.rename(columns={'PARTICIPANT PROLIFIC ID': 'Prolific_ID'}, inplace=True)

# === 6. Clean Prolific_ID values ===
def clean_id(val):
    # Remove all space types (normal, non-breaking, zero-width) and trim
    return re.sub(r'[\s\u200b\xa0]', '', str(val)).strip()

sheet1['Prolific_ID'] = sheet1['Prolific_ID'].apply(clean_id)
sheet2['Prolific_ID'] = sheet2['Prolific_ID'].apply(clean_id)

# === 7. Also clean other text columns in sheet2 ===
for col in ['TIME TAKEN', 'BONUS', 'Total payment']:
    if col in sheet2.columns:
        sheet2[col] = sheet2[col].astype(str).str.strip()

# === 8. Select required columns from sheet2 ===
sheet2_subset = sheet2[['Prolific_ID', 'TIME TAKEN', 'BONUS', 'Total payment']]

# === 9. Merge both sheets ===
merged_df = pd.merge(sheet1, sheet2_subset, on='Prolific_ID', how='left')

# === 10. Get unmatched Prolific_IDs ===
unmatched_ids = merged_df[merged_df['TIME TAKEN'].isnull()]['Prolific_ID']

# === 11. Check presence of specific ID for debugging ===
test_id = '66c7f280d6cde03f250ffded'
print("\n🔍 Checking presence of ID in both sheets...")
print("Sheet1 Match:", test_id in sheet1['Prolific_ID'].tolist())
print("Sheet2 Match:", test_id in sheet2['Prolific_ID'].tolist())

# Show fuzzy match for debugging
print("\n🔍 Sheet2 Prolific_IDs containing the test ID:")
print([pid for pid in sheet2['Prolific_ID'] if test_id in pid])

# === 12. Output results ===
merged_df.to_csv('merged_output_TMVTP.csv', index=False)
print("\n✅ Merged file saved as 'merged_output_SMTP.csv'")

print("\n❌ Unmatched Prolific IDs from Sheet1:")
print(unmatched_ids.tolist())


# import pandas as pd

# file_path = 'Structural_Merged_Time_Payment.xlsx'
# xls = pd.ExcelFile(file_path)
# # Check the names of the sheets in the Excel file
# print("✅ Available sheets in the Excel file:")
# print(xls.sheet_names)

# # sheets
# sheet1 = pd.read_excel(file_path, sheet_name='Base_Sheet')
# sheet2 = pd.read_excel(file_path, sheet_name='Time_Payment')

# # Clean column names: remove hidden whitespace/non-breaking spaces
# sheet1.columns = sheet1.columns.str.strip().str.replace('\xa0', '').str.replace('\u200b', '')
# sheet2.columns = sheet2.columns.str.strip().str.replace('\xa0', '').str.replace('\u200b', '')

# # Print column names to debug
# print("\n📋 Columns in Sheet2 BEFORE cleaning:")
# print(sheet2.columns.tolist())
# print()

# sheet1.rename(columns={'prolific_id': 'Prolific_ID'}, inplace=True)
# sheet2.rename(columns={'PARTICIPANT PROLIFIC ID': 'Prolific_ID'}, inplace=True)

# sheet2_subset = sheet2[['Prolific_ID', 'TIME TAKEN', 'BONUS', 'Total payment']]

# merged_df = pd.merge(sheet1, sheet2_subset, on='Prolific_ID', how='left')

# # Get unmatched IDs from sheet1 (i.e., those who didn't match with sheet2)
# unmatched_ids = merged_df[merged_df['TIME TAKEN'].isnull()]['Prolific_ID']

# # Check if the ID exists in both sheets
# test_id = '66c7f280d6cde03f250ffded'

# # Debug - Show how the ID appears in both sheets
# print("\n🔍 Checking presence of ID in both sheets...")
# print("Sheet1 Match:", test_id in sheet1['Prolific_ID'].tolist())
# print("Sheet2 Match:", test_id in sheet2['Prolific_ID'].tolist())

# # If not matching, show near matches
# print("\n🔍 Sheet2 Prolific_IDs containing the test ID (fuzzy match):")
# print([pid for pid in sheet2['Prolific_ID'] if test_id in pid])

# # Show the result
# print("✅ Merged DataFrame:")
# merged_df.to_csv('merged_output_SMTP.csv', index=False)

# print("\n❌ Unmatched Prolific IDs from Sheet1:")
# print(unmatched_ids.tolist())