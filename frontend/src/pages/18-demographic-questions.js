import React, { useState, useEffect, useRef } from 'react';
import '../components/styles_css/PageStyle.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';
import '../components/styles_css/DemographicRadioButton.css'; 
import { useConsent } from './ConsentContext';

const Demographics = () => {
    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const currentTime = Date.now();
    const currentTestUrl = "";
    const previousTestUrl = "/feedback-questions"; 
    const test_name_given = 'Demographics-Questions';
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const startTimeRef = useRef(Date.now());
    const { consent, chart_number, prolificId, setProlificId } = useConsent(); 

     // Prevent back button navigation
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


    const [demographicData, setDemographicData] = useState({
        prolific_id: '',
        test_name: test_name_given,
        consent: consent === "yes" ? true : false, 
        page_number: 18,
        chart_number: chart_number,
        responses: {
            "age": '',
            "education-level": '',
            "work-experience": '',
            "management-experience": '',
            "employment-sector": ''
        },
        graph_question_durations: [],
        per_graph_durations: [],
        time_spent: 0, 
        started_at: currentTime, // Time when the survey began
        ended_at: currentTime, // Time when the survey ended
        time_user_entered_current_page: currentTime, // Time when the user entered the current page
        last_visited_test_name: previousTestUrl, 
        current_visit_test_name: currentTestUrl,
        next_visit_test_name: currentTestUrl, 
    });

    // Restrict navigation to ensure users can't jump to different pages
    useEffect(() => {
        if (window.location.pathname !== responses.next_visit_test_name) {
            navigate(responses.next_visit_test_name); // Redirect to the current test URL
        }
    }, [navigate, responses.next_visit_test_name]);


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

    const handleProlificIdChange = (value) => {
        setDemographicData(prev => ({
            ...prev,
            prolific_id: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; 

        let nextTestUrl = "/demographic-questions";

        const updatedData = {
            ...demographicData,
            time_spent: timeSpent,
            next_visit_test_name: nextTestUrl, 
        };

        console.log("updated responses" , updatedData)

        try {
            const postResponse = await fetch(`${API_BASE_URL}/api/surveyresponse`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData)
            });

            console.log("response from POST" , postResponse)

            if (!postResponse.ok) {
                throw new Error('Failed to submit demographic data');
            }

            // no navigation as this is the end

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
                <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
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
                            value={demographicData.responses["age"]}
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
                            <label htmlFor={`education-${level.replace(/\s+/g, '-')}`}>{level}</label> {/* Correct label */}
                            </div>
                        ))}
                    </div>
                    <br></br>
                    <br></br>


                    <div className="radio-option">
                        <p>How many years of work experience do you have?</p>
                        {["Less than one", "1-3", "3-5", "5-10", "More than 10"].map(years => (
                            <div key={years}>
                                <input 
                                    type="radio" 
                                    id={`work-experience-${years.replace(/\s+/g, '-')}`} 
                                    name="work-experience" 
                                    value={years} 
                                    checked={demographicData.responses["work-experience"] === years} 
                                    onChange={e => handleChange("work-experience", e.target.value)}
                                />
                                <label htmlFor={`work-experience-${years.replace(/\s+/g, '-')}`}>{years}</label>
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
                                id={`management-experience-${years.replace(/\s+/g, '-')}`} 
                                name="supervision-experience" 
                                value={years} 
                                checked={demographicData.responses["management-experience"] === years} 
                                onChange={e => handleChange("management-experience", e.target.value)}
                            />
                             <label htmlFor={`management-experience-${years.replace(/\s+/g, '-')}`}>{years}</label>
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
                            type="text" 
                            id="prolific-id-input"
                            value={demographicData.prolific_id}
                            onChange={e => handleProlificIdChange(e.target.value)}
                            required
                            pattern="[A-Za-z0-9]+" // Alphanumeric patter
                            title="Prolific ID must be alphanumeric." // Tooltip for guidance
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

