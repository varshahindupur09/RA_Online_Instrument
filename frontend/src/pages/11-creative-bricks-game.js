import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css';
import BricksImage from '../images/bricks_image.png';
import Timer from "../components/Timer"; 
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';

const CreativeBricksGame = () => {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0);
    const [timerVisible] = useState(true);
    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    const startTimeRef = useRef(null);
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null); 

    // const API_BASE_URL = 'https://backend.adg429.com';
    // const API_BASE_URL = 'http://localhost:8080';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // State to store responses
    const [responses, setResponses] = useState({
        prolific_id: prolificId,
        test_name: 'Creative-Bricks-Game',
        consent: consent === "yes" ? true : false,
        page_number: 11,
        responses: {},
        time_spent: 0
    });

    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

    // Handle text area input and store it as response for question 1
    const handleTextAreaChange = (e) => {
        const value = e.target.value;
        setCount(value.length);
        setResponses(prevResponses => ({
            ...prevResponses,
            responses: {
                ...prevResponses.responses,
                question_1: value  // Store the text area input as question_1
            }
        }));
    };

    // Function to handle form submission and navigate to the next page
    const handleNext = async (event) => {
        event.preventDefault();  // Prevent default form submission
        setLoading(true);  // Set loading state to true

        const endTime = Date.now();  // Capture end time
        const timeSpent = (endTime - startTimeRef.current) / 1000;  // Calculate time spent in seconds

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
            time_spent: timeSpent
        };

        try {
            // Make a POST request to your API
            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedResponses),  // Convert responses to JSON string
            });

            const responseText = await response.text();
            if (!response.ok) {  // Check if the request was not successful
                throw new Error(responseText || 'Network response was not ok');
            }
            console.log('Response text:', responseText);  // Log response text for debugging
            navigate("/proceed-to-dashboard");  // Navigate to the next page after successful submission
        } catch (error) {
            console.error('Error:', error);  // Log any errors
            setError(error);  // Set error state
        } finally {
            setLoading(false);  // Reset loading state
        }
    };

    const handleTimerCompletion = () => {
        navigate("/proceed-to-dashboard");
    };

    return (
        <div className="container">
            <div className="instructionsFL">
                <div className="LogoStyleImage">
                    <p>
                        <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img> <h2> Title of research study: Data Visualization and Financial Decision Making </h2>
                    </p>
                    <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>   
                </div>
                <br />
                <br />
                {timerVisible && <Timer initialTime={120} onCompletion={handleTimerCompletion} />}
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

            {/* Next button */}
            <button className="button" onClick={handleNext} > Next </button> 
            {/* disabled={!allAnswered} */}
            {loading && <p>Loading...</p>} 
            {error && <p>Error: {error.message}</p>}
        </div>
            )

}

export default CreativeBricksGame;
