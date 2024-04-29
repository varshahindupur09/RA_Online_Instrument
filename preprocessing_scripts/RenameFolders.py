import os
import re

def rename_files_dirs(root_dir, dry_run=True):
    # Change these patterns as needed
    prefix_addition = "new_"  # Prefix to add to each file and directory
    text_to_replace = ("old", "new")  # Tuple (old_text, new_text)

    for root, dirs, files in os.walk(root_dir, topdown=False):
        # Rename files
        for name in files:
            new_name = prefix_addition + name.replace(text_to_replace[0], text_to_replace[1])
            original_path = os.path.join(root, name)
            new_path = os.path.join(root, new_name)
            
            if dry_run:
                print(f"Would rename file {original_path} to {new_path}")
            else:
                os.rename(original_path, new_path)
                print(f"Renamed file {original_path} to {new_path}")

        # Rename directories
        for name in dirs:
            new_name = prefix_addition + name.replace(text_to_replace[0], text_to_replace[1])
            original_path = os.path.join(root, name)
            new_path = os.path.join(root, new_name)
            
            if dry_run:
                print(f"Would rename directory {original_path} to {new_path}")
            else:
                os.rename(original_path, new_path)
                print(f"Renamed directory {original_path} to {new_path}")

# Usage
root_directory = '/path/to/your/directory'  # Set the directory you want to work with
rename_files_dirs(root_directory, dry_run=True)  # Set dry_run to False to perform actual renaming
