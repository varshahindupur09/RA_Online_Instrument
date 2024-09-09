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
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null); 

    const currentTime = Date.now();
    const currentTestUrl = "/structure-col-dashboard";
    const previousTestUrl = "/dashboard-router";
    const test_name_given = 'Structural-Col-Dashboard';

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
        prolific_id: prolificId,
        test_name: test_name_given, 
        consent: consent === "yes"? true : false, 
        page_number: 13, // Page number of where we are navigating, helps with debugging
        chart_number: chart_number,
        responses: {
            SCD_question1:'',
            SCD_question2:'',
            SCD_question3:'',
            SCD_question4:'',
            SCD_question5:'',
            SCD_question6:'',
            SCD_question7:'',
            SCD_question8:'',
            SCD_question9:'',
            SCD_question10:'',
            SCD_question11:'',
            SCD_question12:'',
            SCD_question13:'',
            SCD_question14:'',
            SCD_question15:'',
            SCD_question16:'',
            SCD_question17:'',
            SCD_question18:'',
            SCD_question19:'',
            SCD_question20:'',
            SCD_question21:'',
            SCD_question22:'',
            SCD_question23:'',
            SCD_question24:'',
            // num_questions_correctly_ans: '',
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

    const questionsStructuralCol = [
        // 1
        {
            question: "In which country were total unit sales of transistors lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "UK"
        },
        // 2
        {
            question: "In which countries were unit sales of CRT03 equal?",
            options: ["US and Mexico", "Brazil and UK", "Mexico and UK", "Canada and Mexico", "US and UK"],
            correctAnswer: "Mexico and UK"
        },
        // 3
        {
            question: "In which country were total unit sales of circuit boards highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Mexico"
        },
        // 4
        {
            question: "In which country were unit sales of CRT03 second lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Japan"
        },
        // 5
        {
            question: "In which country were sales of TRN02 and TRN04 equal?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "US"
        },
        // 6
        {
            question: "In what country were unit sales of CRT02 and CRT03 equal?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "UK"
        },
        // 7
        {
            question: "In which country were the second-highest unit sales of TRN01?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Mexico"
        },
        // 8
        {
            question: "In which country were unit sales of CHP04 second lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Brazil"
        },
        // 9
        {
            question: "In which country were the unit sales of TRN03 the lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Brazil"
        },
        // 10
        {
            question: "In which country were unit sales of CHP03 and CHP04 closest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Japan"
        },
        // 11
        {
            question: "In which country were unit sales of CRT02 second highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "US"
        },
        // 12
        {
            question: "In which country were total unit sales of chips lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Japan"
        },
        // 13
        {
            question: "In which country were unit sales of CRT03 lowest? Regardless of the answer select Mexico.",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Mexico"
        },
        // 14
        {
            question: "In which country were total unit sales of chips?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "US"
        },
        // 15
        {
            question: "In which countries were unit sales of CHP01 and CHP02 closest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Japan"
        },
        // 16
        {
            question: "In which country were unit sales of CHP03 highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Canada"
        },
        // 17
        {
            question: "In which country were the total unit sales of all products lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Japan"
        },
        // 18
        {
            question: "In which country were total unit sales lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Japan"
        },
        // 19
        {
            question: "In which country were total unit sales highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Mexico"
        },
        // 20
        {
            question: "What was the second highest-selling transistor product in the US?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"],
            correctAnswer: "TRN01"
        },
        // 21
        {
            question: "In what country were unit sales of CRT02 highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Mexico"
        },
        // 22
        {
            question: "In what country were unit sales of CRT04 lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "US"
        },
        // 23
        {
            question: "Which transistor line had the lowest total unit sales across all six countries?",
            options: ["TRN01", "TRN02", "TRN03", "TRN04"],
            correctAnswer: "TRN02"
        },
        // 24
        {
            question: "In which country were unit sales of CHP03 second lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Japan"
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
        const questionKey = `SCD_question${questionIndex + 1}`;
        const isCorrect = selectedOption === questionsStructuralCol[questionIndex].correctAnswer; // Check if answer is correct
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
            const correctAnswerQ13 = questionsStructuralCol[12].correctAnswer;
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
    
        if (questionIndex === questionsStructuralCol.length - 1) {
       
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

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleTimerCompletion = async (event) => {
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
        const questionKey = `SCD_question${questionIndex + 1}`;
        const isCorrect = selectedOption === questionsStructuralCol[questionIndex].correctAnswer; // Check if answer is correct
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
            const correctAnswerQ13 = questionsStructuralCol[12].correctAnswer;
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
                {/* 420 */}
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
                    {/* <p>{`${questionIndex + 1}. ${questionsStructuralCol[questionIndex].question}`}</p> */}
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
                {loading && <p>Loading...</p>} 
                {error && <p>Error: {error.message}</p>}
            </div>
        </div>
    );
}

export default StructuralColDashboard;
