import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 

const ProceedToDemographicQuestions = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/proceed-to-demographic-questions");
    };

    return (
        <div className="container">
            <h3>Thank you for your participation. You're almost done! You will now be asked some basic demographic questions.</h3>
            <button 
                className="button" 
                onClick={handleNext}> 
                Next 
            </button>
        </div>
    );
};

export default ProceedToDemographicQuestions;
