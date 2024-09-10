import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css';  
import '../components/styles_css/feedbackQuestions.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';

import { useConsent } from './ConsentContext';

const FeedbackQuestions = () => {
    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const currentTime = Date.now();
    const currentTestUrl = "/feedback-questions";
    const previousTestUrl = "/dashboard-router"; 
    const test_name_given = 'Feedback-Questions';
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const startTimeRef = useRef(Date.now());
    const { consent, chart_number, prolificId } = useConsent(); 

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

    const [responses, setResponses] = useState({
        prolific_id: prolificId,
        test_name: test_name_given,
        consent: consent === "yes" ? true : false,
        page_number: 17,
        chart_number: chart_number,
        responses: {},
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


    const [feedback, setFeedback] = useState({
        mentalDemand: 0,
        physicalDemand: 0,
        temporalDemand: 0,
        performance: 0,
        effort: 0,
        frustration: 0,
    });

    // Restrict navigation to ensure users can't jump to different pages
    useEffect(() => {
        if (window.location.pathname !== responses.next_visit_test_name) {
            navigate(responses.next_visit_test_name); // Redirect to the current test URL
        }
    }, [navigate, responses.next_visit_test_name]);

    // Handle dynamic question responses
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [name]: value
        }));
    };

    const handleNext = async (event) => {
        event.preventDefault();
        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        let nextTestUrl = "/demographic-questions";
        let shouldNavigate = true;

        const updatedresponses = {
            ...responses, 
            responses: feedback,
            timeSpent: timeSpent,
            next_visit_test_name: nextTestUrl, // The next page URL
        };

        setResponses(updatedresponses);

        try {
            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedresponses),
            });

            if (!response.ok) {
                // window.alert('An unexpected error occurred.');
                const errorText = await response.text();

                shouldNavigate = false; // Prevent navigation if there's an error
                console.log("error ", errorText)
                throw new Error('Network response was not ok');
            }

        } catch (error) {
            console.error('Error:', error);
            setError(error);
            shouldNavigate = false;
        } finally {
            setLoading(false);
        }

         // Only navigate if there were no errors
         if (shouldNavigate) {
            navigate(updatedresponses.next_visit_test_name);
        }
    };
  

    return (
        <div>
            <div className="container">
                <div className="LogoStyleImage">
                        <p>
                        <img src={logoImageDoc} alt="ucflogo" className="ucflogo" /> 
                        <h2><strong><u>PART C</u></strong></h2> 
                    </p>
                    <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                </div>
                <div name="instructions">
                    <br />
                    <div className="instructionsFL">
                        <p>Thank you for completing this portion of the survey. You will now be asked some questions about your experience. This section is not timed; please consider your answers carefully.</p>
                    </div>
                    <br />

                    <div className="question">
                        <label htmlFor="mentalDemand">How mentally demanding was the task?</label>
                        <br></br>
                        <input type="range" name="mentalDemand" min="0" max="100" value={feedback.mentalDemand} onChange={handleChange} />
                        <div className="slider-container">
                            <span className="style-feedback-left">Very Low</span>
                            <span className="style-feedback-right">Very High</span>
                        </div>
                    </div>
                    <br></br>
                    <div className="question">
                        <label htmlFor="physicalDemand">How physically demanding was the task?</label>
                        <input type="range" name="physicalDemand" min="0" max="100" value={feedback.physicalDemand} onChange={handleChange} />
                        <div className="slider-container">
                            <span className="style-feedback-left">Very Low</span>
                            <span className="style-feedback-right">Very High</span>
                        </div>
                    </div>

                    <div className="question">
                        <label htmlFor="temporalDemand">How hurried or rushed was the pace of the task?</label>
                        <input type="range" name="temporalDemand" min="0" max="100" value={feedback.temporalDemand} onChange={handleChange} />
                        <div className="slider-container">
                            <span className="style-feedback-left">Very Low</span>
                            <span className="style-feedback-right">Very High</span>
                        </div>
                    </div>

                    <div className="question">
                        <label htmlFor="performance">How successful were you in accomplishing what you were asked to do?</label>
                        <input type="range" name="performance" min="0" max="100" value={feedback.performance} onChange={handleChange} />
                        <div className="slider-container">
                            <span className="style-feedback-left">Perfect</span>
                            <span className="style-feedback-right">Failure</span>
                        </div>
                    </div>

                    <div className="question">
                        <label htmlFor="effort">How hard did you have to work to accomplish your level of performance?</label>
                        <input type="range" name="effort" min="0" max="100" value={feedback.effort} onChange={handleChange} />
                        <div className="slider-container">
                            <span className="style-feedback-left">Very Low</span>
                            <span className="style-feedback-right">Very High</span>
                        </div>
                    </div>

                    <div className="question">
                        <label htmlFor="frustration">How insecure, discouraged, irritated, stressed, and annoyed were you?</label>
                        <input type="range" name="frustration" min="0" max="100" value={feedback.frustration} onChange={handleChange} />
                        <div className="slider-container">
                            <span className="style-feedback-left">Very Low</span>
                            <span className="style-feedback-right">Very High</span>
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
        </div>
    );
}

export default FeedbackQuestions;