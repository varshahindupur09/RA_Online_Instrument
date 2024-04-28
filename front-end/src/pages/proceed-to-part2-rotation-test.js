import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 

const ProceedToPart2RotationTest = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/rotation-test-part-2");
    };

    return (
        <div className="container">
            <h3>Please click Next when you are ready to start part 2 of the Rotation Test.</h3>
            <button 
                className="button" 
                onClick={handleNext}> 
                Next 
            </button>
        </div>
    );
};

export default ProceedToPart2RotationTest;
