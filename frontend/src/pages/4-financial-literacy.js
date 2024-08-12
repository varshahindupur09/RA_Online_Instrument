import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css'; 
import Navbar from "../components/NavbarPage";
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useConsent } from './ConsentContext';

const FinancialLiteracy = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { prolificId, consent } = useConsent(); // Access Prolific ID and consent from context
    const startTimeRef = useRef(Date.now());

    // const API_BASE_URL = 'https://backend.adg429.com';
    const API_BASE_URL = 'http://localhost:8080';

    // State to store responses
    const [responses, setResponses] = useState({
        prolific_id: prolificId, 
        test_name: 'Financial-Literacy', 
        consent: consent === "yes" ? true : false, 
        page_number: 4, 
        responses: {}, // Dynamic responses based on user input
        time_spent: 0 
    });

    // Handle dynamic question responses
    const handleChange = (questionNumber, value) => {
        setResponses(prevResponses => ({
            ...prevResponses,
            responses: {
                ...prevResponses.responses,
                [`question_${questionNumber}`]: value
            }
        }));
    };

    const handleNext = async (event) => {
        event.preventDefault();
        setLoading(true);

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds

        // Update responses with the calculated time spent
        const updatedResponses = {
            ...responses,
            time_spent: timeSpent
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedResponses),
            });

            const responseText = await response.text();
            if (!response.ok) {
                throw new Error(responseText || 'Network response was not ok');
            }
            console.log('Response text:', responseText);
            navigate("/paper-folding-test-sample-question");

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
                        <img src={logoImageDoc} alt="ucflogo" className="ucflogo" /> 
                        <h2><strong><u>PART A</u></strong></h2> 
                    </p>
                    <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                </div>
                <div name="instructions">
                    <br />
                    <div className="instructionsFL">
                        <p>Thank you for agreeing to participate in this study. First, please choose the most correct response to the following questions to the best of your ability without using outside sources.</p>
                    </div>
                    <br />
                    {/* Question 1 */}
                    <div className="instructionsFL">
                        <h4>
                            Suppose you had $100 in a savings account and the interest rate was 2% per year. After 5 years, how much do you think you would have in the account if you left the money to grow?
                        </h4>
                    </div>
                    <div className="radio-container">
                        <input type="radio" id="answer-fl-1-1" name="answer-fl-1" value="more-than-$102" onChange={() => handleChange(1, "option1")} />
                        <label htmlFor="answer-fl-1-1">More than $102</label>
                        <br />
                        <input type="radio" id="answer-fl-1-2" name="answer-fl-1" value="exactly-$102" onChange={() => handleChange(1, "option2")} />
                        <label htmlFor="answer-fl-1-2">Exactly $102</label>
                        <br />
                        <input type="radio" id="answer-fl-1-3" name="answer-fl-1" value="less-than-$102" onChange={() => handleChange(1, "option3")} />
                        <label htmlFor="answer-fl-1-3">Less than $102</label>
                        <br />
                        <input type="radio" id="answer-fl-1-4" name="answer-fl-1" value="do-not-know" onChange={() => handleChange(1, "option4")} />
                        <label htmlFor="answer-fl-1-4">Do not know</label>
                    </div>
                    <br />
                    <br />
                    
                    <div className="instructionsFL">
                        <h4>
                            Imagine that the interest rate on your savings account was 1% per year and inflation was 2% per year. After 1 year, how much would you be able to buy with the money in this account?
                        </h4>
                    </div>
                    <div className="radio-container">
                        <input type="radio" id="answer-fl-2-1" name="answer-fl-2" value="more-than-today" onChange={() => handleChange(2, "option1")} />
                        <label htmlFor="answer-fl-2-1">More than today</label>
                        <br />
                        <input type="radio" id="answer-fl-2-2" name="answer-fl-2" value="exactly-today" onChange={() => handleChange(2, "option2")} />
                        <label htmlFor="answer-fl-2-2">Exactly today</label>
                        <br />
                        <input type="radio" id="answer-fl-2-3" name="answer-fl-2" value="less-than-today" onChange={() => handleChange(2, "option3")} />
                        <label htmlFor="answer-fl-2-3">Less than today</label>
                        <br />
                        <input type="radio" id="answer-fl-2-4" name="answer-fl-2" value="do-not-know" onChange={() => handleChange(2, "option4")} />
                        <label htmlFor="answer-fl-2-4">Do not know</label>
                    </div>
                    <br />
                    <br />

                    <div className="instructionsFL">
                        <h4>
                        Please tell me whether this statement is true or false. “Buying a single company’s stock usually provides a safer return than a stock mutual fund.”
                        </h4>
                    </div>
                    <div className="radio-container">
                        <input type="radio" id="answer-fl-3-1" name="answer-fl-3" value="true" onChange={() => handleChange(3, "option1")} />
                        <label htmlFor="answer-fl-3-1">True</label>
                        <br />
                        <input type="radio" id="answer-fl-3-2" name="answer-fl-3" value="false" onChange={() => handleChange(3, "option2")} />
                        <label htmlFor="answer-fl-3-2">False</label>
                        <br />
                        <input type="radio" id="answer-fl-3-3" name="answer-fl-3" value="do-not-know"onChange={() => handleChange(3, "option3")} />
                        <label htmlFor="answer-fl-3-3">Do not know</label>
                    </div>
                </div>
                <br />
                <br />
                <button type="button" className="button" onClick={handleNext}>Next</button>
                {error && <p className="error-message">{error.message}</p>}
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    );
};
 
export default FinancialLiteracy;
