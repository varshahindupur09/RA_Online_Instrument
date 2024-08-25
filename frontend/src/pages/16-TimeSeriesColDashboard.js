import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css';  
import '../components/styles_css/dashboardStyles.css'; 
import '../components/styles_css/dashboardRadioButton.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';

import { useConsent } from './ConsentContext';

// Timeseries - Col Graph
import TimeSeriesColImage1 from "../images/dashboard/timeseries-col/small/1-left.png";
import TimeSeriesColImage2 from "../images/dashboard/timeseries-col/small/1-right.png";
import TimeSeriesColImage3 from "../images/dashboard/timeseries-col/small/2-left.png";
import TimeSeriesColImage4 from "../images/dashboard/timeseries-col/small/2-right.png";

import TimeSeriesColEnlargedImage1 from "../images/dashboard/timeseries-col/enlarged/1-left.png";
import TimeSeriesColEnlargedImage2 from "../images/dashboard/timeseries-col/enlarged/1-right.png";
import TimeSeriesColEnlargedImage3 from "../images/dashboard/timeseries-col/enlarged/2-left.png";
import TimeSeriesColEnlargedImage4 from "../images/dashboard/timeseries-col/enlarged/2-right.png";

import Timer from "../components/Timer";

const TimeSeriesColDashboard = () => {
    const navigate = useNavigate();

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

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    // const { consent, prolificId } = useConsent(); // Access consent and Prolific ID from context
    const { consent, chart_number } = useConsent(); 

    const currentTime = Date.now();
    const currentTestUrl = "/timeseries-col-dashboard";
    const previousTestUrl = "/dashboard-router";
    const test_name_given = "TimeSeries-Col-Dashboard";

    const [responses, setResponses] = useState({
        prolific_id: '', 
        test_name: test_name_given, 
        consent: consent === "yes"? true : false, 
        page_number: 15, // Page number of where we are navigating, helps with debugging
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

    const questionsTimeSeriesCol = [
        {
            question: "From 2015 to 2019 what was the trend for total unit sales of chips?",
            options: ["Upward", "Downward", "No clear trend"]
        },
        {
            question: "Which circuit board had the greatest change in sales between 2015 and 2016?",
            options: ["CRT01", "CRT02", "CRT03", "CRT04"]
        },
        {
            question: "Between which two years did circuit boards experience the greatest change in unit sales?",
            options: ["2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"]
        },
        {
            question: "What is the trend for unit sales of CRT04 between 2016 and 2018?",
            options: ["Upward", "Downward", "No clear trend"]
        },
        {
            question: "In what year were unit sales for all transistor types most similar?",
            options: ["2015", "2016", "2017", "2018", "2019", "2020"]
        },
        {
            question: "Which circuit board had the greatest one-year increase in unit sales?",
            options: ["CRT01", "CRT02", "CRT03", "CRT04"]
        },
        {
            question: "Which transistor had the most consistent downward trend in unit sales?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"]
        },
        {
            question: "Which chip had the greatest one-year decrease in unit sales?",
            options: ["CHP01", "CHP02", "CHP03", "CHP04"]
        },
        {
            question: "In what year were sales of all circuit boards most consistent? Regardless of the answer select 2015.",
            options: ["2015", "2016", "2017", "2018", "2019", "2020"]
        },
        {
            question: "What is the trend for unit sales of CHP02 between 2016 and 2018?",
            options: ["Upward", "Downward", "No clear trend"]
        },
        {
            question: "What is the trend for unit sales of CRT02 between 2017 and 2020?",
            options: ["Upward", "Downward", "No clear trend"]
        },
        {
            question: "What was the trend for unit sales of chips between 2016 and 2018?",
            options: ["Upward", "Downward", "No clear trend"]
        },
        {
            question: "Which transistor had the most consistent upward trend in unit sales?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"]
        },
        {
            question: "What was the trend for unit sales of transistors between 2016 and 2019?",
            options: ["Upward", "Downward", "No clear trend"]
        },
        {
            question: "What is the trend for unit sales of CHP03 between 2015 and 2017?",
            options: ["Upward", "Downward", "No clear trend"]
        },
        {
            question: "Which chip had the most consistent downward trend in unit sales?",
            options: ["CHP01", "CHP02", "CHP03", "CHP04"]
        },
        {
            question: "What was the trend for unit sales of circuit boards between 2016 and 2018?",
            options: ["Upward", "Downward", "No clear trend"]
        },
        {
            question: "Which transistor had the single largest one-year increase in unit sales?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"]
        },
        {
            question: "What is the trend for total sales?",
            options: ["Upward", "Downward", "No clear trend"]
        },
        {
            question: "Which transistor had the largest one-year decline in unit sales?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"]
        },
        {
            question: "Which circuit board had the most consistent trend in unit sales?",
            options: ["CRT01", "CRT02", "CRT03", "CRT04"]
        },
        {
            question: "Which circuit board had the greatest one-year decrease in unit sales?",
            options: ["CRT01", "CRT02", "CRT03", "CRT04"]
        },
        {
            question: "Between 2015 and 2017 what was the trend for unit sales of TRN04?",
            options: ["Upward", "Downward", "No clear trend"]
        },
        {
            question: "Which chip had the greatest one-year increase in unit sales?",
            options: ["CHP01", "CHP02", "CHP03", "CHP04"]
        }
    ];


    const TimeSeriesColImages = [
        TimeSeriesColImage1,
        TimeSeriesColImage2,
        TimeSeriesColImage3,
        TimeSeriesColImage4
    ];

    const TimeSeriesColEnlargedImages = [
        TimeSeriesColEnlargedImage1,
        TimeSeriesColEnlargedImage2,
        TimeSeriesColEnlargedImage3,
        TimeSeriesColEnlargedImage4
    ];

    const openModal = (imgIndex) => {
        setSelectedImage(TimeSeriesColEnlargedImages[imgIndex]);
        setModalIsOpen(true);
        setGraphStartTime(new Date());
    };

    const closeModal = () => {
        const endTime = new Date();
        const duration = (endTime - graphStartTime) / 1000; // Duration in seconds
        setCurrentGraphDurations(prevDurations => [...prevDurations, duration]);
        setModalIsOpen(false);
    };

    const handleTimerCompletion = () => {
        let nextTestUrl = "/feedback-questions";
        navigate(nextTestUrl);
    };

    const handleNext = async () => {
        const endTime = new Date();
        const questionDuration = (endTime - questionStartTime) / 1000; // Duration in seconds
        setQuestionDurations(prevDurations => [...prevDurations, questionDuration]);
        setGraphDurations(prevDurations => [...prevDurations, [...currentGraphDurations]]); // Ensure deep copy
    
        console.log(`Time spent on question ${questionIndex + 1}: ${questionDuration} seconds`);
        console.log(`Time spent on each graph for question ${questionIndex + 1}:`, currentGraphDurations);

        let nextTestUrl = "";
    
        if (questionIndex < questionsTimeSeriesCol.length - 1) {
            // Prepare for the next question
            setQuestionIndex(questionIndex + 1);
            setSelectedOption('');
            setQuestionStartTime(new Date()); // Reset the start time for the next question
            setCurrentGraphDurations([]); // Clear current graph durations
        } else {
            // Last question answered, send all data to the backend
            nextTestUrl = "/feedback-questions";

            const updatedresponses = {
                question_durations: questionDurations,
                graph_durations: graphDurations,
                current_visit_test_name: nextTestUrl, // The next page URL
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
        if (questionIndex >= questionsTimeSeriesCol.length) {
            console.log("Durations for each question:", questionDurations);
            console.log("Durations for each graph in each question:", graphDurations);
        }
    }, [questionIndex, questionDurations, graphDurations]);

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
                {timerVisible && <Timer initialTime={420} onCompletion={handleTimerCompletion} />}
                <br />
                <br />
                <br />
                <div className="image-grid">
                    {TimeSeriesColImages.map((imgSrc, index) => (
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
                        <p>{questionsTimeSeriesCol[questionIndex].question}</p>
                        {questionsTimeSeriesCol[questionIndex].options.map((option, index) => (
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
                        <p>{questionsTimeSeriesCol[questionIndex].question}</p>
                            {questionsTimeSeriesCol[questionIndex].options.map((option, index) => ( 
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

export default TimeSeriesColDashboard;
