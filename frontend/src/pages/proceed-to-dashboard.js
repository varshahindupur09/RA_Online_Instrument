import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 
import logoImage from '../images/UCF_Logo.png'; 

const ProceedToDashboard = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/dashboard");
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <p>
                    <img src={logoImage} alt="ucflogo" className="ucflogo"></img> <h2> Title of research study: Data Visualization and Financial Decision Making </h2>
                    <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
                </p>
            </div>
            <div name="instructions">
                <p>Please click Next when you are ready to start Dashboard questions.</p>
            </div>
            <button 
                className="button" 
                onClick={handleNext}> 
                Next 
            </button>
        </div>
    );
};

export default ProceedToDashboard;
