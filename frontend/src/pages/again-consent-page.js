import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../components/styles_css/PageStyle.css'; 

const ConsentPage = () => {
    const navigate = useNavigate();
    const [consent, setConsent] = useState(null);

    const handleConsent = (value) => {
        setConsent(value);
    };

    const handleNext = () => {
        if (consent === "yes") {
            navigate("/financial-literacy");
        } else if (consent === "no") {
            navigate("/exit-survey-page");
        }
    };

    return (
        <div className="container">
            <h3>Sorry, you did not give consent to participate in this study.</h3>
            <h3>If you want to participate you need to click on Yes. If you do not wish to participate in this survey, please click on No. </h3>
            <br></br>
            <h3><i>Consent</i></h3>
            <div className="radio-container"> 
                <input 
                    type="radio" 
                    id="consent-no" 
                    name="consent" 
                    onChange={() => handleConsent("no")}
                    /> 
                <label htmlFor="consent-no"> 
                    No
                </label>
                <input 
                    type="radio" 
                    id="consent-yes" 
                    name="consent" 
                    onChange={() => handleConsent("yes")}
                    />
                <label htmlFor="consent-yes"> 
                    Yes
                </label>
            </div>
            <br></br>
            <button 
                className="button" 
                onClick={handleNext}> 
                Next 
            </button>
        </div>
    );
};

export default ConsentPage;
