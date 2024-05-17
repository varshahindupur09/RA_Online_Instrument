import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 

const ProceedToPart1RotationTest = () => {
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/rotation-test-part-1");
    };

    return (
        <div className="container">
            <h3>Please click Next when you are ready to start part 1 of the Rotation Test.</h3>
            <button 
                className="button" 
                onClick={handleNext}> 
                Next 
            </button>
        </div>
    );
};

export default ProceedToPart1RotationTest;
