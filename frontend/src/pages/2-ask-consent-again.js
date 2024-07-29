import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../components/styles_css/PageStyle.css'; 
import '../components/styles_css/RadioButton.css';
import logoImage from '../images/UCF_Logo.png';
import Navbar from "../components/NavbarPage";

const ConsentPage = () => {
    const navigate = useNavigate();
    const [consent, setConsent] = useState(null);

    const handleConsent = (value) => {
        setConsent(value);
    };

    const handleNext = () => {
        if (consent === "yes") {
            navigate("/paper-folding-test-sample-question");
        } else if (consent === "no") {
            navigate("/exit-survey-page");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="LogoStyleImage">
                    <p>
                        <img src={logoImage} alt="ucflogo" className="ucflogo" /> 
                        <h2> CONSENT </h2> 
                    </p>
                    <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div name="instructions">
                    <p><strong>If you do not consent, you cannot continue to participate in this study. Please choose to express your consent or leave the survey now.</strong></p>
                    <br></br>
                </div>
                <div className="radio-container"> 
                    <input 
                        type="radio" 
                        id="consent-no" 
                        name="consent" 
                        onChange={() => handleConsent("no")}
                        /> 
                    <label htmlFor="consent-no">I want to leave the survey now</label>
                    <input 
                        type="radio" 
                        id="consent-yes" 
                        name="consent" 
                        onChange={() => handleConsent("yes")}
                        />
                    <label htmlFor="consent-yes">I consent to participating in the study</label>
                </div>
                <br></br>
                <button 
                    className="button" 
                    onClick={handleNext}> 
                    Next 
                </button>
            </div>
        </div>
    );
};

export default ConsentPage;
