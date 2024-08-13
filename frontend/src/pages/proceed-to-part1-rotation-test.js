import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css';
import logoImageDoc from '../images/UCF_logo_doc.png';

const ProceedToPart1RotationTest = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/rotation-test-part-1");
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img>
                <br></br>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <br></br>
            <div name="instructions">
                <p>Please click Next when you are ready to start part 1 of the Rotation Test.</p>
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

export default ProceedToPart1RotationTest;
