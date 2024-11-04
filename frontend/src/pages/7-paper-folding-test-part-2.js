// pages/paper-folding-test-part-2
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css'; 

import Part2Question1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/part-2-question-1.png'; // Import Part 2 Question 1 image
import Part2Question1Answer1Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/answer-1/answer-1-option-1.png'; 
import Part2Question1Answer1Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/answer-1/answer-1-option-2.png'; 
import Part2Question1Answer1Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/answer-1/answer-1-option-3.png'; 
import Part2Question1Answer1Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/answer-1/answer-1-option-4.png'; 
import Part2Question1Answer1Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/answer-1/answer-1-option-5.png'; 

import Part2Question2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/part-2-question-2.png'; // Import Part 2 Question 2 image
import Part2Question2Answer2Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/answer-2/answer-2-option-1.png'; 
import Part2Question2Answer2Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/answer-2/answer-2-option-2.png'; 
import Part2Question2Answer2Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/answer-2/answer-2-option-3.png'; 
import Part2Question2Answer2Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/answer-2/answer-2-option-4.png'; 
import Part2Question2Answer2Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/answer-2/answer-2-option-5.png'; 

import Part2Question3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/part-2-question-3.png'; // Import Part 2 Question 3 image
import Part2Question3Answer3Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/answer-3/answer-3-option-1.png'; 
import Part2Question3Answer3Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/answer-3/answer-3-option-2.png'; 
import Part2Question3Answer3Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/answer-3/answer-3-option-3.png'; 
import Part2Question3Answer3Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/answer-3/answer-3-option-4.png'; 
import Part2Question3Answer3Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/answer-3/answer-3-option-5.png'; 

import Part2Question4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/part-2-question-4.png'; // Import Part 2 Question 4 image
import Part2Question4Answer4Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/answer-4/answer-4-option-1.png'; 
import Part2Question4Answer4Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/answer-4/answer-4-option-2.png'; 
import Part2Question4Answer4Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/answer-4/answer-4-option-3.png'; 
import Part2Question4Answer4Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/answer-4/answer-4-option-4.png'; 
import Part2Question4Answer4Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/answer-4/answer-4-option-5.png'; 

import Part2Question5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-5/part-2-question-5.png'; // Import Part 2 Question 5 image
import Part2Question5Answer5Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-5/answer-5/answer-5-option-1.png'; 
import Part2Question5Answer5Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-5/answer-5/answer-5-option-2.png'; 
import Part2Question5Answer5Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-5/answer-5/answer-5-option-3.png'; 
import Part2Question5Answer5Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-5/answer-5/answer-5-option-4.png'; 
import Part2Question5Answer5Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-5/answer-5/answer-5-option-5.png'; 

import Part2Question6 from '../images/fl-paper-folding-test/part-2-3-minutes/question-6/part-2-question-6.png'; // Import Part 2 Question 6 image
import Part2Question6Answer6Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-6/answer-6/answer-6-option-1.png'; 
import Part2Question6Answer6Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-6/answer-6/answer-6-option-2.png'; 
import Part2Question6Answer6Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-6/answer-6/answer-6-option-3.png'; 
import Part2Question6Answer6Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-6/answer-6/answer-6-option-4.png'; 
import Part2Question6Answer6Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-6/answer-6/answer-6-option-5.png'; 

import Part2Question7 from '../images/fl-paper-folding-test/part-2-3-minutes/question-7/part-2-question-7.png'; // Import Part 2 Question 7 image
import Part2Question7Answer7Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-7/answer-7/answer-7-option-1.png'; 
import Part2Question7Answer7Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-7/answer-7/answer-7-option-2.png'; 
import Part2Question7Answer7Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-7/answer-7/answer-7-option-3.png'; 
import Part2Question7Answer7Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-7/answer-7/answer-7-option-4.png'; 
import Part2Question7Answer7Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-7/answer-7/answer-7-option-5.png'; 

