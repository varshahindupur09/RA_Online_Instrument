// // demographic-questions
// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import '../components/styles_css/PageStyle.css'; 

// const EndFLPage = () => {
//     const navigate = useNavigate();

//     const handleNext = () => {
//         navigate("/end-survey");
//     };


//     return (
//         <div className="container">
//             <div className="LogoStyleImage">
//                 <p>
//                 <img src={logoImageDoc} alt="ucflogo" className="ucflogo" /> 
//                 <h2><strong><u>DEMOGRAPHICS</u></strong></h2> 
//                 </p>
//                 <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
//             </div>
//             <div>
//                 <p>Almost finished! Please respond to the demographic questions below in order to complete the survey.</p>
//             </div>
//             <div name="instructions">
//                 <label>
//                     What's your age?
//                     <input 
//                         type="number" 
//                         value='age'
//                         required
//                     />
//                 </label>
        
//                 {/* question 1 */}
//                 <p>
//                     Please indicate the highest level of education you have completed.
//                 </p>
//                 <div className="radio-container">
//                     <input type="radio" id="education-level-1" name="education-level" value="Some high school" />
//                     <label htmlFor="education-level-1">Some high school</label>
//                     <br />
//                     <input type="radio" id="education-level-2" name="education-level" value="High school diploma" />
//                     <label htmlFor="education-level-2">High school diploma</label>
//                     <br />
//                     <input type="radio" id="education-level-3" name="education-level" value="Some college" />
//                     <label htmlFor="education-level-3">Some college</label>
//                     <br />
//                     <input type="radio" id="education-level-4" name="education-level" value="College diploma" />
//                     <label htmlFor="education-level-4">College diploma</label>
//                     <br />
//                     <input type="radio" id="education-level-5" name="education-level" value="Undergraduate degree" />
//                     <label htmlFor="education-level-5">Undergraduate degree</label>
//                     <br />
//                     <input type="radio" id="education-level-6" name="education-level" value="Graduate degree" />
//                     <label htmlFor="education-level-6">Graduate degree</label>
//                 </div>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <p>
//                     How many years of work experience do you have?
//                 </p>
//                 <div className="radio-container">
//                     <input type="radio" id="work-experience-1" name="work-experience" value="Less than one" />
//                     <label htmlFor="work-experience-1">Less than one</label>
//                     <br />
//                     <input type="radio" id="work-experience-2" name="work-experience" value="1-3" />
//                     <label htmlFor="work-experience-2">1-3</label>
//                     <br />
//                     <input type="radio" id="work-experience-3" name="work-experience" value="3-5" />
//                     <label htmlFor="work-experience-3">3-5</label>
//                     <br />
//                     <input type="radio" id="work-experience-4" name="work-experience" value="5-10" />
//                     <label htmlFor="work-experience-4">5-10</label>
//                     <br />
//                     <input type="radio" id="work-experience-5" name="work-experience" value="More than 10" />
//                     <label htmlFor="work-experience-5">More than 10</label>
//                 </div>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <p>
//                     How many years of management experience do you have?                
//                 </p>
//                 <div className="radio-container">
//                     <input type="radio" id="supervision-experience-1" name="supervision-experience" value="Less than one" />
//                     <label htmlFor="supervision-experience-1">Less than one</label>
//                     <br />
//                     <input type="radio" id="supervision-experience-2" name="supervision-experience" value="1-3" />
//                     <label htmlFor="supervision-experience-2">1-3</label>
//                     <br />
//                     <input type="radio" id="supervision-experience-3" name="supervision-experience" value="3-5" />
//                     <label htmlFor="supervision-experience-3">3-5</label>
//                     <br />
//                     <input type="radio" id="supervision-experience-4" name="supervision-experience" value="5-10" />
//                     <label htmlFor="supervision-experience-4">5-10</label>
//                     <br />
//                     <input type="radio" id="supervision-experience-5" name="supervision-experience" value="More than 10" />
//                     <label htmlFor="supervision-experience-5">More than 10</label>
//                 </div>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <p>
//                     Which best describes your employment sector?
//                 </p>
//                 {/* need this to be a dropdown with different selection. */}
//             </div>
//             <br />
//             <br />
//             <br />
//             <br />
//             <button className="button" onClick={handleNext}> Next </button>
//         </div>
//     );
// };

// export default EndFLPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles_css/PageStyle.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';

const Demographics = () => {
    const navigate = useNavigate();
    const [age, setAge] = useState('');
    const [educationLevel, setEducationLevel] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [managementExperience, setManagementExperience] = useState('');
    const [employmentSector, setEmploymentSector] = useState('');

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const handleSubmit = async () => {
        const demographicData = {
            age,
            educationLevel,
            workExperience,
            managementExperience,
            employmentSector
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/demographicData`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(demographicData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit demographic data');
            }

            navigate("/paper-folding-test-sample-question");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <img src={logoImageDoc} alt="ucflogo" className="ucflogo" />
                <h2><strong><u>DEMOGRAPHICS</u></strong></h2>
                <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <p>Almost finished! Please respond to the demographic questions below in order to complete the survey.</p>
            <div name="instructions">
                <label>
                    What's your age?
                    <input 
                        type="number" 
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        required
                    />
                </label>

                <p>Please indicate the highest level of education you have completed.</p>
                <div className="radio-container">
                    {["Some high school", "High school diploma", "Some college", "College diploma", "Undergraduate degree", "Graduate degree"].map(level => (
                        <label key={level}>
                            <input type="radio" name="education-level" value={level} checked={educationLevel === level} onChange={() => setEducationLevel(level)} />
                            {level}
                        </label>
                    ))}
                </div>

                <p>How many years of work experience do you have?</p>
                <div className="radio-container">
                    {["Less than one", "1-3", "3-5", "5-10", "More than 10"].map(years => (
                        <label key={years}>
                            <input type="radio" name="work-experience" value={years} checked={workExperience === years} onChange={() => setWorkExperience(years)} />
                            {years}
                        </label>
                    ))}
                </div>

                <p>How many years of management experience do you have?</p>
                <div className="radio-container">
                    {["Less than one", "1-3", "3-5", "5-10", "More than 10"].map(years => (
                        <label key={years}>
                            <input type="radio" name="supervision-experience" value={years} checked={managementExperience === years} onChange={() => setManagementExperience(years)} />
                            {years}
                        </label>
                    ))}
                </div>

                <p>Which best describes your employment sector?</p>
                <select value={employmentSector} onChange={e => setEmploymentSector(e.target.value)}>
                    <option value="Agriculture, Food and Natural Resources">Agriculture, Food and Natural Resources</option>
                    <option value="Architecture and Construction">Architecture and Construction</option>
                    <option value="Arts">Arts</option>
                    <option value="Business Management and Administration">Business Management and Administration</option>
                    <option value="Education and Training">Education and Training</option>
                    <option value="Finance">Finance</option>
                    <option value="Government and Public Administration">Government and Public Administration</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Legal">Legal</option>
                    <option value="Policing">Policing</option>
                    <option value="Military">Military</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Marketing and Sales">Marketing and Sales</option>
                    <option value="Science, Technology, Engineering and Mathematics">Science, Technology, Engineering and Mathematics</option>
                    <option value="Social Sciences">Social Sciences</option>
                    <option value="Transportation, Distribution and Logistics">Transportation, Distribution and Logistics</option>
                    <option value="Other">Other</option>
                </select>

                <button className="button" onClick={handleSubmit}>Next</button>
            </div>
        </div>
    );
};

export default Demographics;

