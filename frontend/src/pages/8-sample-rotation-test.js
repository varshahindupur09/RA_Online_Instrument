import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/RotationTestStyle.css';
import '../components/styles_css/RadioButtonImage.css';
import '../components/styles_css/ImageStyles.css';
import '../components/styles_css/PageStyle.css';

import Image1 from '../images/rotation-test/sample/rotation_test_1.png';
import Image2 from '../images/rotation-test/sample/rotation_test_2.png';
import sample_rotation_test from '../images/rotation-test/sample/sample_rotation_test.png';

import rotation_question_1 from '../images/rotation-test/sample/question-1/rotation_question_1.png';
import question1answer1 from '../images/rotation-test/sample/question-1/answer-1/question-1-answer-1.png';
import question1answer2 from '../images/rotation-test/sample/question-1/answer-1/question-1-answer-2.png';
import question1answer3 from '../images/rotation-test/sample/question-1/answer-1/question-1-answer-3.png';
import question1answer4 from '../images/rotation-test/sample/question-1/answer-1/question-1-answer-4.png';
import question1answer5 from '../images/rotation-test/sample/question-1/answer-1/question-1-answer-5.png';
import question1answer6 from '../images/rotation-test/sample/question-1/answer-1/question-1-answer-6.png';
import question1answer7 from '../images/rotation-test/sample/question-1/answer-1/question-1-answer-7.png';
import question1answer8 from '../images/rotation-test/sample/question-1/answer-1/question-1-answer-8.png';

import rotation_question_2 from '../images/rotation-test/sample/question-2/rotation_question_2.png';
import question2answer1 from '../images/rotation-test/sample/question-2/answer-2/question-2-answer-1.png';
import question2answer2 from '../images/rotation-test/sample/question-2/answer-2/question-2-answer-2.png';
import question2answer3 from '../images/rotation-test/sample/question-2/answer-2/question-2-answer-3.png';
import question2answer4 from '../images/rotation-test/sample/question-2/answer-2/question-2-answer-4.png';
import question2answer5 from '../images/rotation-test/sample/question-2/answer-2/question-2-answer-5.png';
import question2answer6 from '../images/rotation-test/sample/question-2/answer-2/question-2-answer-6.png';
import question2answer7 from '../images/rotation-test/sample/question-2/answer-2/question-2-answer-7.png';
import question2answer8 from '../images/rotation-test/sample/question-2/answer-2/question-2-answer-8.png';

import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';

