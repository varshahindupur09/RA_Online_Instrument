import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css'; 
import '../components/styles_css/RotationTestStyle.css';

import Part1Question1 from '../images/rotation-test/rotation-test-part-1/question-1/part-1-question-1.png';
import Part1Question1Answer1Option1 from '../images/rotation-test/rotation-test-part-1/question-1/answer-1.png'; 
import Part1Question1Answer1Option2 from '../images/rotation-test/rotation-test-part-1/question-1/answer-2.png'; 
import Part1Question1Answer1Option3 from '../images/rotation-test/rotation-test-part-1/question-1/answer-3.png'; 
import Part1Question1Answer1Option4 from '../images/rotation-test/rotation-test-part-1/question-1/answer-4.png'; 
import Part1Question1Answer1Option5 from '../images/rotation-test/rotation-test-part-1/question-1/answer-5.png'; 
import Part1Question1Answer1Option6 from '../images/rotation-test/rotation-test-part-1/question-1/answer-6.png'; 
import Part1Question1Answer1Option7 from '../images/rotation-test/rotation-test-part-1/question-1/answer-7.png'; 
import Part1Question1Answer1Option8 from '../images/rotation-test/rotation-test-part-1/question-1/answer-8.png'; 

import Part1Question2 from '../images/rotation-test/rotation-test-part-1/question-2/part-1-question-2.png';
import Part1Question2Answer1Option1 from '../images/rotation-test/rotation-test-part-1/question-2/answer-1.png'; 
import Part1Question2Answer1Option2 from '../images/rotation-test/rotation-test-part-1/question-2/answer-2.png'; 
import Part1Question2Answer1Option3 from '../images/rotation-test/rotation-test-part-1/question-2/answer-3.png'; 
import Part1Question2Answer1Option4 from '../images/rotation-test/rotation-test-part-1/question-2/answer-4.png'; 
import Part1Question2Answer1Option5 from '../images/rotation-test/rotation-test-part-1/question-2/answer-5.png'; 
import Part1Question2Answer1Option6 from '../images/rotation-test/rotation-test-part-1/question-2/answer-6.png'; 
import Part1Question2Answer1Option7 from '../images/rotation-test/rotation-test-part-1/question-2/answer-7.png'; 
import Part1Question2Answer1Option8 from '../images/rotation-test/rotation-test-part-1/question-2/answer-8.png'; 

import Part1Question3 from '../images/rotation-test/rotation-test-part-1/question-3/part-1-question-3.png';
import Part1Question3Answer1Option1 from '../images/rotation-test/rotation-test-part-1/question-3/answer-1.png'; 
import Part1Question3Answer1Option2 from '../images/rotation-test/rotation-test-part-1/question-3/answer-2.png'; 
import Part1Question3Answer1Option3 from '../images/rotation-test/rotation-test-part-1/question-3/answer-3.png'; 
import Part1Question3Answer1Option4 from '../images/rotation-test/rotation-test-part-1/question-3/answer-4.png'; 
import Part1Question3Answer1Option5 from '../images/rotation-test/rotation-test-part-1/question-3/answer-5.png'; 
import Part1Question3Answer1Option6 from '../images/rotation-test/rotation-test-part-1/question-3/answer-6.png'; 
import Part1Question3Answer1Option7 from '../images/rotation-test/rotation-test-part-1/question-3/answer-7.png'; 
import Part1Question3Answer1Option8 from '../images/rotation-test/rotation-test-part-1/question-3/answer-8.png';


import Part1Question4 from '../images/rotation-test/rotation-test-part-1/question-4/part-1-question-4.png';
import Part1Question4Answer1Option1 from '../images/rotation-test/rotation-test-part-1/question-4/answer-1.png'; 
import Part1Question4Answer1Option2 from '../images/rotation-test/rotation-test-part-1/question-4/answer-2.png'; 
import Part1Question4Answer1Option3 from '../images/rotation-test/rotation-test-part-1/question-4/answer-3.png'; 
import Part1Question4Answer1Option4 from '../images/rotation-test/rotation-test-part-1/question-4/answer-4.png'; 
import Part1Question4Answer1Option5 from '../images/rotation-test/rotation-test-part-1/question-4/answer-5.png'; 
import Part1Question4Answer1Option6 from '../images/rotation-test/rotation-test-part-1/question-4/answer-6.png'; 
import Part1Question4Answer1Option7 from '../images/rotation-test/rotation-test-part-1/question-4/answer-7.png'; 
import Part1Question4Answer1Option8 from '../images/rotation-test/rotation-test-part-1/question-4/answer-8.png'; 

