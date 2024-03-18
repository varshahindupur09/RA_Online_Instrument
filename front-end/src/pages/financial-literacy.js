import React from "react";
import { useNavigate } from "react-router-dom";

const FinancialLiteracy = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        const allQuestionsAnswered =
        document.querySelectorAll('input[type="radio"]:checked').length === 3;
        if (!allQuestionsAnswered) {
            // If not all questions are answered, display an alert
            alert("Please answer all questions before proceeding.");
        } else {
            // If all questions are answered, navigate to the next page
            navigate("/paper-folding-test-sample-question");
        }
    };

    return (
        <div className="container">
            <br />
            <h3>Thank you for agreeing to participate in this study. In this study, you will be first asked some questions that indicate your degree of financial literacy. This will be followed by two measures of your spatial ability and finally, several demographic questions.</h3>
            <br />
            <h3>Suppose you had $100 in a savings account and the interest rate was 2% per year. After 5 years, how much do you think you would have in the account if you left the money to grow?</h3>
            <div className="radio-container">
                <input type="radio" id="answer-fl-1-1" name="answer-fl-1" value="more than $102" />
                <label htmlFor="answer-fl-1-1">More than $102</label>
                <br />
                <input type="radio" id="answer-fl-1-2" name="answer-fl-1" value="exactly $102" />
                <label htmlFor="answer-fl-1-2">Exactly $102</label>
                <br />
                <input type="radio" id="answer-fl-1-3" name="answer-fl-1" value="less than $102" />
                <label htmlFor="answer-fl-1-3">Less than $102</label>
                <br />
                <input type="radio" id="answer-fl-1-4" name="answer-fl-1" value="do not know" />
                <label htmlFor="answer-fl-1-4">Do not know</label>
            </div>
            <br />
            <br />
            <h3>Imagine that the interest rate on your savings account was 1% per year and inflation was 2% per year. After 1 year, how much would you be able to buy with the money in this account?</h3>
            <div className="radio-container">
                <input type="radio" id="answer-fl-2-1" name="answer-fl-2" value="more than today" />
                <label htmlFor="answer-fl-2-1">More than today</label>
                <br />
                <input type="radio" id="answer-fl-2-2" name="answer-fl-2" value="exactly today" />
                <label htmlFor="answer-fl-2-2">Exactly today</label>
                <br />
                <input type="radio" id="answer-fl-2-3" name="answer-fl-2" value="less than today" />
                <label htmlFor="answer-fl-2-3">Less than today</label>
                <br />
                <input type="radio" id="answer-fl-2-4" name="answer-fl-2" value="do not know" />
                <label htmlFor="answer-fl-2-4">Do not know</label>
            </div>
            <br />
            <br />
            <h3>Please tell me whether this statement is true or false. “Buying a single company’s stock usually provides a safer return than a stock mutual fund.”</h3>
            <div className="radio-container">
                <input type="radio" id="answer-fl-3-1" name="answer-fl-3" value="true" />
                <label htmlFor="answer-fl-3-1">True</label>
                <br />
                <input type="radio" id="answer-fl-3-2" name="answer-fl-3" value="false" />
                <label htmlFor="answer-fl-3-2">False</label>
                <br />
                <input type="radio" id="answer-fl-3-3" name="answer-fl-3" value="do not know" />
                <label htmlFor="answer-fl-3-3">Do not know</label>
            </div>
            <br />
            <br />
            <button type="button" className="button" onClick={handleNext}> Next </button>
        </div>
    );
};
 
export default FinancialLiteracy;
