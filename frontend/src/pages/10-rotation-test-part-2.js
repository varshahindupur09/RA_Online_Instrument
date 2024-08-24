import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css'; 
import '../components/styles_css/RotationTestStyle.css';

import Part2Question1 from '../images/rotation-test/rotation-test-part-2/question-1/part-2-question-1.png';
import Part2Question1Answer1Option1 from '../images/rotation-test/rotation-test-part-2/question-1/answer-1.png'; 
import Part2Question1Answer1Option2 from '../images/rotation-test/rotation-test-part-2/question-1/answer-2.png'; 
import Part2Question1Answer1Option3 from '../images/rotation-test/rotation-test-part-2/question-1/answer-3.png'; 
import Part2Question1Answer1Option4 from '../images/rotation-test/rotation-test-part-2/question-1/answer-4.png'; 
import Part2Question1Answer1Option5 from '../images/rotation-test/rotation-test-part-2/question-1/answer-5.png'; 
import Part2Question1Answer1Option6 from '../images/rotation-test/rotation-test-part-2/question-1/answer-6.png'; 
import Part2Question1Answer1Option7 from '../images/rotation-test/rotation-test-part-2/question-1/answer-7.png'; 
import Part2Question1Answer1Option8 from '../images/rotation-test/rotation-test-part-2/question-1/answer-8.png'; 

import Part2Question2 from '../images/rotation-test/rotation-test-part-2/question-2/part-2-question-2.png';
import Part2Question2Answer1Option1 from '../images/rotation-test/rotation-test-part-2/question-2/answer-1.png'; 
import Part2Question2Answer1Option2 from '../images/rotation-test/rotation-test-part-2/question-2/answer-2.png'; 
import Part2Question2Answer1Option3 from '../images/rotation-test/rotation-test-part-2/question-2/answer-3.png'; 
import Part2Question2Answer1Option4 from '../images/rotation-test/rotation-test-part-2/question-2/answer-4.png'; 
import Part2Question2Answer1Option5 from '../images/rotation-test/rotation-test-part-2/question-2/answer-5.png'; 
import Part2Question2Answer1Option6 from '../images/rotation-test/rotation-test-part-2/question-2/answer-6.png'; 
import Part2Question2Answer1Option7 from '../images/rotation-test/rotation-test-part-2/question-2/answer-7.png'; 
import Part2Question2Answer1Option8 from '../images/rotation-test/rotation-test-part-2/question-2/answer-8.png'; 

import Part2Question3 from '../images/rotation-test/rotation-test-part-2/question-3/part-2-question-3.png';
import Part2Question3Answer1Option1 from '../images/rotation-test/rotation-test-part-2/question-3/answer-1.png'; 
import Part2Question3Answer1Option2 from '../images/rotation-test/rotation-test-part-2/question-3/answer-2.png'; 
import Part2Question3Answer1Option3 from '../images/rotation-test/rotation-test-part-2/question-3/answer-3.png'; 
import Part2Question3Answer1Option4 from '../images/rotation-test/rotation-test-part-2/question-3/answer-4.png'; 
import Part2Question3Answer1Option5 from '../images/rotation-test/rotation-test-part-2/question-3/answer-5.png'; 
import Part2Question3Answer1Option6 from '../images/rotation-test/rotation-test-part-2/question-3/answer-6.png'; 
import Part2Question3Answer1Option7 from '../images/rotation-test/rotation-test-part-2/question-3/answer-7.png'; 
import Part2Question3Answer1Option8 from '../images/rotation-test/rotation-test-part-2/question-3/answer-8.png';


import Part2Question4 from '../images/rotation-test/rotation-test-part-2/question-4/part-2-question-4.png';
import Part2Question4Answer1Option1 from '../images/rotation-test/rotation-test-part-2/question-4/answer-1.png'; 
import Part2Question4Answer1Option2 from '../images/rotation-test/rotation-test-part-2/question-4/answer-2.png'; 
import Part2Question4Answer1Option3 from '../images/rotation-test/rotation-test-part-2/question-4/answer-3.png'; 
import Part2Question4Answer1Option4 from '../images/rotation-test/rotation-test-part-2/question-4/answer-4.png'; 
import Part2Question4Answer1Option5 from '../images/rotation-test/rotation-test-part-2/question-4/answer-5.png'; 
import Part2Question4Answer1Option6 from '../images/rotation-test/rotation-test-part-2/question-4/answer-6.png'; 
import Part2Question4Answer1Option7 from '../images/rotation-test/rotation-test-part-2/question-4/answer-7.png'; 
import Part2Question4Answer1Option8 from '../images/rotation-test/rotation-test-part-2/question-4/answer-8.png'; 

