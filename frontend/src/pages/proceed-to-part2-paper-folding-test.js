import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';

const ProceedToPart2 = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/paper-folding-test-part-2");
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img>
                <br></br>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
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
