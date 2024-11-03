import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css';
import BricksImage from '../images/bricks_image.png';
import Timer from "../components/Timer"; 
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';
import GlobalTimer from "../components/GlobalTimer";

const CreativeBricksGame = () => {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0);
    const [timerVisible] = useState(true);
    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    // const { consent } = useConsent(); 
    const startTimeRef = useRef(null);
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null); 
    const [isTimerCompleted, setIsTimerCompleted] = useState(false); // New state for timer completion
    const [showCharWarning, setShowCharWarning] = useState(false);
    const [isMinCharMet, setIsMinCharMet] = useState(false); 

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
    const currentTime = Date.now();
    const currentTestUrl = "/creative-bricks-game";
    const previousTestUrl = "/rotation-test-part-2";
    const test_name_given = 'Creative-Bricks-Game';

    // State to store responses
    const [responses, setResponses] = useState({
        prolific_id: prolificId,
        test_name: test_name_given,
        consent: consent === "yes" ? true : false,
        page_number: 11,
        chart_number: 0,
        responses: {
            CBG_question: '',
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

    // Restrict navigation to ensure users can't jump to different pages
    useEffect(() => {
        if (window.location.pathname !== responses.next_visit_test_name) {
            navigate(responses.next_visit_test_name); // Redirect to the current test URL
        }
    }, [navigate, responses.next_visit_test_name]);


    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

    // Handle text area input and store it as response for question 1
    const handleTextAreaChange = (e) => {
        const value = e.target.value;
        setCount(value.length);
        setIsMinCharMet(value.length >= 50);
        setResponses(prevResponses => ({
            ...prevResponses,
            responses: {
                ...prevResponses.responses,
                CBG_question: value  // Store the text area input as question_1
            }
        }));

        // Show warning if character count is less than 50
        if (value.length < 50) {
            setShowCharWarning(true);
        } else {
            setShowCharWarning(false);
        }
    };

    const handleTimerCompletion = async () => {
        setIsTimerCompleted(true);  // Set timer completion to true
        // setLoading(true);

        // const endTime = Date.now();
        // const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        // const nextTestUrl = "/proceed-to-dashboard"; 

        // // Update responses with the calculated time spent
        // const updatedResponses = {
        //     ...responses,
        //     time_spent: timeSpent,
        //     next_visit_test_name: nextTestUrl, // The next page URL
        // };

        // try {
        //     const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(updatedResponses),
        //     });

        //     // Simulate API call to save survey responses
        //     // console.log('Saving responses:', updatedResponses);

        //     setResponses(updatedResponses);

        //     const responseText = await response.text();
        //     if (!response.ok) {
        //         throw new Error(responseText || 'Network response was not ok');
        //     }
        //     // console.log('Response text:', responseText);

        //     navigate(nextTestUrl)

        // } catch (error) {
        //     console.error('Error:', error);
        //     setError(error);
        // } finally {
        //     setLoading(false);
        // }
    };

    const handleNext = async (event) => {
        event.preventDefault();

        if (! (isMinCharMet && isTimerCompleted)) {
            setError(new Error('Please enter at least 50 characters in your response and please wait until the timer completes.'));
            // setLoading(false); // Stop loading
            return;
        }

        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        const nextTestUrl = "/proceed-to-dashboard";
        
        // // Check if the response is less than 50 characters
        // if (responses.responses.CBG_question.length < 50) {
        //     setError(new Error('Please enter at least 50 characters in your response.'));
        //     setLoading(false); // Stop loading
        //     return; // Prevent proceeding to the next page
        // }

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
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
            // console.log('Saving responses:', updatedResponses);

            setResponses(updatedResponses);

            const responseText = await response.text();
            if (!response.ok) {
                throw new Error(responseText || 'Network response was not ok');
            }
            // console.log('Response text:', responseText);

            navigate(nextTestUrl)

        } catch (error) {
            console.error('Error:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log("isMinCharMet:", isMinCharMet);
        console.log("isTimerCompleted:", isTimerCompleted);
        console.log("loading:", loading);
    }, [isMinCharMet, isTimerCompleted, loading]);

    return (
        <div className="container">
            <div className="instructionsFL">
                <div className="LogoStyleImage">
                    <p>
                        <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img> <h2> Title of research study: Data Visualization and Financial Decision Making </h2>
                    </p>
                    {/* <GlobalTimer /> */}
                    <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>   
                </div>
                <br />
                <br />
                {timerVisible && <Timer initialTime={120} onCompletion={handleTimerCompletion} />}
                {/* 120 */}
                <br />
                <br />
                <p>Below, you will see a picture of a common household brick.</p>
                <img src={BricksImage} alt="bricksimage" className="bricksimage"></img>
                <br />
                <br />
                <p>In the next two minutes, please list in the text box below all the uses you can think of for this brick</p>
                <div>
                    <textarea
                        type="text"
                        name = "writeafewlinesaboutbricks"
                        rows={15}
                        cols={60}
                        className="full_height_Width"
                        onChange={handleTextAreaChange} 
                    />
                    <p>{count}</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />

            {/* Conditionally render Next button  */}
            <button 
                className="button"
                disabled={!isTimerCompleted || !isMinCharMet || loading} // Disable until timer is done
                onClick={handleNext}> 
                Next 
            </button> 
            {!isTimerCompleted && <p>Please wait until the timer runs out to proceed.</p>}
            {loading && <p>Loading...</p>} 
            {error && <p>Error: {error.message}</p>}
        </div>
            )

}

export default CreativeBricksGame;
