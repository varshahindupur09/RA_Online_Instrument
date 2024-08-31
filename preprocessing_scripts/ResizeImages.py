# resizeimages.py
from PIL import Image
import os

def resize_and_rename_images(input_folder, output_folder, size=(120, 120)):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for i in range(1, 9):  # Loop from 1 to 8 for the 8 images
        input_filename = f"{i}.png"  # Input filenames like 1.png, 2.png, etc.
        img_path = os.path.join(input_folder, input_filename)
        
        if os.path.exists(img_path):
            img = Image.open(img_path)
            img = img.resize(size, Image.Resampling.LANCZOS)

            new_filename = f"answer-{i}.png"
            output_path = os.path.join(output_folder, new_filename)
            img.save(output_path)
            
            print(f"Resized {input_filename} and saved as {new_filename} in {output_path}")
        else:
            print(f"Image {input_filename} not found in the input folder.")

# Example usage:
input_folder = "/Users/varshahindupur/Desktop/input"
part="1"
question="4"
output_folder = f"/Users/varshahindupur/Downloads/RA_Online_Instrument/frontend/src/images/rotation-test/rotation-test-part-{part}/question-{question}"

resize_and_rename_images(input_folder, output_folder)
