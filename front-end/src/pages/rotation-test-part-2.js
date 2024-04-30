import React, { useState } from "react";
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

const RotationTestPart2 = () => {
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

    const [answers, setAnswers] = useState({
        question1: Array(question1Answers.length).fill(null),
        question2: Array(question2Answers.length).fill(null),
        question3: Array(question3Answers.length).fill(null),
        question4: Array(question4Answers.length).fill(null),
        question5: Array(question5Answers.length).fill(null),
        question6: Array(question6Answers.length).fill(null),
        question7: Array(question7Answers.length).fill(null),
        question8: Array(question8Answers.length).fill(null),
        question9: Array(question9Answers.length).fill(null),
        question10: Array(question10Answers.length).fill(null),
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
            {renderQuestion(question6, question6Answers, 6)}
            <br />
            <br />
            {renderQuestion(question7, question7Answers, 7)}
            <br />
            <br />
            {renderQuestion(question8, question8Answers, 8)}
            <br />
            <br />
            {renderQuestion(question9, question9Answers, 9)}
            <br />
            <br />
            {renderQuestion(question10, question10Answers, 10)}
            <br />
            <br />
            <br />
            <br />
            {/* Next button */}
            <button className="button" onClick={handleNext} disabled={!allAnswered}> Next </button>
        </div>

            );
    };

export default RotationTestPart2;