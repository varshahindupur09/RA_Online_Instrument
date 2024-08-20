//pages/2-ask-consent-again.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import '../components/styles_css/PageStyle.css'; 
import '../components/styles_css/RadioButton.css';
// import logoImage from '../images/UCF_Logo.png';
// import Navbar from "../components/NavbarPage";
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';


const ConsentPage = () => {
    const navigate = useNavigate();
    // const { consent, setConsent, prolificId } = useConsent(); // Access consent and Prolific ID from context
    const { consent, setConsent } = useConsent();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const startTimeRef = useRef(null);

    // const API_BASE_URL = 'https://backend.adg429.com';
    // const API_BASE_URL = 'http://localhost:8080';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // Store the start time when the component mounts
    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

    const handleConsent = (value) => {
        setConsent(value);
    };

    const handleNext = async () => {
        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds

        const responses = {
            // prolific_id: prolificId,
            prolific_id: '',
            test_name: 'Second-Consent', 
            consent: consent === "yes" ? true : false,
            page_number: 2,
            chart_number: 0,
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

            // Navigate based on the actual consent value from context
            if (consent === "yes") {
                navigate("/paper-folding-test-sample-question"); 
            } else {
                navigate("/exit-survey-page"); 
            }

        } catch (error) {
            console.error('Error:', error);
            setError(error);
        } finally {
            setLoading(false);
        }

    };

    return (
        <div>
            {/* <Navbar /> */}
            <div className="container">
                <div className="LogoStyleImage">
                    <p>
                        <img src={logoImageDoc} alt="ucflogo" className="ucflogo" />
                        <h2><strong><u>CONSENT</u></strong></h2>
                    </p>
                    <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div name="instructions">
                    <p><strong>If you do not consent, you cannot continue to participate in this study. Please choose to express your consent or leave the survey now.</strong></p>
                    <br></br>
                </div>
                <div className="radio-container"> 
                    <input 
                        type="radio" 
                        id="consent-no" 
                        name="consent" 
                        onChange={() => handleConsent("no")}
                        /> 
                    <label htmlFor="consent-no">I want to leave the survey now</label>
                    <input 
                        type="radio" 
                        id="consent-yes" 
                        name="consent" 
                        onChange={() => handleConsent("yes")}
                        />
                    <label htmlFor="consent-yes">I consent to participating in the study</label>
                </div>
                <br></br>
                <button 
                    className="button" 
                    onClick={handleNext}
                    disabled={loading || consent === null} // Disable button until consent is selected
                    > 
                    Next 
                </button>
                {error && <p className="error-message">{error.message}</p>}
            </div>
        </div>
    );
};

export default ConsentPage;