const RotationTestQuestion = () => {
    const navigate = useNavigate();
    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    // const { consent } = useConsent();
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

    // const API_BASE_URL = 'https://backend.adg429.com';
    // const API_BASE_URL = 'http://localhost:8080';
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const currentTime = Date.now();
    const currentTestUrl = "/sample-rotation-test";
    const previousTestUrl = "/paper-folding-test-part-2";
    const test_name_given = 'Sample-Rotation-Test';

     // State to store responses
     const [responses, setResponses] = useState({
        prolific_id: prolificId,
        test_name: test_name_given,
        consent: consent === "yes" ? true : false,
        page_number: 8,
        chart_number: 0,
        responses: {
            SRT_question1: '',
            SRT_question2: '', // Creates an array of 8 empty string
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

    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

    // Restrict navigation to ensure users can't jump to different pages
    useEffect(() => {
        if (window.location.pathname !== responses.next_visit_test_name) {
            navigate(responses.next_visit_test_name); // Redirect to the current test URL
        }
    }, [navigate, responses.next_visit_test_name]);

    const question1 = rotation_question_1; 
    const question1Answers = [
      question1answer1, question1answer2, question1answer3, question1answer4, 
      question1answer5, question1answer6, question1answer7, question1answer8
    ];

    const question2 = rotation_question_2; 
    const question2Answers = [
        question2answer1, question2answer2, question2answer3, question2answer4,
        question2answer5, question2answer6, question2answer7, question2answer8
    ];

    const handleAnswerChange = (questionNumber, index, value) => {
        setResponses(prevResponses => {
            // Ensure the array exists, or create a new one with empty strings
            const questionKey = `SRT_question${questionNumber}`;
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
        // console.log("validateResponses: ", responses.responses); // Debugging: check the actual structure of responses
        const isQuestion1Answered = responses.responses.SRT_question1.split(',').every(answer => answer !== '');
        const isQuestion2Answered = responses.responses.SRT_question2.split(',').every(answer => answer !== '');
    
        return isQuestion1Answered && isQuestion2Answered; // Return true if both are fully answered
    };
    
    const handleNext = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Validate that all questions have been answered
        if (!validateResponses()) {
            window.alert("Please answer all the questions before proceeding.")
            setLoading(false);
            return; // Prevent form submission if validation fails
        }

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
        const nextTestUrl = "/attention-check"; 

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
            time_spent: timeSpent,
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
                                <input type="radio" name={`SRT_question${questionNumber}answer${index + 1}`} value="same"
                                    onChange={() => handleAnswerChange(`${questionNumber}`, index, 'same')} />
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>Different</td>
                        {answerImages.map((_, index) => (
                            <td key={`different-${index}`}>
                                <input type="radio" name={`SRT_question${questionNumber}answer${index + 1}`} value="different" 
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
            <div className="instructionsFL">
                <div className="LogoStyleImage">
                    <p>
                        <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img>
                        <h2><strong><u>SAMPLE ROTATION TEST</u></strong></h2>
                    </p>
                    <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                </div>
            <br />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <h2>Rotation Test:</h2>
            <br />
            <br />
                <div>
                    <p>Thank you for your participation thus far. Next you will answer some questions that will help me to understand a different aspect of your spatial ability. Prior research shows that there are different types of spatial ability, and these differences mean some people will find these questions easier while others will find them more difficult.</p>
                    <p><strong>Please read the instructions carefully.</strong></p>
                    <div className="instructionsred">
                        <strong>
                            <li>In addition to the fixed payment of $4, you will receive a bonus of 5 cents for each correct answer. Below two sample problems are for practice only. </li>                        </strong>
                    </div>
                    <p>This is a test of your ability to see differences in figures. Look at the 5 triangle-shaped cards drawn below.</p>
                    <div className='other_images'>
                        <img src={Image1} alt="rotation_test_related_images_1"></img>
                    </div>
                </div>
                
                <div>
                    <p>All of these drawings are of the same card, which has been slid around into different positions on the page.</p>
                    <p>You will have 3 minutes for each of the two parts of this test. Each part has 1 page. When you are ready to commence the test, please click the Next button.</p>
                    <p>Now look at the 2 cards below:</p>
                    <div className='other_images2'>
                        <img src={Image2} alt="rotation_test__related_images_2"></img>
                    </div>
                </div>
                <p>These two cards are not alike. The first cannot be made to look like the second by sliding it around on the page. It would have to be flipped over or made differently.</p>
                <br />
                <br />
                <br />
                <p>Each problem in this test consists of one figure on top and eight below. You are to decide whether each of the eight figures below is the same as or different from the figure on top.</p>
                <p>Mark the box beside Same if the figure is the same as the one on top. Mark the box beside Different if the figure is different from the one on top.</p>
                <p>Practice on the following rows. The first row has been correctly marked for you.</p>
                <br />
                <br />
                <div className="sample_test">
                    <img src={sample_rotation_test} alt="sample_rotation_test"></img>
                </div>
                <br />
                <br />
            <div name="instructions">
                {renderQuestion(question1, question1Answers, 1)}
                <br />
                <br />
                {renderQuestion(question2, question2Answers, 2)}
            </div>
            <br />
            <br />
            <br />
            <br />
            {/* Next button */}
            <button className="button" onClick={handleNext} > Next </button> 
            {/* disabled={!allAnswered} */}
            {error && <p>Error: {error.message}</p>}
        </div>
        </div>
    );
};

export default RotationTestQuestion;