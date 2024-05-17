// paper-folding-test-sample-question
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SampleQuestion from '../images/fl-paper-folding-test/sample question/sample-question-1.png';
import SampleQuestionSolution from '../images/fl-paper-folding-test/sample question/solution-sample-question-1.png';
import '../components/styles_css/SampleRotationTestImageStyle.css';
import '../components/styles_css/PageStyle.css'; 

const PaperFoldingSampleQuestion = () => {
    const navigate = useNavigate();
    const [showSolution, setShowSolution] = useState(false);
    const [setShowButton] = useState(true);

    const handleShowSolution = () => {
        setShowSolution(true); // Set showSolution to true when button is clicked
        setShowButton(false); 
    };

    const handleNext = () => {
        navigate("/paper-folding-test-part-1");
    };

    return (
        <div className="container">
            <br />
            <h2>Paper Folding Test: Sample Question</h2>
            <br />
            <br />
            <div name="instructions">
                <p>
                    Next, you will answer some questions that will help me understand your spatial ability. Prior research shows that different people have different levels of spatial ability. Some people will find these questions easier while others will find them more difficult.
                </p>
                <br />
                <p>
                    Please read the instructions carefully. You may not leave the test until the 3 minutes are up, so it is in your interest to complete the test to the best of your ability. You will receive $6.00 for your participation. In addition, you will receive a bonus of $0.10 for each correct answer on the spatial ability tests.
                </p>
                <br />
                <p>
                    In this test, you are to imagine the folding and unfolding of pieces of paper. In each problem in the test, there are some figures drawn on top, and there are others drawn below. The figures on top represent a square piece of paper being folded, and the last of these figures has one or two small circles drawn on it to show where the paper has been punched.
                </p>
                <br />
                <p>
                    Each hole is punched through all the thicknesses of paper at that point. One of the five figures below shows where the holes will be when the paper is completely unfolded. You are to decide which one of these figures is correct and click the circle close to that figure.
                </p>
                <p>
                    In these problems, all of the folds that are made are shown in the figures on top, and the paper is not turned or moved in any way except to make the folds shown in the figures. Remember, the answer is the figure that shows the positions of the holes when the paper is completely unfolded.
                </p>
                <p>
                    You will have 3 minutes for each of the two parts of this test. Each part has one page. You will not be able to go back from part 2 to part 1. Please click Next when you are ready to start part 1 of the test.
                </p>
                <p>
                    Now try the sample problem below. (In this problem only one hole was punched in the folded paper).
                </p>
                <br />
                <div className="image-container">
                    <img src={SampleQuestion} alt="Sample Question" />
                </div>
                <br />
                <div className="image-container">
                    {showSolution && (
                        <div>
                            <p>
                                The correct answer to the sample problem above is C. The figures below show how the paper was folded and why C is the correct answer.
                            </p>
                            <img src={SampleQuestionSolution} alt="Sample Question Solution" />
                        </div>
                    )}
                    {!showSolution && (
                        <button type="button" className="button" onClick={handleShowSolution}>
                            Show Solution
                        </button>
                    )}
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <button className="button" onClick={handleNext}> Next </button>
        </div>
    );
};

export default PaperFoldingSampleQuestion;
