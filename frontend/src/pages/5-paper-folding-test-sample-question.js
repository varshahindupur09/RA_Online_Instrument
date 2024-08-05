import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import SampleQuestion from '../images/fl-paper-folding-test/sample-question/sample-question-1.png';
import SampleQuestion from '../images/fl-paper-folding-test/sample-question/entire_test.png';
import SampleQuestionAnswers from '../images/fl-paper-folding-test/sample-question/sample-question-answers.png';
import SampleQuestionSolution from '../images/fl-paper-folding-test/sample-question/solution-sample-question-1.png';
import '../components/styles_css/PageStyle.css'; 
import logoImage from '../images/UCF_Logo.png';
import Navbar from "../components/NavbarPage";

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

    // api integration
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const API_BASE_URL = 'http://localhost:8080'; // Base API URL
    const API_BASE_URL = 'http://survey-web-app-env.eba-xxzjbj9m.us-east-1.elasticbeanstalk.com';

    const [responses, setResponses] = useState({
        prolific_id: '123', // Set the default prolific_id
        test_name: 'Paper-Folding-Test-Sample-Question', // Set the default test name
        page_number: 5, // Page number
        responses: {}, // Initialize as an empty object to dynamically add responses
        time_spent: 0 // Add time_spent field
    });


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
                <div name="instructions">
                    <p>
                        Next, you will answer some questions that will help me understand your spatial ability. Prior research shows that different people have different levels of spatial ability. Some people will find these questions easier while others will find them more difficult.
                    </p>
                    <p className="instructionsred">
                        <strong>
                            Please read the instructions carefully. In addition to the fixed payment of $4, you will receive a bonus of $0.05 for each correct answer that you provide. 
                        </strong>
                    </p>
                    <p>
                        Next you will answer some questions that will help me understand your spatial ability. Prior research shows that different people have different levels of spatial ability. Some people will find these questions easier while others will find them more difficult.
                    </p>
                    <p>
                        Please read the instructions carefully. You may not leave the testprogress to the next section until the 3 minutes are up, so it is in your interest to complete the test to the best of your ability. In addition to the fixed payment of $4, yYou will receive a bonus of $0.05 for each correct answer on the spatial ability teststhat you provide.
                    </p> 
                    <p>
                        In this test, you are to imagine the folding and unfolding of pieces of paper. In each problem in the test there are some figures drawn on top and there are others drawn below. The figures on top represent a square piece of paper being folded, and the last of these figures has one or two small circles drawn on it to show where the paper has been punched. 
                    </p>
                    <p>
                        You will have 3 minutes for each of the two parts of this test. Each part has one page. You will not be able to go back from part 2 to part 1. 
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
                <br />
                <button className="button" onClick={handleNext}> Next </button>
                </div>
        </div>
    );
};

export default PaperFoldingSampleQuestion;
