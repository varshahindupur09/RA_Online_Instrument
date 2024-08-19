# import random
# import string

# all_charts = ["chart1","chart2","chart3","chart4"]

# def generate_unique_ids(num_ids, length):
#     ids = set()
#     valid_chars = string.ascii_uppercase[:6] + string.digits #A-F0-9
#     while len(ids) < num_ids:
#         id_ = ''.join(random.choices(valid_chars, k=length))
#         ids.add(id_)
#     return list(ids)

# def assign_dashboards(prolific_id):
#     id_modified = prolific_id[-3:]
#     hex_value = int(id_modified, base=16)
#     hash_value = hex_value % 10
#     print("hash_value: ",id_modified, "->", hex_value,  "->", hash_value)
#     assigned_dashboards = [all_charts[(index + hash_value) % len(all_charts)] for index in range(len(all_charts))]
#     return assigned_dashboards

# num_ids = 10
# length = 8
# user_ids = generate_unique_ids(num_ids, length)

# for user_id in user_ids:
#     dashboards = assign_dashboards(user_id)
#     print(f"Prolific Ids: {user_id}, Assigned Dashboards: {dashboards}")


# import random
# import string

# all_charts = ["chart1", "chart2", "chart3", "chart4"]

# def generate_unique_ids(num_ids, length):
#     ids = set()
#     valid_chars = string.ascii_uppercase[:6] + string.digits  # A-F0-9
#     while len(ids) < num_ids:
#         id_ = ''.join(random.choices(valid_chars, k=length))
#         ids.add(id_)
#     return list(ids)

# def assign_dashboard(prolific_id):
#     # Extract numeric value from the last character of the ID and find modulo 4
#     numeric_value = int(prolific_id[-1], base=16)
#     assigned_chart = all_charts[numeric_value % 4]
#     return assigned_chart

# num_ids = 10
# length = 8
# user_ids = generate_unique_ids(num_ids, length)

# for user_id in user_ids:
#     dashboard = assign_dashboard(user_id)
#     print(f"Prolific ID: {user_id}, Assigned Chart: {dashboard}")


import hashlib

def get_chart_id(user_id):
    # Create a hash of the user_id
    hash_object = hashlib.sha256(user_id.encode())
    # Convert the hash to an integer
    hash_number = int(hash_object.hexdigest(), 16)
    # Assign charts cyclically from 1 to 4 using the modulus operation
    chart_id = (hash_number % 4) + 1
    return chart_id

# Example Usage
user_ids = ['24465638rfubeir347t7348349refhv', 'gh9834g7843gh7934h9g347g93479g8', '1g3497g9347g93479g8347g9347g93', 'hg34g7h34g7h3947gh3497hghdhdhhd']
for user_id in user_ids:
    assigned_chart = get_chart_id(user_id)
    print(f"User {user_id} is assigned to Chart {assigned_chart}")
