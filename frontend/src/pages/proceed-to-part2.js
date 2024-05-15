import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 

const ProceedToPart2 = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/paper-folding-test-part-2");
    };

    return (
        <div className="container">
            <h3>Please click Next when you are ready to start part 2 of the paper folding test.</h3>
            <button 
                className="button" 
                onClick={handleNext}> 
                Next 
            </button>
        </div>
    );
};

export default ProceedToPart2;
