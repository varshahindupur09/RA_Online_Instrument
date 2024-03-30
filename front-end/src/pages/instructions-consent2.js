import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles_css/RadioButton.css'; 
 
const InstructionsAndConsent2 = () => {
    const navigate = useNavigate();
    const [consent, setConsent] = useState(null);

    const handleConsent = (value) => {
        setConsent(value);
    };

    const handleNext = () => {
        if (consent === "yes") {
            navigate("/financial-literacy");
        } else if (consent === "no") {
            navigate("/no-consent-page");
        }
    };


    return (
        <div className="container">
            <h1> Title of research study: Data Visualization and Financial Decision Making </h1>
            <h2> Investigator: Kelly Wellman (PhD Student), Principal Investigator</h2>
            <h3><u>KEY INFORMATION:</u></h3>
            <h3> The following is a short summary of this study to help you decide whether or not to be a part of this study. More detailed information is listed later on in this form.</h3>
            <br></br>
            <h3><i>Why am I being invited to take part in a research study?</i></h3>
            <h3>We invite you to take part in a research study because you have responded to a request for participants.</h3>
            <br></br>
            <h3><i>Why is this research being done?</i></h3>
            <h3>This study is designed to identify potential participants for a follow up study to investigate how the visualization of financial data affects the quality of business decisions.</h3>
            <br></br>
            <h3><i>How long will the research last and what will I need to do?</i></h3>
            <h3>We expect that it will take 20-30 minutes to complete this study. You may then be invited to participate in a follow-up study within two weeks. You will be asked to complete a series of financial literacy and spatial ability measures as well as respond to some demographic questions.More detailed information about the study procedures can be found under “What happens if I say yes, I want to be in this research?”</h3>
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
            <h3><u>DETAILED INFORMATION:</u></h3>
            <br></br>
            <h3>The following is more detailed information about this study in addition to the information listed above.</h3>
            <br></br>
            <h3><i> What should I know about this research study?</i></h3>
            <ul>
                <li>Someone will explain this research study to you.</li>
                <li>Whether or not you take part is up to you.</li>
                <li>You can choose not to take part.</li>
                <li>You can agree to take part and later change your mind.</li>
                <li>Your decision will not be held against you.</li>
                <li> You can ask all the questions you want before you decide.</li>
            </ul>
            <br></br>
            <h3><i> Who can I talk to? </i></h3>
            <h3> If you have questions, concerns, or complaints, or think the research has hurt you, talk to the research team: Kelly Wellman - kelly.wellman@ucf.edu or Dr. Theresa Libby - theresa.libby@ucf.edu </h3>
            <br></br>
            <h3> This research has been reviewed and approved by an Institutional Review Board (“IRB”). You may talk to them at 407-823-2901 or <u>irb@ucf.edu</u> if: </h3>
            <ul>
                <li>Your questions, concerns, or complaints are not being answered by the research team. </li>
                <li>You cannot reach the research team. </li>
                <li>You want to talk to someone besides the research team. </li>
                <li>You have questions about your rights as a research subject. </li>
                <li>You want to get information or provide input about this research. </li>
            </ul>
            <br></br>
            <h3><i> How many people will be studied? </i></h3>
            <h3> We expect 400 people will be in this research study. </h3>
            <br></br>
            <h3><i> What happens if I say yes, I want to be in this research? </i></h3>
            <h3> You will be asked to: </h3>
            <ul>
                <li>You will be asked to complete a series of questions that measure your degree of financial literacy.</li>
                <li>You will then be asked to complete two spatial ability measures (note that no special skills are required to complete these measures).Finally, you will be asked some demographic questions.</li>
T               <li>The entire survey should take you around 15 minutes.</li>
            </ul>
            <br></br>
            <h3>What happens if I say yes, but I change my mind later?</h3>
            <ul>
                <li> What happens if I say yes, but I change my mind later? </li>
                <li> You can leave the research at any time it will not be held against you. Should you choose to leave the study, you can just close your web browser. Your data will not be used and will be deleted. However, if you fail to complete the study, you will not be compensated.</li>
            </ul>
            <br></br>
            <h3><i>Is there any way being in this study could be bad for me? (Detailed Risks) What happens to the information collected for the research? What happens to the information collected for the research?</i></h3>
            <h3>Efforts will be made to limit the use and disclosure of your personal information to people who have a need to review this information. We cannot promise complete secrecy. Organizations that may inspect and copy your information include the IRB and other representatives of this organization.</h3>
            <h3>All data is anonymized. We will retain your Prolific ID for two weeks, in order to contact you to invite you to complete the follow up study. All information will be kept on secure computers and only accessed by researchers connected to the study.</h3>
            <br></br>
            <h3><i>What else do I need to know?</i></h3> 
            <h3>If you agree to take part in this research study, we will pay you $5.00 for your time and effort and an additional bonus of $0.20 for each correctly answered question in the main study.</h3>
            <br></br>
            <h3 style={{ color: 'red' }}>In order to qualify for the future study you must meet the following requirements:</h3>
            <ol  style={{ color: 'red' }}>
                <li>Have at least some college experience.</li>
                <li>At least one year of work experience which involved both supervising employees and managing budgets.</li>
                <li>Answer 2 out of 3 financial literacy questions correctly.</li>
            </ol>
            <br></br>
            <br></br>
            <h3><i>Consent</i></h3>
            <h3>Do you consent to participating in this study?</h3>
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
 
export default InstructionsAndConsent2;

