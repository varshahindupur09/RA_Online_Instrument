import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles_css/PageStyle.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';
import '../components/styles_css/DemographicRadioButton.css'; 
import { useConsent } from './ConsentContext';

const Demographics = () => {
    const { consent } = useConsent(); 
    const [prolificId, setProlificId] = useState('');
    const startTimeRef = useRef(Date.now());
    const [error, setError] = useState(null);

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const [demographicData, setDemographicData] = useState({
        prolific_id: prolificId,
        test_name: 'Demographics-Questions',
        consent: consent === "yes" ? true : false, 
        page_number: 17,
        chart_number: 0,
        responses: {
            "age": '',
            "education-level": '',
            "work-experience": '',
            "management-experience": '',
            "employment-sector": ''
        },
        time_spent: 0 
    });

    // Update demographic data
    const handleChange = (field, value) => {
        setDemographicData(prev => ({
            ...prev,
            responses: {
                ...prev.responses,
                [field]: value
            }
        }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; 

        const updatedData = {
            ...demographicData,
            prolific_id: prolificId,
            time_spent: timeSpent
        };
        try {
            const response = await fetch(`${API_BASE_URL}/api/surveyresponse`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({updatedData})
            });

            if (!response.ok) {
                throw new Error('Failed to submit demographic data');
            }

        } catch (error) {
            console.error('Error:', error);
            setError(error);
        }
    };

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <img src={logoImageDoc} alt="ucflogo" className="ucflogo" />
                <h2><strong><u>DEMOGRAPHICS</u></strong></h2>
                <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
            </div>
            <p>Almost finished! Please respond to the demographic questions below in order to complete the survey.</p>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div name="instructions">
                    <label>What's your age?</label>
                    <br></br>
                    <br></br>
                        <input 
                            type="number" 
                            value={demographicData.responses.age}
                            onChange={e => handleChange("age", e.target.value)}
                            required
                            className="text-input"
                        />
                    <br></br>
                    <br></br>

                    <p>Please indicate the highest level of education you have completed.</p>
                    <div className="radio-option">
                        {["Some high school", "High school diploma", "Some college", "College diploma", "Undergraduate degree", "Graduate degree"].map(level => (
                            <div key={level}>
                            <input 
                                type="radio" 
                                id={`education-${level.replace(/\s+/g, '-')}`} // Create a unique ID by replacing spaces with dashes
                                name="education-level" 
                                value={level}
                                checked={demographicData.responses["education-level"] === level} 
                                onChange={e => handleChange("education-level", e.target.value)}
                            />
                            </div>
                        ))}
                    </div>
                    <br></br>
                    <br></br>

        
                    <p>How many years of work experience do you have?</p>
                    <div className="radio-option">
                        {["Less than one", "1-3", "3-5", "5-10", "More than 10"].map(years => (
                            <div key={years}>
                                <input 
                                    type="radio" 
                                    id={years.replace(/\s+/g, '')}
                                    name="work-experience" 
                                    value={years} 
                                    checked={demographicData.responses["work-experience"] === years} 
                                    onChange={e => handleChange("work-experience", e.target.value)}
                                />
                        </div>
                        ))}
                    </div>

                    <br></br>
                    <br></br>

                    <p>How many years of management experience do you have?</p>
                    <div className="radio-option">
                        {["Less than one", "1-3", "3-5", "5-10", "More than 10"].map(years => (
                            <div key={years}>
                            <input 
                                type="radio" 
                                id={`management-${years.replace(/\s+/g, '-')}`}
                                name="supervision-experience" 
                                value={years} 
                                checked={demographicData.responses["management-experience"] === years} 
                                onChange={e => handleChange("management-experience", e.target.value)}
                            />
                        </div>
                        ))}
                    </div>
                    <br></br>
                    <br></br>

                    <p>Which best describes your employment sector?</p>
                    <select 
                        value={demographicData.responses["employment-sector"]} 
                        onChange={e => handleChange("employment-sector", e.target.value)} 
                        className="dropdown"
                    >
                        {["Agriculture, Food and Natural Resources", "Architecture and Construction", "Arts", "Business Management and Administration", "Education and Training", "Finance", "Government and Public Administration", "Medicine", "Hospitality and Tourism", "Information Technology", "Legal", "Policing", "Military", "Manufacturing", "Marketing and Sales", "Science, Technology, Engineering and Mathematics", "Social Sciences", "Transportation, Distribution and Logistics", "Other"].map(sector => (
                            <option key={sector} value={sector}>{sector}</option>
                        ))}
                    </select>
                    <br></br>
                    <br></br>

                    <p>Thank you for your participation.</p>
                    <br></br>

                    <label>Please enter your Prolific ID here: </label>
                    <br></br>
                    <br></br>
                        <input 
                            type="number" 
                            value={demographicData.prolific_id}
                            onChange={e => setDemographicData(prev => ({
                                ...prev,
                                prolific_id: e.target.value
                            }))}
                            required
                            className="text-input-larger"
                        />
                    <br></br>
                    <br></br>
                    
                    <p>Your completion code is ******** .</p>

                    <button className="button" type="submit">Submit</button>
                    {error && <p className="error-message">{error.message}</p>}
                </div>
            </form>
        </div>
    );
};

export default Demographics;

