import os

def create_folders(n, base_directory):
    # Loop to create n folders in the specified directory
    for i in range(1, n + 1):
        folder_name = os.path.join(base_directory, f'chart-{i}')
        os.makedirs(folder_name, exist_ok=True)
        print(f'Folder created: {folder_name}')

if __name__ == "__main__":
    n = 24
    base_directory = "/Users/varshahindupur/Downloads/RA_Online_Instrument/frontend/src/images/dashboard-all-charts/timeseries-col"
    create_folders(n, base_directory)