import Part1Question5 from '../images/rotation-test/rotation-test-part-1/question-5/part-1-question-5.png';
import Part1Question5Answer1Option1 from '../images/rotation-test/rotation-test-part-1/question-5/answer-1.png'; 
import Part1Question5Answer1Option2 from '../images/rotation-test/rotation-test-part-1/question-5/answer-2.png'; 
import Part1Question5Answer1Option3 from '../images/rotation-test/rotation-test-part-1/question-5/answer-3.png'; 
import Part1Question5Answer1Option4 from '../images/rotation-test/rotation-test-part-1/question-5/answer-4.png'; 
import Part1Question5Answer1Option5 from '../images/rotation-test/rotation-test-part-1/question-5/answer-5.png'; 
import Part1Question5Answer1Option6 from '../images/rotation-test/rotation-test-part-1/question-5/answer-6.png'; 
import Part1Question5Answer1Option7 from '../images/rotation-test/rotation-test-part-1/question-5/answer-7.png'; 
import Part1Question5Answer1Option8 from '../images/rotation-test/rotation-test-part-1/question-5/answer-8.png';

import Part1Question6 from '../images/rotation-test/rotation-test-part-1/question-6/part-1-question-6.png';
import Part1Question6Answer1Option1 from '../images/rotation-test/rotation-test-part-1/question-6/answer-1.png'; 
import Part1Question6Answer1Option2 from '../images/rotation-test/rotation-test-part-1/question-6/answer-2.png'; 
import Part1Question6Answer1Option3 from '../images/rotation-test/rotation-test-part-1/question-6/answer-3.png'; 
import Part1Question6Answer1Option4 from '../images/rotation-test/rotation-test-part-1/question-6/answer-4.png'; 
import Part1Question6Answer1Option5 from '../images/rotation-test/rotation-test-part-1/question-6/answer-5.png'; 
import Part1Question6Answer1Option6 from '../images/rotation-test/rotation-test-part-1/question-6/answer-6.png'; 
import Part1Question6Answer1Option7 from '../images/rotation-test/rotation-test-part-1/question-6/answer-7.png'; 
import Part1Question6Answer1Option8 from '../images/rotation-test/rotation-test-part-1/question-6/answer-8.png';

import Part1Question7 from '../images/rotation-test/rotation-test-part-1/question-7/part-1-question-7.png';
import Part1Question7Answer1Option1 from '../images/rotation-test/rotation-test-part-1/question-7/answer-1.png'; 
import Part1Question7Answer1Option2 from '../images/rotation-test/rotation-test-part-1/question-7/answer-2.png'; 
import Part1Question7Answer1Option3 from '../images/rotation-test/rotation-test-part-1/question-7/answer-3.png'; 
import Part1Question7Answer1Option4 from '../images/rotation-test/rotation-test-part-1/question-7/answer-4.png'; 
import Part1Question7Answer1Option5 from '../images/rotation-test/rotation-test-part-1/question-7/answer-5.png'; 
import Part1Question7Answer1Option6 from '../images/rotation-test/rotation-test-part-1/question-7/answer-6.png'; 
import Part1Question7Answer1Option7 from '../images/rotation-test/rotation-test-part-1/question-7/answer-7.png'; 
import Part1Question7Answer1Option8 from '../images/rotation-test/rotation-test-part-1/question-7/answer-8.png';

import Part1Question8 from '../images/rotation-test/rotation-test-part-1/question-8/part-1-question-8.png';
import Part1Question8Answer1Option1 from '../images/rotation-test/rotation-test-part-1/question-8/answer-1.png'; 
import Part1Question8Answer1Option2 from '../images/rotation-test/rotation-test-part-1/question-8/answer-2.png'; 
import Part1Question8Answer1Option3 from '../images/rotation-test/rotation-test-part-1/question-8/answer-3.png'; 
import Part1Question8Answer1Option4 from '../images/rotation-test/rotation-test-part-1/question-8/answer-4.png'; 
import Part1Question8Answer1Option5 from '../images/rotation-test/rotation-test-part-1/question-8/answer-5.png'; 
import Part1Question8Answer1Option6 from '../images/rotation-test/rotation-test-part-1/question-8/answer-6.png'; 
import Part1Question8Answer1Option7 from '../images/rotation-test/rotation-test-part-1/question-8/answer-7.png'; 
import Part1Question8Answer1Option8 from '../images/rotation-test/rotation-test-part-1/question-8/answer-8.png';