import Part2Question8 from '../images/fl-paper-folding-test/part-2-3-minutes/question-8/part-2-question-8.png'; // Import Part 2 Question 8 image
import Part2Question8Answer8Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-8/answer-8/answer-8-option-1.png'; 
import Part2Question8Answer8Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-8/answer-8/answer-8-option-2.png'; 
import Part2Question8Answer8Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-8/answer-8/answer-8-option-3.png'; 
import Part2Question8Answer8Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-8/answer-8/answer-8-option-4.png'; 
import Part2Question8Answer8Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-8/answer-8/answer-8-option-5.png'; 

import Part2Question9 from '../images/fl-paper-folding-test/part-2-3-minutes/question-9/part-2-question-9.png'; // Import Part 2 Question 9 image
import Part2Question9Answer9Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-9/answer-9/answer-9-option-1.png'; 
import Part2Question9Answer9Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-9/answer-9/answer-9-option-2.png'; 
import Part2Question9Answer9Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-9/answer-9/answer-9-option-3.png'; 
import Part2Question9Answer9Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-9/answer-9/answer-9-option-4.png'; 
import Part2Question9Answer9Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-9/answer-9/answer-9-option-5.png'; 

import Part2Question10 from '../images/fl-paper-folding-test/part-2-3-minutes/question-10/part-2-question-10.png'; // Import Part 2 Question 10 image
import Part2Question10Answer10Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-10/answer-10/answer-10-option-1.png'; 
import Part2Question10Answer10Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-10/answer-10/answer-10-option-2.png'; 
import Part2Question10Answer10Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-10/answer-10/answer-10-option-3.png'; 
import Part2Question10Answer10Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-10/answer-10/answer-10-option-4.png'; 
import Part2Question10Answer10Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-10/answer-10/answer-10-option-5.png'; 

import '../components/styles_css/ImageStyles.css';
import '../components/styles_css/RadioButtonImage.css';
import Timer from "../components/Timer"; 
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';
// import GlobalTimer from "../components/GlobalTimer";

