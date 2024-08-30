import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css';  
import '../components/styles_css/dashboardStyles.css'; 
import '../components/styles_css/dashboardRadioButton.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';

//Structural - Col Graph
import StructuralColImage1 from "../images/dashboard/structural-col/small/1-left.png";
import StructuralColImage2 from "../images/dashboard/structural-col/small/1-right.png";
import StructuralColImage3 from "../images/dashboard/structural-col/small/2-left.png";
import StructuralColImage4 from "../images/dashboard/structural-col/small/2-right.png";

import StructuralColEnlargedImage1 from "../images/dashboard/structural-col/enlarged/1-left.png";
import StructuralColEnlargedImage2 from "../images/dashboard/structural-col/enlarged/1-right.png";
import StructuralColEnlargedImage3 from "../images/dashboard/structural-col/enlarged/2-left.png";
import StructuralColEnlargedImage4 from "../images/dashboard/structural-col/enlarged/2-right.png";

import { useConsent } from './ConsentContext';
import Timer from "../components/Timer";

const StructuralColDashboard = () => {
    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const { consent, prolificId, chart_number } = useConsent(); // Access consent and Prolific ID from context
    // const { consent, chart_number } = useConsent(); 

    const currentTime = Date.now();
    const currentTestUrl = "/structure-col-dashboard";
    const previousTestUrl = "/dashboard-router";
    const test_name_given = 'Structural-Col-Dashboard';

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

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [questionStartTime, setQuestionStartTime] = useState(new Date());
    const [graphStartTime, setGraphStartTime] = useState(null);
    const [questionDurations, setQuestionDurations] = useState([]);
    const [graphDurations, setGraphDurations] = useState([]);
    const [currentGraphDurations, setCurrentGraphDurations] = useState([]);

    const [responses, setResponses] = useState({
        prolific_id: '', 
        test_name: test_name_given, 
        consent: consent === "yes"? true : false, 
        page_number: 13, // Page number of where we are navigating, helps with debugging
        chart_number: chart_number,
        responses: {}, 
        graph_question_durations: [],
        per_graph_durations: [],
        time_spent: 0,
        started_at: currentTime, 
        ended_at: currentTime, 
        time_user_entered_current_page: currentTime, 
        current_visit_test_name: currentTestUrl,
        last_visited_test_name: previousTestUrl, 
    });

    // Restrict URL navigation to ensure users can't jump to different pages
    useEffect(() => {
        if (window.location.pathname !== responses.current_visit_test_name) {
            navigate(responses.current_visit_test_name); // Redirect to the current test URL
        }
    }, [navigate, responses.current_visit_test_name]);

    // State to manage timer visibility
    const [timerVisible] = useState(true);

    const questionsStructuralCol = [
        {
            question: "In which country were total unit sales of transistors lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which countries were unit sales of CRT03 equal?",
            options: ["US and Mexico", "Brazil and UK", "Mexico and UK", "Canada and Mexico", "US and UK"]
        },
        {
            question: "In which country were total unit sales of circuit boards highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were unit sales of CRT03 second lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were sales of TRN02 and TRN04 equal?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In what country were unit sales of CRT02 and CRT03 equal?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were the second-highest unit sales of TRN01?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were unit sales of CHP04 second lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were unit sales of CRT03 lowest? Regardless of the answer select Mexico.",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were unit sales of CHP03 and CHP04 closest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were unit sales of CRT02 second highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were total unit sales of chips lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were the unit sales of TRN03 the lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were total unit sales of chips?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which countries were unit sales of CHP01 and CHP02 closest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were unit sales of CHP03 highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were the total unit sales of all products lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were total unit sales lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In which country were total unit sales highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "What was the second highest-selling transistor product in the US?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"]
        },
        {
            question: "In what country were unit sales of CRT02 highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "In what country were unit sales of CRT04 lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        },
        {
            question: "Which transistor line had the lowest total unit sales across all six countries?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"]
        },
        {
            question: "In which country were unit sales of CHP03 second lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
        }
    ];

    const StructuralColImages = [
        StructuralColImage1,
        StructuralColImage2,
        StructuralColImage3,
        StructuralColImage4
    ];

    const StructuralColEnlargedImages = [
        StructuralColEnlargedImage1,
        StructuralColEnlargedImage2,
        StructuralColEnlargedImage3,
        StructuralColEnlargedImage4
    ];

    const openModal = (imgIndex) => {
        setSelectedImage(StructuralColEnlargedImages[imgIndex]);
        setModalIsOpen(true);
        setGraphStartTime(new Date());
    };

    const closeModal = () => {
        const endTime = new Date();
        const duration = (endTime - graphStartTime) / 1000; // Duration in seconds
        setCurrentGraphDurations(prevDurations => [...prevDurations, duration]);
        setModalIsOpen(false);
    };

    const handleNext = async () => {
        const endTime = new Date();
        const questionDuration = (endTime - questionStartTime) / 1000; // Duration in seconds
        setQuestionDurations(prevDurations => [...prevDurations, questionDuration]);
        setGraphDurations(prevDurations => [...prevDurations, [...currentGraphDurations]]); // Ensure deep copy
    
        console.log(`Time spent on question ${questionIndex + 1}: ${questionDuration} seconds`);
        console.log(`Time spent on each graph for question ${questionIndex + 1}:`, currentGraphDurations);

        let nextTestUrl = "";
    
        if (questionIndex < questionsStructuralCol.length - 1) {
            // Prepare for the next question
            setQuestionIndex(questionIndex + 1);
            setSelectedOption('');
            setQuestionStartTime(new Date()); // Reset the start time for the next question
            setCurrentGraphDurations([]); // Clear current graph durations
        } 
        else 
        {
            nextTestUrl = "/feedback-questions";
            const updatedresponses = {
                ...responses,
                prolific_id: prolificId,
                question_durations: questionDurations,
                graph_durations: graphDurations,
                next_visit_test_name: nextTestUrl, // The next page URL
            };

            try {
                const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedresponses), // Send responses to the backend
                });
    
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
    
                const result = await response.json();
                console.log('Success:', result);

                navigate(nextTestUrl);  // Navigate to the next page

            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        if (questionIndex >= questionsStructuralCol.length) {
            console.log("Durations for each question:", questionDurations);
            console.log("Durations for each graph in each question:", graphDurations);
        }
    }, [questionIndex, questionDurations, graphDurations]);

    const handleTimerCompletion = () => {
        let nextTestUrl = "/feedback-questions";
        navigate(nextTestUrl);
    };


    return (
        <div className="container">
            <div className="containerDashboard">
                <div className="LogoStyleImage">
                    <p>
                        <img src={logoImageDoc} alt="ucflogo" className="ucflogo"></img> 
                        <h2><strong><u>PART B</u></strong></h2> 
                    </p>
                    <p>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>    
                </div>
                <br />
                <br />
                {/* {timerVisible && <Timer initialTime={420} onCompletion={handleTimerCompletion} />} */}
                <br />
                <br />
                <br />
                {/* {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>} */}
                <div className="image-grid">
                    {StructuralColImages.map((imgSrc, index) => (
                        <div className="image-item" key={index}>
                            <img 
                                src={imgSrc}
                                alt={`Dashboard Chart ${index + 1}`}
                                onClick={() => openModal(index)}
                                className="grid-image"
                            />
                        </div>
                    ))}
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Image Modal"
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            width: '850px',
                            height: '700px'
                        }
                    }}
                >
                    <button className="nextbutton" onClick={closeModal}>Close
                        {/* <img src={closeimage} alt="Close" /> */}
                    </button>
                    <img src={selectedImage} alt="Enlarged Dashboard Chart" style={{ width: '100%', height: '70%' }} />
                    <div className="modal-question">
                        <p>{questionsStructuralCol[questionIndex].question}</p>
                        {questionsStructuralCol[questionIndex].options.map((option, index) => (
                            <label className="radio-container" key={index}>
                                <input 
                                    type="radio"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange}
                                />
                                <span className="custom-radio"></span>
                                {option}
                            </label>
                        ))}
                    </div>
                    <br />
                    <br />
                    <button className="nextbutton" onClick={closeModal}>Close</button>
                </Modal>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div name="instructions">
                    <div className="question">
                        <p>{questionsStructuralCol[questionIndex].question}</p>
                            {questionsStructuralCol[questionIndex].options.map((option, index) => ( 
                                <label className="radio-container" key={index} >
                                    <input
                                        type="radio"
                                        id={`option-${index}`} // Unique ID for each input
                                        name="questionOptions" // Same name for all radio buttons in this group
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleOptionChange}
                                    />
                                    <span className="custom-radio"></span>
                                    {option} {/* This will display the option text next to the custom radio button */}
                                </label>
                            ))}
                    </div>
                </div>
                <br />
                <br />
                <button className="nextbutton" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default StructuralColDashboard;
