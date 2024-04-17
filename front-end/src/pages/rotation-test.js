import React from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css'; 

import Image1 from '../images/rotation_test/rotation_test_1.png';
import Image2 from '../images/rotation_test/rotation_test_2.png';
import sample_rotation_test from '../images/rotation_test/sample_rotation_test.png';

import rotation_question_1 from '../images/rotation_test/question-1/rotation_question_1.png';
import question1answer1 from '../images/rotation_test/question-1/answer-1/question-1-answer-1.png';
import question1answer2 from '../images/rotation_test/question-1/answer-1/question-1-answer-2.png';
import question1answer3 from '../images/rotation_test/question-1/answer-1/question-1-answer-3.png';
import question1answer4 from '../images/rotation_test/question-1/answer-1/question-1-answer-4.png';
import question1answer5 from '../images/rotation_test/question-1/answer-1/question-1-answer-5.png';
import question1answer6 from '../images/rotation_test/question-1/answer-1/question-1-answer-6.png';
import question1answer7 from '../images/rotation_test/question-1/answer-1/question-1-answer-7.png';
import question1answer8 from '../images/rotation_test/question-1/answer-1/question-1-answer-8.png';

import rotation_question_2 from '../images/rotation_test/question-2/rotation_question_2.png';
import question2answer1 from '../images/rotation_test/question-2/answer-2/question-2-answer-1.png';
import question2answer2 from '../images/rotation_test/question-2/answer-2/question-2-answer-2.png';
import question2answer3 from '../images/rotation_test/question-2/answer-2/question-2-answer-3.png';
import question2answer4 from '../images/rotation_test/question-2/answer-2/question-2-answer-4.png';
import question2answer5 from '../images/rotation_test/question-2/answer-2/question-2-answer-5.png';
import question2answer6 from '../images/rotation_test/question-2/answer-2/question-2-answer-6.png';
import question2answer7 from '../images/rotation_test/question-2/answer-2/question-2-answer-7.png';
import question2answer8 from '../images/rotation_test/question-2/answer-2/question-2-answer-8.png';

import '../components/styles_css/ImageStyles.css';

const RotationTestQuestion = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/proceed-to-part2");
    };

    const questionsAndAnswers = {
        question1: [question1answer1, question1answer2, question1answer3, question1answer4, question1answer5, question1answer6, question1answer7, question1answer8],
        question2: [question2answer1, question2answer2, question2answer3, question2answer4, question2answer5, question2answer6, question2answer7, question2answer8]
    };

    return (
        <div className="container">
            <br />
            <h2>Rotation Test:</h2>
            <br />
            <br />
            <br />
            <div>
                <p>Thank you for your participation thus far. Next you will answer some questions that will help me to understand a different aspect of your spatial ability. Prior research shows that there are different types of spatial ability, and these differences mean some people will find these questions easier while others will find them more difficult. Please read the instructions carefully. You may not leave the test until the 3 minutes are up, so it is in your interest to complete the test to the best of your ability. You will receive $6.00 for your participation. In addition, you will receive a bonus of $0.10 for each correct answer on the spatial ability tests.</p>
                <p>This is a test of your ability to see differences in figures. Look at the 5 triangle-shaped cards drawn below.</p>
                <img src={Image1} alt="rotation_test_1"></img>
            </div>
            
            <div>
                <p>All of these drawings are of the same card, which has been slid around into different positions on the page.</p>
                <p>You will have 3 minutes for each of the two parts of this test. Each part has 1 page. When you are ready to commence the test, please click the Next button.</p>
                <p>Now look at the 2 cards below:</p>
                <img src={Image2} alt="rotation_test_2"></img>
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
            <img src={sample_rotation_test} alt="sample_rotation_test"></img>
            <br />
            <br />
            {Object.keys(questionsAndAnswers).map((questionKey, questionIndex) => (
                <div key={questionKey}>
                    <img src={questionIndex === 0 ? rotation_question_1 : rotation_question_2} alt={`rotation_question_${questionIndex + 1}`} />
                    <div>
                        {questionsAndAnswers[questionKey].map((answerImage, answerIndex) => (
                            <div key={`answer-${questionIndex}-${answerIndex}`} className="radio-container">
                                <img src={answerImage} alt={`question_${questionIndex + 1}_answer_${answerIndex + 1}`}></img>
                                <label>
                                    <input type="radio" name={`question${questionIndex + 1}-answer${answerIndex + 1}`} value="same" /> Same
                                </label>
                                <label>
                                    <input type="radio" name={`question${questionIndex + 1}-answer${answerIndex + 1}`} value="different" /> Different
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <br />
            <br />
            <br />
            <br />
            {/* Next button */}
            <button className="button" onClick={handleNext}> Next </button>
        </div>
    );
};

export default RotationTestQuestion;