import Part1Question9 from '../images/rotation-test/rotation-test-part-1/question-9/part-1-question-9.png';
import Part1Question9Answer1Option1 from '../images/rotation-test/rotation-test-part-1/question-9/answer-1.png'; 
import Part1Question9Answer1Option2 from '../images/rotation-test/rotation-test-part-1/question-9/answer-2.png'; 
import Part1Question9Answer1Option3 from '../images/rotation-test/rotation-test-part-1/question-9/answer-3.png'; 
import Part1Question9Answer1Option4 from '../images/rotation-test/rotation-test-part-1/question-9/answer-4.png'; 
import Part1Question9Answer1Option5 from '../images/rotation-test/rotation-test-part-1/question-9/answer-5.png'; 
import Part1Question9Answer1Option6 from '../images/rotation-test/rotation-test-part-1/question-9/answer-6.png'; 
import Part1Question9Answer1Option7 from '../images/rotation-test/rotation-test-part-1/question-9/answer-7.png'; 
import Part1Question9Answer1Option8 from '../images/rotation-test/rotation-test-part-1/question-9/answer-8.png';

import Part1Question10 from '../images/rotation-test/rotation-test-part-1/question-10/part-1-question-10.png';
import Part1Question10Answer1Option1 from '../images/rotation-test/rotation-test-part-1/question-10/answer-1.png'; 
import Part1Question10Answer1Option2 from '../images/rotation-test/rotation-test-part-1/question-10/answer-2.png'; 
import Part1Question10Answer1Option3 from '../images/rotation-test/rotation-test-part-1/question-10/answer-3.png'; 
import Part1Question10Answer1Option4 from '../images/rotation-test/rotation-test-part-1/question-10/answer-4.png'; 
import Part1Question10Answer1Option5 from '../images/rotation-test/rotation-test-part-1/question-10/answer-5.png'; 
import Part1Question10Answer1Option6 from '../images/rotation-test/rotation-test-part-1/question-10/answer-6.png'; 
import Part1Question10Answer1Option7 from '../images/rotation-test/rotation-test-part-1/question-10/answer-7.png'; 
import Part1Question10Answer1Option8 from '../images/rotation-test/rotation-test-part-1/question-10/answer-8.png';

import Part1Question11 from '../images/rotation-test/rotation-test-part-1/question-11/part-1-question-11.png';
import Part1Question11Answer1Option1 from '../images/rotation-test/rotation-test-part-1/question-11/answer-1.png'; 
import Part1Question11Answer1Option2 from '../images/rotation-test/rotation-test-part-1/question-11/answer-2.png'; 
import Part1Question11Answer1Option3 from '../images/rotation-test/rotation-test-part-1/question-11/answer-3.png'; 
import Part1Question11Answer1Option4 from '../images/rotation-test/rotation-test-part-1/question-11/answer-4.png'; 
import Part1Question11Answer1Option5 from '../images/rotation-test/rotation-test-part-1/question-11/answer-5.png'; 
import Part1Question11Answer1Option6 from '../images/rotation-test/rotation-test-part-1/question-11/answer-6.png'; 
import Part1Question11Answer1Option7 from '../images/rotation-test/rotation-test-part-1/question-11/answer-7.png'; 
import Part1Question11Answer1Option8 from '../images/rotation-test/rotation-test-part-1/question-11/answer-8.png';


import Timer from "../components/Timer"; 
import '../components/styles_css/PageStyle.css'; 

import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';

