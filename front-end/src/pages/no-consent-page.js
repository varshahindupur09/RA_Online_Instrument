import React from "react";
import { useNavigate } from 'react-router-dom';
import '../components/styles_css/NavbarElements.css'; 

const NoConsentPage = () => {
    const history = useNavigate();

    const handleGoBack = () => {
        history('/instructions-consent');
      };

    return (
        <div className="container">
            <h3>Sorry, you did not give consent to participate in this study.</h3>
            <h3>If you change your mind and would like to participate, please let us know.</h3>
            <br></br>
            <button 
                className="button" 
                onClick={handleGoBack}
                >Back
            </button>
        </div>
    );
};

export default NoConsentPage;
