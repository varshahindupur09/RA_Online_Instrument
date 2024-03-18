import React from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/InstructionsAndConsent.css'; 
 
const PaperFoldingSampleQuestion.js = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/");
    };

    return (
        <div className="container_paper_Folding_sample_question">
            <br></br>
            <h2>Paper Folding Test: Sample Question</h2>
            <br></br>
            <br></br>
            <h3>
                Next you will answer some questions that will help me understand your spatial ability. Prior research shows that different people have different levels of spatial ability. Some people will find these questions easier while others will find them more difficult.
            </h3>
            <br></br>
            <h3>
                Please read the instructions carefully. You may not leave the test until the 3 minutes are up, so it is in your interest to complete the test to the best of your ability. You will receive $6.00 for your participation. In addition, you will receive a bonus of $0.10 for each correct answer on the spatial ability tests.
            </h3>
            <br></br>
            <h3>
                In this test you are to imagine the folding and unfolding of pieces of paper. In each problem in the test there are some figures drawn on top and there are others drawn below. The figures on top represent a square piece of paper being folded, and the last of these figures has one or two small circles drawn on it to show where the paper has been punched.
            </h3>
            <br></br>
            <h3>
                Each hole is punched through all the thicknesses of paper at that point. One of the five figures below shows where the holes will be when the paper is completely unfolded. You are to decide which one of these figures is correct and click the cirle close to that figure.
            </h3>
            <h3>
                In these problems all of the folds that are made are shown in the figures on top, and the paper is not turned or moved in any way except to make the folds shown in the figures. Remember, the answer is the figure that shows the positions of the holes when the paper is completely unfolded.
            </h3>
            <h3>
                You will have 3 minutes for each of the two parts of this test. Each part has one page. You will not be able to go back from part 2 to part 1. Please click Next when you are ready to start part 1 of the test.
            </h3>
            <h3>
                Now try the sample problem below. (In this problem only one hole was punched in the folded paper).
            </h3>
            <br></br>
            <img src="/images/fl-paper-folding-test/sample question/sample-question-1.png"> 
            <h3>/* do you want user to select the options: this means i will have to keep all images question, options stored separately */</h3>
            </img>
            <br></br>
            <h3>
                The correct answer to the sample problem above is C. The figures below show how the paper was folded and why C is the correct answer.
            </h3>
            <img src="/images/fl-paper-folding-test/sample question/solution-sample-question-1.png">
            </img>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button className="button" onClick={handleNext}> Next </button>
        </div>
    );
};
 
export default PaperFoldingSampleQuestion;

