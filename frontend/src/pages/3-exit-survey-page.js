import React from "react";
import logoImage from '../images/UCF_Logo.png'; 
import '../components/styles_css/PageStyle.css'; 
import Navbar from "../components/NavbarPage";

const ExitSurveyPage = () => {

    // const handle_exit_button = (value) => {
    
    // };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="LogoStyleImage">
                        <p>
                            <img src={logoImage} alt="ucflogo" className="ucflogo" /> 
                            <h2> EXIT SURVEY </h2> 
                        </p>
                        <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                    </div>
                <br></br>
                <br></br>
                <br></br>
                <div name="instructions">
                    <p><strong>Sad to see you go, have a good rest of your day!</strong></p>
                </div>
                <br></br>
                {/* <button 
                    className="button" 
                    onClick={handle_exit_button}> 
                    Next 
                </button> */}
                {/* <button 
                    className="button">
                    Next 
                </button> */}
            </div>
        </div>
    );
};

export default ExitSurveyPage;
