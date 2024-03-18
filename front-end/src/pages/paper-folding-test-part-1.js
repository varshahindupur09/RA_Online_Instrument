import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Part1Question1Image from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-1.png'; // Import Part 1 Question 1 image
import Part1Question2Image from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-2.png'; // Import Part 1 Question 2 image
import Part1Question3Image from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-3.png'; // Import Part 1 Question 3 image
import Part1Question4Image from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-4.png'; // Import Part 1 Question 4 image
import Part1Question5Image from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-5.png'; // Import Part 1 Question 5 image
import Part1Question6Image from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-6.png'; // Import Part 1 Question 6 image
import Part1Question7Image from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-7.png'; // Import Part 1 Question 7 image
import Part1Question8Image from '../images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-8.png'; // Import Part 1 Question 8 image
import '../components/styles_css/ImageStyles.css';

const PaperFoldingPart1Questions = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/paper-folding-test-part-2");
    };

    return (
        <div className="container">
            <br />
            <h2>Paper Folding Part 1: Question</h2>
            <br />
            <br />
            <h3>This is a timed 3-minute test.</h3>
            <br />
            <br />
            <img src={Part1Question1Image} alt="Part1 Question1 Image" />
            <br />
            <br />
            <img src={Part1Question2Image} alt="Part1 Question2 Image" />
            <br />
            <br />
            <img src={Part1Question3Image} alt="Part1 Question3 Image" />
            <br />
            <br />
            <img src={Part1Question4Image} alt="Part1 Question4 Image" />
            <br />
            <br />
            <img src={Part1Question5Image} alt="Part1 Question5 Image" />
            <br />
            <br />
            <img src={Part1Question6Image} alt="Part1 Question6 Image" />
            <br />
            <br />
            <img src={Part1Question7Image} alt="Part1 Question7 Image" />
            <br />
            <br />
            <img src={Part1Question8Image} alt="Part1 Question8 Image" />
            <br />
            <br />
          
            {/* Next button */}
            <button className="button" onClick={handleNext}> Next </button>
        </div>
    );
};

export default PaperFoldingPart1Questions;
