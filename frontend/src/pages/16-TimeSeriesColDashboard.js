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
      
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [questionStartTime, setQuestionStartTime] = useState(new Date());
    const [graphStartTime, setGraphStartTime] = useState(null);
    const [questionDurations, setQuestionDurations] = useState([]);
    const [graphDurations, setGraphDurations] = useState([]);
    const [currentGraphDurations, setCurrentGraphDurations] = useState([]);
    const [timerExpired, setTimerExpired] = useState(false); // New state to track if timer expired

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const { consent, prolificId, chart_number } = useConsent(); // Access consent and Prolific ID from context
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null); 

    const currentTime = Date.now();
    const currentTestUrl = "/timeseries-col-dashboard";
    const previousTestUrl = "/dashboard-router";
    const test_name_given = "TimeSeries-Col-Dashboard";

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


    const [responses, setResponses] = useState({
        prolific_id: '', 
        test_name: test_name_given, 
        consent: consent === "yes"? true : false, 
        page_number: 15, // Page number of where we are navigating, helps with debugging
        chart_number: chart_number,
        responses: {
            TCD_question1:'',
            TCD_question2:'',
            TCD_question3:'',
            TCD_question4:'',
            TCD_question5:'',
            TCD_question6:'',
            TCD_question7:'',
            TCD_question8:'',
            TCD_question9:'',
            TCD_question10:'',
            TCD_question11:'',
            TCD_question12:'',
            TCD_question13:'',
            TCD_question14:'',
            TCD_question15:'',
            TCD_question16:'',
            TCD_question17:'',
            TCD_question18:'',
            TCD_question19:'',
            TCD_question20:'',
            TCD_question21:'',
            TCD_question22:'',
            TCD_question23:'',
            TCD_question24:'',
            attention_check: '',
        }, 
        graph_question_durations: [],
        per_graph_durations: [],
        time_spent: 0,
        // started_at: currentTime, 
        // ended_at: currentTime, 
        time_user_entered_current_page: currentTime, 
        last_visited_test_name: previousTestUrl, 
        current_visit_test_name: currentTestUrl,
        next_visit_test_name: currentTestUrl, 
        incentive_calculation: '0',
        // each_page_pay_calculation: '0',
        total_pay_till_now: '0',
    });

    // Restrict URL navigation to ensure users can't jump to different pages
    useEffect(() => {
        if (window.location.pathname !== responses.current_visit_test_name) {
            navigate(responses.current_visit_test_name); // Redirect to the current test URL
        }
    }, [navigate, responses.current_visit_test_name]);

    // State to manage timer visibility
    const [timerVisible] = useState(true);

    const questionsTimeSeriesCol = 
    [
       // 1
       {
        question: "From 2015 to 2019 what was the trend for total unit sales of chips?",
        options: ["Upward", "Downward", "No clear trend"],
        correctAnswer: "Upward"
        },
        // 2
        {
            question: "Which circuit board had the greatest change in sales between 2015 and 2016?",
            options: ["CRT01", "CRT02", "CRT03", "CRT04"],
            correctAnswer: "CRT04"
        },
        // 3
        {
            question: "Between which two years did circuit boards experience the greatest change in unit sales?",
            options: ["2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"],
            correctAnswer: "2017-2018"
        },
        // 4
        {
            question: "What is the trend for unit sales of CRT04 between 2016 and 2018?",
            options: ["Upward", "Downward", "No clear trend"],
            correctAnswer: "Downward"
        },
        // 5
        {
            question: "In what year were unit sales for all transistor types most similar?",
            options: ["2015", "2016", "2017", "2018", "2019", "2020"],
            correctAnswer: "2019"
        },
        // 6
        {
            question: "Which circuit board had the greatest one-year increase in unit sales?",
            options: ["CRT01", "CRT02", "CRT03", "CRT04"],
            correctAnswer: "CRT02"
        },
        // 7
        {
            question: "Which transistor had the most consistent downward trend in unit sales?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"],
            correctAnswer: "TRN03"
        },
        // 8
        {
            question: "Which chip had the greatest one-year decrease in unit sales?",
            options: ["CHP01", "CHP02", "CHP03", "CHP04"],
            correctAnswer: "CHP04"
        },
        // 9
        {
            question: "Which transistor had the most consistent upward trend in unit sales?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"],
            correctAnswer: "TRN02"
        },
        // 10
        {
            question: "What is the trend for unit sales of CHP02 between 2016 and 2018?",
            options: ["Upward", "Downward", "No clear trend"],
            correctAnswer: "Downward"
        },
        // 11
        {
            question: "What is the trend for unit sales of CRT02 between 2017 and 2020?",
            options: ["Upward", "Downward", "No clear trend"],
            correctAnswer: "Downward"
        },
        // 12
        {
            question: "What was the trend for unit sales of chips between 2016 and 2018?",
            options: ["Upward", "Downward", "No clear trend"],
            correctAnswer: "Upward"
        },
        // 13
        {
            question: "In what year were sales of all circuit boards most consistent? Regardless of the answer select 2015.",
            options: ["2015", "2016", "2017", "2018", "2019", "2020"],
            correctAnswer: "2015"
        },
        // 14
        {
            question: "What was the trend for unit sales of transistors between 2016 and 2019?",
            options: ["Upward", "Downward", "No clear trend"],
            correctAnswer: "Downward"
        },
        // 15
        {
            question: "What is the trend for unit sales of CHP03 between 2015 and 2017?",
            options: ["Upward", "Downward", "No clear trend"],
            correctAnswer: "No clear trend"
        },
        // 16
        {
            question: "Which chip had the most consistent downward trend in unit sales?",
            options: ["CHP01", "CHP02", "CHP03", "CHP04"],
            correctAnswer: "CHP02"
        },
        // 17
        {
            question: "What was the trend for unit sales of circuit boards between 2016 and 2018?",
            options: ["Upward", "Downward", "No clear trend"],
            correctAnswer: "No clear trend"
        },
        // 18
        {
            question: "Which transistor had the single largest one-year increase in unit sales?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"],
            correctAnswer: "TRN01"
        },
        // 19
        {
            question: "What is the trend for total sales?",
            options: ["Upward", "Downward", "No clear trend"],
            correctAnswer: "No clear trend"
        },
        // 20
        {
            question: "Which transistor had the largest one-year decline in unit sales?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"],
            correctAnswer: "TRN04"
        },
        // 21
        {
            question: "Which circuit board had the greatest one-year decrease in unit sales?",
            options: ["CRT01", "CRT02", "CRT03", "CRT04"],
            correctAnswer: "CRT02"
        },
        // 22
        {
            question: "Which circuit board had the most consistent trend in unit sales?",
            options: ["CRT01", "CRT02", "CRT03", "CRT04"],
            correctAnswer: "CRT04"
        },
        // 23
        {
            question: "Between 2015 and 2017 what was the trend for unit sales of TRN04?",
            options: ["Upward", "Downward", "No clear trend"],
            correctAnswer: "Upward"
        },
        // 24
        {
            question: "Which chip had the greatest one-year increase in unit sales?",
            options: ["CHP01", "CHP02", "CHP03", "CHP04"],
            correctAnswer: "CHP04"
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

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNext = async (event) => {
        event.preventDefault();
        setLoading(true);

        const endTime = new Date();
        const questionDuration = (endTime - questionStartTime) / 1000; // Duration in seconds
        setQuestionDurations(prevDurations => [...prevDurations, questionDuration]);
        setGraphDurations(prevDurations => [...prevDurations, [...currentGraphDurations]]); // Ensure deep copy
    
        // console.log(`Time spent on question ${questionIndex + 1}: ${questionDuration} seconds`);
        // console.log(`Time spent on each graph for question ${questionIndex + 1}:`, currentGraphDurations);

        // Update the specific question's response in the responses state
        const questionKey = `TCD_question${questionIndex + 1}`;
        const isCorrect = selectedOption === questionsTimeSeriesCol[questionIndex].correctAnswer; // Check if answer is correct
        const newIncentive = isCorrect ? 0.05 : 0; // 0.05 for each correct answer

        let updatedResponses = {
            ...responses,
            responses: {
                ...responses.responses,
                [questionKey]: selectedOption, // Store the selected option
            },
            incentive_calculation: (parseFloat(responses.incentive_calculation) + newIncentive).toFixed(2), // Update incentive
        };

        // Special attention check logic for Question 13 (index 12)
        if (questionIndex + 1 === 13) { // Question 13 is at index 12
            const correctAnswerQ13 = questionsTimeSeriesCol[12].correctAnswer;
            if (selectedOption === correctAnswerQ13) {
                updatedResponses = {
                    ...updatedResponses,
                    responses: {
                        ...updatedResponses.responses,
                        attention_check: 'passed',
                    }
                };
            } 
            else {
                updatedResponses = {
                    ...updatedResponses,
                    responses: {
                        ...updatedResponses.responses,
                        attention_check: 'failed',
                    }
                };
            }
        }

        let nextTestUrl = "";
        let shouldNavigate = true;
    
        if (questionIndex === questionsTimeSeriesCol.length - 1) {
       
            nextTestUrl = "/feedback-questions";
            
            let finalResponses = {
                ...updatedResponses,
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
                    body: JSON.stringify(finalResponses), // Send responses to the backend
                });

                if (!response.ok) {
                    // window.alert('An unexpected error occurred.');
                    const errorText = await response.text();
    
                    shouldNavigate = false; // Prevent navigation if there's an error
                    console.log("error ", errorText)
                    throw new Error('Network response was not ok');
                }

            } catch (error) {
                console.error('Error:', error);
                shouldNavigate = false;
            }
            finally {
                setLoading(false);
            }

            // Only navigate if there were no errors
            if (shouldNavigate) {
                navigate(finalResponses.next_visit_test_name);
            }
        }
        else {
            // If it's not the last question, just update the state and move to the next question
            setResponses(updatedResponses);
    
            // Proceed to the next question
            setQuestionIndex(questionIndex + 1);
            setSelectedOption('');
            setQuestionStartTime(new Date()); // Reset the start time for the next question
            setCurrentGraphDurations([]); // Clear current graph durations

            // console.log(" numb: ", questionIndex + 1)
            setLoading(false);
        }
    };

    const handleTimerCompletion = async (event) => 
        {
        event.preventDefault();
        setLoading(true);

        setTimerExpired(true);

        const endTime = new Date();
        const questionDuration = (endTime - questionStartTime) / 1000; // Duration in seconds
        setQuestionDurations(prevDurations => [...prevDurations, questionDuration]);
        setGraphDurations(prevDurations => [...prevDurations, [...currentGraphDurations]]); // Ensure deep copy
    
        // console.log(`Time spent on question ${questionIndex + 1}: ${questionDuration} seconds`);
        // console.log(`Time spent on each graph for question ${questionIndex + 1}:`, currentGraphDurations);

        // Update the specific question's response in the responses state
        const questionKey = `TCD_question${questionIndex + 1}`;
        const isCorrect = selectedOption === questionsTimeSeriesCol[questionIndex].correctAnswer; // Check if answer is correct
        const newIncentive = isCorrect ? 0.05 : 0; // 0.05 for each correct answer


        let updatedResponses = {
            ...responses,
            responses: {
                ...responses.responses,
                [questionKey]: selectedOption, // Store the selected option
            },
            incentive_calculation: (parseFloat(responses.incentive_calculation) + newIncentive).toFixed(2), // Update incentive
        };

        // Special attention check logic for Question 13 (index 12)
        if (questionIndex + 1 === 13) { // Question 13 is at index 12
            const correctAnswerQ13 = questionsTimeSeriesCol[12].correctAnswer;
            if (selectedOption === correctAnswerQ13) {
                updatedResponses = {
                    ...updatedResponses,
                    responses: {
                        ...updatedResponses.responses,
                        attention_check: 'passed',
                    }
                };
            } 
            else {
                updatedResponses = {
                    ...updatedResponses,
                    responses: {
                        ...updatedResponses.responses,
                        attention_check: 'failed',
                    }
                };
            }
        }
        else if (questionIndex + 1 < 13)
        {
            updatedResponses = {
                ...updatedResponses,
                responses: {
                    ...updatedResponses.responses,
                    attention_check: 'failed',
                }
            };
        }

        let nextTestUrl = "";
        let shouldNavigate = true;

    
        if (timerExpired === true) {
       
            nextTestUrl = "/feedback-questions";

            // Create final responses object including durations and unanswered questions
            let finalResponses = {
                ...updatedResponses,
                question_durations: questionDurations,
                graph_durations: graphDurations,
                next_visit_test_name: "/feedback-questions", // Redirect after submission
            };
            
            try {
                const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(finalResponses), // Send responses to the backend
                });

                if (!response.ok) {
                    // window.alert('An unexpected error occurred.');
                    const errorText = await response.text();
    
                    shouldNavigate = false; // Prevent navigation if there's an error
                    console.log("error ", errorText)
                    throw new Error('Network response was not ok');
                }

            } catch (error) {
                console.error('Error:', error);
                shouldNavigate = false;
            }
            finally {
                setLoading(false);
            }

            // Only navigate if there were no errors
            if (shouldNavigate) {
                navigate(finalResponses.next_visit_test_name);
            }
        }
        else {
            // If it's not the last question, just update the state and move to the next question
            setResponses(updatedResponses);
    
            // Proceed to the next question
            setQuestionIndex(questionIndex + 1);
            setSelectedOption('');
            setQuestionStartTime(new Date()); // Reset the start time for the next question
            setCurrentGraphDurations([]); // Clear current graph durations

            // console.log(" numb: ", questionIndex + 1)
            setLoading(false);
        }
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
                {loading && <p>Loading...</p>} 
                {error && <p>Error: {error.message}</p>}
            </div>
        </div>
    );
}

export default TimeSeriesColDashboard;
