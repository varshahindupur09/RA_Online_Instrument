import React, { useState } from 'react';
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

import logoImage from '../images/UCF_Logo.png';
import Timer from "../components/Timer"; 

const RotationTestQuestion = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/proceed-to-part1-rotation-test");
    };

    const handleTimerCompletion = () => {
        navigate("/proceed-to-part1-rotation-test"); //if a breather is needed in between we can add it 
    };

    // State to manage timer visibility
    const [timerVisible] = useState(true);

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

    const [answers, setAnswers] = useState({
        question1: Array(question1Answers.length).fill(null),
        question2: Array(question2Answers.length).fill(null),
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
                    <img src={logoImage} alt="ucflogo" className="ucflogo"></img> <h2> Title of research study: Data Visualization and Financial Decision Making </h2>
                </p>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <br />
            <h2>Rotation Test:</h2>
            <br />
            <br />
            {timerVisible && <Timer initialTime={180} onCompletion={handleTimerCompletion} />}
            <br />
            <br />
                <div>
                    <p>Thank you for your participation thus far. Next you will answer some questions that will help me to understand a different aspect of your spatial ability. Prior research shows that there are different types of spatial ability, and these differences mean some people will find these questions easier while others will find them more difficult.</p>
                    <p><strong>Please read the instructions carefully.</strong></p>
                    <div className="instructionsred">
                        <strong>
                            <li>You may not leave the test until the 3 minutes are up, so it is in your interest to complete the test to the best of your ability.</li>
                            <li>You will receive $6.00 for your participation.</li>
                            <li>In addition, you will receive a bonus of $0.10 for each correct answer on the spatial ability tests.</li>
                        </strong>
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
                {renderQuestion(question2, question2Answers, 2)}
            </div>
            <br />
            <br />
            <br />
            <br />
            {/* Next button */}
            <button className="button" onClick={handleNext} > Next </button> 
            {/* disabled={!allAnswered} */}
        </div>
    );
};

export default RotationTestQuestion;