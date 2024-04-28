from PIL import Image
import os

def resize_images(image_paths, new_width, new_height):
    for image_path in image_paths:
        img = Image.open(image_path)
        # Resize the image
        img = img.resize((new_width, new_height), Image.LANCZOS)

        # Save the resized image
        base_name = os.path.basename(image_path)
        print("image_path ", image_path)
        # new_path = os.path.join(output_folder, base_name)
        # new_path = os.path.join(image_path, base_name)
        img.save(image_path)
        print(f"Resized and saved {image_path}")

# usage
# image_paths = ['../front-end/src/images/rotation_test/rotation-test-part-1/question-7/answer-3.png']  # Add paths to your images
# image_paths = [
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-7/answer-4.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-7/answer-5.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-7/answer-6.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-7/answer-7.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-7/answer-8.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-7/part-1-question-7.png',

#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-8/answer-1.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-8/answer-2.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-8/answer-3.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-8/answer-4.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-8/answer-5.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-8/answer-6.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-8/answer-7.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-8/answer-8.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-8/part-1-question-8.png',
#     ]
        
image_paths = [
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-1.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-2.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-3.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-4.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-5.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-6.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-7.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-8.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/part-1-question-9.png',

    '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-1.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-2.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-3.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-4.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-5.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-6.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-7.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-8.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/part-1-question-10.png',

    '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-1.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-2.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-3.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-4.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-5.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-6.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-7.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-8.png',
    '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/part-1-question-11.png',
    ]

# output_folder = './'
new_width = 120
new_height = 120

resize_images(image_paths, new_width, new_height)