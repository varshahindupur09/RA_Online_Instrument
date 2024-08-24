import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css';  
import '../components/styles_css/feedbackQuestions.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';

import { useConsent } from './ConsentContext';

const FeedbackQuestions = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const startTimeRef = useRef(Date.now());

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context

    const [feedback, setFeedback] = useState({
        mentalDemand: 50,
        physicalDemand: 50,
        temporalDemand: 50,
        performance: 50,
        effort: 50,
        frustration: 50
    });

    // // State to store responses
    // const [responses, setResponses] = useState({
    //     prolific_id: prolificId, 
    //     test_name: 'Feedback-Questions', 
    //     consent: consent === "yes" ? true : false, 
    //     page_number: 16, 
    //     chart_number: 0,
    //     responses: {}, // Dynamic responses based on user input
    //     time_spent: 0 
    // });

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

        const updatedResponses = {
            prolific_id: prolificId, 
            test_name: 'Feedback-Questions', 
            consent: consent === "yes", 
            page_number: 16, 
            chart_number: 0,
            responses: feedback,
            time_spent: timeSpent 
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedResponses),
            });

            const responseText = await response.text();
            if (!response.ok) {
                throw new Error(responseText || 'Network response was not ok');
            }
            console.log('Response text:', responseText);
            navigate("/demographic-questions"); // Redirect to the next page after successful submission

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