const PaperFoldingPart2Questions = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const startTimeRef = useRef(null);
    const [timerCompleted, setTimerCompleted] = useState(false); // Track if the timer has already completed

    const correctAnswersPart2 = ['C', 'B', 'A', 'E', 'B', 'A', 'A', 'D', 'D', 'C']; // Answers for Part 2

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

    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    // const { consent } = useConsent();

    // State to manage timer visibility
    const [timerVisible] = useState(true);

    // const API_BASE_URL = 'https://backend.adg429.com';
    // const API_BASE_URL = 'http://localhost:8080';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const currentTime = Date.now();
    const currentTestUrl = "/paper-folding-test-part-2";
    const previousTestUrl = "/paper-folding-test-part-1";
    const test_name_given = 'Paper-Folding-Test-2';

    // State to store responses
    const [responses, setResponses] = useState({
        prolific_id: prolificId,
        test_name: test_name_given,
        consent: consent === "yes" ? true : false,
        page_number: 7,
        chart_number: 0,
        responses: {
            PFT2_question_1: "",
            PFT2_question_2: "",
            PFT2_question_3: "",
            PFT2_question_4: "",
            PFT2_question_5: "",
            PFT2_question_6: "",
            PFT2_question_7: "",
            PFT2_question_8: "",
            PFT2_question_9: "",
            PFT2_question_10: ""
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

    const handleChange = (questionNumber, value) => {
        setResponses(prevResponses => ({
            ...prevResponses,
            responses: {
                ...prevResponses.responses,
                [`PFT2_question_${questionNumber}`]: value
            }
        }));
    };

    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

    const validateResponses = () => {
        const unansweredQuestions = Object.values(responses.responses).some(response => response === "");
        return !unansweredQuestions; // Return true if all questions are answered
    };

    const calculateIncentive = () => {
        let correctCount = 0;

        // Loop through responses and check against correct answers
        Object.keys(responses.responses).forEach((key, index) => {
            const questionNumber = index + 1; // Question numbers start from 1
            const userAnswer = responses.responses[`PFT2_question_${questionNumber}`];
            const correctAnswer = correctAnswersPart2[index];

            if (userAnswer === correctAnswer) {
                correctCount++; // Increment count if the answer is correct
            }
        });

        // Calculate the total incentive ($0.05 per correct answer)
        const totalIncentive = correctCount * 0.05;

        return totalIncentive.toFixed(2);
    };

    const handleNext = async (event) => {
        if (timerCompleted) return; // Prevent multiple executions
        event.preventDefault();
        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        const nextTestUrl = "/sample-rotation-test"; 

        // Validate that all questions have been answered
        if (!validateResponses()) {
            setLoading(false);
            window.alert("Please answer all the questions before proceeding.")
            return; // Prevent form submission if validation fails
        }

        // Get the calculated incentive
        const totalIncentive = calculateIncentive();

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
            time_spent: timeSpent,
            next_visit_test_name: nextTestUrl, // The next page URL
            incentive_calculation: totalIncentive, // Update with calculated incentive
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

            // const responseText = await response.text();
            // if (!response.ok) {
            //     throw new Error(responseText || 'Network response was not ok');
            // }
            // // console.log('Response text:', responseText);

            // navigate(nextTestUrl)

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
            shouldNavigate = false;
        } finally {
            setLoading(false);
        }

    };
        
    const handleTimerCompletion = async (event) => {
        if (timerCompleted) {
            // alert("Please wait until the timer completes.");
            return; // Prevent multiple executions after the timer has completed
        }
        // event.preventDefault();
        setTimerCompleted(true); // Mark the timer as completed
        setLoading(false); //earlier was true
        
        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        const nextTestUrl = "/sample-rotation-test"; 

        // Get the calculated incentive
        const totalIncentive = calculateIncentive();

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
            time_spent: timeSpent,
            next_visit_test_name: nextTestUrl, // The next page URL
            incentive_calculation: totalIncentive, // Update with calculated incentive
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

            // const responseText = await response.text();
            // if (!response.ok) {
            //     throw new Error(responseText || 'Network response was not ok');
            // }
            // // console.log('Response text:', responseText);

            // navigate(nextTestUrl)

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

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <p>
                    <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img>
                    <h2><strong><u>PAPER FOLDING TEST - PART 2</u></strong></h2>
                    {/* <GlobalTimer /> */}
                </p>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <br></br>
            <h2>Paper Folding Test: Part 2: 3 minutes</h2>
            <br></br>
            <br/>
            {timerVisible && <Timer initialTime={180} onCompletion={handleTimerCompletion} />}
            {/* 180 */}
            <br></br>
            <br></br>
            <br></br>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <form>
                <div name="instructions">
                    
                    {/* <img src={Part2Question1Image} alt="Part 2 Question 1" /> */}

                    <p><strong>[Q1]</strong></p>
                    <img src={Part2Question1} alt="Part2 Question1" />
                    <div className="radio-container">
                        <input type="radio" id="Part2Question1Answer1Option1" name="Part2Question1Answer1" onChange={() => handleChange(1, "A")} />
                        <label htmlFor="Part2Question1Answer1Option1">
                            {/* <div className="Part2PaperFoldingTestImage"> */}
                                <img src={Part2Question1Answer1Option1} alt="Part2Question1Answer1Option1" />
                            {/* </div> */}
                        </label>
                        <br />
                        <input type="radio" id="Part2Question1Answer1Option2" name="Part2Question1Answer1" onChange={() => handleChange(1, "B")} />
                        <label htmlFor="Part2Question1Answer1Option2">
                            <img src={Part2Question1Answer1Option2} alt="Part2Question1Answer1Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question1Answer1Option3" name="Part2Question1Answer1" onChange={() => handleChange(1, "C")} />
                        <label htmlFor="Part2Question1Answer1Option3">
                            <img src={Part2Question1Answer1Option3} alt="Part2Question1Answer1Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question1Answer1Option4" name="Part2Question1Answer1" onChange={() => handleChange(1, "D")} />
                        <label htmlFor="Part2Question1Answer1Option4">
                            <img src={Part2Question1Answer1Option4} alt="Part2Question1Answer1Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question1Answer1Option5" name="Part2Question1Answer1" onChange={() => handleChange(1, "E")} />
                        <label htmlFor="Part2Question1Answer1Option5">
                            <img src={Part2Question1Answer1Option5} alt="Part2Question1Answer1Option5" />
                        </label>
                    </div>
                    <br />
                    <br />
                    <br></br>
                    <br></br>
                    <br/>

                    {/* <img src={Part2Question2Image} alt="Part 2 Question 2" /> */}
                    <p><strong>[Q2]</strong></p>
                    <img src={Part2Question2} alt="Part2 Question 2" />
                    <div className="radio-container">
                        <input type="radio" id="Part2Question2Answer2Option1" name="Part2Question2Answer2" onChange={() => handleChange(2, "A")}/>
                        <label htmlFor="Part2Question2Answer2Option1">
                            <img src={Part2Question2Answer2Option1} alt="Part2Question2Answer2Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question2Answer2Option2" name="Part2Question2Answer2" onChange={() => handleChange(2, "B")}/>
                        <label htmlFor="Part2Question2Answer2Option2">
                            <img src={Part2Question2Answer2Option2} alt="Part2Question2Answer2Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question2Answer2Option3" name="Part2Question2Answer2" onChange={() => handleChange(2, "C")}/>
                        <label htmlFor="Part2Question2Answer2Option3">
                            <img src={Part2Question2Answer2Option3} alt="Part2Question2Answer2Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question2Answer2Option4" name="Part2Question2Answer2" onChange={() => handleChange(2, "D")}/>
                        <label htmlFor="Part2Question2Answer2Option4">
                            <img src={Part2Question2Answer2Option4} alt="Part2Question2Answer2Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question2Answer2Option5" name="Part2Question2Answer2" onChange={() => handleChange(2, "E")}/>
                        <label htmlFor="Part2Question2Answer2Option5">
                            <img src={Part2Question2Answer2Option5} alt="Part2Question2Answer2Option5" />
                        </label>
                    </div>
                    <br></br>
                    <br></br>
                    <br/>
                    <br/>
                    <br/>

                    {/* <img src={Part2Question3Image} alt="Part 2 Question 3" /> */}
                    <p><strong>[Q3]</strong></p>
                    <img src={Part2Question3} alt="Part2 Question 3" />
                    <div className="radio-container">
                        <input type="radio" id="Part2Question3Answer3Option1" name="Part2Question3Answer3" onChange={() => handleChange(3, "A")}/>
                        <label htmlFor="Part2Question3Answer3Option1">
                            <img src={Part2Question3Answer3Option1} alt="Part2Question3Answer3Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question3Answer3Option2" name="Part2Question3Answer3" onChange={() => handleChange(3, "B")}/>
                        <label htmlFor="Part2Question3Answer3Option2">
                            <img src={Part2Question3Answer3Option2} alt="Part2Question3Answer3Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question3Answer3Option3" name="Part2Question3Answer3" onChange={() => handleChange(3, "C")}/>
                        <label htmlFor="Part2Question3Answer3Option3">
                            <img src={Part2Question3Answer3Option3} alt="Part2Question3Answer3Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question3Answer3Option4" name="Part2Question3Answer3" onChange={() => handleChange(3, "D")}/>
                        <label htmlFor="Part2Question3Answer3Option4">
                            <img src={Part2Question3Answer3Option4} alt="Part2Question3Answer3Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question3Answer3Option5" name="Part2Question3Answer3" onChange={() => handleChange(3, "E")}/>
                        <label htmlFor="Part2Question3Answer3Option5">
                            <img src={Part2Question3Answer3Option5} alt="Part2Question3Answer3Option5" />
                        </label>
                    </div>
                    <br></br>
                    <br></br>
                    <br/>
                    <br/>
                    <br/>

                    {/* <img src={Part2Question4Image} alt="Part 2 Question 4" /> */}
                    <p><strong>[Q4]</strong></p>
                    <img src={Part2Question4} alt="Part2 Question 4" />
                    <div className="radio-container">
                        <input type="radio" id="Part2Question4Answer4Option1" name="Part2Question4Answer4" onChange={() => handleChange(4, "A")}/>
                        <label htmlFor="Part2Question4Answer4Option1">
                            <img src={Part2Question4Answer4Option1} alt="Part2Question4Answer4Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question4Answer4Option2" name="Part2Question4Answer4" onChange={() => handleChange(4, "B")}/>
                        <label htmlFor="Part2Question4Answer4Option2">
                            <img src={Part2Question4Answer4Option2} alt="Part2Question4Answer4Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question4Answer4Option3" name="Part2Question4Answer4" onChange={() => handleChange(4, "C")}/>
                        <label htmlFor="Part2Question4Answer4Option3">
                            <img src={Part2Question4Answer4Option3} alt="Part2Question4Answer4Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question4Answer4Option4" name="Part2Question4Answer4" onChange={() => handleChange(4, "D")}/>
                        <label htmlFor="Part2Question4Answer4Option4">
                            <img src={Part2Question4Answer4Option4} alt="Part2Question4Answer4Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question4Answer4Option5" name="Part2Question4Answer4" onChange={() => handleChange(4, "E")}/>
                        <label htmlFor="Part2Question4Answer4Option5">
                            <img src={Part2Question4Answer4Option5} alt="Part2Question4Answer4Option5" />
                        </label>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br/>

                    {/* <img src={Part2Question5Image} alt="Part 2 Question 5" /> */}
                    <p><strong>[Q5]</strong></p>
                    <img src={Part2Question5} alt="Part2 Question 5" />
                    <div className="radio-container">
                        <input type="radio" id="Part2Question5Answer5Option1" name="Part2Question5Answer5" onChange={() => handleChange(5, "A")} />
                        <label htmlFor="Part2Question5Answer5Option1">
                            <img src={Part2Question5Answer5Option1} alt="Part2Question5Answer5Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question5Answer5Option2" name="Part2Question5Answer5" onChange={() => handleChange(5, "B")} />
                        <label htmlFor="Part2Question5Answer5Option2">
                            <img src={Part2Question5Answer5Option2} alt="Part2Question5Answer5Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question5Answer5Option3" name="Part2Question5Answer5" onChange={() => handleChange(5, "C")} />
                        <label htmlFor="Part2Question5Answer5Option3">
                            <img src={Part2Question5Answer5Option3} alt="Part2Question5Answer5Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question5Answer5Option4" name="Part2Question5Answer5" onChange={() => handleChange(5, "D")}/>
                        <label htmlFor="Part2Question5Answer5Option4">
                            <img src={Part2Question5Answer5Option4} alt="Part2Question5Answer5Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question5Answer5Option5" name="Part2Question5Answer5" onChange={() => handleChange(5, "E")}/>
                        <label htmlFor="Part2Question5Answer5Option5">
                            <img src={Part2Question5Answer5Option5} alt="Part2Question5Answer5Option5" />
                        </label>
                    </div>
                    <br></br>
                    <br></br>
                    <br/>
                    <br/>
                    <br/>
                    
                    {/* <img src={Part2Question6Image} alt="Part 2 Question 6" /> */}
                    <p><strong>[Q6]</strong></p>
                    <img src={Part2Question6} alt="Part2 Question 6" />
                    <div className="radio-container">
                        <input type="radio" id="Part2Question6Answer6Option1" name="Part2Question6Answer6" onChange={() => handleChange(6, "A")} />
                        <label htmlFor="Part2Question6Answer6Option1">
                            <img src={Part2Question6Answer6Option1} alt="Part2Question6Answer6Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question6Answer6Option2" name="Part2Question6Answer6" onChange={() => handleChange(6, "B")} />
                        <label htmlFor="Part2Question6Answer6Option2">
                            <img src={Part2Question6Answer6Option2} alt="Part2Question6Answer6Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question6Answer6Option3" name="Part2Question6Answer6" onChange={() => handleChange(6, "C")} />
                        <label htmlFor="Part2Question6Answer6Option3">
                            <img src={Part2Question6Answer6Option3} alt="Part2Question6Answer6Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question6Answer6Option4" name="Part2Question6Answer6" onChange={() => handleChange(6, "D")} />
                        <label htmlFor="Part2Question6Answer6Option4">
                            <img src={Part2Question6Answer6Option4} alt="Part2Question6Answer6Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question6Answer6Option5" name="Part2Question6Answer6" onChange={() => handleChange(6, "E")} />
                        <label htmlFor="Part2Question6Answer6Option5">
                            <img src={Part2Question6Answer6Option5} alt="Part2Question6Answer6Option5" />
                        </label>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    {/* <img src={Part2Question7Image} alt="Part 2 Question 7" /> */}
                    <p><strong>[Q7]</strong></p>
                    <img src={Part2Question7} alt="Part2 Question 7" />
                    <div className="radio-container">
                        <input type="radio" id="Part2Question7Answer7Option1" name="Part2Question7Answer7" onChange={() => handleChange(7, "A")} />
                        <label htmlFor="Part2Question7Answer7Option1">
                            <img src={Part2Question7Answer7Option1} alt="Part2Question7Answer7Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question7Answer7Option2" name="Part2Question7Answer7" onChange={() => handleChange(7, "B")} />
                        <label htmlFor="Part2Question7Answer7Option2">
                            <img src={Part2Question7Answer7Option2} alt="Part2Question7Answer7Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question7Answer7Option3" name="Part2Question7Answer7" onChange={() => handleChange(7, "C")} />
                        <label htmlFor="Part2Question7Answer7Option3">
                            <img src={Part2Question7Answer7Option3} alt="Part2Question7Answer7Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question7Answer7Option4" name="Part2Question7Answer7" onChange={() => handleChange(7, "D")} />
                        <label htmlFor="Part2Question7Answer7Option4">
                            <img src={Part2Question7Answer7Option4} alt="Part2Question7Answer7Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question7Answer7Option5" name="Part2Question7Answer7" onChange={() => handleChange(7, "E")} />
                        <label htmlFor="Part2Question7Answer7Option5">
                            <img src={Part2Question7Answer7Option5} alt="Part2Question7Answer7Option5" />
                        </label>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    {/* <img src={Part2Question8Image} alt="Part 2 Question 8" /> */}
                    <p><strong>[Q8]</strong></p>
                    <img src={Part2Question8} alt="Part2 Question 8" />
                    <div className="radio-container">
                        <input type="radio" id="Part2Question8Answer8Option1" name="Part2Question8Answer8" onChange={() => handleChange(8, "A")} />
                        <label htmlFor="Part2Question8Answer8Option1">
                            <img src={Part2Question8Answer8Option1} alt="Part2Question8Answer8Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question8Answer8Option2" name="Part2Question8Answer8" onChange={() => handleChange(8, "B")} />
                        <label htmlFor="Part2Question8Answer8Option2">
                            <img src={Part2Question8Answer8Option2} alt="Part2Question8Answer8Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question8Answer8Option3" name="Part2Question8Answer8" onChange={() => handleChange(8, "C")} />
                        <label htmlFor="Part2Question8Answer8Option3">
                            <img src={Part2Question8Answer8Option3} alt="Part2Question8Answer8Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question8Answer8Option4" name="Part2Question8Answer8" onChange={() => handleChange(8, "D")} />
                        <label htmlFor="Part2Question8Answer8Option4">
                            <img src={Part2Question8Answer8Option4} alt="Part2Question8Answer8Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question8Answer8Option5" name="Part2Question8Answer8" onChange={() => handleChange(8, "E")} />
                        <label htmlFor="Part2Question8Answer8Option5">
                            <img src={Part2Question8Answer8Option5} alt="Part2Question8Answer8Option5" />
                        </label>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    {/* <img src={Part2Question9Image} alt="Part 2 Question 9" /> */}
                    <p><strong>[Q9]</strong></p>
                    <img src={Part2Question9} alt="Part2 Question 9" />
                    <div className="radio-container">
                        <input type="radio" id="Part2Question9Answer9Option1" name="Part2Question9Answer9" onChange={() => handleChange(9, "A")} />
                        <label htmlFor="Part2Question9Answer9Option1">
                            <img src={Part2Question9Answer9Option1} alt="Part2Question9Answer9Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question9Answer9Option2" name="Part2Question9Answer9" onChange={() => handleChange(9, "B")} />
                        <label htmlFor="Part2Question9Answer9Option2">
                            <img src={Part2Question9Answer9Option2} alt="Part2Question9Answer9Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question9Answer9Option3" name="Part2Question9Answer9" onChange={() => handleChange(9, "C")} />
                        <label htmlFor="Part2Question9Answer9Option3">
                            <img src={Part2Question9Answer9Option3} alt="Part2Question9Answer9Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question9Answer9Option4" name="Part2Question9Answer9" onChange={() => handleChange(9, "D")} />
                        <label htmlFor="Part2Question9Answer9Option4">
                            <img src={Part2Question9Answer9Option4} alt="Part2Question9Answer9Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question9Answer9Option5" name="Part2Question9Answer9" onChange={() => handleChange(9, "E")} />
                        <label htmlFor="Part2Question9Answer9Option5">
                            <img src={Part2Question9Answer9Option5} alt="Part2Question9Answer9Option5" />
                        </label>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    {/* <img src={Part2Question10Image} alt="Part 2 Question 10" /> */}
                    <p><strong>[Q10]</strong></p>
                    <img src={Part2Question10} alt="Part2 Question 10" />
                    <div className="radio-container">
                        <input type="radio" id="Part2Question10Answer10Option1" name="Part2Question10Answer10" onChange={() => handleChange(10, "A")} />
                        <label htmlFor="Part2Question10Answer10Option1">
                            <img src={Part2Question10Answer10Option1} alt="Part2Question10Answer10Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question10Answer10Option2" name="Part2Question10Answer10" onChange={() => handleChange(10, "B")} />
                        <label htmlFor="Part2Question10Answer10Option2">
                            <img src={Part2Question10Answer10Option2} alt="Part2Question10Answer10Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question10Answer10Option3" name="Part2Question10Answer10" onChange={() => handleChange(10, "C")} />
                        <label htmlFor="Part2Question10Answer10Option3">
                            <img src={Part2Question10Answer10Option3} alt="Part2Question10Answer10Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question10Answer10Option4" name="Part2Question10Answer10" onChange={() => handleChange(10, "D")} />
                        <label htmlFor="Part2Question10Answer10Option4">
                            <img src={Part2Question10Answer10Option4} alt="Part2Question10Answer10Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part2Question10Answer10Option5" name="Part2Question10Answer10" onChange={() => handleChange(10, "E")} />
                        <label htmlFor="Part2Question10Answer10Option5">
                            <img src={Part2Question10Answer10Option5} alt="Part2Question10Answer10Option5" />
                        </label>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br/>
                {/* Next button */}
                <button className="button"
                        onClick={handleNext}
                        disabled={!timerCompleted}
                > Next 
                </button>
                {error && <p>Error: {error.message}</p>}
                <br/>
                <br/>
                <br/>
                <br/>
            </form>
        </div>
    );
};
 
export default PaperFoldingPart2Questions;
