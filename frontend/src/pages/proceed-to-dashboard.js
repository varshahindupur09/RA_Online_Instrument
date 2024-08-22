import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 
import '../components/styles_css/otherpagestyles.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';

const ProceedToDashboard = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/dashboard-router");
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img>
                <br></br>
                <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <br></br>
            <div name="instructionsLeftAlign">
                <div>
                    <p>In the next part of this study, you are playing the role of an accounts manager at TechTron, a global company that produces electrical components. The CFO has some questions about sales trends over the past five years and you have been asked to respond using the company’s digital dashboard.</p> 
                    <br />
                    <p>When you click “continue” at the bottom of the page, you will be shown a digital dashboard that includes four charts detailing sales information for the last five years. You can enlarge each chart by clicking on it. You will be presented with a series of questions, and you should use the information in the charts to respond.</p>
                    <br />
                    <p><strong>You will have 7 minutes to complete this portion of the study. You will receive a $0.05 bonus for each question you answer correctly.</strong></p>
                </div>
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