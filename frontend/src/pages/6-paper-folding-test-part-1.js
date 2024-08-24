// pages/paper-folding-test-part-1
import React, { useState, useEffect, useRef }  from "react";
import { useNavigate } from "react-router-dom";

import Part1Question1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/part-1-question-1.png'; // Import Part 1 Question 1 image
import Part1Question1Answer1Option1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-1.png'; 
import Part1Question1Answer1Option2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-2.png'; 
import Part1Question1Answer1Option3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-3.png'; 
import Part1Question1Answer1Option4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-4.png'; 
import Part1Question1Answer1Option5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-5.png'; 

import Part1Question2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-2/part-1-question-2.png'; // Import Part 1 Question 2 image
import Part1Question2Answer2Option1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-2/answers-2/answer-2-option-1.png'; 
import Part1Question2Answer2Option2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-2/answers-2/answer-2-option-2.png'; 
import Part1Question2Answer2Option3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-2/answers-2/answer-2-option-3.png'; 
import Part1Question2Answer2Option4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-2/answers-2/answer-2-option-4.png'; 
import Part1Question2Answer2Option5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-2/answers-2/answer-2-option-5.png'; 

import Part1Question3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-3/part-1-question-3.png'; // Import Part 1 Question 3 image
import Part1Question3Answer3Option1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-3/answers-3/answer-3-option-1.png'; 
import Part1Question3Answer3Option2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-3/answers-3/answer-3-option-2.png'; 
import Part1Question3Answer3Option3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-3/answers-3/answer-3-option-3.png'; 
import Part1Question3Answer3Option4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-3/answers-3/answer-3-option-4.png'; 
import Part1Question3Answer3Option5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-3/answers-3/answer-3-option-5.png'; 

import Part1Question4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-4/part-1-question-4.png'; // Import Part 1 Question 4 image
import Part1Question4Answer4Option1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-4/answers-4/answer-4-option-1.png'; 
import Part1Question4Answer4Option2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-4/answers-4/answer-4-option-2.png'; 
import Part1Question4Answer4Option3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-4/answers-4/answer-4-option-3.png'; 
import Part1Question4Answer4Option4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-4/answers-4/answer-4-option-4.png'; 
import Part1Question4Answer4Option5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-4/answers-4/answer-4-option-5.png'; 

import Part1Question5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-5/part-1-question-5.png'; // Import Part 1 Question 5 image
import Part1Question5Answer5Option1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-5/answers-5/answer-5-option-1.png'; 
import Part1Question5Answer5Option2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-5/answers-5/answer-5-option-2.png'; 
import Part1Question5Answer5Option3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-5/answers-5/answer-5-option-3.png'; 
import Part1Question5Answer5Option4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-5/answers-5/answer-5-option-4.png'; 
import Part1Question5Answer5Option5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-5/answers-5/answer-5-option-5.png'; 

import Part1Question6 from '../images/fl-paper-folding-test/part-1-3-minutes/question-6/part-1-question-6.png'; // Import Part 1 Question 6 image
import Part1Question6Answer6Option1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-6/answers-6/answer-6-option-1.png'; 
import Part1Question6Answer6Option2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-6/answers-6/answer-6-option-2.png'; 
import Part1Question6Answer6Option3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-6/answers-6/answer-6-option-3.png'; 
import Part1Question6Answer6Option4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-6/answers-6/answer-6-option-4.png'; 
import Part1Question6Answer6Option5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-6/answers-6/answer-6-option-5.png'; 

import Part1Question7 from '../images/fl-paper-folding-test/part-1-3-minutes/question-7/part-1-question-7.png'; // Import Part 1 Question 7 image
import Part1Question7Answer7Option1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-7/answers-7/answer-7-option-1.png'; 
import Part1Question7Answer7Option2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-7/answers-7/answer-7-option-2.png'; 
import Part1Question7Answer7Option3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-7/answers-7/answer-7-option-3.png'; 
import Part1Question7Answer7Option4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-7/answers-7/answer-7-option-4.png'; 
import Part1Question7Answer7Option5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-7/answers-7/answer-7-option-5.png'; 