import Part2Question5 from '../images/rotation-test/rotation-test-part-2/question-5/part-2-question-5.png';
import Part2Question5Answer1Option1 from '../images/rotation-test/rotation-test-part-2/question-5/answer-1.png'; 
import Part2Question5Answer1Option2 from '../images/rotation-test/rotation-test-part-2/question-5/answer-2.png'; 
import Part2Question5Answer1Option3 from '../images/rotation-test/rotation-test-part-2/question-5/answer-3.png'; 
import Part2Question5Answer1Option4 from '../images/rotation-test/rotation-test-part-2/question-5/answer-4.png'; 
import Part2Question5Answer1Option5 from '../images/rotation-test/rotation-test-part-2/question-5/answer-5.png'; 
import Part2Question5Answer1Option6 from '../images/rotation-test/rotation-test-part-2/question-5/answer-6.png'; 
import Part2Question5Answer1Option7 from '../images/rotation-test/rotation-test-part-2/question-5/answer-7.png'; 
import Part2Question5Answer1Option8 from '../images/rotation-test/rotation-test-part-2/question-5/answer-8.png';

import Part2Question6 from '../images/rotation-test/rotation-test-part-2/question-6/part-2-question-6.png';
import Part2Question6Answer1Option1 from '../images/rotation-test/rotation-test-part-2/question-6/answer-1.png'; 
import Part2Question6Answer1Option2 from '../images/rotation-test/rotation-test-part-2/question-6/answer-2.png'; 
import Part2Question6Answer1Option3 from '../images/rotation-test/rotation-test-part-2/question-6/answer-3.png'; 
import Part2Question6Answer1Option4 from '../images/rotation-test/rotation-test-part-2/question-6/answer-4.png'; 
import Part2Question6Answer1Option5 from '../images/rotation-test/rotation-test-part-2/question-6/answer-5.png'; 
import Part2Question6Answer1Option6 from '../images/rotation-test/rotation-test-part-2/question-6/answer-6.png'; 
import Part2Question6Answer1Option7 from '../images/rotation-test/rotation-test-part-2/question-6/answer-7.png'; 
import Part2Question6Answer1Option8 from '../images/rotation-test/rotation-test-part-2/question-6/answer-8.png';

import Part2Question7 from '../images/rotation-test/rotation-test-part-2/question-7/part-2-question-7.png';
import Part2Question7Answer1Option1 from '../images/rotation-test/rotation-test-part-2/question-7/answer-1.png'; 
import Part2Question7Answer1Option2 from '../images/rotation-test/rotation-test-part-2/question-7/answer-2.png'; 
import Part2Question7Answer1Option3 from '../images/rotation-test/rotation-test-part-2/question-7/answer-3.png'; 
import Part2Question7Answer1Option4 from '../images/rotation-test/rotation-test-part-2/question-7/answer-4.png'; 
import Part2Question7Answer1Option5 from '../images/rotation-test/rotation-test-part-2/question-7/answer-5.png'; 
import Part2Question7Answer1Option6 from '../images/rotation-test/rotation-test-part-2/question-7/answer-6.png'; 
import Part2Question7Answer1Option7 from '../images/rotation-test/rotation-test-part-2/question-7/answer-7.png'; 
import Part2Question7Answer1Option8 from '../images/rotation-test/rotation-test-part-2/question-7/answer-8.png';

