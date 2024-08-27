import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';

const FinancialLiteracy = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    // const { consent } = useConsent(); 
    const startTimeRef = useRef(Date.now());

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


    // const API_BASE_URL = 'https://backend.adg429.com';
    // const API_BASE_URL = 'http://localhost:8080';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const currentTime = Date.now();
    const currentTestUrl = "/financial-literacy";
    const test_name_given = 'Financial-Literacy';

    // State to store responses
    const [responses, setResponses] = useState({
        // prolific_id: prolificId, 
        prolific_id: '',
        test_name: test_name_given, 
        consent: consent === "yes" ? true : false, 
        page_number: 4, 
        chart_number: 0,
        responses: {
            question_1: "",
            question_2: "",
            question_3: ""
        }, // Dynamic responses based on user input
        graph_question_durations: [],
        per_graph_durations: [],
        time_spent: 0,
        started_at: currentTime, // Time when the survey began
        ended_at: currentTime, // Time when the survey ended
        time_user_entered_current_page: currentTime, // Time when the user entered the current page
        last_visited_test_name: consent === "yes" ? "/" : "/ask-consent-again", 
        current_visit_test_name: currentTestUrl,
        next_visit_test_name: currentTestUrl,
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
                [`question_${questionNumber}`]: value
            }
        }));
    };

    const handleNext = async (event) => {
        event.preventDefault();
        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        const nextTestUrl = "/paper-folding-test-sample-question"; // Use let instead of const as const is unmutable

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
            prolificId: prolificId,
            time_spent: timeSpent,
            last_visited_test_name: consent === "yes" ? "/" : "/ask-consent-again", // Update the last visited page
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
            <div className="container">
                <div className="LogoStyleImage">
                        <p>
                        <img src={logoImageDoc} alt="ucflogo" className="ucflogo" /> 
                        <h2><strong><u>PART A</u></strong></h2> 
                    </p>
                    <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
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
                    <div className="radio-container">
                        <input type="radio" id="answer-fl-1-1" name="answer-fl-1" value="more-than-$102" onChange={() => handleChange(1, "more-than-$102")} />
                        <label htmlFor="answer-fl-1-1">More than $102</label>
                        <br />
                        <input type="radio" id="answer-fl-1-2" name="answer-fl-1" value="exactly-$102" onChange={() => handleChange(1, "exactly-$102")} />
                        <label htmlFor="answer-fl-1-2">Exactly $102</label>
                        <br />
                        <input type="radio" id="answer-fl-1-3" name="answer-fl-1" value="less-than-$102" onChange={() => handleChange(1, "less-than-$102")} />
                        <label htmlFor="answer-fl-1-3">Less than $102</label>
                        <br />
                        <input type="radio" id="answer-fl-1-4" name="answer-fl-1" value="do-not-know" onChange={() => handleChange(1, "do-not-know")} />
                        <label htmlFor="answer-fl-1-4">Do not know</label>
                    </div>
                    <br />
                    <br />
                    
                    <div className="instructionsFL">
                        <h4>
                            Imagine that the interest rate on your savings account was 1% per year and inflation was 2% per year. After 1 year, how much would you be able to buy with the money in this account?
                        </h4>
                    </div>
                    <div className="radio-container">
                        <input type="radio" id="answer-fl-2-1" name="answer-fl-2" value="more-than-today" onChange={() => handleChange(2, "more-than-today")} />
                        <label htmlFor="answer-fl-2-1">More than today</label>
                        <br />
                        <input type="radio" id="answer-fl-2-2" name="answer-fl-2" value="exactly-today" onChange={() => handleChange(2, "exactly-today")} />
                        <label htmlFor="answer-fl-2-2">Exactly today</label>
                        <br />
                        <input type="radio" id="answer-fl-2-3" name="answer-fl-2" value="less-than-today" onChange={() => handleChange(2, "less-than-today")} />
                        <label htmlFor="answer-fl-2-3">Less than today</label>
                        <br />
                        <input type="radio" id="answer-fl-2-4" name="answer-fl-2" value="do-not-know" onChange={() => handleChange(2, "do-not-know")} />
                        <label htmlFor="answer-fl-2-4">Do not know</label>
                    </div>
                    <br />
                    <br />

                    <div className="instructionsFL">
                        <h4>
                        Please tell me whether this statement is true or false. “Buying a single company’s stock usually provides a safer return than a stock mutual fund.”
                        </h4>
                    </div>
                    <div className="radio-container">
                        <input type="radio" id="answer-fl-3-1" name="answer-fl-3" value="true" onChange={() => handleChange(3, "true")} />
                        <label htmlFor="answer-fl-3-1">True</label>
                        <br />
                        <input type="radio" id="answer-fl-3-2" name="answer-fl-3" value="false" onChange={() => handleChange(3, "false")} />
                        <label htmlFor="answer-fl-3-2">False</label>
                        <br />
                        <input type="radio" id="answer-fl-3-3" name="answer-fl-3" value="do-not-know"onChange={() => handleChange(3, "do-not-know")} />
                        <label htmlFor="answer-fl-3-3">Do not know</label>
                    </div>
                </div>
                <br />
                <br />
                <button type="button" className="button" onClick={handleNext}>Next</button>
                {error && <p className="error-message">{error.message}</p>}
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    );
};
 
export default FinancialLiteracy;