import Part1Question8 from '../images/fl-paper-folding-test/part-1-3-minutes/question-8/part-1-question-8.png'; // Import Part 1 Question 8 image
import Part1Question8Answer8Option1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-8/answers-8/answer-8-option-1.png'; 
import Part1Question8Answer8Option2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-8/answers-8/answer-8-option-2.png'; 
import Part1Question8Answer8Option3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-8/answers-8/answer-8-option-3.png'; 
import Part1Question8Answer8Option4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-8/answers-8/answer-8-option-4.png'; 
import Part1Question8Answer8Option5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-8/answers-8/answer-8-option-5.png'; 

import Part1Question9 from '../images/fl-paper-folding-test/part-1-3-minutes/question-9/part-1-question-9.png'; // Import Part 1 Question 8 image
import Part1Question9Answer9Option1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-9/answers-9/answer-9-option-1.png'; 
import Part1Question9Answer9Option2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-9/answers-9/answer-9-option-2.png'; 
import Part1Question9Answer9Option3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-9/answers-9/answer-9-option-3.png'; 
import Part1Question9Answer9Option4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-9/answers-9/answer-9-option-4.png'; 
import Part1Question9Answer9Option5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-9/answers-9/answer-9-option-5.png';

import Part1Question10 from '../images/fl-paper-folding-test/part-1-3-minutes/question-10/part-1-question-10.png'; // Import Part 1 Question 8 image
import Part1Question10Answer10Option1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-10/answers-10/answer-10-option-1.png'; 
import Part1Question10Answer10Option2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-10/answers-10/answer-10-option-2.png'; 
import Part1Question10Answer10Option3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-10/answers-10/answer-10-option-3.png'; 
import Part1Question10Answer10Option4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-10/answers-10/answer-10-option-4.png'; 
import Part1Question10Answer10Option5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-10/answers-10/answer-10-option-5.png';

import '../components/styles_css/PageStyle.css'; 
import '../components/styles_css/PaperFoldingStyle.css';
import '../components/styles_css/RadioButtonImage.css';
import Timer from "../components/Timer";
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';

