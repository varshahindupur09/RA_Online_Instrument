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
        
# image_paths = [
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-1.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-2.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-3.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-4.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-5.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-6.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-7.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/answer-8.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-9/part-1-question-9.png',

#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-1.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-2.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-3.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-4.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-5.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-6.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-7.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/answer-8.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-10/part-1-question-10.png',

#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-1.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-2.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-3.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-4.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-5.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-6.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-7.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/answer-8.png',
#     '../front-end/src/images/rotation_test/rotation-test-part-1/question-11/part-1-question-11.png',
#     ]

# image_paths = [

#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-1/part-1-question-1.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-2/part-1-question-2.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-3/part-1-question-3.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-4/part-1-question-4.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-5/part-1-question-5.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-6/part-1-question-6.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-7/part-1-question-7.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-8/part-1-question-8.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-9/part-1-question-9.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-10/part-1-question-10.png',
#     ]


# image_paths = [

#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-1.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-2.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-3.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-4.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-5.png',

#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-2/answers-2/answer-2-option-1.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-2/answers-2/answer-2-option-2.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-2/answers-2/answer-2-option-3.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-2/answers-2/answer-2-option-4.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-2/answers-2/answer-2-option-5.png',

#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-3/answers-3/answer-3-option-1.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-3/answers-3/answer-3-option-2.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-3/answers-3/answer-3-option-3.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-3/answers-3/answer-3-option-4.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-3/answers-3/answer-3-option-5.png',

#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-4/answers-4/answer-4-option-1.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-4/answers-4/answer-4-option-2.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-4/answers-4/answer-4-option-3.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-4/answers-4/answer-4-option-4.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-4/answers-4/answer-4-option-5.png',

#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-5/answers-5/answer-5-option-1.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-5/answers-5/answer-5-option-2.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-5/answers-5/answer-5-option-3.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-5/answers-5/answer-5-option-4.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-5/answers-5/answer-5-option-5.png',

#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-6/answers-6/answer-6-option-1.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-6/answers-6/answer-6-option-2.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-6/answers-6/answer-6-option-3.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-6/answers-6/answer-6-option-4.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-6/answers-6/answer-6-option-5.png',

#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-7/answers-7/answer-7-option-1.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-7/answers-7/answer-7-option-2.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-7/answers-7/answer-7-option-3.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-7/answers-7/answer-7-option-4.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-7/answers-7/answer-7-option-5.png',

#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-8/answers-8/answer-8-option-1.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-8/answers-8/answer-8-option-2.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-8/answers-8/answer-8-option-3.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-8/answers-8/answer-8-option-4.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-8/answers-8/answer-8-option-5.png',

#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-9/answers-9/answer-9-option-1.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-9/answers-9/answer-9-option-2.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-9/answers-9/answer-9-option-3.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-9/answers-9/answer-9-option-4.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-9/answers-9/answer-9-option-5.png',

#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-10/answers-10/answer-10-option-1.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-10/answers-10/answer-10-option-2.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-10/answers-10/answer-10-option-3.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-10/answers-10/answer-10-option-4.png',
#     '../front-end/src/images/fl-paper-folding-test/part-1-3-minutes/question-10/answers-10/answer-10-option-5.png',
#     ]
# # output_folder = './'
# new_width = 400
# new_height = 400
        
image_paths = [
    front-end/src/images/rotation_test/rotation-test-part-2/question-1
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-1/part-2-question-1.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-1/answer-1.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-1/answer-2.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-1/answer-3.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-1/answer-4.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-1/answer-5.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-1/answer-6.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-1/answer-7.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-1/answer-8.png',

    '../front-end/src/images/rotation-test/rotation-test-part-2/question-2/part-2-question-2.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-2/answer-1.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-2/answer-2.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-2/answer-3.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-2/answer-4.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-2/answer-5.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-2/answer-6.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-2/answer-7.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-2/answer-8.png',

    '../front-end/src/images/rotation-test/rotation-test-part-2/question-3/part-2-question-3.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-3/answer-1.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-3/answer-2.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-3/answer-3.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-3/answer-4.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-3/answer-5.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-3/answer-6.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-3/answer-7.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-3/answer-8.png',

    '../front-end/src/images/rotation-test/rotation-test-part-2/question-4/part-2-question-4.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-4/answer-1.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-4/answer-2.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-4/answer-3.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-4/answer-4.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-4/answer-5.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-4/answer-6.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-4/answer-7.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-4/answer-8.png',

    '../front-end/src/images/rotation-test/rotation-test-part-2/question-5/part-2-question-5.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-5/answer-1.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-5/answer-2.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-5/answer-3.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-5/answer-4.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-5/answer-5.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-5/answer-6.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-5/answer-7.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-5/answer-8.png',

    '../front-end/src/images/rotation-test/rotation-test-part-2/question-6/part-2-question-6.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-6/answer-1.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-6/answer-2.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-6/answer-3.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-6/answer-4.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-6/answer-5.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-6/answer-6.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-6/answer-7.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-6/answer-8.png',

    '../front-end/src/images/rotation-test/rotation-test-part-2/question-7/part-2-question-7.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-7/answer-1.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-7/answer-2.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-7/answer-3.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-7/answer-4.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-7/answer-5.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-7/answer-6.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-7/answer-7.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-7/answer-8.png',

    '../front-end/src/images/rotation-test/rotation-test-part-2/question-8/part-2-question-8.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-8/answer-1.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-8/answer-2.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-8/answer-3.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-8/answer-4.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-8/answer-5.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-8/answer-6.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-8/answer-7.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-8/answer-8.png',

    '../front-end/src/images/rotation-test/rotation-test-part-2/question-9/part-2-question-9.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-9/answer-1.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-9/answer-2.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-9/answer-3.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-9/answer-4.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-9/answer-5.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-9/answer-6.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-9/answer-7.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-9/answer-8.png',

    '../front-end/src/images/rotation-test/rotation-test-part-2/question-10/part-2-question-10.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-10/answer-1.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-10/answer-2.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-10/answer-3.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-10/answer-4.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-10/answer-5.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-10/answer-6.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-10/answer-7.png',
    '../front-end/src/images/rotation-test/rotation-test-part-2/question-10/answer-8.png',

    ]
# output_folder = './'
new_width = 120
new_height = 120

resize_images(image_paths, new_width, new_height)