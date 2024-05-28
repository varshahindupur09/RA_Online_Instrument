import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../components/styles_css/PageStyle.css'; 
import logoImage from '../images/UCF_Logo.png';

const Home = () => {
    const navigate = useNavigate();
    const [prolificId, setProlificId] = useState("");

    const handleNext = () => {
        navigate("/first-instr-consent");
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <p>
                    <img src={logoImage} alt="ucflogo" className="ucflogo"></img> <h2> Title of research study: Data Visualization and Financial Decision Making </h2>
                    <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
                </p>
            </div>
            <h2>Please add your Prolific ID and your phone number in the fields below.</h2>
            <form className="form-container">
                <label htmlFor="prolificId">* Prolific ID:  </label>
                <input 
                    type="text" 
                    id="prolificId" 
                    value={prolificId} 
                    onChange={(e) => setProlificId(e.target.value)} 
                    required 
                />
                
                <br/>
                <br/>
                <br/>
                <br/>
            </form>
            <br/>
            <button 
                className="button" 
                onClick={handleNext}> 
                Next 
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Home;