import React , {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/styles_css/PageStyle.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';

const ProceedToPart1PaperFoldingTest = () => {
    const navigate = useNavigate(); 

    // / Prevent back button navigation
    useEffect(() => {
        const preventBackNavigation = () => {
            window.history.pushState(null, null, window.location.href);
        };

        preventBackNavigation();

        window.onpopstate = function() {
            window.history.go(1);
        };

        // Listen for clicks and key presses to ensure back button remains disabled
        window.addEventListener('click', preventBackNavigation);
        window.addEventListener('keydown', preventBackNavigation);

        // Clean up the event listeners on component unmount
        return () => {
            window.removeEventListener('click', preventBackNavigation);
            window.removeEventListener('keydown', preventBackNavigation);
        };
    }, []);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleNext = () => {
        navigate("paper-folding-test-sample-question")
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img>
                <br></br>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <div name="instructions">
                <p>
                    Next, you will answer some questions that will help me understand your spatial ability. Prior research shows that different people have different levels of spatial ability. Some people will find these questions easier while others will find them more difficult.
                </p>
                <p className="instructionsred">
                    <strong>
                        Please read the instructions carefully. In addition to the fixed payment of $4, you will receive a bonus of $0.05 for each correct answer that you provide. 
                    </strong>
                </p>  
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button 
                className="button" 
                onClick={handleNext}> 
                Next 
            </button>
            {error && <p className="error-message">{error.message}</p>}
        </div>
    );
};

export default ProceedToPart1PaperFoldingTest;
