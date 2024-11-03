import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 
import '../components/styles_css/otherpagestyles.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';
import GlobalTimer from "../components/GlobalTimer";

const ProceedToDashboard = () => {
    const navigate = useNavigate(); 
    // chartnumber will not be accessed here
    const { consent, prolificId } = useConsent(); 
    const startTimeRef = useRef(null);
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null); 

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

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const currentTime = Date.now();
    const currentTestUrl = "/proceed-to-dashboard";
    const previousTestUrl = "/creative-bricks-game";
    const test_name_given = 'Proceed-To-Dashboard';

    // State to store responses
    const [responses, setResponses] = useState({
        prolific_id: prolificId,
        test_name: test_name_given,
        consent: consent === "yes"? true : false, 
        page_number: 12,
        chart_number: 0,
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

    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

    const handleNext = async (event) => {
        event.preventDefault();
        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        const nextTestUrl = "/dashboard-router"; 
        let shouldNavigate = true;

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
                shouldNavigate = false;
                throw new Error(responseText || 'Network response was not ok');
            }
            console.log('Response text:', responseText);

            if (shouldNavigate)
            {
                navigate(nextTestUrl)
            }

        } catch (error) {
            console.error('Error:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img>
                <br></br>
                <GlobalTimer />
                <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <br></br>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <div name="instructionsLeftAlign">
                <div>
                    <p>In the next part of this study, you are playing the role of an accounts manager at TechTron, a global company that produces electrical components. The CFO has some questions about sales trends over the past five years and you have been asked to respond using the company’s digital dashboard.</p> 
                    <br />
                    <p>When you click “continue” at the bottom of the page, you will be shown a digital dashboard that includes four charts detailing sales information for the last five years. You can enlarge each chart by clicking on it. You will be presented with a series of questions, and you should use the information in the charts to respond.</p>
                    <br />
                    <p><strong>You will have 7 minutes to complete this portion of the study. You will receive a $0.05 bonus for each question you answer correctly.</strong></p>
                </div>
            </div>
            <button 
                className="button" 
                onClick={handleNext}> 
                Next 
            </button>
            {error && <p className="error-message">{error.message}</p>}
        </div>
    );
};

export default ProceedToDashboard;