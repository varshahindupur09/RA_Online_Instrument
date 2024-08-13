import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';

const ProceedToPart2RotationTest = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/rotation-test-part-2");
    };

    return (
        <div className="container">
             <div className="LogoStyleImage">
                <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img>
                <br></br>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <div name="instructions">
                <p>Please click Next when you are ready to start part 2 of the Rotation Test.</p>
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

export default ProceedToPart2RotationTest;
