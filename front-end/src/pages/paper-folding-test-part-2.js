import React from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/InstructionsAndConsent.css'; 
 
const PaperFoldingPart2Questions.js = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/");
    };

    return (
        <div className="container_paper_Folding_part2_questions">
            <br></br>
            <h2>Paper Folding Part 1: Question</h2>
            <br></br>
            <br></br>
            <h3>
                This is a timed 3 minute test.
            </h3>
            <br></br>
            <br></br>
            <img src="/images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-1.png"> 
            <h3>/* do you want user to select the options: this means i will have to keep all images question, options stored separately */</h3>
            </img>
            <br></br>
            <br></br>
            <img src="/images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-2.png">
            </img>
            <br></br>
            <br></br>
            <img src="/images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-3.png">
            </img>
            <br></br>
            <br></br>
            <img src="/images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-4.png">
            </img>
            <br></br>
            <br></br>
            <img src="/images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-5.png">
            </img>
            <br></br>
            <br></br>
            <img src="/images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-6.png">
            </img>
            <br></br>
            <br></br>
            <img src="/images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-7.png">
            </img>
            <br></br>
            <br></br>
            <img src="/images/fl-paper-folding-test/part-1-3-minutes/questions/part-1-question-8.png">
            </img>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button className="button" onClick={handleNext}> Next </button>
        </div>
    );
};
 
export default PaperFoldingPart1Questions;

