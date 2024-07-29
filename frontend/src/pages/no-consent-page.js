import React from "react";
import { useNavigate } from 'react-router-dom';
import '../components/styles_css/NavbarElements.css'; 
import '../components/styles_css/PageStyle.css';
import logoImage from '../images/UCF_Logo.png'; 

const NoConsentPage = () => {
    const history = useNavigate();

    const handleGoBack = () => {
        history('/exit-survey-page');
      };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <p>
                    <img src={logoImage} alt="ucflogo" className="ucflogo"></img> 
                    {/* <h2> Title of research study: Data Visualization and Financial Decision Making </h2> */}
                </p>
            </div>
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
