import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Part1Question1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/part-1-question-1.png'; // Import Part 1 Question 1 image
import Part1Question1Answer1Option1 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-1.png'; // Import Part 1 Question 1 image
import Part1Question1Answer1Option2 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-2.png'; // Import Part 1 Question 1 image
import Part1Question1Answer1Option3 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-3.png'; // Import Part 1 Question 1 image
import Part1Question1Answer1Option4 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-4.png'; // Import Part 1 Question 1 image
import Part1Question1Answer1Option5 from '../images/fl-paper-folding-test/part-1-3-minutes/question-1/answers-1/answer-1-option-5.png'; // Import Part 1 Question 1 image

import Part1Question2 from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-2.png'; // Import Part 1 Question 2 image
import Part1Question3 from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-3.png'; // Import Part 1 Question 3 image
import Part1Question4 from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-4.png'; // Import Part 1 Question 4 image
import Part1Question5 from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-5.png'; // Import Part 1 Question 5 image
import Part1Question6 from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-6.png'; // Import Part 1 Question 6 image
import Part1Question7 from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-7.png'; // Import Part 1 Question 7 image
import Part1Question8 from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-8.png'; // Import Part 1 Question 8 image
import '../components/styles_css/ImageStyles.css';
import '../components/styles_css/RadioButtonImage.css';
import Timer from "../components/Timer"; 

const PaperFoldingPart1Questions = () => {
    const navigate = useNavigate();

    // State to manage timer visibility
    const [timerVisible, setTimerVisible] = useState(true);

    // const handleNext = () => {
    //     navigate("/paper-folding-test-part-2");
    // };

    const handleTimerCompletion = () => {
        // setTimerVisible(false); 
        navigate("/paper-folding-test-part-2"); //if a breather is needed in between we can add it 
    };

    return (
        <div className="container">
            <br />
            <h2>Paper Folding Part 1: Question</h2>
            <br />
            <br />
            <h3>This is a timed 3-minute test.</h3>
            <br />
            {timerVisible && <Timer initialTime={180} onCompletion={handleTimerCompletion} />}
            {/* <img src={Part1Question1} alt="Part1 Question1" /> */}
            <img src={Part1Question1} alt="Part1 Question1" />
            <div className="radio-container">
                <input type="radio" id="Part1Question1Answer1Option1" name="Part1Question1Answer1"/>
                <label htmlFor="Part1Question1Answer1Option1">
                    <img src={Part1Question1Answer1Option1} alt="Part1Question1Answer1Option1" />
                </label>
                <br />
                <input type="radio" id="Part1Question1Answer1Option2" name="Part1Question1Answer1"/>
                <label htmlFor="Part1Question1Answer1Option2">
                    <img src={Part1Question1Answer1Option2} alt="Part1Question1Answer1Option2" />
                </label>
                <br />
                <input type="radio" id="Part1Question1Answer1Option3" name="Part1Question1Answer1"/>
                <label htmlFor="Part1Question1Answer1Option3">
                    <img src={Part1Question1Answer1Option3} alt="Part1Question1Answer1Option3" />
                </label>
                <br />
                <input type="radio" id="Part1Question1Answer1Option4" name="Part1Question1Answer1"/>
                <label htmlFor="Part1Question1Answer1Option4">
                    <img src={Part1Question1Answer1Option4} alt="Part1Question1Answer1Option4" />
                </label>
                <br />
                <input type="radio" id="Part1Question1Answer1Option5" name="Part1Question1Answer1"/>
                <label htmlFor="Part1Question1Answer1Option5">
                    <img src={Part1Question1Answer1Option5} alt="Part1Question1Answer1Option5" />
                </label>
            </div>
            <br />
            <br />
            <img src={Part1Question2} alt="Part1 Question2" />
            <br />
            <br />
            <img src={Part1Question3} alt="Part1 Question3" />
            <br />
            <br />
            <img src={Part1Question4} alt="Part1 Question4" />
            <br />
            <br />
            <img src={Part1Question5} alt="Part1 Question5" />
            <br />
            <br />
            <img src={Part1Question6} alt="Part1 Question6" />
            <br />
            <br />
            <img src={Part1Question7} alt="Part1 Question7" />
            <br />
            <br />
            <img src={Part1Question8} alt="Part1 Question8" />
            <br />
            <br />
          
            {/* Next button */}
            {/* <button className="button" onClick={handleNext}> Next </button> */}
        </div>
    );
};

export default PaperFoldingPart1Questions;
