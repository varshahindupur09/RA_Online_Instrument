import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css'; 
import '../components/styles_css/RotationTestStyle.css';

import Part1Question1 from '../images/rotation_test/rotation-test-part-1/question-1/part-1-question-1.png';
import Part1Question1Answer1Option1 from '../images/rotation_test/rotation-test-part-1/question-1/answer-1.png'; 
import Part1Question1Answer1Option2 from '../images/rotation_test/rotation-test-part-1/question-1/answer-2.png'; 
import Part1Question1Answer1Option3 from '../images/rotation_test/rotation-test-part-1/question-1/answer-3.png'; 
import Part1Question1Answer1Option4 from '../images/rotation_test/rotation-test-part-1/question-1/answer-4.png'; 
import Part1Question1Answer1Option5 from '../images/rotation_test/rotation-test-part-1/question-1/answer-5.png'; 
import Part1Question1Answer1Option6 from '../images/rotation_test/rotation-test-part-1/question-1/answer-6.png'; 
import Part1Question1Answer1Option7 from '../images/rotation_test/rotation-test-part-1/question-1/answer-7.png'; 
import Part1Question1Answer1Option8 from '../images/rotation_test/rotation-test-part-1/question-1/answer-8.png'; 

import Part1Question2 from '../images/rotation_test/rotation-test-part-1/question-2/part-1-question-2.png';
import Part1Question2Answer1Option1 from '../images/rotation_test/rotation-test-part-1/question-2/answer-1.png'; 
import Part1Question2Answer1Option2 from '../images/rotation_test/rotation-test-part-1/question-2/answer-2.png'; 
import Part1Question2Answer1Option3 from '../images/rotation_test/rotation-test-part-1/question-2/answer-3.png'; 
import Part1Question2Answer1Option4 from '../images/rotation_test/rotation-test-part-1/question-2/answer-4.png'; 
import Part1Question2Answer1Option5 from '../images/rotation_test/rotation-test-part-1/question-2/answer-5.png'; 
import Part1Question2Answer1Option6 from '../images/rotation_test/rotation-test-part-1/question-2/answer-6.png'; 
import Part1Question2Answer1Option7 from '../images/rotation_test/rotation-test-part-1/question-2/answer-7.png'; 
import Part1Question2Answer1Option8 from '../images/rotation_test/rotation-test-part-1/question-2/answer-8.png'; 

import Part1Question3 from '../images/rotation_test/rotation-test-part-1/question-3/part-1-question-3.png';
import Part1Question3Answer1Option1 from '../images/rotation_test/rotation-test-part-1/question-3/answer-1.png'; 
import Part1Question3Answer1Option2 from '../images/rotation_test/rotation-test-part-1/question-3/answer-2.png'; 
import Part1Question3Answer1Option3 from '../images/rotation_test/rotation-test-part-1/question-3/answer-3.png'; 
import Part1Question3Answer1Option4 from '../images/rotation_test/rotation-test-part-1/question-3/answer-4.png'; 
import Part1Question3Answer1Option5 from '../images/rotation_test/rotation-test-part-1/question-3/answer-5.png'; 
import Part1Question3Answer1Option6 from '../images/rotation_test/rotation-test-part-1/question-3/answer-6.png'; 
import Part1Question3Answer1Option7 from '../images/rotation_test/rotation-test-part-1/question-3/answer-7.png'; 
import Part1Question3Answer1Option8 from '../images/rotation_test/rotation-test-part-1/question-3/answer-8.png';


