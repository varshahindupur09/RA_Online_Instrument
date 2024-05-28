import React from "react";
import logoImage from '../images/UCF_Logo.png'; 
import '../components/styles_css/PageStyle.css'; 


const ExitSurveyPage = () => {

    // const handle_exit_button = (value) => {
    
    // };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <p>
                    <img src={logoImage} alt="ucflogo" className="ucflogo"></img> <h2> Title of research study: Data Visualization and Financial Decision Making </h2>
                </p>
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
    );
};

export default ExitSurveyPage;
