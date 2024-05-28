import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/RadioButton.css'; 
import '../components/styles_css/PageStyle.css'; 
import logoImage from '../images/UCF_Logo.png';
 
const FirstInstrConsent = () => {
    const navigate = useNavigate();
    const [consent, setConsent] = useState(null);

    const handleConsent = (value) => {
        setConsent(value);
    };

    const handleNext = () => {
        if (consent === "yes") {
            navigate("/paper-folding-test-sample-question");
        } else if (consent === "no") {
            navigate("/again-consent-page");
        }
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <p>
                    <img src={logoImage} alt="ucflogo" className="ucflogo"></img> <h2> Title of research study: Data Visualization and Financial Decision Making </h2>
                </p>
                <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <h2> Investigator: Kelly Wellman (PhD Student), Principal Investigator</h2>
            <br></br>
            <br></br>
            <br></br>
            <h3><u>KEY INFORMATION:</u></h3>
            <div name="instructions">
                <p> The following is a short summary of this study to help you decide whether or not to be a part of this study. More detailed information is listed later on in this form.</p>
                <br></br>
                <p><i><strong>Why am I being invited to take part in a research study?</strong></i></p>
                <p>We invite you to take part in a research study because you have responded to a request for participants.</p>
                <br></br>
                <p><i><strong>Why is this research being done?</strong></i></p>
                <p>This study is designed to identify potential participants for a follow up study to investigate how the visualization of financial data affects the quality of business decisions.</p>
                <br></br>
                <p><i><strong>How long will the research last and what will I need to do?</strong></i></p>
                <p>We expect that it will take 20-30 minutes to complete this study. You may then be invited to participate in a follow-up study within two weeks. You will be asked to complete a series of financial literacy and spatial ability measures as well as respond to some demographic questions.More detailed information about the study procedures can be found under “What happens if I say yes, I want to be in this research?”</p>
                <br></br>
                <p><strong>Is there any way being in this study could be bad for me?</strong></p>
                <p>The risks to participation are minimal and do not exceed the risks associated with activities found in daily life.</p>
                <br></br>
                <p><i><strong>Will being in this study help me any way?</strong></i></p>
                <p>We cannot promise any benefits to you or others from your taking part in this research. However, possible benefits include you will help advance academic research. </p>
                <br></br>
                <p><i><strong>What happens if I do not want to be in this research?</strong></i></p>
                <p>Participation in research is completely voluntary. You can decide to participate or not to participate. </p>
                <br></br>
                <h3><u>DETAILED INFORMATION:</u></h3>
                <br></br>
                <p>The following is more detailed information about this study in addition to the information listed above.</p>
                <br></br>
                <p><i><strong>What should I know about this research study?</strong></i></p>
                <ul>
                    <li>Someone will explain this research study to you.</li>
                    <li>Whether or not you take part is up to you.</li>
                    <li>You can choose not to take part.</li>
                    <li>You can agree to take part and later change your mind.</li>
                    <li>Your decision will not be held against you.</li>
                    <li> You can ask all the questions you want before you decide.</li>
                </ul>
                <br></br>
                <p><i><strong>Who can I talk to?</strong></i></p>
                <p>If you have questions, concerns, or complaints, or think the research has hurt you, talk to the research team: Kelly Wellman - kelly.wellman@ucf.edu or Dr. Theresa Libby - theresa.libby@ucf.edu </p>
                <br></br>
                <p> This research has been reviewed and approved by an Institutional Review Board (“IRB”). You may talk to them at 407-823-2901 or <u>irb@ucf.edu</u> if: </p>
                <ul>
                    <li>Your questions, concerns, or complaints are not being answered by the research team. </li>
                    <li>You cannot reach the research team. </li>
                    <li>You want to talk to someone besides the research team. </li>
                    <li>You have questions about your rights as a research subject. </li>
                    <li>You want to get information or provide input about this research. </li>
                </ul>
                <br></br>
                <p><i><strong>How many people will be studied?</strong></i></p>
                <p>We expect 400 people will be in this research study. </p>
                <br></br>
                <p><i><strong>What happens if I say yes, I want to be in this research?</strong></i></p>
                <p> You will be asked to: </p>
                <ul>
                    <li>You will be asked to complete a series of questions that measure your degree of financial literacy.</li>
                    <li>You will then be asked to complete two spatial ability measures (note that no special skills are required to complete these measures).Finally, you will be asked some demographic questions.</li>
                    <li>The entire survey should take you around 15 minutes.</li>
                </ul>
                <br></br>
                <p>What happens if I say yes, but I change my mind later?</p>
                <ul>
                    <li> What happens if I say yes, but I change my mind later?</li>
                    <li> You can leave the research at any time it will not be held against you. Should you choose to leave the study, you can just close your web browser. Your data will not be used and will be deleted. However, if you fail to complete the study, you will not be compensated.</li>
                </ul>
                <br></br>
                <p><i><strong>Is there any way being in this study could be bad for me? (Detailed Risks) What happens to the information collected for the research? What happens to the information collected for the research?</strong></i></p>
                <p>Efforts will be made to limit the use and disclosure of your personal information to people who have a need to review this information. We cannot promise complete secrecy. Organizations that may inspect and copy your information include the IRB and other representatives of this organization.</p>
                <p>All data is anonymized. We will retain your Prolific ID for two weeks, in order to contact you to invite you to complete the follow up study. All information will be kept on secure computers and only accessed by researchers connected to the study.</p>
                <br></br>
                <p><i>What else do I need to know?</i></p> 
                <p>If you agree to take part in this research study, we will pay you $5.00 for your time and effort and an additional bonus of $0.20 for each correctly answered question in the main study.</p>
            </div>
            <br></br>
            <div className="instructionsred">
                <p>In order to qualify for the future study you must meet the following requirements:</p>
                <ol>
                    <li>Have at least some college experience.</li>
                    <li>At least one year of work experience which involved both supervising employees and managing budgets.</li>
                    <li>Answer 2 out of 3 financial literacy questions correctly.</li>
                </ol>
            </div>
            <br></br>
            <br></br>
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button 
                className="button" 
                onClick={handleNext}> 
                Next 
            </button>
        </div>
    );
};
 
export default FirstInstrConsent;

