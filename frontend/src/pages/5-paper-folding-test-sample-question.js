import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import SampleQuestion from '../images/fl-paper-folding-test/sample-question/sample-question-1.png';
import SampleQuestion from '../images/fl-paper-folding-test/sample-question/entire_test.png';
// import SampleQuestionAnswers from '../images/fl-paper-folding-test/sample-question/sample-question-answers.png';
// import SampleQuestionSolution from '../images/fl-paper-folding-test/sample-question/solution-sample-question-1.png';
import '../components/styles_css/PageStyle.css'; 
import logoImage from '../images/UCF_Logo.png';
import Navbar from "../components/NavbarPage";

const PaperFoldingSampleQuestion = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const [showSolution, setShowSolution] = useState(false);

    // Toggles the visibility of the solution.
    // const handleShowSolution = () => {
    //     setShowSolution(!showSolution); // This now toggles the state of showSolution
    // };

    // Prevent back button navigation
    useEffect(() => {
        const preventBackNavigation = () => {
            window.history.pushState(null, null, window.location.href);
        };

        preventBackNavigation();

        window.onpopstate = function() {
            window.history.go(1);
        };

        // Listen for clicks and key presses to ensure back button remains disabled
        window.addEventListener('click', preventBackNavigation);
        window.addEventListener('keydown', preventBackNavigation);

        // Clean up the event listeners on component unmount
        return () => {
            window.removeEventListener('click', preventBackNavigation);
            window.removeEventListener('keydown', preventBackNavigation);
        };
    }, []);

    const handleNext = () => {
        navigate("/paper-folding-test-part-1");
    };


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="LogoStyleImage">
                        <p>
                        <img src={logoImage} alt="ucflogo" className="ucflogo" /> 
                        <h2> PAPER FOLDING TEST </h2> 
                    </p>
                    <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                </div>
                <br />
                <h2>Paper Folding Test: Sample Question</h2>
                <br />
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                <div name="instructions">
                    <p>
                        In this test, you are to imagine the folding and unfolding of pieces of paper. In each problem in the test there are some figures drawn on top and there are others drawn below. The figures on top represent a square piece of paper being folded, and the last of these figures has one or two small circles drawn on it to show where the paper has been punched. 
                    </p>
                    <p>
                        You will have <strong><u>3 minutes</u></strong> for each of the two parts of this test. Each part has one page. You will not be able to go back from part 2 to part 1. 
                    </p>
                    {/* <p>
                        <strong>Now try the sample problem below. (In this problem only one hole was punched in the folded paper).</strong>
                    </p> */}
                    <br />
                    <div className="images-container">
                        <img src={SampleQuestion} alt="Sample Question"/>
                            <br />
                            <br />
                    </div>
                    {/* <div className="images-container">
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
                    </div> */}
                </div>
                <div name="instructions">
                    <p>
                        Please click <strong>Next</strong> when you are ready to start part 1 of the test.
                    </p>
                </div>
                <br />
                <button className="button" onClick={handleNext}> Next </button>
                {error && <p className="error-message">{error.message}</p>}
                </div>
        </div>
    );
};

export default PaperFoldingSampleQuestion;
