import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SampleQuestion from '../images/fl-paper-folding-test/sample-question/sample-question-1.png';
import SampleQuestionAnswers from '../images/fl-paper-folding-test/sample-question/sample-question-answers.png';
import SampleQuestionSolution from '../images/fl-paper-folding-test/sample-question/solution-sample-question-1.png';
import '../components/styles_css/PageStyle.css'; 
import logoImage from '../images/UCF_Logo.png'

const PaperFoldingSampleQuestion = () => {
    const navigate = useNavigate();
    const [showSolution, setShowSolution] = useState(false);

    // Toggles the visibility of the solution.
    const handleShowSolution = () => {
        setShowSolution(!showSolution); // This now toggles the state of showSolution
    };

    const handleNext = () => {
        navigate("/paper-folding-test-part-1");
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <p>
                    <img src={logoImage} alt="ucflogo" className="ucflogo"></img> <h2></h2>
                </p>
            </div>
            <br />
            <h2>Paper Folding Test: Sample Question</h2>
            <br />
            <div name="instructions">
                <p>
                    Next, you will answer some questions that will help me understand your spatial ability...
                </p>
                <p>
                    Please read the instructions carefully...
                </p>
                <p>
                    In this test, you are to imagine the folding and unfolding of pieces of paper...
                </p>
                <p>
                    You will have 3 minutes for each of the two parts of this test...
                </p>
                <p>
                    <strong>Now try the sample problem below. (In this problem only one hole was punched in the folded paper).</strong>
                </p>
                <br />
                <div className="images-container">
                <div name="instructions">
                    <img src={SampleQuestion} alt="Sample Question" />
                    <br />
                    <br />
                    <img src={SampleQuestionAnswers} alt="Sample Question Answers" />
                    <br />
                </div>
                </div>
                <div className="images-container">
                    {showSolution ? (
                <div name="instructions">
                    <p>
                    <strong>The correct answer to the sample problem above is C. The figures below show how the paper was folded and why C is the correct answer.</strong>
                    </p>
                    <img src={SampleQuestionSolution} alt="Sample Question Solution" />
                    <button type="button" className="button" onClick={handleShowSolution}>
                        Hide Solution
                    </button>
                    </div>
                    ) : (
                        <button type="button" className="button" onClick={handleShowSolution}>
                            Show Solution
                        </button>
                    )}
                </div>
            </div>
            <br />
            <button className="button" onClick={handleNext}> Next </button>
        </div>
    );
};

export default PaperFoldingSampleQuestion;
