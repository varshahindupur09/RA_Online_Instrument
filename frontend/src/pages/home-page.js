import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../components/styles_css/PageStyle.css'; 

const Home = () => {
    const navigate = useNavigate();
    const [prolificId, setProlificId] = useState("");

    const handleNext = () => {
        navigate("/instructions-consent2");
    };

    return (
        <div className="container">
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