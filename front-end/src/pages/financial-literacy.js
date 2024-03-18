import React from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/InstructionsAndConsent.css'; 
 
const FinancialLiteracy = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/");
    };

    return (
        <div className="container_financial_fiteracy">
            <br></br>
            <h3>Thank you for agreeing to participate in this study. In this study, you will be first asked some questions that indicate your degree of financial literacy. This will be followed by two measures of your spatial ability and finally, several demographic questions.</h3>
            <br></br>
            <br></br>
            <br></br>
            <h3>Suppose you had $100 in a savings account and the interest rate was 2% per year. After 5 years, how much do you think you would have in the account if you left the money to grow?</h3>
            <label htmlFor="answer-fl-1">
                <input type="radio" id="answer-fl-1-1" name="answer-fl-1-1" value="more than $102" />More than $102
                <input type="radio" id="answer-fl-1-2" name="answer-fl-1-2" value="exactly $102" />Exactly $102
                <input type="radio" id="answer-fl-1-3" name="answer-fl-1-3" value="less than $102" />Less than $102
                <input type="radio" id="answer-fl-1-4" name="answer-fl-1-4" value="do not know" />Do not know
            </label>
            <br></br>
            <br></br>
            <h3>Imagine that the interest rate on your savings account was 1% per year and inflation was 2% per year. After 1 year, how much would you be able to buy with the money in this account?</h3>
            <label htmlFor="answer-fl-2">
                <input type="radio" id="answer-fl-2-1" name="answer-fl-2-1" value="more than today" />More than today
                <input type="radio" id="answer-fl-2-2" name="answer-fl-2-2" value="exactly today" />Exactly today
                <input type="radio" id="answer-fl-2-3" name="answer-fl-2-3" value="less than today" />Less than today
                <input type="radio" id="answer-fl-2-4" name="answer-fl-2-4" value="do not know" />Do not know
            </label>
            <br></br>
            <br></br>
            <h3>Please tell me whether this statement is true or false. “Buying a single company’s stock usually provides a safer return than a stock mutual fund.”</h3>
            <label htmlFor="answer-fl-3">
                <input type="radio" id="answer-fl-3-1" name="answer-fl-3-1" value="true" />True
                <input type="radio" id="answer-fl-3-2" name="conanswer-fl-3-2" value="false" />False
                <input type="radio" id="answer-fl-3-3" name="answer-fl-3-3" value="do not know" />Do not know
            </label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button className="button" onClick={handleNext}> Next </button>
        </div>
    );
};
 
export default FinancialLiteracy;

