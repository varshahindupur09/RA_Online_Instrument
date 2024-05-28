from PIL import Image
# import SampleQuestionAnswers from '../images/fl-paper-folding-test/sample-question/sample-question-answers.png';
# import SampleQuestionSolution from '../images/fl-paper-folding-test/sample-question/solution-sample-question-1.png'; 
  
# get image 
filepath = "../images/fl-paper-folding-test/sample-question/sample-question-1.png"
img = Image.open(filepath) 
  
# get width and height 
width = img.width 
height = img.height 
  
# display width and height 
print("The height of the image is: ", height) 
print("The width of the image is: ", width) 