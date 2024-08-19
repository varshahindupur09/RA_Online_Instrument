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

const StructuralColDashboard = () => {
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

    const handleNext = () => {
        const endTime = new Date();
        const questionDuration = (endTime - questionStartTime) / 1000; // Duration in seconds
        setQuestionDurations(prevDurations => [...prevDurations, questionDuration]);
        setGraphDurations(prevDurations => [...prevDurations, currentGraphDurations]);
        console.log(`Time spent on question ${questionIndex + 1}: ${questionDuration} seconds`);
        console.log(`Time spent on each graph for question ${questionIndex + 1}:`, currentGraphDurations);

        if (questionIndex < questionsStructuralCol.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setSelectedOption('');  // Reset the selected option for the next question
            setQuestionStartTime(new Date());  // Reset the start time for the next question
            setCurrentGraphDurations([]);  // Reset graph times for the next question
        } else {
            console.log("Durations for each question:", questionDurations);
            console.log("Durations for each graph in each question:", graphDurations);
            navigate("/proceed-to-demographic-questions");
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
