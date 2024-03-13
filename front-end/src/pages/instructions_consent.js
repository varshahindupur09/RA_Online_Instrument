import React from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/InstructionsAndConsent.css'; 
 
const InstructionsAndConsent = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/");
    };

    return (
        <div className="container">
            <h1> Title of research study: Data Visualization </h1>
            <h2> Investigator: Kelly Wellman </h2>
            <h3> KEY INFORMATION </h3>
            <h3> The following is a short summary of this study to help you decide whether or not to be a part of this study. More detailed information is provided on the next page.</h3>
            <br></br>
            <h3><i>Why am I being invited to take part in a research study?</i></h3>
            <h3>We invite you to take part in a research study because you passed the screening questionnaire </h3>
            <br></br>
            <h3><i>Why is this research being done?</i></h3>
            <h3> This study is designed to investigate the optimal display of the visualization of financial data; taking into account individual characteristics. </h3>
            <br></br>
            <h3><i>How long will the research last and what will I need to do?</i></h3>
            <h3> We expect that you will be in this research study for the duration of this survey, approximately 30 minutes. You will be asked to answer questions based on data visualizations within an imagined scenario. You will then be asked to complete a survey about your experience. More detailed information about the study procedures can be found under “What happens if I say yes, I want to be in this research?” </h3>
            <br></br>
            <h3>Is there any way being in this study could be bad for me?</h3>
            <h3>The risks to participation are minimal and do not exceed the risks associated with activities found in daily life.</h3>
            <br></br>
            <h3><i>Will being in this study help me any way?</i></h3>
            <h3> We cannot promise any benefits to you or others from your taking part in this research. However, possible benefits include you will help advance academic research. </h3>
            <br></br>
            <h3><i>What happens if I do not want to be in this research?</i></h3>
            <h3> Participation in research is completely voluntary. You can decide to participate or not to participate. </h3>
            <br></br>
            <h3> DETAILED INFORMATION</h3>
            <br></br>
            <h3> The following is more detailed information about this study in addition to the information provided on the previous page.</h3>
            <br></br>
            <h3><i> What should I know about this research study? </i></h3>
            <ul>
                <li> Someone will explain this research study to you. </li>
                <li> Whether or not you take part is up to you. </li>
                <li> You can choose not to take part. </li>
                <li> You can agree to take part and later change your mind. </li>
                <li> You can ask all the questions you want before you decide. </li>
            </ul>
            <br></br>
            <h3><i> Who can I talk to? </i></h3>
            <h3> If you have questions, concerns, or complaints, or think the research has hurt you, talk to the research team: Kelly Wellman - kelly.wellman@ucf.edu or Dr. Theresa Libby - theresa.libby@ucf.edu </h3>
            <br></br>
            <h3> This research has been reviewed and approved by an Institutional Review Board (“IRB”). You may talk to them at 407-823-2901 or <u>irb@ucf.edu</u> if: </h3>
            <ul>
                <li> Your questions, concerns, or complaints are not being answered by the research team. </li>
                <li> You cannot reach the research team. </li>
                <li> You want to talk to someone besides the research team. </li>
                <li> You have questions about your rights as a research subject. </li>
                <li> You want to get information or provide input about this research. </li>
            </ul>
            <br></br>
            <h3><i> How many people will be studied? </i></h3>
            <h3> We expect 150 people will be in this research study. </h3>
            <br></br>
            <h3><i> What happens if I say yes, I want to be in this research? </i></h3>
            <h3> You will be asked to: </h3>
            <ul>
                <li> Respond to questions based on the visualization of financial data.</li>
                <li> Complete a survey about your experience. </li>
            </ul>
            <br></br>
            <h3>What happens if I say yes, but I change my mind later?</h3>
            <ul>
                <li> What happens if I say yes, but I change my mind later? </li>
                <li> You can leave the research at any time it will not be held against you. Should you choose to leave the study your data will not be used and will be deleted. </li>
            </ul>
            <br></br>
            <h3><i> What else do I need to know? </i></h3> 
            <h3> If you agree to take part in this research study, we will pay you $5.00 for your time and effort and an additional bonus of $0.20 for each correctly answered question in the main study. </h3>
            <br></br>
            <h3><i>Consent</i></h3>
            <h3>Do you consent to participating in this study?</h3>
            <label htmlFor="consent-no">
                <input type="radio" id="consent-no" name="consent" value="no" /> No
            </label>
            <label htmlFor="consent-yes">
                <input type="radio" id="consent-yes" name="consent" value="yes" /> Yes
            </label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button className="button" onClick={handleNext}> Next </button>
        </div>
    );
};
 
export default InstructionsAndConsent;

