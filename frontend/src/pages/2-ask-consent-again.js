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
    const { consent, setConsent, prolificId } = useConsent(); // Access consent and Prolific ID from context
    // const { consent, setConsent } = useConsent();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const startTimeRef = useRef(null);

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

    // const API_BASE_URL = 'https://backend.adg429.com';
    // const API_BASE_URL = 'http://localhost:8080';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // Store the start time when the component mounts
    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

    const currentTime = Date.now();
    const currentTestUrl = "/ask-consent-again";
    const previousTestUrl = "/";
    const test_name_given = 'Second-Consent';

    const [responses, setResponses] = useState({
        // prolific_id: prolificId,
        prolific_id: '',
        test_name: test_name_given, 
        consent: consent === "yes" ? true : false,
        page_number: 2,
        chart_number: 0,
        responses: {}, // Initialize as an empty object to dynamically add responses
        graph_question_durations: [],
        per_graph_durations: [],
        time_spent: 0,
        started_at: currentTime, // Time when the survey began
        ended_at: currentTime, // Time when the survey ended
        time_user_entered_current_page: currentTime, // Time when the user entered the current page
        last_visited_test_name: previousTestUrl, // Update with the previously traversed url //contains urls of the last visited page
        current_visit_test_name: currentTestUrl,
        next_visit_test_name: currentTestUrl, 
    });

     // Restrict navigation to ensure users can't jump to different pages
     useEffect(() => {
        if (window.location.pathname !== responses.next_visit_test_name) {
            navigate(responses.next_visit_test_name); // Redirect to the current test URL
        }
    }, [navigate, responses.next_visit_test_name]);

    const handleConsent = (value) => {
        setConsent(value);
    };

    const handleNext = async (event) => {
        event.preventDefault(); // Prevent form submission default behavior
        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        let nextTestUrl = ""; // Use let instead of const as const is unmutable

        // Navigate based on the actual consent state from context
         if (consent === "yes") {
            nextTestUrl = "/paper-folding-test-sample-question"
        } else {
            nextTestUrl = "/exit-survey-page"
        }
    
        // Ensure the updated responses use the actual state of consent directly
        const updatedResponses = {
            ...responses,
            prolific_id: prolificId,
            time_spent: timeSpent,
            next_visit_test_name: nextTestUrl, // The next page URL
        };
       
        try {
            // Simulate API call to save survey responses
            // console.log('Saving responses:', updatedResponses);

            setResponses(updatedResponses);

            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedResponses), // Send updated responses
            });
    
            console.log('Response:', response);
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log('Success:', result);
    
            navigate(nextTestUrl);

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
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
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
