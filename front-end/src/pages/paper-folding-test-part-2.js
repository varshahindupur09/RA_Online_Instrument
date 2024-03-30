import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Part2Question1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/part-2-question-1.png'; // Import Part 1 Question 1 image
import Part2Question1Answer1Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/answer-1/answer-1-option-1.png'; 
import Part2Question1Answer1Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/answer-1/answer-1-option-2.png'; 
import Part2Question1Answer1Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/answer-1/answer-1-option-3.png'; 
import Part2Question1Answer1Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/answer-1/answer-1-option-4.png'; 
import Part2Question1Answer1Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-1/answer-1/answer-1-option-5.png'; 

// import Part2Question2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/part-2-question-2.png'; // Import Part 1 Question 2 image
// import Part2Question2Answer2Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/answer-2/answer-2-option-1.png'; 
// import Part2Question2Answer2Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/answer-2/answer-2-option-2.png'; 
// import Part2Question2Answer2Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/answer-2/answer-2-option-3.png'; 
// import Part2Question2Answer2Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/answer-2/answer-2-option-4.png'; 
// import Part2Question2Answer2Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-2/answer-2/answer-2-option-5.png'; 

// import Part2Question3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/part-2-question-3.png'; // Import Part 1 Question 3 image
// import Part2Question3Answer3Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/answer-3/answer-3-option-1.png'; 
// import Part2Question3Answer3Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/answer-3/answer-3-option-2.png'; 
// import Part2Question3Answer3Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/answer-3/answer-3-option-3.png'; 
// import Part2Question3Answer3Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/answer-3/answer-3-option-4.png'; 
// import Part2Question3Answer3Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-3/answer-3/answer-3-option-5.png'; 

// import Part1Question4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/part-2-question-4.png'; // Import Part 1 Question 4 image
// import Part1Question4Answer4Option1 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/answer-4/answer-4-option-1.png'; 
// import Part1Question4Answer4Option2 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/answer-4/answer-4-option-2.png'; 
// import Part1Question4Answer4Option3 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/answer-4/answer-4-option-3.png'; 
// import Part1Question4Answer4Option4 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/answer-4/answer-4-option-4.png'; 
// import Part1Question4Answer4Option5 from '../images/fl-paper-folding-test/part-2-3-minutes/question-4/answer-4/answer-4-option-5.png'; 

import '../components/styles_css/ImageStyles.css';
import '../components/styles_css/RadioButtonImage.css';
import Timer from "../components/Timer"; 

const PaperFoldingPart2Questions = () => {
    const navigate = useNavigate();
    // State to manage timer visibility
    const [timerVisible, setTimerVisible] = useState(true);

    const handleNext = () => {
        navigate("/");
    };

    const handleTimerCompletion = () => {
        // setTimerVisible(false); 
        navigate("/"); //if a breather is needed in between we can add it 
    };

    return (
        <div className="container">
            <br></br>
            <h2>Paper Folding Part 2: Question</h2>
            <br></br>
            <br></br>
            <h3>
                This is a timed 3 minute test.
            </h3>
            <br></br>
            {timerVisible && <Timer initialTime={180} onCompletion={handleTimerCompletion} />}
            {/* <img src={Part2Question1Image} alt="Part 2 Question 1" /> */}
            <img src={Part2Question1} alt="Part2 Question1" />
            <div className="radio-container">
                <input type="radio" id="Part2Question1Answer1Option1" name="Part2Question1Answer1"/>
                <label htmlFor="Part2Question1Answer1Option1">
                    <img src={Part2Question1Answer1Option1} alt="Part2Question1Answer1Option1" />
                </label>
                <br />
                <input type="radio" id="Part2Question1Answer1Option2" name="Part2Question1Answer1"/>
                <label htmlFor="Part2Question1Answer1Option2">
                    <img src={Part2Question1Answer1Option2} alt="Part2Question1Answer1Option2" />
                </label>
                <br />
                <input type="radio" id="Part2Question1Answer1Option3" name="Part2Question1Answer1"/>
                <label htmlFor="Part2Question1Answer1Option3">
                    <img src={Part2Question1Answer1Option3} alt="Part2Question1Answer1Option3" />
                </label>
                <br />
                <input type="radio" id="Part2Question1Answer1Option4" name="Part2Question1Answer1"/>
                <label htmlFor="Part2Question1Answer1Option4">
                    <img src={Part2Question1Answer1Option4} alt="Part2Question1Answer1Option4" />
                </label>
                <br />
                <input type="radio" id="Part2Question1Answer1Option5" name="Part2Question1Answer1"/>
                <label htmlFor="Part2Question1Answer1Option5">
                    <img src={Part2Question1Answer1Option5} alt="Part2Question1Answer1Option5" />
                </label>
            </div>
            <br />
            <br />
            <br></br>
            <br></br>
            {/* <img src={Part2Question2Image} alt="Part 2 Question 2" /> */}
            <br></br>
            <br></br>
            {/* <img src={Part2Question3Image} alt="Part 2 Question 3" /> */}
            <br></br>
            <br></br>
            {/* <img src={Part2Question4Image} alt="Part 2 Question 4" /> */}
            <br></br>
            <br></br>
            {/* <img src={Part2Question5Image} alt="Part 2 Question 5" /> */}
            <br></br>
            <br></br>
            {/* <img src={Part2Question6Image} alt="Part 2 Question 6" /> */}
            <br></br>
            <br></br>
            {/* <img src={Part2Question7Image} alt="Part 2 Question 7" /> */}
            <br></br>
            <br></br>
            {/* <img src={Part2Question8Image} alt="Part 2 Question 8" /> */}
            <br></br>
            <br></br>
            {/* <img src={Part2Question9Image} alt="Part 2 Question 9" /> */}
            <br></br>
            <br></br>
            {/* <img src={Part2Question10Image} alt="Part 2 Question 10" /> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <button className="button" onClick={handleNext}> Next </button> */}
            {/* Next button */}
            <button className="button" onClick={handleNext}> Next </button>
        </div>
    );
};
 
export default PaperFoldingPart2Questions;
