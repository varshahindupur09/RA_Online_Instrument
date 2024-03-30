import React, { useState } from "react";
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

import '../components/styles_css/ImageStyles.css';
import '../components/styles_css/RadioButtonImage.css';
import Timer from "../components/Timer"; 

const PaperFoldingPart1Questions = () => {
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
                <input type="radio" id="Part1Question1Answer1Option1" name="PartQuestion1Answer1"/>
                <label htmlFor="Part1Question1Answer1Option1">
                    <img src={Part1Question1Answer1Option1} alt="Part1Question1Answer1Option1" />
                </label>
                <br />
                <input type="radio" id="Part1Question1Answer1Option2" name="PartQuestion1Answer1"/>
                <label htmlFor="Part1Question1Answer1Option2">
                    <img src={Part1Question1Answer1Option2} alt="Part1Question1Answer1Option2" />
                </label>
                <br />
                <input type="radio" id="Part1Question1Answer1Option3" name="PartQuestion1Answer1"/>
                <label htmlFor="Part1Question1Answer1Option3">
                    <img src={Part1Question1Answer1Option3} alt="Part1Question1Answer1Option3" />
                </label>
                <br />
                <input type="radio" id="Part1Question1Answer1Option4" name="PartQuestion1Answer1"/>
                <label htmlFor="Part1Question1Answer1Option4">
                    <img src={Part1Question1Answer1Option4} alt="Part1Question1Answer1Option4" />
                </label>
                <br />
                <input type="radio" id="Part1Question1Answer1Option5" name="PartQuestion1Answer1"/>
                <label htmlFor="Part1Question1Answer1Option5">
                    <img src={Part1Question1Answer1Option5} alt="Part1Question1Answer1Option5" />
                </label>
            </div>
            <br />
            <br />

            {/* <img src={Part1Question2} alt="Part1 Question2" /> */}
            <img src={Part1Question2} alt="Part1 Question2" />
            <div className="radio-container">
                <input type="radio" id="Part1Question2Answer2Option1" name="Part1Question2Answer2"/>
                <label htmlFor="Part1Question2Answer2Option1">
                    <img src={Part1Question2Answer2Option1} alt="Part1Question2Answer2Option1" />
                </label>
                <br />
                <input type="radio" id="Part1Question2Answer2Option2" name="Part1Question2Answer2"/>
                <label htmlFor="Part1Question2Answer2Option2">
                    <img src={Part1Question2Answer2Option2} alt="Part1Question2Answer2Option2" />
                </label>
                <br />
                <input type="radio" id="Part1Question2Answer2Option3" name="Part1Question2Answer2"/>
                <label htmlFor="Part1Question2Answer2Option3">
                    <img src={Part1Question2Answer2Option3} alt="Part1Question2Answer2Option3" />
                </label>
                <br />
                <input type="radio" id="Part1Question2Answer2Option4" name="Part1Question2Answer2"/>
                <label htmlFor="Part1Question2Answer2Option4">
                    <img src={Part1Question2Answer2Option4} alt="Part1Question2Answer2Option4" />
                </label>
                <br />
                <input type="radio" id="Part1Question2Answer2Option5" name="Part1Question2Answer2"/>
                <label htmlFor="Part1Question2Answer2Option5">
                    <img src={Part1Question2Answer2Option5} alt="Part1Question2Answer2Option5" />
                </label>
            </div>
            <br />
            <br />

            {/* <img src={Part1Question3} alt="Part1 Question3" /> */}
            <img src={Part1Question3} alt="Part1 Question3" />
            <div className="radio-container">
                <input type="radio" id="Part1Question3Answer3Option1" name="Part1Question3Answer3"/>
                <label htmlFor="Part1Question3Answer3Option1">
                    <img src={Part1Question3Answer3Option1} alt="Part1Question3Answer3Option1" />
                </label>
                <br />
                <input type="radio" id="Part1Question3Answer3Option2" name="Part1Question3Answer3"/>
                <label htmlFor="Part1Question3Answer3Option2">
                    <img src={Part1Question3Answer3Option2} alt="Part1Question3Answer3Option2" />
                </label>
                <br />
                <input type="radio" id="Part1Question3Answer3Option3" name="Part1Question3Answer3"/>
                <label htmlFor="Part1Question3Answer3Option3">
                    <img src={Part1Question3Answer3Option3} alt="Part1Question3Answer3Option3" />
                </label>
                <br />
                <input type="radio" id="Part1Question3Answer3Option4" name="Part1Question3Answer3"/>
                <label htmlFor="Part1Question3Answer3Option4">
                    <img src={Part1Question3Answer3Option4} alt="Part1Question3Answer3Option4" />
                </label>
                <br />
                <input type="radio" id="Part1Question3Answer3Option5" name="Part1Question3Answer3"/>
                <label htmlFor="Part1Question3Answer3Option5">
                    <img src={Part1Question3Answer3Option5} alt="Part1Question3Answer3Option5" />
                </label>
            </div>
            <br />
            <br />
            {/* <img src={Part1Question4} alt="Part1 Question4" /> */}
            <img src={Part1Question4} alt="Part1 Question4" />
            <div className="radio-container">
                <input type="radio" id="Part1Question4Answer4Option1" name="Part1Question4Answer4"/>
                <label htmlFor="Part1Question4Answer4Option1">
                    <img src={Part1Question4Answer4Option1} alt="Part1Question4Answer4Option1" />
                </label>
                <br />
                <input type="radio" id="Part1Question4Answer4Option2" name="Part1Question4Answer4"/>
                <label htmlFor="Part1Question4Answer4Option2">
                    <img src={Part1Question4Answer4Option2} alt="Part1Question4Answer4Option2" />
                </label>
                <br />
                <input type="radio" id="Part1Question4Answer4Option3" name="Part1Question4Answer4"/>
                <label htmlFor="Part1Question4Answer4Option3">
                    <img src={Part1Question4Answer4Option3} alt="Part1Question4Answer4Option3" />
                </label>
                <br />
                <input type="radio" id="Part1Question4Answer4Option4" name="Part1Question4Answer4"/>
                <label htmlFor="Part1Question4Answer4Option4">
                    <img src={Part1Question4Answer4Option4} alt="Part1Question4Answer4Option4" />
                </label>
                <br />
                <input type="radio" id="Part1Question4Answer4Option5" name="Part1Question4Answer4"/>
                <label htmlFor="Part1Question4Answer4Option5">
                    <img src={Part1Question4Answer4Option5} alt="Part1Question4Answer4Option5" />
                </label>
            </div>
            <br />
            <br />
            {/* <img src={Part1Question5} alt="Part1 Question5" /> */}
            <img src={Part1Question5} alt="Part1 Question5" />
            <div className="radio-container">
                <input type="radio" id="Part1Question5Answer5Option1" name="Part1Question5Answer5"/>
                <label htmlFor="Part1Question5Answer5Option1">
                    <img src={Part1Question5Answer5Option1} alt="Part1Question5Answer5Option1" />
                </label>
                <br />
                <input type="radio" id="Part1Question5Answer5Option2" name="Part1Question5Answer5"/>
                <label htmlFor="Part1Question5Answer5Option2">
                    <img src={Part1Question5Answer5Option2} alt="Part1Question5Answer5Option2" />
                </label>
                <br />
                <input type="radio" id="Part1Question5Answer5Option3" name="Part1Question5Answer5"/>
                <label htmlFor="Part1Question5Answer5Option3">
                    <img src={Part1Question5Answer5Option3} alt="Part1Question5Answer5Option3" />
                </label>
                <br />
                <input type="radio" id="Part1Question5Answer5Option4" name="Part1Question5Answer5"/>
                <label htmlFor="Part1Question5Answer5Option4">
                    <img src={Part1Question5Answer5Option4} alt="Part1Question5Answer5Option4" />
                </label>
                <br />
                <input type="radio" id="Part1Question5Answer5Option5" name="Part1Question5Answer5"/>
                <label htmlFor="Part1Question5Answer5Option5">
                    <img src={Part1Question5Answer5Option5} alt="Part1Question5Answer5Option5" />
                </label>
            </div>
            <br />
            <br />
            {/* <img src={Part1Question6} alt="Part1 Question6" /> */}
            <img src={Part1Question6} alt="Part1 Question6" />
            <div className="radio-container">
                <input type="radio" id="Part1Question6Answer6Option1" name="Part1Question6Answer6"/>
                <label htmlFor="Part1Question6Answer6Option1">
                    <img src={Part1Question6Answer6Option1} alt="Part1Question6Answer6Option1" />
                </label>
                <br />
                <input type="radio" id="Part1Question6Answer6Option2" name="Part1Question6Answer6"/>
                <label htmlFor="Part1Question6Answer6Option2">
                    <img src={Part1Question6Answer6Option2} alt="Part1Question6Answer6Option2" />
                </label>
                <br />
                <input type="radio" id="Part1Question6Answer6Option3" name="Part1Question6Answer6"/>
                <label htmlFor="Part1Question6Answer6Option3">
                    <img src={Part1Question6Answer6Option3} alt="Part1Question6Answer6Option3" />
                </label>
                <br />
                <input type="radio" id="Part1Question6Answer6Option4" name="Part1Question6Answer6"/>
                <label htmlFor="Part1Question6Answer6Option4">
                    <img src={Part1Question6Answer6Option4} alt="Part1Question6Answer6Option4" />
                </label>
                <br />
                <input type="radio" id="Part1Question6Answer6Option5" name="Part1Question6Answer6"/>
                <label htmlFor="Part1Question6Answer6Option5">
                    <img src={Part1Question6Answer6Option5} alt="Part1Question6Answer6Option5" />
                </label>
            </div>
            <br />
            <br />
            {/* <img src={Part1Question7} alt="Part1 Question7" /> */}
            <img src={Part1Question7} alt="Part1 Question7" />
            <div className="radio-container">
                <input type="radio" id="Part1Question7Answer7Option1" name="Part1Question7Answer7"/>
                <label htmlFor="Part1Question7Answer7Option1">
                    <img src={Part1Question7Answer7Option1} alt="Part1Question7Answer7Option1" />
                </label>
                <br />
                <input type="radio" id="Part1Question7Answer7Option2" name="Part1Question7Answer7"/>
                <label htmlFor="Part1Question7Answer7Option2">
                    <img src={Part1Question7Answer7Option2} alt="Part1Question6Answer6Option2" />
                </label>
                <br />
                <input type="radio" id="Part1Question7Answer7Option3" name="Part1Question7Answer7"/>
                <label htmlFor="Part1Question7Answer7Option3">
                    <img src={Part1Question7Answer7Option3} alt="Part1Question7Answer7Option3" />
                </label>
                <br />
                <input type="radio" id="Part1Question7Answer7Option4" name="Part1Question7Answer7"/>
                <label htmlFor="Part1Question7Answer7Option4">
                    <img src={Part1Question7Answer7Option4} alt="Part1Question7Answer7Option4" />
                </label>
                <br />
                <input type="radio" id="Part1Question7Answer7Option5" name="Part1Question7Answer7"/>
                <label htmlFor="Part1Question7Answer7Option5">
                    <img src={Part1Question7Answer7Option5} alt="Part1Question7Answer7Option5" />
                </label>
            </div>
            <br />
            <br />
            {/* <img src={Part1Question8} alt="Part1 Question8" /> */}
            <img src={Part1Question8} alt="Part1 Question8" />
            <div className="radio-container">
                <input type="radio" id="Part1Question8Answer8Option1" name="Part1Question8Answer8"/>
                <label htmlFor="Part1Question8Answer8Option1">
                    <img src={Part1Question8Answer8Option1} alt="Part1Question8Answer8Option1" />
                </label>
                <br />
                <input type="radio" id="Part1Question8Answer8Option2" name="Part1Question8Answer8"/>
                <label htmlFor="Part1Question8Answer8Option2">
                    <img src={Part1Question8Answer8Option2} alt="Part1Question8Answer8Option2" />
                </label>
                <br />
                <input type="radio" id="Part1Question8Answer8Option3" name="Part1Question8Answer8"/>
                <label htmlFor="Part1Question8Answer8Option3">
                    <img src={Part1Question8Answer8Option3} alt="Part1Question8Answer8Option3" />
                </label>
                <br />
                <input type="radio" id="Part1Question8Answer8Option4" name="Part1Question8Answer8"/>
                <label htmlFor="Part1Question8Answer8Option4">
                    <img src={Part1Question8Answer8Option4} alt="Part1Question8Answer8Option4" />
                </label>
                <br />
                <input type="radio" id="Part1Question8Answer8Option5" name="Part1Question8Answer8"/>
                <label htmlFor="Part1Question8Answer8Option5">
                    <img src={Part1Question8Answer8Option5} alt="Part1Question8Answer8Option5" />
                </label>
            </div>
            <br />
            <br />
          
            {/* Next button */}
            <button className="button" onClick={handleNext}> Next </button>
        </div>
    );
};

export default PaperFoldingPart1Questions;
