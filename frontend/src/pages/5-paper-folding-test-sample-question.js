import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import SampleQuestion from '../images/fl-paper-folding-test/sample-question/sample-question-1.png';
import SampleQuestion from '../images/fl-paper-folding-test/sample-question/entire_test.png';
// import SampleQuestionAnswers from '../images/fl-paper-folding-test/sample-question/sample-question-answers.png';
// import SampleQuestionSolution from '../images/fl-paper-folding-test/sample-question/solution-sample-question-1.png';
import '../components/styles_css/PageStyle.css'; 
import logoImage from '../images/UCF_Logo.png';
import Navbar from "../components/NavbarPage";
import { useConsent } from './ConsentContext';

const PaperFoldingSampleQuestion = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const { consent } = useConsent(); 
    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    const startTimeRef = useRef(Date.now());

    // Scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

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

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const currentTime = Date.now();
    const currentTestUrl = "/paper-folding-test-sample-question";
    const previousTestUrl = "/financial-literacy";
    const test_name_given = 'Paper-Folding-Test-Sample-Question';

    // State to store responses
    const [responses, setResponses] = useState({
        // prolific_id: prolificId, 
        prolific_id: '',
        test_name: test_name_given, 
        consent: consent === "yes" ? true : false, 
        page_number: 5, 
        chart_number: 0,
        responses: {}, // Dynamic responses based on user input
        graph_question_durations: [],
        per_graph_durations: [],
        time_spent: 0,
        started_at: currentTime, // Time when the survey began
        ended_at: currentTime, // Time when the survey ended
        time_user_entered_current_page: currentTime, // Time when the user entered the current page
        last_visited_test_name: previousTestUrl, 
        current_visit_test_name: currentTestUrl,
        next_visit_test_name: currentTestUrl,
    });

    // Restrict navigation to ensure users can't jump to different pages
    useEffect(() => {
        if (window.location.pathname !== responses.next_visit_test_name) {
            navigate(responses.next_visit_test_name); // Redirect to the current test URL
        }
    }, [navigate, responses.next_visit_test_name]);

    const handleNext = async (event) => {
        event.preventDefault();
        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        const nextTestUrl = "/paper-folding-test-part-1"; // Use let instead of const as const is unmutable

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
            prolific_id: prolificId,
            time_spent: timeSpent,
            next_visit_test_name: nextTestUrl, // The next page URL
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedResponses),
            });

            // Simulate API call to save survey responses
            console.log('Saving responses:', updatedResponses);

            setResponses(updatedResponses);

            const responseText = await response.text();
            if (!response.ok) {
                throw new Error(responseText || 'Network response was not ok');
            }
            console.log('Response text:', responseText);

            navigate(nextTestUrl)

        } catch (error) {
            console.error('Error:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="LogoStyleImage">
                        <p>
                        <img src={logoImage} alt="ucflogo" className="ucflogo" /> 
                        <h2><strong><u>PAPER FOLDING TEST</u></strong></h2> 
                    </p>
                    <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                </div>
                <h2>Paper Folding Test: Sample Question</h2>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                <div name="instructions">
                    <p>
                        In this test, you are to imagine the folding and unfolding of pieces of paper. In each problem in the test there are some figures drawn on top and there are others drawn below. The figures on top represent a square piece of paper being folded, and the last of these figures has one or two small circles drawn on it to show where the paper has been punched. 
                    </p>
                    <p>
                        Each hole is punched through all the thicknesses of paper at that point. One of the five figures below shows where the holes will be when the paper is completely unfolded. You are to decide which one of these figures is correct and click the circle close to that figure.
                    </p>
                    <p>
                        In these problems all of the folds that are made are shown in the figures on top, and the paper is not turned or moved in any way except to make the folds shown in the figures. Remember, the answer is the figure that shows the positions of the holes when the paper is completely unfolded.
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
