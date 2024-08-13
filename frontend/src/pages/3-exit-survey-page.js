import React, { useState, useEffect, useRef } from "react";
import '../components/styles_css/PageStyle.css'; 
import Navbar from "../components/NavbarPage";
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';

const ExitSurveyPage = () => {

    const { consent, prolificId } = useConsent(); // Access consent and Prolific ID from context
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const startTimeRef = useRef(Date.now());
    const hasCalledAPI = useRef(false); // Ref to track if the API has been called

    // const API_BASE_URL = 'http://localhost:8080';
    // const API_BASE_URL = 'https://backend.adg429.com';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // Function to store the response when the page loads
    useEffect(() => {
        const handleExitSurveyResponse = async () => {
            if (hasCalledAPI.current) return; // Prevent multiple API calls
            hasCalledAPI.current = true;

            setLoading(true);

            const endTime = Date.now();
            const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds

            const responses = {
                prolific_id: prolificId,
                test_name: 'Exit-Survey', 
                consent: consent === "yes" ? true : false, // Store as true or false based on user's choice
                page_number: 3, 
                time_spent: timeSpent
            };

            try {
                const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(responses), // Send responses to the backend
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Success:', result);

            } catch (error) {
                console.error('Error:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        // Trigger the API call as soon as the component mounts
        handleExitSurveyResponse();

    }, []); // Empty dependency array ensures this useEffect runs only once on mount

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="LogoStyleImage">
                    <p>
                        <img src={logoImageDoc} alt="ucflogo" className="ucflogo" /> 
                        <h2><strong><u>EXIT SURVEY</u></strong></h2>
                    </p>
                    <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div name="instructions">
                    <p><strong>Sad to see you go, have a good rest of your day!</strong></p>
                </div>
                <br></br>
                {error && <p className="error-message">{error.message}</p>}
            </div>
        </div>
    );
};

export default ExitSurveyPage;
