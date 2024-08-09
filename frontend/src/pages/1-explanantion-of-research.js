// pages/1_explanantion_of_research.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useConsent } from './ConsentContext'; // Import the custom hook
import '../components/styles_css/RadioButton.css'; 
import '../components/styles_css/PageStyle.css'; 
import logoImage from '../images/UCF_Logo.png';
import Navbar from "../components/NavbarPage";
import TimerComponent from '../components/BigTimerComponent';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const FirstInstrConsent = () => {
    const navigate = useNavigate();
    const { consent, setConsent } = useConsent(); // Access consent from context
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const query = useQuery();
    const [prolificId, setProlificId] = useState('');

    useEffect(() => {
        const id = query.get('prolificId');
        if (id) {
          setProlificId(id);
          // Optionally, start a session here by calling the backend with the prolificId
        }
      }, [query]);

    const API_BASE_URL = 'https://backend.adg429.com';
    
    const [responses, setResponses] = useState({
        prolific_id: '123', // Set the default prolific_id
        test_name: 'First-Consent', // Set the default test name
        consent: false, // Initialize consent as boolean
        page_number: 1, // Page number
        responses: {}, // Initialize as an empty object to dynamically add responses
        time_spent: 0 // Add time_spent field
    });

    const startTimeRef = useRef(null);

    useEffect(() => {
        startTimeRef.current = Date.now();
    }, []);

    const handleConsent = (value) => {
        const consentValue = value === "yes"; // Convert to boolean
        setConsent(value); // Update context
        setResponses(prevResponses => ({
            ...prevResponses,
            consent: consentValue // Update local state
        }));
    };

    const handleNext = async (event) => {
        event.preventDefault(); // Prevent form submission default behavior
        setLoading(true);
    
        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
    
        // Ensure the updated responses use the actual state of consent directly
        const updatedResponses = {
            ...responses,
            time_spent: timeSpent,
            consent: consent === "yes" // Directly use the consent state
        };
    
        try {
            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedResponses), // Send updated responses
            });
    
            console.log('Response:', response);
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log('Success:', result);
    
            // Navigate based on the actual consent state from context
            if (consent === "yes") {
                navigate("/financial-literacy"); // Go to financial literacy if consent is "yes"
            } else {
                navigate("/ask-consent-again"); // Ask for consent again if not "yes"
            }
        } catch (error) {
            console.error('Error:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="LogoStyleImage">
                    <p>
                        <img src={logoImage} alt="ucflogo" className="ucflogo" /> 
                        <h2> EXPLANATION OF RESEARCH </h2> 
                    </p>
                    <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                </div>
                <br />
                <br />
                <br />
                <div name="instructions">
                    <div>
                        {prolificId && <p>Your Prolific ID: {prolificId}</p>}
                    </div>
                    <p>You are being invited to take part in a research study. Whether you take part is up to you.</p>  
                    <br />
                    <p>The purpose of this research is to examine how managers’ judgments and decisions might change when accounting information is presented visually.</p>  
                    <br />
                    <p>All parts of this study will take place online in the location of your choice. Participants will receive the survey via an online link. In Part A of the survey, you will complete some questions measuring your money management skills and two different activities where you will be presented with a series of shapes on the screen. You will be asked to mentally rotate or “unfold” each shape and then choose a matching representation from a set of several different possibilities presented on the screen. Next, you will perform a short imagination task where you will brainstorm ideas about an object presented to you on the screen. You will type as many of those ideas as you can into a text box over a two-minute period. Then in Part B of the survey, you will view a set of graphs containing data about a hypothetical company and its products. Participants in the study will be randomly assigned to see one of four different versions of these graphs.  You will use the data in the graphs to answer as many multiple-choice questions about the content of those graphs as possible in a limited amount of time. Finally, you will complete Part C of the survey, also online, containing a post-experimental questionnaire about your experiences during the study and some basic demographic information.</p>
                    <br />
                    <p>The study should be completed in one sitting and should take no more than 30 minutes to complete. You will receive a fixed payment of $4.00 for completing the study plus a small additional payment that varies between $0.00 and $3.20 depending on your performance on Parts A and B of the survey ($0.05 per correct answer that you provide). You can exit the study at any time but closing your web browser, but according to Prolific’s rules, you cannot be compensated unless you complete the study.</p> 
                    <br />
                    <p>At the end of the study, you will be asked to provide your Prolific ID so that we can pay you the amounts owed. All data will be retained for a minimum of 5 years after study closure in a password-protected UCF One Drive folder.</p>  
                    <br />
                    <p>To participate in this study, you must be a US resident, 18 years of age or older, have a basic degree of financial literacy, have some prior experience in a management position and have a minimum of 3 years of full-time work experience.</p>  

                    <div className="instructionsred">
                        <p className="contact-heading">Study contact for questions about the study or to report a problem:</p>
                        <div className="contact-info">
                            <p>If you have questions, concerns, or complaints:</p>
                            <p>
                                <strong>Kelly Wellman, PhD student, Business Administration-Accounting Track:</strong> 
                                <span className="email"> Kelly.Wellman@ucf.edu</span>
                            </p>
                            <p>
                                <strong>Dr. Theresa Libby, Faculty Supervisor, Dixon School of Accounting, College of Business:</strong> 
                                <span className="email"> Theresa.libby@ucf.edu</span>
                            </p>
                        </div>
                        
                        <p className="contact-heading">IRB contact about your rights in this study or to report a complaint:</p>
                        <div className="contact-info">
                            <p>If you have questions about your rights as a research participant, or have concerns about the conduct of this study, please contact the:</p>
                            <p>
                                <strong>Institutional Review Board (IRB), University of Central Florida:</strong>
                            </p>
                            <p>Office of Research, 12201 Research Parkway, Suite 501, Orlando, FL 32826-3246</p>
                            <p className="phone">By telephone at: (407) 823-2901</p>
                            <p className="email">Or by email: irb@ucf.edu</p>
                        </div>
                    </div>

                    <br />
                    <br />
                    <div name="instructions">
                        <p><i><strong>Consent</strong></i></p>
                        <p>Do you consent to participating in this study?</p>
                    </div>
                    <div className="radio-container"> 
                        <input 
                            type="radio" 
                            id="consent-no" 
                            name="consent" 
                            onChange={() => handleConsent("no")}
                        /> 
                        <label htmlFor="consent-no"> 
                            No
                        </label>
                        <input 
                            type="radio" 
                            id="consent-yes" 
                            name="consent" 
                            onChange={() => handleConsent("yes")}
                        />
                        <label htmlFor="consent-yes"> 
                            Yes
                        </label>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <button 
                        className="button" 
                        onClick={handleNext} 
                        disabled={loading || consent === null}
                    > 
                        Next 
                    </button>
                    {error && <p className="error-message">{error.message}</p>}
                </div>
            </div>
        </div>
    );
};

export default FirstInstrConsent;
