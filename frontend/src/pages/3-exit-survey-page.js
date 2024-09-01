import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import '../components/styles_css/PageStyle.css'; 
import Navbar from "../components/NavbarPage";
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';

const ExitSurveyPage = () => {
    const navigate = useNavigate();
    const { consent, prolificId } = useConsent(); // Access consent and Prolific ID from context
    // const { consent } = useConsent();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const startTimeRef = useRef(Date.now());
    const hasCalledAPI = useRef(false); // Ref to track if the API has been called

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

    // const API_BASE_URL = 'http://localhost:8080';
    // const API_BASE_URL = 'https://backend.adg429.com';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const currentTime = Date.now();
    const currentTestUrl = "/exit-survey-page";
    const previousTestUrl = "/ask-consent-again";
    const test_name_given = 'Exit-Survey';

    const [responses, setResponses] = useState({
        // prolific_id: prolificId,
        prolific_id: '',
        test_name: test_name_given, 
        consent: consent === "yes" ? true : false,
        page_number: 3,
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

    // Function to store the response when the page loads
    useEffect(() => {
        const handleExitSurveyResponse = async () => {
            if (hasCalledAPI.current) return; // Prevent multiple API calls
            hasCalledAPI.current = true;
            
            setLoading(true);
            const endTime = Date.now();
            const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
            let nextTestUrl = "/exit-survey-page"; // Use let instead of const as const is unmutable

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
    
            // console.log('Response:', response);
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            // console.log('Success:', result);
    
            navigate(nextTestUrl);

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
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                <div name="instructions">
                    <p>Sad to see you go, have a good rest of your day!</p>
                </div>
                <br></br>
                {error && <p className="error-message">{error.message}</p>}
            </div>
        </div>
    );
};

export default ExitSurveyPage;
