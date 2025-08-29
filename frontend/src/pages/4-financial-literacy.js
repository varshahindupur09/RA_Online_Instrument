// pages/4-financial-literacy.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';
// import GlobalTimer from "../components/GlobalTimer";
import '../components/styles_css/RadioButton.css'; 
import { useLayoutEffect } from "react";

const FinancialLiteracy = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    // const { consent } = useConsent(); 
    const startTimeRef = useRef(Date.now());

    // Scroll to the top of the page
    useLayoutEffect(() => {
    // final guarantee on first mount
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
    }, []);

    // Prevent back navigation
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


    // const API_BASE_URL = 'https://backend.adg429.com';
    // const API_BASE_URL = 'http://localhost:8080';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const currentTime = Date.now();
    const currentTestUrl = "/financial-literacy";
    const test_name_given = 'Financial-Literacy';

    // State to store responses
    const [responses, setResponses] = useState({
        prolific_id: prolificId, 
        test_name: test_name_given, 
        consent: consent === "yes" ? true : false, 
        page_number: 4, 
        chart_number: 0,
        responses: {
            FL_question_1: "",
            FL_question_2: "",
            FL_question_3: "",
            FL_question_4: "",      
            FL_question_5: ""
        }, // Dynamic responses based on user input
        graph_question_durations: [],
        per_graph_durations: [],
        time_spent: 0,
        // started_at: currentTime, // Time when the survey began
        // ended_at: currentTime, // Time when the survey ended
        time_user_entered_current_page: currentTime, // Time when the user entered the current page
        last_visited_test_name: consent === "yes" ? "/" : "/ask-consent-again", 
        current_visit_test_name: currentTestUrl,
        next_visit_test_name: currentTestUrl,
        incentive_calculation: '0',
        // each_page_pay_calculation: '0',
        total_pay_till_now: '0',
    });

     // Restrict navigation to ensure users can't jump to different pages
     useEffect(() => {
        if (window.location.pathname !== responses.next_visit_test_name) {
            navigate(responses.next_visit_test_name); // Redirect to the current test URL
        }
    }, [navigate, responses.next_visit_test_name]);

    // Handle dynamic question responses
    const handleChange = (questionNumber, value) => {
        setResponses(prevResponses => ({
            ...prevResponses,
            responses: {
                ...prevResponses.responses,
                [`FL_question_${questionNumber}`]: value
            }
        }));
    };

    const handleNext = async (event) => {
        event.preventDefault();
        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        const nextTestUrl = "/paper-folding-test-sample-question"; // Use let instead of const as const is unmutable

        // console.log("handleNext fl prolificid from consent: ", prolificId)

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
            time_spent: timeSpent,
            last_visited_test_name: consent === "yes" ? "/" : "/ask-consent-again", // Update the last visited page
            next_visit_test_name: nextTestUrl, // The next page URL
        };

        let shouldNavigate = true; 

        try {
            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedResponses),
            });

            // Simulate API call to save survey responses
            // console.log('Saving responses:', updatedResponses);

            setResponses(updatedResponses);

            if (!response.ok) {
                // window.alert('An unexpected error occurred.');
                const errorText = await response.text();

                shouldNavigate = false; // Prevent navigation if there's an error
                console.log("error ", errorText)
                throw new Error('Network response was not ok');
            }

            // Only navigate if there were no errors
            if (shouldNavigate) {
                navigate(updatedResponses.next_visit_test_name);
            }

        } catch (error) {
            console.error('Error:', error);
            setError(error);
            shouldNavigate = false;
        } finally {
            setLoading(false);
        }
    };

    // Check if all questions are answered
    const isNextDisabled = 
        !responses.responses.FL_question_1 ||
        !responses.responses.FL_question_2 ||
        !responses.responses.FL_question_3 ||
        !responses.responses.FL_question_4 ||
        !responses.responses.FL_question_5;

    return (
        <div>
            <div className="container">
                <div className="LogoStyleImage">
                        <p>
                        <img src={logoImageDoc} alt="ucflogo" className="ucflogo" /> 
                        <h2><strong><u>PART A</u></strong></h2> 
                    </p>
                    {/* <GlobalTimer /> */}
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                <div name="instructions">
                    <br />
                    <div className="instructionsFL">
                        <p>Thank you for agreeing to participate in this study. First, please choose the most correct response to the following questions to the best of your ability without using outside sources.</p>
                    </div>
                    <br />
                    {/* Question 1 */}
                    <div className="instructionsFL">
                        <h4>
                            Suppose you had $100 in a savings account and the interest rate was 2% per year. After 5 years, how much do you think you would have in the account if you left the money to grow?
                        </h4>
                    </div>
                    <div className="radio-grid">
                        <label htmlFor="answer-fl-1-1">
                            <input type="radio" id="answer-fl-1-1" name="answer-fl-1" value="more-than-$102" onChange={() => handleChange(1, "more-than-$102")} />
                            More than $102
                        </label>
                        <label htmlFor="answer-fl-1-2">
                            <input type="radio" id="answer-fl-1-2" name="answer-fl-1" value="exactly-$102" onChange={() => handleChange(1, "exactly-$102")} />
                            Exactly $102
                        </label>
                        <label htmlFor="answer-fl-1-3">
                            <input type="radio" id="answer-fl-1-3" name="answer-fl-1" value="less-than-$102" onChange={() => handleChange(1, "less-than-$102")} />
                            Less than $102
                        </label>
                        <label htmlFor="answer-fl-1-4">
                            <input type="radio" id="answer-fl-1-4" name="answer-fl-1" value="do-not-know" onChange={() => handleChange(1, "do-not-know")} />
                            Do not know
                        </label>
                    </div>
                    
                    {/* Question 2 */} 
                    <div className="instructionsFL">
                        <h4>
                            Imagine that the interest rate on your savings account was 1% per year and inflation was 2% per year. After 1 year, how much would you be able to buy with the money in this account?
                        </h4>
                    </div>
                    <div className="radio-grid">
                        <label htmlFor="answer-fl-2-1">
                            <input type="radio" id="answer-fl-2-1" name="answer-fl-2" value="more-than-today" onChange={() => handleChange(2, "more-than-today")} />
                            More than today
                        </label>
                        <label htmlFor="answer-fl-2-2">
                            <input type="radio" id="answer-fl-2-2" name="answer-fl-2" value="exactly-today" onChange={() => handleChange(2, "exactly-today")} />
                            Exactly the same
                        </label>
                        <label htmlFor="answer-fl-2-3">
                            <input type="radio" id="answer-fl-2-3" name="answer-fl-2" value="less-than-today" onChange={() => handleChange(2, "less-than-today")} />
                            Less than today
                        </label>
                        <label htmlFor="answer-fl-2-4">
                            <input type="radio" id="answer-fl-2-4" name="answer-fl-2" value="do-not-know" onChange={() => handleChange(2, "do-not-know")} />
                            Do not know
                        </label>
                    </div>

                    {/* Question 3 */}
                    <div className="instructionsFL">
                        <h4>
                            If interest rates rise, what will typically happen to bond prices?
                        </h4>
                    </div>
                    <div className="radio-grid">
                        <label htmlFor="answer-fl-3-1">
                            <input type="radio" id="answer-fl-3-1" name="answer-fl-3" value="rise" onChange={() => handleChange(3, "rise")} /> They will rise</label>
                        <label htmlFor="answer-fl-3-2">
                            <input type="radio" id="answer-fl-3-2" name="answer-fl-3" value="fall" onChange={() => handleChange(3, "fall")} /> They will fall</label>
                        <label htmlFor="answer-fl-3-3">
                            <input type="radio" id="answer-fl-3-3" name="answer-fl-3" value="stay-same" onChange={() => handleChange(3, "stay-same")} /> They will stay the same</label>
                    </div>


                    {/* Question 4 */}
                    <div className="instructionsFL">
                        <h4>
                            A 15-year mortgage typically requires higher monthly payaments than a 30-year mortgage, but the total interest paid over the life of the loan will be less.
                        </h4>
                    </div>
                    <div className="radio-grid">
                         <label htmlFor="answer-fl-4-1">
                        <input type="radio" id="answer-fl-4-1" name="answer-fl-4" value="True" onChange={() => handleChange(4, "True")} />
                        True</label>
                        <label htmlFor="answer-fl-4-2">
                        <input type="radio" id="answer-fl-4-2" name="answer-fl-4" value="False" onChange={() => handleChange(4, "False")} />
                        False</label>
                        <label htmlFor="answer-fl-4-3"> 
                        <input type="radio" id="answer-fl-4-3" name="answer-fl-4" value="Don't know" onChange={() => handleChange(4, "Don't know")} />
                        Don't know</label>
                        <br />
                    </div>

                    {/* Question 5 */}
                    <div className="instructionsFL">
                        <h4>
                            Buying a single company’s stock usually provides a safer return than a stock mutual fund.
                        </h4>
                    </div>
                   <div className="radio-grid">
                        <label htmlFor="answer-fl-5-1">
                            <input type="radio" id="answer-fl-5-1" name="answer-fl-5" value="True" onChange={() => handleChange(5, "True")} /> True</label>
                        <label htmlFor="answer-fl-5-2">
                            <input type="radio" id="answer-fl-5-2" name="answer-fl-5" value="False" onChange={() => handleChange(5, "False")} /> False</label>
                        <label htmlFor="answer-fl-5-3">
                            <input type="radio" id="answer-fl-5-3" name="answer-fl-5" value="Don't know" onChange={() => handleChange(5, "Don't know")} /> Don't know</label>
                    </div>
                </div>
                <br />
                <button 
                    type="button"
                    className="button"
                    onClick={handleNext}
                    disabled={isNextDisabled} // Disable button if not all questions are answered
                    >
                        Next
                </button>
                {error && <p className="error-message">{error.message}</p>}
                <br/>
                <br/>
            </div>
        </div>
    );
};
 
export default FinancialLiteracy;
