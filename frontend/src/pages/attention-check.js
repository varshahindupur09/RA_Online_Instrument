import React, { useState, useEffect, useRef }  from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 
import '../components/styles_css/RadioButton.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';

const AttentionCheck = () => {
    const navigate = useNavigate(); 
    const [selectedAnswer, setSelectedAnswer] = useState(""); 
    const [error, setError] = useState(null);
    const [attempts, setAttempts] = useState(0); // Track number of attempts
    const startTimeRef = useRef(Date.now()); // Start time for the attention check
    const [loading, setLoading] = useState(false);
    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const currentTime = Date.now();
    const currentTestUrl = "/attention-check";
    const previousTestUrl = "/sample-rotation-test";
    const test_name_given = 'Attention-Check-Test';

    const correctAnswer = "5 cents"; // Defined the correct answer here

    // State to store responses
    const [responses, setResponses] = useState({
        prolific_id: prolificId,
        test_name: test_name_given,
        consent: consent === "yes" ? true : false,
        page_number: 19,
        chart_number: 0,
        responses: {
            ACT_question_attempt_1: '',
            ACT_question_attempt_2: '', 
            ACT_attention_check: '',
        },
        graph_question_durations: [],
        per_graph_durations: [],
        time_spent: 0,
        // started_at: currentTime, // Time when the survey began
        // ended_at: currentTime, // Time when the survey ended
        time_user_entered_current_page: currentTime, // Time when the user entered the current page
        last_visited_test_name: previousTestUrl, 
        current_visit_test_name: currentTestUrl,
        next_visit_test_name: currentTestUrl, 
        incentive_calculation: '0',
        // each_page_pay_calculation: '0',
        total_pay_till_now: '0',
    });

     // Scroll to the top of the page
     useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

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

    const handleNext = async(event) => 
    {
        event.preventDefault(); // Prevent form submission default behavior

        // Ensure an answer is selected
        if (!selectedAnswer) {
            setError("Please select an answer before proceeding.");
            return;
        }

        let updatedResponses = { ...responses };
        let finalResponses = { ...updatedResponses };

        // First attempt handling
        if (attempts === 0 && selectedAnswer === correctAnswer) 
        {
                const endTime = Date.now();
                const timeSpent = (endTime - startTimeRef.current) / 1000;

                updatedResponses = {
                    ...responses,
                    responses: {
                        ...responses.responses,
                        ACT_question_attempt_1: selectedAnswer, // Save the first attempt
                        ACT_attention_check: 'passed',
                    }
                };

                finalResponses = {
                    ...updatedResponses,
                    time_spent: timeSpent,
                    next_visit_test_name: "/rotation-test-part-1",
                };

                try {
                    const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(finalResponses),
                    });

                    if (!response.ok) {
                        const errorText = await response.text();
                        console.log("Error: ", errorText);
                        throw new Error('Network response was not ok');
                    }

                    navigate("/rotation-test-part-1");
                    setError(null);
                } 
                catch (error) {
                    console.error('Error:', error);
                    window.alert(`Error: ${error.message || 'An unexpected error occurred.'}`);
                    setError(error);
                }
                return;
        }
        else if (attempts === 0 && selectedAnswer !== correctAnswer)    
        {    
            updatedResponses = {
                ...responses,
                responses: {
                    ...responses.responses,
                    ACT_question_attempt_1: selectedAnswer, // Save the first attempt
                }
            };

            setError(null);
            setAttempts(1);
        }


        if (attempts === 1 && selectedAnswer === correctAnswer)
        {
             // Final submission after second attempt
            const endTime = Date.now();
            const timeSpent = (endTime - startTimeRef.current) / 1000;

            updatedResponses = {
                ...responses,
                responses: {
                    ...responses.responses,
                    ACT_question_attempt_2: selectedAnswer,
                    ACT_attention_check: 'passed',
                }
            };

            finalResponses = {
                ...updatedResponses,
                time_spent: timeSpent,
                next_visit_test_name: "/rotation-test-part-1",
            };

            try {
                const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(finalResponses),
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    console.log("Error: ", errorText);
                    throw new Error('Network response was not ok');
                }
                navigate("/rotation-test-part-1");
            } catch (error) {
                console.error('Error:', error);
                window.alert(`Error: ${error.message || 'An unexpected error occurred.'}`);
                setError(error);
            }
        }
        else if (attempts === 1 && selectedAnswer !== correctAnswer)
        {
             // Final submission after second attempt
            const endTime = Date.now();
            const timeSpent = (endTime - startTimeRef.current) / 1000;

            updatedResponses = {
                ...responses,
                responses: {
                    ...responses.responses,
                    ACT_question_attempt_2: selectedAnswer,
                    ACT_attention_check: 'failed',
                }
            };

            finalResponses = {
                ...updatedResponses,
                time_spent: timeSpent,
                next_visit_test_name: "/rotation-test-part-1",
            };
            
            try {
                const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(finalResponses),
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    console.log("Error: ", errorText);
                    throw new Error('Network response was not ok');
                }
                navigate("/rotation-test-part-1");
            } catch (error) {
                console.error('Error:', error);
                window.alert(`Error: ${error.message || 'An unexpected error occurred.'}`);
                setError(error);
            }

        }

        setResponses(updatedResponses);

    };


    const handleChange = (questionNumber, value) => {
        setSelectedAnswer(value); // Update selected answer when a radio button is clicked
        setError(null); // Reset the error if the user selects an answer
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img>
                <br></br>
                <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <br></br>
            <div name="instructions">
                {/* <img src={Part1Question1} alt="Part1 Question1" /> */}
                <p><strong>Please answer the question below before proceeding to next part of the test.</strong></p>
                <br></br>
                <label>For each correct answer, how much extra will you be paid?</label>
                <div className="radio-container">
                    <input type="radio" 
                            id="AttentionCheckAnswer1Option1"
                            name="AttentionCheckQuestion1"
                            onChange={() => handleChange(1, "10 cents")} />
                    <label htmlFor="AttentionCheckAnswer1Option1">10 cents</label>
                    <br />
                    <input type="radio" 
                           id="AttentionCheckAnswer1Option2"
                           name="AttentionCheckQuestion1"
                           onChange={() => handleChange(1, "5 cents")} />
                    <label htmlFor="AttentionCheckAnswer1Option2">5 cents</label>
                    <br />
                    <input type="radio" 
                           id="AttentionCheckAnswer1Option3"
                           name="AttentionCheckQuestion1"
                           onChange={() => handleChange(1, "0 cents")} />
                    <label htmlFor="AttentionCheckAnswer1Option3">0 cents</label>
                    <br />

                    <input type="radio" 
                           id="AttentionCheckAnswer1Option4"
                           name="AttentionCheckQuestion1"
                           onChange={() => handleChange(1, "25 cents")} />
                    <label htmlFor="AttentionCheckAnswer1Option4">25 cents</label>
                    <br />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if no answer is selected */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button 
                    className="button" 
                    onClick={handleNext}> 
                    {attempts === 0 ? "Submit First Attempt" : "Submit Second Attempt"}
                    {/* Next  */}
                </button>
            </div>
        </div>
    );
};

export default AttentionCheck;