import Part2Question8 from '../images/rotation-test/rotation-test-part-2/question-8/part-2-question-8.png';
import Part2Question8Answer1Option1 from '../images/rotation-test/rotation-test-part-2/question-8/answer-1.png'; 
import Part2Question8Answer1Option2 from '../images/rotation-test/rotation-test-part-2/question-8/answer-2.png'; 
import Part2Question8Answer1Option3 from '../images/rotation-test/rotation-test-part-2/question-8/answer-3.png'; 
import Part2Question8Answer1Option4 from '../images/rotation-test/rotation-test-part-2/question-8/answer-4.png'; 
import Part2Question8Answer1Option5 from '../images/rotation-test/rotation-test-part-2/question-8/answer-5.png'; 
import Part2Question8Answer1Option6 from '../images/rotation-test/rotation-test-part-2/question-8/answer-6.png'; 
import Part2Question8Answer1Option7 from '../images/rotation-test/rotation-test-part-2/question-8/answer-7.png'; 
import Part2Question8Answer1Option8 from '../images/rotation-test/rotation-test-part-2/question-8/answer-8.png';

import Part2Question9 from '../images/rotation-test/rotation-test-part-2/question-9/part-2-question-9.png';
import Part2Question9Answer1Option1 from '../images/rotation-test/rotation-test-part-2/question-9/answer-1.png'; 
import Part2Question9Answer1Option2 from '../images/rotation-test/rotation-test-part-2/question-9/answer-2.png'; 
import Part2Question9Answer1Option3 from '../images/rotation-test/rotation-test-part-2/question-9/answer-3.png'; 
import Part2Question9Answer1Option4 from '../images/rotation-test/rotation-test-part-2/question-9/answer-4.png'; 
import Part2Question9Answer1Option5 from '../images/rotation-test/rotation-test-part-2/question-9/answer-5.png'; 
import Part2Question9Answer1Option6 from '../images/rotation-test/rotation-test-part-2/question-9/answer-6.png'; 
import Part2Question9Answer1Option7 from '../images/rotation-test/rotation-test-part-2/question-9/answer-7.png'; 
import Part2Question9Answer1Option8 from '../images/rotation-test/rotation-test-part-2/question-9/answer-8.png';

import Part2Question10 from '../images/rotation-test/rotation-test-part-2/question-10/part-2-question-10.png';
import Part2Question10Answer1Option1 from '../images/rotation-test/rotation-test-part-2/question-10/answer-1.png'; 
import Part2Question10Answer1Option2 from '../images/rotation-test/rotation-test-part-2/question-10/answer-2.png'; 
import Part2Question10Answer1Option3 from '../images/rotation-test/rotation-test-part-2/question-10/answer-3.png'; 
import Part2Question10Answer1Option4 from '../images/rotation-test/rotation-test-part-2/question-10/answer-4.png'; 
import Part2Question10Answer1Option5 from '../images/rotation-test/rotation-test-part-2/question-10/answer-5.png'; 
import Part2Question10Answer1Option6 from '../images/rotation-test/rotation-test-part-2/question-10/answer-6.png'; 
import Part2Question10Answer1Option7 from '../images/rotation-test/rotation-test-part-2/question-10/answer-7.png'; 
import Part2Question10Answer1Option8 from '../images/rotation-test/rotation-test-part-2/question-10/answer-8.png';

import Timer from "../components/Timer"; 
import '../components/styles_css/PageStyle.css'; 

import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';

