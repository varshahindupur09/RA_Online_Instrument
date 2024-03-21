import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/NavbarElements.css'; 
import Part2Question1Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-1.png'; // Import Part 2 Question 1 image
import Part2Question2Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-2.png'; // Import Part 1 Question 2 image
import Part2Question3Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-3.png'; // Import Part 1 Question 3 image
import Part2Question4Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-4.png'; // Import Part 1 Question 4 image
import Part2Question5Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-5.png'; // Import Part 1 Question 5 image
import Part2Question6Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-6.png'; // Import Part 1 Question 6 image
import Part2Question7Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-7.png'; // Import Part 1 Question 7 image
import Part2Question8Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-8.png'; // Import Part 1 Question 8 image
import Part2Question9Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-9.png'; // Import Part 1 Question 9 image
import Part2Question10Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-10.png'; // Import Part 1 Question 10 image
import '../components/styles_css/ImageStyles.css';
import Timer from "../components/Timer"; 

const PaperFoldingPart2Questions = () => {
    const navigate = useNavigate();
    // State to manage timer visibility
    const [timerVisible, setTimerVisible] = useState(true);

    // const handleNext = () => {
    //     navigate("/");
    // };

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
            <img src={Part2Question1Image} alt="Part 2 Question 1" />
            <br></br>
            <br></br>
            <img src={Part2Question2Image} alt="Part 2 Question 2" />
            <br></br>
            <br></br>
            <img src={Part2Question3Image} alt="Part 2 Question 3" />
            <br></br>
            <br></br>
            <img src={Part2Question4Image} alt="Part 2 Question 4" />
            <br></br>
            <br></br>
            <img src={Part2Question5Image} alt="Part 2 Question 5" />
            <br></br>
            <br></br>
            <img src={Part2Question6Image} alt="Part 2 Question 6" />
            <br></br>
            <br></br>
            <img src={Part2Question7Image} alt="Part 2 Question 7" />
            <br></br>
            <br></br>
            <img src={Part2Question8Image} alt="Part 2 Question 8" />
            <br></br>
            <br></br>
            <img src={Part2Question9Image} alt="Part 2 Question 9" />
            <br></br>
            <br></br>
            <img src={Part2Question10Image} alt="Part 2 Question 10" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <button className="button" onClick={handleNext}> Next </button> */}
        </div>
    );
};
 
export default PaperFoldingPart2Questions;
