import React from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/InstructionsAndConsent.css'; 
import Part2Question1Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-1.png'; // Import Part 2 Question 1 image
import Part1Question2Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-2.png'; // Import Part 1 Question 2 image
import Part1Question3Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-3.png'; // Import Part 1 Question 3 image
import Part1Question4Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-4.png'; // Import Part 1 Question 4 image
import Part1Question5Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-5.png'; // Import Part 1 Question 5 image
import Part1Question6Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-6.png'; // Import Part 1 Question 6 image
import Part1Question7Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-7.png'; // Import Part 1 Question 7 image
import Part1Question8Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-8.png'; // Import Part 1 Question 8 image
import Part1Question9Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-9.png'; // Import Part 1 Question 9 image
import Part1Question10Image from '../images/fl-paper-folding-test/part-2-3-minutes/questions/part-2-question-10.png'; // Import Part 1 Question 10 image
import '../components/styles_css/ImageStyles.css';


const PaperFoldingPart2Questions = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/");
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
            <br></br>
            <img src={Part2Question1Image} alt="Part 2 Question 1 Image" />
            <br></br>
            <br></br>
            <img src={Part1Question2Image} alt="Part 1 Question 2 Image" />
            <br></br>
            <br></br>
            <img src={Part1Question3Image} alt="Part 1 Question 3 Image" />
            <br></br>
            <br></br>
            <img src={Part1Question4Image} alt="Part 1 Question 4 Image" />
            <br></br>
            <br></br>
            <img src={Part1Question5Image} alt="Part 1 Question 5 Image" />
            <br></br>
            <br></br>
            <img src={Part1Question6Image} alt="Part 1 Question 6 Image" />
            <br></br>
            <br></br>
            <img src={Part1Question7Image} alt="Part 1 Question 7 Image" />
            <br></br>
            <br></br>
            <img src={Part1Question8Image} alt="Part 1 Question 8 Image" />
            <br></br>
            <br></br>
            <img src={Part1Question9Image} alt="Part 1 Question 9 Image" />
            <br></br>
            <br></br>
            <img src={Part1Question10Image} alt="Part 1 Question 10 Image" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button className="button" onClick={handleNext}> Next </button>
        </div>
    );
};
 
export default PaperFoldingPart2Questions;
