import React, { useState, useEffect, useMemo, useRef } from 'react';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css';  
import '../components/styles_css/dashboardStyles.css'; 
import '../components/styles_css/dashboardRadioButton.css'; 
import logoImageDoc from '../images/UCF_logo_doc.png';

//Structural - Bar Graph
import StructuralBarImage1 from "../images/dashboard/structural-bar/small/1-left.png";
import StructuralBarImage2 from "../images/dashboard/structural-bar/small/1-right.png";
import StructuralBarImage3 from "../images/dashboard/structural-bar/small/2-left.png";
import StructuralBarImage4 from "../images/dashboard/structural-bar/small/2-right.png";

import StructuralBarEnlargedImage1 from "../images/dashboard/structural-bar/enlarged/1-left.png";
import StructuralBarEnlargedImage2 from "../images/dashboard/structural-bar/enlarged/1-right.png";
import StructuralBarEnlargedImage3 from "../images/dashboard/structural-bar/enlarged/2-left.png";
import StructuralBarEnlargedImage4 from "../images/dashboard/structural-bar/enlarged/2-right.png";

import { useConsent } from './ConsentContext';
import Timer from "../components/Timer";
// import GlobalTimer from "../components/GlobalTimer";

const StructuralBarDashboard = () => {
    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const { consent, prolificId, chart_number } = useConsent(); // Access consent and Prolific ID from context
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null); 

    const currentTime = Date.now();
    const currentTestUrl = "/structure-bar-dashboard";
    const previousTestUrl = "/dashboard-router";
    const test_name_given = 'Structural-Bar-Dashboard';

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');

    // calculation of timings on each graphs and questions
    const [questionStartTime, setQuestionStartTime] = useState(new Date());
    const [graphStartTime, setGraphStartTime] = useState(null);
    const [questionDurations, setQuestionDurations] = useState(Array(24).fill(0.00));
    const currentGraphDurationsRef = useRef([]); // Replace state with useRef
    const cumulativeGraphDurationsRef = useRef([0, 0, 0, 0]); 
    const [currentGraphIndex, setCurrentGraphIndex] = useState(null); // Track which graph is open
    const hasTimerCompleted = useRef(false); 
    const hasFinalSubmissionCompleted = useRef(false); 

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

    // State to manage timer visibility
    const [timerVisible] = useState(true);

    const [responses, setResponses] = useState({
        prolific_id: prolificId, 
        test_name: test_name_given,
        consent: consent === "yes"? true : false, 
        page_number: 14, // Page number of where we are navigating, helps with debugging
        chart_number: chart_number,
        responses: {
            SBD_question1:'',
            SBD_question2:'',
            SBD_question3:'',
            SBD_question4:'',
            SBD_question5:'',
            SBD_question6:'',
            SBD_question7:'',
            SBD_question8:'',
            SBD_question9:'',
            SBD_question10:'',
            SBD_question11:'',
            SBD_question12:'',
            SBD_question13:'',
            SBD_question14:'',
            SBD_question15:'',
            SBD_question16:'',
            SBD_question17:'',
            SBD_question18:'',
            SBD_question19:'',
            SBD_question20:'',
            SBD_question21:'',
            SBD_question22:'',
            SBD_question23:'',
            SBD_question24:'',
            // num_questions_correctly_ans: '',
            attention_check: 'failed',
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

    const questionsStructuralBar = useMemo(() => [
        // 1 - same
        {
            question: "In which country were total unit sales of transistors lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "UK"
        },
        // 2 - same
        {
            question: "In which countries were unit sales of CRT03 equal?",
            options: ["US and Mexico", "Brazil and UK", "Mexico and UK"], // CHANGED: reduced options
            correctAnswer: "Mexico and UK"
        },
        // 3 - same
        {
            question: "In which country were total unit sales of circuit boards highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Mexico"
        },
        // 4 - same
        {
            question: "In which country were unit sales of CRT03 second lowest?",
            options: ["Japan", "Canada", "Mexico"], // CHANGED: reduced options
            correctAnswer: "Japan"
        },
        // 5 - same
        {
            question: "In which country were sales of TRN02 and TRN04 equal?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "US"
        },
        // 6 - same
        {
            question: "In what country were unit sales of CRT02 and CRT03 equal?",
            options: ["Japan", "UK", "Brazil"], // CHANGED: reduced options
            correctAnswer: "UK"
        },
        // 7 - same (worded differently, but same structure)
        {
            question: "In which country were unit sales of CRT03 lowest? Regardless of the answer select Mexico.",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Mexico"
        },
        // 8 - same
        {
            question: "In which country were unit sales of CHP04 second lowest?",
            options: ["Japan", "UK", "Brazil"], // CHANGED: reduced options
            correctAnswer: "Brazil"
        },
        // 9 - same
        {
            question: "In which country were the second-highest unit sales of TRN01?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Mexico"
        },
        // 10 - same
        {
            question: "In which country were unit sales of CHP03 and CHP04 closest?",
            options: ["Japan", "UK", "Brazil"], // CHANGED: reduced options
            correctAnswer: "Japan"
        },
        // 11 - same
        {
            question: "In which country were unit sales of CRT02 second highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "US"
        },
        // 12 - same
        {
            question: "In which country were total unit sales of chips lowest?",
            options: ["Japan", "Mexico", "Brazil"], // CHANGED: reduced options
            correctAnswer: "Japan"
        },
        // 13 - same
        {
            question: "In which country were the unit sales of TRN03 the lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Brazil"
        },
        // 14 - CHANGED: question text and options altered
        {
            question: "In which country were total unit sales of chips lowest?",
            options: ["Canada", "Mexico", "US"], // CHANGED
            correctAnswer: "US"
        },
        // 15 - same
        {
            question: "In which countries were unit sales of CHP01 and CHP02 closest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Japan"
        },
        // 16 - same
        {
            question: "In which country were unit sales of CHP03 highest?",
            options: ["Canada", "Mexico", "Brazil"], // CHANGED: reduced options
            correctAnswer: "Canada"
        },
        // 17 - same
        {
            question: "In which country were the total unit sales of all products lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Japan"
        },
        // 18 - same
        {
            question: "In which country were total unit sales lowest?",
            options: ["Japan", "Canada", "Brazil"], // CHANGED: reduced options
            correctAnswer: "Japan"
        },
        // 19 - same
        {
            question: "In which country were total unit sales highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Mexico"
        },
        // 20 - same
        {
            question: "What was the second highest-selling transistor product in the US?",
            options: ["TRN01", "TRN02", "TRN04"],
            correctAnswer: "TRN01"
        },
        // 21 - same
        {
            question: "In what country were unit sales of CRT02 highest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Mexico"
        },
        // 22 - same
        {
            question: "In what country were unit sales of CRT04 lowest?",
            options: ["Japan", "US", "Brazil"], // CHANGED: reduced options
            correctAnswer: "US"
        },
        // 23 - CHANGED: question moved up from #24 in original
        {
            question: "In which country were unit sales of CHP03 second lowest?",
            options: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"],
            correctAnswer: "Japan"
        },
        // 24 - CHANGED: question from old #23
        {
            question: "Which transistor line had the lowest total unit sales across all six countries?",
            options: ["TRN01", "TRN02", "TRN03"], // CHANGED: removed TRN04
            correctAnswer: "TRN02"
        }
    ], []);


    const StructuralBarImages = [
        StructuralBarImage1,
        StructuralBarImage2,
        StructuralBarImage3,
        StructuralBarImage4
    ];

    const StructuralBarEnlargedImages = [
        StructuralBarEnlargedImage1,
        StructuralBarEnlargedImage2,
        StructuralBarEnlargedImage3,
        StructuralBarEnlargedImage4
    ];

    useEffect(() => {
        if (!selectedOption) return;  // Avoid unnecessary updates if no option is selected

        const questionKey = `SBD_question${questionIndex + 1}`;

        let updatedResponses = { ...responses };
    
        if (selectedOption) {
            // If an option is selected, check if it's correct
            const isCorrect = selectedOption === questionsStructuralBar[questionIndex].correctAnswer;
            const newIncentive = isCorrect ? 0.05 : 0; // 0.05 for each correct answer
    
            // Update the responses with the selected option and incentive
            updatedResponses = {
                ...updatedResponses,
                responses: {
                    ...updatedResponses.responses,
                    [questionKey]: selectedOption, // Store the selected option
                },
                incentive_calculation: (parseFloat(responses.incentive_calculation) + newIncentive).toFixed(2), // Update incentive
            };
        }
    
        // Special attention check logic for Question 13 (index 12)
        if (questionIndex + 1 === 13) 
        { // Question 13 is at index 12
            const correctAnswerQ13 = questionsStructuralBar[12].correctAnswer;
    
            if (selectedOption === correctAnswerQ13) {
                updatedResponses = {
                    ...updatedResponses,
                    responses: {
                        ...updatedResponses.responses,
                        attention_check: 'passed',
                    }
                };
            };

        }
    
        setResponses(updatedResponses); // Save the updated responses
    }, [selectedOption, questionIndex]);

    const openModal = (imgIndex) => {
        setSelectedImage(StructuralBarEnlargedImages[imgIndex]);
        setModalIsOpen(true);
        setGraphStartTime(new Date());
        setCurrentGraphIndex(imgIndex); // Set the current graph index for tracking
    };

    const closeModal = (graphIndex) => {
        const endTime = new Date();
        let duration = (endTime - graphStartTime) / 1000; // Duration in seconds
        duration = Math.round(duration * 100) / 100; // Round to two decimal places
        currentGraphDurationsRef.current.push(duration); // Directly update ref
        if (currentGraphIndex !== null) { // Ensure there is a valid graph index set
            // Add the duration to the correct index in cumulativeGraphDurationsRef
            cumulativeGraphDurationsRef.current[currentGraphIndex] += duration;
            cumulativeGraphDurationsRef.current[currentGraphIndex] = Math.round(cumulativeGraphDurationsRef.current[currentGraphIndex] * 100) / 100; // Keep cumulative value to 2 decimals
            // console.log(`Graph ${currentGraphIndex} cumulative time:`, cumulativeGraphDurationsRef.current[currentGraphIndex]);
        }
        // console.log(`Graph ${graphIndex} cumulative time:`, cumulativeGraphDurationsRef.current[graphIndex]);
        setModalIsOpen(false);
        setCurrentGraphIndex(null); // Reset current graph index
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNext = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Capture question duration and graph durations before proceeding
        const endTime = new Date();
        let questionDuration = (endTime - questionStartTime) / 1000;
        questionDuration = Math.round(questionDuration * 100) / 100; // Round to two decimal places

        // Update question duration at the current questionIndex
        const updatedDurations = [...questionDurations];
        updatedDurations[questionIndex] = questionDuration;
        setQuestionDurations(updatedDurations); // Update state

        // console.log("handleNext: checking how many times this is called");

        let nextTestUrl = "";
        let shouldNavigate = true;
       
        nextTestUrl = "/feedback-questions";
        
        if (questionIndex + 1 === 24) 
        {
            // Prevent multiple submissions
            if (hasFinalSubmissionCompleted.current)
                {
                    setLoading(false);
                    return; //exit if function has already run
                }
                
            hasFinalSubmissionCompleted.current = true;

            // handle final submission
            let finalResponses = {
                ...responses,
                graph_question_durations: updatedDurations,
                per_graph_durations: cumulativeGraphDurationsRef.current.map(dur => Math.round(dur * 100) / 100), // Ensure all are rounded
                next_visit_test_name: nextTestUrl, // The next page URL
            };

            setError(null)
            // console.log("Final Responses AFTER Submission:", questionIndex + 1, " ===> ", finalResponses);

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
        else 
        {
            // Move to the next question (not the last one)
            setQuestionIndex(questionIndex + 1);
            setSelectedOption(''); // Clear selected option
            setQuestionStartTime(new Date()); // Reset the start time for the next question
            setLoading(false);
            // console.log("Final Responses BEFORE Submission:", questionIndex + 1, " ===> ", responses);
        }
    };

    const handleTimerCompletion = async (event) => 
    {
        if (hasTimerCompleted.current)
        {
            return; //exit if function has already run
        }
        
        hasTimerCompleted.current = true;
        // console.log("handleTimerCompletion: checking how many times this is called");

        // Calculate the final question duration and round it to two decimal places
        const endTime = new Date();
        let questionDuration = (endTime - questionStartTime) / 1000;
        questionDuration = Math.round(questionDuration * 100) / 100; // Round to two decimal places
    
       // Update the duration for the last question directly in the durations array
        const updatedDurations = [...questionDurations];
        updatedDurations[questionIndex] = questionDuration;
        setQuestionDurations(updatedDurations);

        // Prepare final response with rounded durations
        const finalResponses = {
            ...responses,
            graph_question_durations: updatedDurations, // Ensure all are rounded to 2 decimals
            per_graph_durations: cumulativeGraphDurationsRef.current.map(dur => Math.round(dur * 100) / 100), // Ensure cumulative graph durations are rounded
            next_visit_test_name: "/feedback-questions",
        };
    
        // console.log("handleTimerCompletion:");
        // console.log(finalResponses);
    
        try {
            const response = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalResponses),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                console.log("Error: ", errorText);
                throw new Error('Network response was not ok');
            }
    
            navigate(finalResponses.next_visit_test_name);
    
        } catch (error) {
            console.error('Error:', error);
        } finally {
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
                        {/* <GlobalTimer /> */}
                    </p>
                </div>
                <br />
                <br />
                {/* timer set for 20 minutes */}
                {timerVisible && <Timer initialTime={1200} onCompletion={handleTimerCompletion} />} 
                <br />
                <br />
                <br />
                <div className="image-grid">
                    {StructuralBarImages.map((imgSrc, index) => (
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
                        <p>{questionsStructuralBar[questionIndex].question}</p>
                        {questionsStructuralBar[questionIndex].options.map((option, index) => (
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
                        <p>{questionsStructuralBar[questionIndex].question}</p>
                            {questionsStructuralBar[questionIndex].options.map((option, index) => ( 
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

export default StructuralBarDashboard;
