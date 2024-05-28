import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 
import logoImage from '../images/UCF_Logo.png';

const ProceedToPart2 = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/paper-folding-test-part-2-paper-folding-test");
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <p>
                    <img src={logoImage} alt="ucflogo" className="ucflogo"></img> <h2> Title of research study: Data Visualization and Financial Decision Making </h2>
                </p>
                <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div name="instructions">
                <p><strong>Please click Next when you are ready to start part 2 of the paper folding test.</strong></p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button 
                className="button" 
                onClick={handleNext}> 
                Next 
            </button>
        </div>
    );
};

export default ProceedToPart2;