import Part1Question4 from '../images/rotation_test/rotation-test-part-1/question-4/part-1-question-4.png';
import Part1Question4Answer1Option1 from '../images/rotation_test/rotation-test-part-1/question-4/answer-1.png'; 
import Part1Question4Answer1Option2 from '../images/rotation_test/rotation-test-part-1/question-4/answer-2.png'; 
import Part1Question4Answer1Option3 from '../images/rotation_test/rotation-test-part-1/question-4/answer-3.png'; 
import Part1Question4Answer1Option4 from '../images/rotation_test/rotation-test-part-1/question-4/answer-4.png'; 
import Part1Question4Answer1Option5 from '../images/rotation_test/rotation-test-part-1/question-4/answer-5.png'; 
import Part1Question4Answer1Option6 from '../images/rotation_test/rotation-test-part-1/question-4/answer-6.png'; 
import Part1Question4Answer1Option7 from '../images/rotation_test/rotation-test-part-1/question-4/answer-7.png'; 
import Part1Question4Answer1Option8 from '../images/rotation_test/rotation-test-part-1/question-4/answer-8.png'; 

import Part1Question5 from '../images/rotation_test/rotation-test-part-1/question-5/part-1-question-5.png';
import Part1Question5Answer1Option1 from '../images/rotation_test/rotation-test-part-1/question-5/answer-1.png'; 
import Part1Question5Answer1Option2 from '../images/rotation_test/rotation-test-part-1/question-5/answer-2.png'; 
import Part1Question5Answer1Option3 from '../images/rotation_test/rotation-test-part-1/question-5/answer-3.png'; 
import Part1Question5Answer1Option4 from '../images/rotation_test/rotation-test-part-1/question-5/answer-4.png'; 
import Part1Question5Answer1Option5 from '../images/rotation_test/rotation-test-part-1/question-5/answer-5.png'; 
import Part1Question5Answer1Option6 from '../images/rotation_test/rotation-test-part-1/question-5/answer-6.png'; 
import Part1Question5Answer1Option7 from '../images/rotation_test/rotation-test-part-1/question-5/answer-7.png'; 
import Part1Question5Answer1Option8 from '../images/rotation_test/rotation-test-part-1/question-5/answer-8.png';

import Timer from "../components/Timer"; 
import '../components/styles_css/PageStyle.css'; 

const RotationTestPart1 = () => {
    const navigate = useNavigate();

    // State to manage timer visibility
    const [timerVisible, setTimerVisible] = useState(true);

    const handleNext = () => {
        navigate("/proceed-to-part2");
    };

    const handleTimerCompletion = () => {
        // setTimerVisible(false); 
        navigate("/proceed-to-part2"); //if a breather is needed in between we can add it 
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

    const [answers, setAnswers] = useState({
        question1: Array(question1Answers.length).fill(null),
        question2: Array(question2Answers.length).fill(null),
        question3: Array(question3Answers.length).fill(null),
        question4: Array(question4Answers.length).fill(null),
        question5: Array(question5Answers.length).fill(null),
    });

    const handleAnswerChange = (questionNumber, index, value) => {
        const newAnswers = { ...answers };
        newAnswers[questionNumber][index] = value;
        setAnswers(newAnswers);
    };    

    const allAnswered = Object.values(answers).every(question => question.every(answer => answer !== null));

    const renderQuestion = (questionImage, answerImages, questionNumber) => (
        <>
            <div className="question-image-container">
                <img src={questionImage} alt={`Question ${questionNumber}`} className="question-main-image" />
            </div>
            <table className="answers-table">
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
            <br />
            <h2>Rotation Test Part 1: 3 minutes</h2>
            <br />
            {timerVisible && <Timer initialTime={180} onCompletion={handleTimerCompletion} />}
            <br />
            <br />
                {renderQuestion(question1, question1Answers, 1)}
            <br />
            <br />
                {renderQuestion(question2, question2Answers, 2)}
            <br />
            <br />
                {renderQuestion(question3, question3Answers, 3)}
            <br />
            <br />
                {renderQuestion(question4, question4Answers, 4)}
            <br />
            <br />
                {renderQuestion(question5, question5Answers, 5)}
            <br />
            <br />
            <br />
            <br />
            {/* Next button */}
            <button className="button" onClick={handleNext} disabled={!allAnswered}> Next </button>
        </div>

            );
    };

export default RotationTestPart1;