const PaperFoldingPart1Questions = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    // const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    const { consent } = useConsent(); 

    // State to manage timer visibility
    const [timerVisible] = useState(true);

    // const API_BASE_URL = 'https://backend.adg429.com';
    // const API_BASE_URL = 'http://localhost:8080';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    
    //api integration
    const [responses, setResponses] = useState({
        // prolific_id: prolificId, 
        prolific_id: '',
        test_name: 'Paper-Folding-Test-1', 
        consent: consent === "yes" ? true : false, 
        page_number: 6, 
        chart_number: 0,
        responses: { 
            question_1: "",
            question_2: "",
            question_3: "",
            question_4: "",
            question_5: "",
            question_6: "",
            question_7: "",
            question_8: "",
            question_9: "",
            question_10: ""
        },
        time_spent: 0 
    });
    
    const handleChange = (questionNumber, value) => {
        setResponses(prevResponses => ({
            ...prevResponses,
            responses: {
                ...prevResponses.responses,
                [`question_${questionNumber}`]: value
            }
        }));
    };

    const startTimeRef = useRef(null);

    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

    const handleNext = async (event) => {
        event.preventDefault();
        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
            time_spent: timeSpent
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedResponses),
            });

            const responseText = await response.text();
            if (!response.ok) {
                throw new Error(responseText || 'Network response was not ok');
            }
            console.log('Response text:', responseText);
            // navigate("/proceed-to-part2-paper-folding-test");
            navigate("/paper-folding-test-part-2"); 
        } catch (error) {
            console.error('Error:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    
    const handleTimerCompletion = () => {
        // navigate("/proceed-to-part2-paper-folding-test"); //if a breather is needed in between we can add it 
        navigate("/paper-folding-test-part-2"); 
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                    <p>
                        <img src={logoImageDoc} alt="ucflogo" className="ucflogo" /> 
                        <h2><strong><u>PAPER FOLDING TEST - PART 1</u></strong></h2>
                    </p>
                    <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                </div>
            <br />
            {/* <h2>Paper Folding Test: Part 1: 3 minutes</h2> */}
            <br />
            <br />
            {timerVisible && <Timer initialTime={180} onCompletion={handleTimerCompletion} />}
            <br />
            <br />
            <br />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <form>
                {/* <div>
                    <label htmlFor="prolific_id">Prolific ID:</label>
                    <input
                        type="text"
                        id="prolific_id"
                        value={responses.prolific_id}
                        onChange={(e) => setResponses({...responses, prolific_id: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="test_name">Test Name:</label>
                    <input
                        type="text"
                        id="test_name"
                        value={responses.test_name}
                        onChange={(e) => setResponses({...responses, test_name: e.target.value })}
                    />
                </div> */}
                <div name="instructions">
                    {/* <img src={Part1Question1} alt="Part1 Question1" /> */}
                    <p><strong>[Q1]</strong></p>
                    <img src={Part1Question1} alt="Part1 Question1" />
                    <div className="radio-container">
                        <input type="radio" id="Part1Question1Answer1Option1" name="PartQuestion1Answer1" onChange={() => handleChange(1, "A")} />
                        <label htmlFor="Part1Question1Answer1Option1">
                            <img src={Part1Question1Answer1Option1} alt="Part1Question1Answer1Option1"/>
                        </label>
                        <br />
                        <input type="radio" id="Part1Question1Answer1Option2" name="PartQuestion1Answer1" onChange={() => handleChange(1, "B")} />
                        <label htmlFor="Part1Question1Answer1Option2">
                            <img src={Part1Question1Answer1Option2} alt="Part1Question1Answer1Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question1Answer1Option3" name="PartQuestion1Answer1" onChange={() => handleChange(1, "C")} />
                        <label htmlFor="Part1Question1Answer1Option3">
                            <img src={Part1Question1Answer1Option3} alt="Part1Question1Answer1Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question1Answer1Option4" name="PartQuestion1Answer1"onChange={() => handleChange(1, "D")} />
                        <label htmlFor="Part1Question1Answer1Option4">
                            <img src={Part1Question1Answer1Option4} alt="Part1Question1Answer1Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question1Answer1Option5" name="PartQuestion1Answer1" onChange={() => handleChange(1, "E")} />
                        <label htmlFor="Part1Question1Answer1Option5">
                            <img src={Part1Question1Answer1Option5} alt="Part1Question1Answer1Option5" />
                        </label>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {/* <img src={Part1Question2} alt="Part1 Question2" /> */}
                    <p><strong>[Q2]</strong></p>
                    <img src={Part1Question2} alt="Part1 Question2" />
                    <div className="radio-container">
                        <input type="radio" id="Part1Question2Answer2Option1" name="Part1Question2Answer2" onChange={() => handleChange(2, "A")}/>
                        <label htmlFor="Part1Question2Answer2Option1">
                            <img src={Part1Question2Answer2Option1} alt="Part1Question2Answer2Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question2Answer2Option2" name="Part1Question2Answer2" onChange={() => handleChange(2, "B")} />
                        <label htmlFor="Part1Question2Answer2Option2">
                            <img src={Part1Question2Answer2Option2} alt="Part1Question2Answer2Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question2Answer2Option3" name="Part1Question2Answer2" onChange={() => handleChange(2, "C")} />
                        <label htmlFor="Part1Question2Answer2Option3">
                            <img src={Part1Question2Answer2Option3} alt="Part1Question2Answer2Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question2Answer2Option4" name="Part1Question2Answer2" onChange={() => handleChange(2, "D")} />
                        <label htmlFor="Part1Question2Answer2Option4">
                            <img src={Part1Question2Answer2Option4} alt="Part1Question2Answer2Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question2Answer2Option5" name="Part1Question2Answer2" onChange={() => handleChange(2, "E")} />
                        <label htmlFor="Part1Question2Answer2Option5">
                            <img src={Part1Question2Answer2Option5} alt="Part1Question2Answer2Option5" />
                        </label>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {/* <img src={Part1Question3} alt="Part1 Question3" /> */}
                    <p><strong>[Q3]</strong></p>
                    <img src={Part1Question3} alt="Part1 Question3" />
                    <div className="radio-container">
                        <input type="radio" id="Part1Question3Answer3Option1" name="Part1Question3Answer3" onChange={() => handleChange(3, "A")} />
                        <label htmlFor="Part1Question3Answer3Option1">
                            <img src={Part1Question3Answer3Option1} alt="Part1Question3Answer3Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question3Answer3Option2" name="Part1Question3Answer3" onChange={() => handleChange(3, "B")} />
                        <label htmlFor="Part1Question3Answer3Option2">
                            <img src={Part1Question3Answer3Option2} alt="Part1Question3Answer3Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question3Answer3Option3" name="Part1Question3Answer3" onChange={() => handleChange(3, "C")}/>
                        <label htmlFor="Part1Question3Answer3Option3">
                            <img src={Part1Question3Answer3Option3} alt="Part1Question3Answer3Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question3Answer3Option4" name="Part1Question3Answer3" onChange={() => handleChange(3, "D")}/>
                        <label htmlFor="Part1Question3Answer3Option4">
                            <img src={Part1Question3Answer3Option4} alt="Part1Question3Answer3Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question3Answer3Option5" name="Part1Question3Answer3" onChange={() => handleChange(3, "E")} />
                        <label htmlFor="Part1Question3Answer3Option5">
                            <img src={Part1Question3Answer3Option5} alt="Part1Question3Answer3Option5" />
                        </label>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {/* <img src={Part1Question4} alt="Part1 Question4" /> */}
                    <p><strong>[Q4]</strong></p>
                    <img src={Part1Question4} alt="Part1 Question4" />
                    <div className="radio-container">
                        <input type="radio" id="Part1Question4Answer4Option1" name="Part1Question4Answer4" onChange={() => handleChange(4, "A")} />
                        <label htmlFor="Part1Question4Answer4Option1">
                            <img src={Part1Question4Answer4Option1} alt="Part1Question4Answer4Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question4Answer4Option2" name="Part1Question4Answer4" onChange={() => handleChange(4, "B")} />
                        <label htmlFor="Part1Question4Answer4Option2">
                            <img src={Part1Question4Answer4Option2} alt="Part1Question4Answer4Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question4Answer4Option3" name="Part1Question4Answer4" onChange={() => handleChange(4, "C")} />
                        <label htmlFor="Part1Question4Answer4Option3">
                            <img src={Part1Question4Answer4Option3} alt="Part1Question4Answer4Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question4Answer4Option4" name="Part1Question4Answer4" onChange={() => handleChange(4, "D")} />
                        <label htmlFor="Part1Question4Answer4Option4">
                            <img src={Part1Question4Answer4Option4} alt="Part1Question4Answer4Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question4Answer4Option5" name="Part1Question4Answer4" onChange={() => handleChange(4, "E")} />
                        <label htmlFor="Part1Question4Answer4Option5">
                            <img src={Part1Question4Answer4Option5} alt="Part1Question4Answer4Option5" />
                        </label>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {/* <img src={Part1Question5} alt="Part1 Question5" /> */}
                    <p><strong>[Q5]</strong></p>
                    <img src={Part1Question5} alt="Part1 Question5" />
                    <div className="radio-container">
                        <input type="radio" id="Part1Question5Answer5Option1" name="Part1Question5Answer5" onChange={() => handleChange(5, "A")} />
                        <label htmlFor="Part1Question5Answer5Option1">
                            <img src={Part1Question5Answer5Option1} alt="Part1Question5Answer5Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question5Answer5Option2" name="Part1Question5Answer5" onChange={() => handleChange(5, "B")} />
                        <label htmlFor="Part1Question5Answer5Option2">
                            <img src={Part1Question5Answer5Option2} alt="Part1Question5Answer5Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question5Answer5Option3" name="Part1Question5Answer5" onChange={() => handleChange(5, "C")} />
                        <label htmlFor="Part1Question5Answer5Option3">
                            <img src={Part1Question5Answer5Option3} alt="Part1Question5Answer5Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question5Answer5Option4" name="Part1Question5Answer5" onChange={() => handleChange(5, "D")} />
                        <label htmlFor="Part1Question5Answer5Option4">
                            <img src={Part1Question5Answer5Option4} alt="Part1Question5Answer5Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question5Answer5Option5" name="Part1Question5Answer5" onChange={() => handleChange(5, "E")} />
                        <label htmlFor="Part1Question5Answer5Option5">
                            <img src={Part1Question5Answer5Option5} alt="Part1Question5Answer5Option5" />
                        </label>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {/* <img src={Part1Question6} alt="Part1 Question6" /> */}
                    <p><strong>[Q6]</strong></p>
                    <img src={Part1Question6} alt="Part1 Question6" />
                    <div className="radio-container">
                        <input type="radio" id="Part1Question6Answer6Option1" name="Part1Question6Answer6" onChange={() => handleChange(6, "A")} />
                        <label htmlFor="Part1Question6Answer6Option1">
                            <img src={Part1Question6Answer6Option1} alt="Part1Question6Answer6Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question6Answer6Option2" name="Part1Question6Answer6" onChange={() => handleChange(6, "B")} />
                        <label htmlFor="Part1Question6Answer6Option2">
                            <img src={Part1Question6Answer6Option2} alt="Part1Question6Answer6Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question6Answer6Option3" name="Part1Question6Answer6" onChange={() => handleChange(6, "C")} />
                        <label htmlFor="Part1Question6Answer6Option3">
                            <img src={Part1Question6Answer6Option3} alt="Part1Question6Answer6Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question6Answer6Option4" name="Part1Question6Answer6" onChange={() => handleChange(6, "D")} />
                        <label htmlFor="Part1Question6Answer6Option4">
                            <img src={Part1Question6Answer6Option4} alt="Part1Question6Answer6Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question6Answer6Option5" name="Part1Question6Answer6" onChange={() => handleChange(6, "E")} />
                        <label htmlFor="Part1Question6Answer6Option5">
                            <img src={Part1Question6Answer6Option5} alt="Part1Question6Answer6Option5" />
                        </label>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {/* <img src={Part1Question7} alt="Part1 Question7" /> */}
                    <p><strong>[Q7]</strong></p>
                    <img src={Part1Question7} alt="Part1 Question7" />
                    <div className="radio-container">
                        <input type="radio" id="Part1Question7Answer7Option1" name="Part1Question7Answer7" onChange={() => handleChange(7, "A")} />
                        <label htmlFor="Part1Question7Answer7Option1">
                            <img src={Part1Question7Answer7Option1} alt="Part1Question7Answer7Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question7Answer7Option2" name="Part1Question7Answer7" onChange={() => handleChange(7, "B")} />
                        <label htmlFor="Part1Question7Answer7Option2">
                            <img src={Part1Question7Answer7Option2} alt="Part1Question6Answer6Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question7Answer7Option3" name="Part1Question7Answer7" onChange={() => handleChange(7, "C")} />
                        <label htmlFor="Part1Question7Answer7Option3">
                            <img src={Part1Question7Answer7Option3} alt="Part1Question7Answer7Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question7Answer7Option4" name="Part1Question7Answer7" onChange={() => handleChange(7, "D")} />
                        <label htmlFor="Part1Question7Answer7Option4">
                            <img src={Part1Question7Answer7Option4} alt="Part1Question7Answer7Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question7Answer7Option5" name="Part1Question7Answer7" onChange={() => handleChange(7, "E")} />
                        <label htmlFor="Part1Question7Answer7Option5">
                            <img src={Part1Question7Answer7Option5} alt="Part1Question7Answer7Option5" />
                        </label>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {/* <img src={Part1Question8} alt="Part1 Question8" /> */}
                    <p><strong>[Q8]</strong></p>
                    <img src={Part1Question8} alt="Part1 Question8" />
                    <div className="radio-container">
                        <input type="radio" id="Part1Question8Answer8Option1" name="Part1Question8Answer8" onChange={() => handleChange(8, "A")} />
                        <label htmlFor="Part1Question8Answer8Option1">
                            <img src={Part1Question8Answer8Option1} alt="Part1Question8Answer8Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question8Answer8Option2" name="Part1Question8Answer8" onChange={() => handleChange(8, "B")} />
                        <label htmlFor="Part1Question8Answer8Option2">
                            <img src={Part1Question8Answer8Option2} alt="Part1Question8Answer8Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question8Answer8Option3" name="Part1Question8Answer8" onChange={() => handleChange(8, "C")} />
                        <label htmlFor="Part1Question8Answer8Option3">
                            <img src={Part1Question8Answer8Option3} alt="Part1Question8Answer8Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question8Answer8Option4" name="Part1Question8Answer8"onChange={() => handleChange(8, "D")} />
                        <label htmlFor="Part1Question8Answer8Option4">
                            <img src={Part1Question8Answer8Option4} alt="Part1Question8Answer8Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question8Answer8Option5" name="Part1Question8Answer8" onChange={() => handleChange(8, "E")} />
                        <label htmlFor="Part1Question8Answer8Option5">
                            <img src={Part1Question8Answer8Option5} alt="Part1Question8Answer8Option5" />
                        </label>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                    {/* <img src={Part1Question9} alt="Part1 Question9" /> */}
                    <p><strong>[Q9]</strong></p>
                    <img src={Part1Question9} alt="Part1 Question9" />
                    <div className="radio-container">
                        <input type="radio" id="Part1Question9Answer9Option1" name="Part1Question9Answer9" onChange={() => handleChange(9, "A")} />
                        <label htmlFor="Part1Question9Answer9Option1">
                            <img src={Part1Question9Answer9Option1} alt="Part1Question9Answer9Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question9Answer9Option2" name="Part1Question9Answer9" onChange={() => handleChange(9, "B")} />
                        <label htmlFor="Part1Question9Answer9Option2">
                            <img src={Part1Question9Answer9Option2} alt="Part1Question9Answer9Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question9Answer9Option3" name="Part1Question9Answer9" onChange={() => handleChange(9, "C")} />
                        <label htmlFor="Part1Question9Answer9Option3">
                            <img src={Part1Question9Answer9Option3} alt="Part1Question9Answer9Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question9Answer9Option4" name="Part1Question9Answer9" onChange={() => handleChange(9, "D")} />
                        <label htmlFor="Part1Question9Answer9Option4">
                            <img src={Part1Question9Answer9Option4} alt="Part1Question9Answer9Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question9Answer9Option5" name="Part1Question9Answer9" onChange={() => handleChange(9, "E")} />
                        <label htmlFor="Part1Question9Answer9Option5">
                            <img src={Part1Question9Answer9Option5} alt="Part1Question9Answer9Option5" />
                        </label>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {/* <img src={Part1Question10} alt="Part1 Question10" /> */}
                    <p><strong>[Q10]</strong></p>
                    <img src={Part1Question10} alt="Part1 Question10" />
                    <div className="radio-container">
                        <input type="radio" id="Part1Question10Answer10Option1" name="Part1Question10Answer10" onChange={() => handleChange(10, "A")} />
                        <label htmlFor="Part1Question10Answer10Option1">
                            <img src={Part1Question10Answer10Option1} alt="Part1Question10Answer10Option1" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question10Answer10Option2" name="Part1Question10Answer10" onChange={() => handleChange(10, "B")} />
                        <label htmlFor="Part1Question10Answer10Option2">
                            <img src={Part1Question10Answer10Option2} alt="Part1Question10Answer10Option2" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question10Answer10Option3" name="Part1Question10Answer10" onChange={() => handleChange(10, "C")} />
                        <label htmlFor="Part1Question10Answer10Option3">
                            <img src={Part1Question10Answer10Option3} alt="Part1Question10Answer10Option3" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question10Answer10Option4" name="Part1Question10Answer10" onChange={() => handleChange(10, "D")} />
                        <label htmlFor="Part1Question10Answer10Option4">
                            <img src={Part1Question10Answer10Option4} alt="Part1Question10Answer10Option4" />
                        </label>
                        <br />
                        <input type="radio" id="Part1Question10Answer10Option5" name="Part1Question10Answer10" onChange={() => handleChange(10, "E")} />
                        <label htmlFor="Part1Question10Answer10Option5">
                            <img src={Part1Question10Answer10Option5} alt="Part1Question10Answer10Option5" />
                        </label>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                
                {/* Next button */}
                <button className="button" onClick={handleNext}> Next </button>
                {error && <p>Error: {error.message}</p>}
            </form>
        </div>
    );
};

export default PaperFoldingPart1Questions;