const RotationTestPart1 = () => {
    const navigate = useNavigate();

    // State to manage timer visibility
    const [timerVisible] = useState(true);

    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    const startTimeRef = useRef(null);
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null); 

    // const API_BASE_URL = 'https://backend.adg429.com';
    const API_BASE_URL = 'http://localhost:8080';

     // State to store responses
     const [responses, setResponses] = useState({
        prolific_id: prolificId,
        test_name: 'Rotation-Test-1',
        consent: consent === "yes" ? true : false,
        page_number: 9,
        responses: {},
        time_spent: 0
    });

    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

    const handleTimerCompletion = () => {
        navigate("/proceed-to-part2-rotation-test");
    };

    const question1 = Part1Question1; 
    const question1Answers = [
        Part1Question1Answer1Option1, Part1Question1Answer1Option2, Part1Question1Answer1Option3, Part1Question1Answer1Option4, 
        Part1Question1Answer1Option5, Part1Question1Answer1Option6, Part1Question1Answer1Option7, Part1Question1Answer1Option8
    ];

    const question2 = Part1Question2; 
    const question2Answers = [
        Part1Question2Answer1Option1, Part1Question2Answer1Option2, Part1Question2Answer1Option3, Part1Question2Answer1Option4,
        Part1Question2Answer1Option5, Part1Question2Answer1Option6, Part1Question2Answer1Option7, Part1Question2Answer1Option8
    ];

    const question3 = Part1Question3; 
    const question3Answers = [
        Part1Question3Answer1Option1, Part1Question3Answer1Option2, Part1Question3Answer1Option3, Part1Question3Answer1Option4,
        Part1Question3Answer1Option5, Part1Question3Answer1Option6, Part1Question3Answer1Option7, Part1Question3Answer1Option8
    ];

    const question4 = Part1Question4; 
    const question4Answers = [
        Part1Question4Answer1Option1, Part1Question4Answer1Option2, Part1Question4Answer1Option3, Part1Question4Answer1Option4,
        Part1Question4Answer1Option5, Part1Question4Answer1Option6, Part1Question4Answer1Option7, Part1Question4Answer1Option8
    ];

    const question5 = Part1Question5; 
    const question5Answers = [
        Part1Question5Answer1Option1, Part1Question5Answer1Option2, Part1Question5Answer1Option3, Part1Question5Answer1Option4,
        Part1Question5Answer1Option5, Part1Question5Answer1Option6, Part1Question5Answer1Option7, Part1Question5Answer1Option8
    ];

    const question6 = Part1Question6; 
    const question6Answers = [
        Part1Question6Answer1Option1, Part1Question6Answer1Option2, Part1Question6Answer1Option3, Part1Question6Answer1Option4, 
        Part1Question6Answer1Option5, Part1Question6Answer1Option6, Part1Question6Answer1Option7, Part1Question6Answer1Option8
    ];

    const question7 = Part1Question7; 
    const question7Answers = [
        Part1Question7Answer1Option1, Part1Question7Answer1Option2, Part1Question7Answer1Option3, Part1Question7Answer1Option4,
        Part1Question7Answer1Option5, Part1Question7Answer1Option6, Part1Question7Answer1Option7, Part1Question7Answer1Option8
    ];

    const question8 = Part1Question8; 
    const question8Answers = [
        Part1Question8Answer1Option1, Part1Question8Answer1Option2, Part1Question8Answer1Option3, Part1Question8Answer1Option4,
        Part1Question8Answer1Option5, Part1Question8Answer1Option6, Part1Question8Answer1Option7, Part1Question8Answer1Option8
    ];

    const question9 = Part1Question9; 
    const question9Answers = [
        Part1Question9Answer1Option1, Part1Question9Answer1Option2, Part1Question9Answer1Option3, Part1Question9Answer1Option4,
        Part1Question9Answer1Option5, Part1Question9Answer1Option6, Part1Question9Answer1Option7, Part1Question9Answer1Option8
    ];

    const question10 = Part1Question10; 
    const question10Answers = [
        Part1Question10Answer1Option1, Part1Question10Answer1Option2, Part1Question10Answer1Option3, Part1Question10Answer1Option4,
        Part1Question10Answer1Option5, Part1Question10Answer1Option6, Part1Question10Answer1Option7, Part1Question10Answer1Option8
    ];

    const question11 = Part1Question11; 
    const question11Answers = [
        Part1Question11Answer1Option1, Part1Question11Answer1Option2, Part1Question11Answer1Option3, Part1Question11Answer1Option4,
        Part1Question11Answer1Option5, Part1Question11Answer1Option6, Part1Question11Answer1Option7, Part1Question11Answer1Option8
    ];

    // const [answers, setAnswers] = useState({
    //     question1: Array(question1Answers.length).fill(null),
    //     question2: Array(question2Answers.length).fill(null),
    //     question3: Array(question3Answers.length).fill(null),
    //     question4: Array(question4Answers.length).fill(null),
    //     question5: Array(question5Answers.length).fill(null),
    //     question6: Array(question6Answers.length).fill(null),
    //     question7: Array(question7Answers.length).fill(null),
    //     question8: Array(question8Answers.length).fill(null),
    //     question9: Array(question9Answers.length).fill(null),
    //     question10: Array(question10Answers.length).fill(null),
    //     question11: Array(question11Answers.length).fill(null),
    // });
   

    // Function to handle change in response for a question
    const handleAnswerChange = (questionNumber, index, value) => {
        setResponses(prevResponses => ({
            ...prevResponses,
            responses: {
                ...prevResponses.responses,
                [`question_${questionNumber}`]: (
                    prevResponses.responses[`question_${questionNumber}`] 
                        ? prevResponses.responses[`question_${questionNumber}`] + "," + value
                        : value
                )
            }
        }));
    };

    // Function to handle form submission
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
            navigate("/proceed-to-part2-rotation-test");  // Navigate to the next page after successful submission
            } catch (error) {
                console.error('Error:', error);  // Log any errors
                setError(error);  // Set error state
            } finally {
                setLoading(false);  // Reset loading state
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
                    <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img>
                    <h2><strong><u>ROTATION TEST - PART 1</u></strong></h2>
                </p>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
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
                <br />
                <p><strong>[Q11]</strong></p>
                {renderQuestion(question11, question11Answers, 11)}
            </div>
            <br />
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

export default RotationTestPart1;