const RotationTestPart2 = () => {
    const navigate = useNavigate();

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

    // State to manage timer visibility
    const [timerVisible] = useState(true);

    // const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    const { consent } = useConsent(); 

    const startTimeRef = useRef(null);
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null); 

    // const API_BASE_URL = 'https://backend.adg429.com';
    // const API_BASE_URL = 'http://localhost:8080';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // State to store responses
    const [responses, setResponses] = useState({
        // prolific_id: prolificId,
        prolific_id: '',
        test_name: 'Rotation-Test-2',
        consent: consent === "yes" ? true : false,
        page_number: 10,
        chart_number: 0,
        responses: {
            question1: Array(8).fill(''), 
            question2: Array(8).fill(''), // Creates an array of 8 empty strings
            question3: Array(8).fill(''),
            question4: Array(8).fill(''),
            question5: Array(8).fill(''),
            question6: Array(8).fill(''),
            question7: Array(8).fill(''),
            question8: Array(8).fill(''),
            question9: Array(8).fill(''),
            question10: Array(8).fill('')
        },
        time_spent: 0
    });

    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

    const handleTimerCompletion = () => {
        navigate("/creative-bricks-game");
    };

    const question1 = Part2Question1; 
    const question1Answers = [
        Part2Question1Answer1Option1, Part2Question1Answer1Option2, Part2Question1Answer1Option3, Part2Question1Answer1Option4, 
        Part2Question1Answer1Option5, Part2Question1Answer1Option6, Part2Question1Answer1Option7, Part2Question1Answer1Option8
    ];

    const question2 = Part2Question2; 
    const question2Answers = [
        Part2Question2Answer1Option1, Part2Question2Answer1Option2, Part2Question2Answer1Option3, Part2Question2Answer1Option4,
        Part2Question2Answer1Option5, Part2Question2Answer1Option6, Part2Question2Answer1Option7, Part2Question2Answer1Option8
    ];

    const question3 = Part2Question3; 
    const question3Answers = [
        Part2Question3Answer1Option1, Part2Question3Answer1Option2, Part2Question3Answer1Option3, Part2Question3Answer1Option4,
        Part2Question3Answer1Option5, Part2Question3Answer1Option6, Part2Question3Answer1Option7, Part2Question3Answer1Option8
    ];

    const question4 = Part2Question4; 
    const question4Answers = [
        Part2Question4Answer1Option1, Part2Question4Answer1Option2, Part2Question4Answer1Option3, Part2Question4Answer1Option4,
        Part2Question4Answer1Option5, Part2Question4Answer1Option6, Part2Question4Answer1Option7, Part2Question4Answer1Option8
    ];

    const question5 = Part2Question5; 
    const question5Answers = [
        Part2Question5Answer1Option1, Part2Question5Answer1Option2, Part2Question5Answer1Option3, Part2Question5Answer1Option4,
        Part2Question5Answer1Option5, Part2Question5Answer1Option6, Part2Question5Answer1Option7, Part2Question5Answer1Option8
    ];

    const question6 = Part2Question6; 
    const question6Answers = [
        Part2Question6Answer1Option1, Part2Question6Answer1Option2, Part2Question6Answer1Option3, Part2Question6Answer1Option4, 
        Part2Question6Answer1Option5, Part2Question6Answer1Option6, Part2Question6Answer1Option7, Part2Question6Answer1Option8
    ];

    const question7 = Part2Question7; 
    const question7Answers = [
        Part2Question7Answer1Option1, Part2Question7Answer1Option2, Part2Question7Answer1Option3, Part2Question7Answer1Option4,
        Part2Question7Answer1Option5, Part2Question7Answer1Option6, Part2Question7Answer1Option7, Part2Question7Answer1Option8
    ];

    const question8 = Part2Question8; 
    const question8Answers = [
        Part2Question8Answer1Option1, Part2Question8Answer1Option2, Part2Question8Answer1Option3, Part2Question8Answer1Option4,
        Part2Question8Answer1Option5, Part2Question8Answer1Option6, Part2Question8Answer1Option7, Part2Question8Answer1Option8
    ];

    const question9 = Part2Question9; 
    const question9Answers = [
        Part2Question9Answer1Option1, Part2Question9Answer1Option2, Part2Question9Answer1Option3, Part2Question9Answer1Option4,
        Part2Question9Answer1Option5, Part2Question9Answer1Option6, Part2Question9Answer1Option7, Part2Question9Answer1Option8
    ];

    const question10 = Part2Question10; 
    const question10Answers = [
        Part2Question10Answer1Option1, Part2Question10Answer1Option2, Part2Question10Answer1Option3, Part2Question10Answer1Option4,
        Part2Question10Answer1Option5, Part2Question10Answer1Option6, Part2Question10Answer1Option7, Part2Question10Answer1Option8
    ];

    const handleAnswerChange = (questionNumber, index, value) => {
        setResponses(prevResponses => {
            // Ensure the array exists, or create a new one with empty strings
            const existingAnswers = prevResponses.responses[`question${questionNumber}`] || Array(8).fill('');
    
            // Create a copy of the existing array and update the specific index
            const updatedAnswers = [...existingAnswers];
            updatedAnswers[index] = value;
    
            return {
                ...prevResponses,
                responses: {
                    ...prevResponses.responses,
                    [`question${questionNumber}`]: updatedAnswers
                }
            };
        });
    };

    // Function to handle form submission with validation
    const handleNext = async (event) => {
        event.preventDefault();
        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000;

        // Convert each responses array to a comma-separated string
        const formattedResponses = Object.keys(responses.responses).reduce((acc, key) => {
            acc[key] = responses.responses[key].join(',');
            return acc;
        }, {});

        const updatedResponses = {
            ...responses,
            responses: formattedResponses,
            time_spent: timeSpent
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedResponses),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            navigate("/creative-bricks-game");
        } catch (error) {
            console.error('Error:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // Function to render each question
    const renderQuestion = (questionImage, answerImages, questionNumber) => (
        <>
            <div className="question-image-container">
                <br></br>
                <div className='question-image'>
                    <img src={questionImage} alt={`Question ${questionNumber}`} className="question-main-image" />
                </div>
                <br></br>
            </div>
            <table className="answers-table">
                <br></br>
                <thead>
                    <tr>
                        <th></th> {/* Empty header for the labels 'Same' and 'Different' */}
                        {answerImages.map((imgSrc, index) => (
                            <th key={`header-${index}`}>
                                <img src={imgSrc} alt={`Answer ${index + 1}`} />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Same</td>
                        {answerImages.map((_, index) => (
                            <td key={`same-${index}`}>
                                <input type="radio" name={`question${questionNumber}answer${index + 1}`} value="same"
                                    onChange={() => handleAnswerChange(`question${questionNumber}`, index, 'same')} />
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>Different</td>
                        {answerImages.map((_, index) => (
                            <td key={`different-${index}`}>
                                <input type="radio" name={`question${questionNumber}answer${index + 1}`} value="different" 
                                    onChange={() => handleAnswerChange(`question${questionNumber}`, index, 'different')} />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    );

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <p>
                    <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img> <h2> Title of research study: Data Visualization and Financial Decision Making </h2>
                    <h2><strong><u>ROTATION TEST - PART 2</u></strong></h2>
                </p>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <br />
            <h2>Rotation Test Part 2: 3 minutes</h2>
            <br />
            {timerVisible && <Timer initialTime={180} onCompletion={handleTimerCompletion} />}
            <br />
            <br />
            <div name="instructions">
                <p><strong>[Q1]</strong></p>
                {renderQuestion(question1, question1Answers, 1)}
                <br />
                <br />
                <p><strong>[Q2]</strong></p>
                {renderQuestion(question2, question2Answers, 2)}
                <br />
                <br />
                <p><strong>[Q3]</strong></p>
                {renderQuestion(question3, question3Answers, 3)}
                <br />
                <br />
                <p><strong>[Q4]</strong></p>
                {renderQuestion(question4, question4Answers, 4)}
                <br />
                <br />
                <p><strong>[Q5]</strong></p>
                {renderQuestion(question5, question5Answers, 5)}
                <br />
                <br />  
                <p><strong>[Q6]</strong></p>           
                {renderQuestion(question6, question6Answers, 6)}
                <br />
                <br />
                <p><strong>[Q7]</strong></p>
                {renderQuestion(question7, question7Answers, 7)}
                <br />
                <br />
                <p><strong>[Q8]</strong></p>
                {renderQuestion(question8, question8Answers, 8)}
                <br />
                <br />
                <p><strong>[Q9]</strong></p>
                {renderQuestion(question9, question9Answers, 9)}
                <br />
                <br />
                <p><strong>[Q10]</strong></p>
                {renderQuestion(question10, question10Answers, 10)}
                <br />
            </div>
            <br />
            <br />
            <br />
            {/* Next button */}
            <button className="button" onClick={handleNext}> Next </button>
            {/* disabled={!allAnswered} */}
            {error && <p>Error: {error.message}</p>}
        </div>

            );
    };

export default RotationTestPart2;