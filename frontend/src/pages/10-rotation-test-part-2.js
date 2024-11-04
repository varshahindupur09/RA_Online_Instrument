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
// import GlobalTimer from '../components/GlobalTimer';

const RotationTestPart2 = () => {
    const navigate = useNavigate();
    // State to manage timer visibility
    const [timerVisible] = useState(true);

    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    // const { consent } = useConsent(); 

    const startTimeRef = useRef(null);
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null); 
    const [timerCompleted, setTimerCompleted] = useState(false); // Track if the timer has already completed

    // const API_BASE_URL = 'https://backend.adg429.com';
    // const API_BASE_URL = 'http://localhost:8080';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const currentTime = Date.now();
    const currentTestUrl = "/rotation-test-part-2";
    const previousTestUrl = "/rotation-test-part-1";
    const test_name_given = 'Rotation-Test-2';

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


    // State to store responses
    const [responses, setResponses] = useState({
        prolific_id: prolificId,
        test_name: test_name_given,
        consent: consent === "yes" ? true : false,
        page_number: 10,
        chart_number: 0,
        responses: {
            RT2_question1: '',
            RT2_question2: '', 
            RT2_question3: '',
            RT2_question4: '', 
            RT2_question5: '',
            RT2_question6: '', 
            RT2_question7: '',
            RT2_question8: '', 
            RT2_question9: '',
            RT2_question10: '', 
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

    const correctAnswers = {
        RT2_question1: 'same,same,different,different,same,same,different,different',
        RT2_question2: 'same,same,different,different,same,same,different,same',
        RT2_question3: 'different,different,same,different,different,different,same,different',
        RT2_question4: 'same,same,different,same,same,same,different,same',
        RT2_question5: 'same,different,different,different,same,different,same,different',
        RT2_question6: 'same,same,different,different,same,same,different,same',
        RT2_question7: 'different,different,same,different,different,same,different,different',
        RT2_question8: 'same,same,different,different,same,same,same,same',
        RT2_question9: 'same,different,different,same,different,different,same,same',
        RT2_question10: 'different,different,same,same,same,different,same,different'
    };    

    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

     // Restrict navigation to ensure users can't jump to different pages
     useEffect(() => {
        if (window.location.pathname !== responses.next_visit_test_name) {
            navigate(responses.next_visit_test_name); // Redirect to the current test URL
        }
    }, [navigate, responses.next_visit_test_name]);


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
            const questionKey = `RT2_question${questionNumber}`;
            const currentResponses = prevResponses.responses[questionKey] || ",,,,,,,";  

            let responseArray = currentResponses.split(',');

            // Update the specific index with the new value
            responseArray[index] = value;

            // Join the array back into a comma-separated string
            const updatedResponse = responseArray.join(',');
    
            return {
                ...prevResponses,
                responses: {
                    ...prevResponses.responses,
                    // [`${questionNumber}`]: updatedAnswers
                    [questionKey]: updatedResponse
                }
            };
        });
    };

    const validateResponses = () => {
        console.log("validateResponses starrt: ", responses.responses); 
        const isQuestion1Answered = responses.responses.RT2_question1.split(',').every(answer => answer !== '');
        const isQuestion2Answered = responses.responses.RT2_question2.split(',').every(answer => answer !== '');
        const isQuestion3Answered = responses.responses.RT2_question3.split(',').every(answer => answer !== '');
        const isQuestion4Answered = responses.responses.RT2_question4.split(',').every(answer => answer !== '');
        const isQuestion5Answered = responses.responses.RT2_question5.split(',').every(answer => answer !== '');
        const isQuestion6Answered = responses.responses.RT2_question6.split(',').every(answer => answer !== '');
        const isQuestion7Answered = responses.responses.RT2_question7.split(',').every(answer => answer !== '');
        const isQuestion8Answered = responses.responses.RT2_question8.split(',').every(answer => answer !== '');
        const isQuestion9Answered = responses.responses.RT2_question9.split(',').every(answer => answer !== '');
        const isQuestion10Answered = responses.responses.RT2_question10.split(',').every(answer => answer !== '');

        console.log("validateResponses end: ", responses.responses); 
    
        return isQuestion1Answered &&
                isQuestion2Answered &&
                isQuestion3Answered &&
                isQuestion4Answered &&
                isQuestion5Answered &&
                isQuestion6Answered &&
                isQuestion7Answered &&
                isQuestion8Answered &&
                isQuestion9Answered &&
                isQuestion10Answered; // Return true all are answered
    };

    const handleTimerCompletion = async (event) => {
        if (timerCompleted) {
            // alert("Please wait until the timer completes.");
            return; // Prevent multiple executions after the timer has completed
        }
        setTimerCompleted(true); // Mark the timer as completed
        // event.preventDefault();
        setLoading(false); //earlier was true

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        const nextTestUrl = "/creative-bricks-game"; 

        // Calculate incentive based on correct responses
        let correctCount = 0;

        Object.keys(correctAnswers).forEach((questionKey) => {
            if (responses.responses[questionKey] === correctAnswers[questionKey]) {
                correctCount++;
            }
        });
        
        // Set incentive based on correct answers
        const incentive = correctCount * 0.05;

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
            time_spent: timeSpent,
            incentive_calculation: incentive,
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

            if (!response.ok) {
                // window.alert('An unexpected error occurred.');
                const errorText = await response.text();
                console.log("error ", errorText)
                throw new Error('Network response was not ok');
            }

            // Only navigate if there were no errors
            navigate(updatedResponses.next_visit_test_name);

        } catch (error) {
            console.error('Error:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleNext = async (event) => {
        if (timerCompleted) return; // Prevent multiple executions
        event.preventDefault();
        setLoading(true);

        // Validate that all questions have been answered
        if (!validateResponses()) {
            console.log("response before proceed: ", responses)
            window.alert("Please answer all the questions before proceeding.")
            setLoading(false);
            return; // Prevent form submission if validation fails
        }

        // Calculate incentive based on correct responses
        let correctCount = 0;

        Object.keys(correctAnswers).forEach((questionKey) => {
            if (responses.responses[questionKey] === correctAnswers[questionKey]) {
                correctCount++;
            }
        });

        // Set incentive based on correct answers
        const incentive = correctCount * 0.05;

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        const nextTestUrl = "/creative-bricks-game"; 

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
            time_spent: timeSpent,
            incentive_calculation: incentive,
            next_visit_test_name: nextTestUrl, // The next page URL
        };

        let shouldNavigate = true;

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

            if (!response.ok) {
                // window.alert('An unexpected error occurred.');
                const errorText = await response.text();

                shouldNavigate = false; // Prevent navigation if there's an error
                console.log("error ", errorText)
                throw new Error('Network response was not ok');
            }

            // Only navigate if there were no errors
            if (shouldNavigate) {
                navigate(updatedResponses.next_visit_test_name);
            }

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
                            <input type="radio" name={`RT2_question${questionNumber}answer${index + 1}`} value="same"
                                onChange={() => handleAnswerChange(`${questionNumber}`, index, 'same')} />
                        </td>
                    ))}
                </tr>
                <tr>
                    <td>Different</td>
                    {answerImages.map((_, index) => (
                        <td key={`different-${index}`}>
                            <input type="radio" name={`RT2_question${questionNumber}answer${index + 1}`} value="different" 
                                onChange={() => handleAnswerChange(`${questionNumber}`, index, 'different')} />
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
                    {/* <GlobalTimer /> */}
                </p>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <br />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
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
            <button className="button"
                        onClick={handleNext}
                        disabled={!timerCompleted}
            > Next 
            </button>
            {/* disabled={!allAnswered} */}
            {error && <p>Error: {error.message}</p>}
        </div>

            );
    };

export default RotationTestPart2;