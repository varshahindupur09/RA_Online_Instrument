// pages/1_explanantion_of_research.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useConsent } from './ConsentContext'; // Import the custom hook
import '../components/styles_css/RadioButton.css'; 
import '../components/styles_css/PageStyle.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';
import { useLocation } from 'react-router-dom';

const FirstInstrConsent = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { consent, setConsent, prolificId, setProlificId } = useConsent();
    const [isConsentDisabled, setIsConsentDisabled ] = useState(true);
    const [ manualProlificIdSet, setManualProlificIdSet ] = useState(false); 

    //url catch
    const location = useLocation();
    // console.log("URL LOCATION ***** ", location)
    const query = new URLSearchParams(location.search);
    // console.log("URL QUERY ***** ", query)

    useEffect(() => {
        if (!manualProlificIdSet) {
            const id = query.get('PROLIFIC_PID');
            // const id = "66ce204a5c724a497b287acc"

            if (id && id.length === 24)  {
                setProlificId(id);
                console.log("Enabling consent buttons in useeffect for prolific id");  
                setIsConsentDisabled(false); // Enable consent buttons
            }
        }
    }, [query, setProlificId, manualProlificIdSet]);

    
    // Scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

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

    // const { consent, setConsent} = useConsent();

    // const API_BASE_URL = 'https://backend.adg429.com';
    // const API_BASE_URL = 'http://localhost:8080';

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const currentTime = Date.now();
    const currentTestUrl = "/";
    const previousTestUrl = "/";
    const test_name_given = 'First-Consent';
    
    const [responses, setResponses] = useState({
        prolific_id: '', // Set the default prolific_id
        test_name: test_name_given, // Set test name
        consent: false, // Initialize consent as boolean
        page_number: 1, // Page number of where we are navigating, helps with debugging
        chart_number: 0,
        responses: {}, // Initialize as an empty object to dynamically add responses
        graph_question_durations: [],
        per_graph_durations: [],
        time_spent: 0,
        started_at: currentTime, // Time when the survey began
        ended_at: currentTime, // Time when the survey ended
        time_user_entered_current_page: currentTime, // Time when the user entered the current page
        last_visited_test_name: previousTestUrl, // Update with the previously traversed url //contains urls of the last visited page
        current_visit_test_name: currentTestUrl,
        next_visit_test_name: currentTestUrl,
    });

    // Restrict navigation to ensure users can't jump to different pages
    useEffect(() => {
        if (window.location.pathname !== responses.next_visit_test_name) {
            navigate(responses.next_visit_test_name); // Redirect to the current test URL
        }
    }, [navigate, responses.next_visit_test_name]);


    // Handle input changes and validate Prolific ID format
    const handleInputChange = (e) => {
        const trimmedId = e.target.value.trim();
        setProlificId(trimmedId); // Update the Prolific ID in the ConsentContext
        console.log("Prolific ID entered handleInputChange: ", trimmedId);  // Debugging statement
        console.log("Prolific ID length handleInputChange: ", trimmedId.length);  // Debugging statement
        setManualProlificIdSet(true);

        // Enable consent if Prolific ID is exactly 24 characters
        if (trimmedId.length === 24) {
            console.log("Enabling consent buttons if Prolific ID is exactly 24 characters ");  // Debugging statement
            setIsConsentDisabled(false); 
        } else {
            console.log("Enabling consent buttons if Prolific ID is NOT exactly 24 characters");  // Debugging statement
            setIsConsentDisabled(true);  // Disable consent if Prolific ID is invalid
        }
    };

    const startTimeRef = useRef(null);

    useEffect(() => {
        startTimeRef.current = Date.now();
    }, [setProlificId]);

    const handleConsent = (value) => {
        const consentValue = value === "yes"; // Convert to boolean
        setConsent(value); // Update context
        setResponses(prevResponses => ({
            ...prevResponses,
            consent: consentValue // Update local state with the consent value from the form
        }));
    };

    useEffect(() => {
        // This is just to see if the code is working:
        const urlParams = new URLSearchParams(window.location.search);

        const prolificIdFromUrl = urlParams.get('PROLIFIC_PID');

        console.log("URL Prolific ID coming from URL: ", prolificIdFromUrl);
        console.log("URL Prolific ID coming from state: ", prolificId);

        if (prolificIdFromUrl) {
            setProlificId(prolificIdFromUrl);
        }

    }, []); // Empty dependency array to run this only once on component mount

    const handleNext = async (event) => {
        event.preventDefault(); // Prevent form submission default behavior
        setLoading(true);
    
        const endTime = Date.now();
        const timeSpent = (endTime - startTimeRef.current) / 1000; // Calculate time spent in seconds
    
        // Ensure the updated responses use the actual state of consent directly
        const updatedResponses = {
            ...responses,
            prolific_id: prolificId, // using prolific id from consent
            time_spent: timeSpent,
            last_visited_test_name: responses.current_visit_test_name, // Update the last visited page
            next_visit_test_name: consent === "yes" ? "/financial-literacy" : "/ask-consent-again", // The next page URL
        };
    
        let shouldNavigate = true; // Default to navigating unless an error occurs
    
        try {
            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedResponses), // Send updated responses
            });
    
            if (!response.ok) {
                const errorText = await response.text();
    
                shouldNavigate = false; // Prevent navigation if there's an error
                console.log("error ", errorText)
                throw new Error('Network response was not ok');
            }
    
        } catch (error) {
            console.error('Error:', error);
            window.alert(`Error: ${error.message || 'An unexpected error occurred.'}`);
            shouldNavigate = false; // Prevent navigation in case of an error
            setError(error);
        } finally {
            setLoading(false);
        }
    
        // Only navigate if there were no errors
        if (shouldNavigate) {
            navigate(updatedResponses.next_visit_test_name);
        }
    };    

    return (
        <div>
            {/* <Navbar /> */}
                <div className="container">
                    <div className="LogoStyleImage">
                        <p>
                            {/* <img src={logoImage} alt="ucflogo" className="ucflogo" />  */}
                            <img src={logoImageDoc} alt="ucflogo" className="ucflogo" />
                            <h2><strong><u>EXPLANATION OF RESEARCH</u></strong></h2> 
                        </p>
                        <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                    </div>
                    <br />
                    <br />
                    <br />
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                    <div name="instructions">
                        {/* Input field for Prolific ID, only visible if it hasn't been set via URL and not manually entered */}
                        {!prolificId && !manualProlificIdSet && (
                        <label>
                            Enter your Prolific ID: &nbsp;
                            <input
                                type="text"
                                value={prolificId || ''}
                                onChange={handleInputChange}
                                required
                                maxLength={24}  // Restrict the input length to 24 characters
                                pattern="[A-Za-z0-9]{24}" // Alphanumeric pattern, exactly 24 characters
                                title="Prolific ID must be exactly 24 characters long"
                            />
                        </label>
                        )}
                        <div>
                            {prolificId && <p>Your Prolific ID: {prolificId}</p>}
                        </div>

                        <br></br>
                        <br></br>


                        <div name="instructionsh3">
                            <h3><u>Title of Study:</u> Data Visualization in Managerial Judgments</h3>	    
                            <h3><u>Principal Investigator:</u> Kelly Wellman</h3>
                            <h3><u>Faculty Supervisor:</u> Dr. Theresa Libby</h3>
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
                            <br></br>
                            <br></br>
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
                                // disabled={isContentDisabled}
                                disabled={isConsentDisabled} // Disable based on state
                            /> 
                            <label htmlFor="consent-no"> 
                                No
                            </label>
                            <input 
                                type="radio" 
                                id="consent-yes" 
                                name="consent" 
                                onChange={() => handleConsent("yes")}
                                // disabled={isContentDisabled}
                                disabled={isConsentDisabled} // Disable based on state
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
                            // disabled={loading || consent === null} // Disable button until consent is selected
                            disabled={loading || consent === null || isConsentDisabled} // Disable button until consent is selected and content is interactive
                        > 
                            Next 
                        </button>
                        {error && <p className="error-message">{error.message}</p>}
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default FirstInstrConsent;