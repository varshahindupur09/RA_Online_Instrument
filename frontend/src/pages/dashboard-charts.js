import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css';  
import '../components/styles_css/dashboardStyles.css'; 
import logoImage from '../images/UCF_Logo.png';

//Structural - Bar Graph
import StructuralBarImage1 from "../images/dashboard/structural-bar/small/1-left.png";
import StructuralBarImage2 from "../images/dashboard/structural-bar/small/1-right.png";
import StructuralBarImage3 from "../images/dashboard/structural-bar/small/2-left.png";
import StructuralBarImage4 from "../images/dashboard/structural-bar/small/2-right.png";

import StructuralBarEnlargedImage1 from "../images/dashboard/structural-bar/enlarged/1-left.png";
import StructuralBarEnlargedImage2 from "../images/dashboard/structural-bar/enlarged/1-right.png";
import StructuralBarEnlargedImage3 from "../images/dashboard/structural-bar/enlarged/2-left.png";
import StructuralBarEnlargedImage4 from "../images/dashboard/structural-bar/enlarged/2-right.png";

//Structural - Col Graph
import StructuralColImage1 from "../images/dashboard/structural-col/small/1-left.png";
import StructuralColImage2 from "../images/dashboard/structural-col/small/1-right.png";
import StructuralColImage3 from "../images/dashboard/structural-col/small/2-left.png";
import StructuralColImage4 from "../images/dashboard/structural-col/small/2-right.png";

import StructuralColEnlargedImage1 from "../images/dashboard/structural-col/enlarged/1-left.png";
import StructuralColEnlargedImage2 from "../images/dashboard/structural-col/enlarged/1-right.png";
import StructuralColEnlargedImage3 from "../images/dashboard/structural-col/enlarged/2-left.png";
import StructuralColEnlargedImage4 from "../images/dashboard/structural-col/enlarged/2-right.png";

// Timeseries - Bar Graph
import TimeSeriesBarImage1 from "../images/dashboard/timeseries-bar/small/1-left.png";
import TimeSeriesBarImage2 from "../images/dashboard/timeseries-bar/small/1-right.png";
import TimeSeriesBarImage3 from "../images/dashboard/timeseries-bar/small/2-left.png";
import TimeSeriesBarImage4 from "../images/dashboard/timeseries-bar/small/2-right.png";

import TimeSeriesBarEnlargedImage1 from "../images/dashboard/timeseries-bar/enlarged/1-left.png";
import TimeSeriesBarEnlargedImage2 from "../images/dashboard/timeseries-bar/enlarged/1-right.png";
import TimeSeriesBarEnlargedImage3 from "../images/dashboard/timeseries-bar/enlarged/2-left.png";
import TimeSeriesBarEnlargedImage4 from "../images/dashboard/timeseries-bar/enlarged/2-right.png";

// Timeseries - Col Graph
import TimeSeriesColImage1 from "../images/dashboard/timeseries-col/small/1-left.png";
import TimeSeriesColImage2 from "../images/dashboard/timeseries-col/small/1-right.png";
import TimeSeriesColImage3 from "../images/dashboard/timeseries-col/small/2-left.png";
import TimeSeriesColImage4 from "../images/dashboard/timeseries-col/small/2-right.png";

import TimeSeriesColEnlargedImage1 from "../images/dashboard/timeseries-col/enlarged/1-left.png";
import TimeSeriesColEnlargedImage2 from "../images/dashboard/timeseries-col/enlarged/1-right.png";
import TimeSeriesColEnlargedImage3 from "../images/dashboard/timeseries-col/enlarged/2-left.png";
import TimeSeriesColEnlargedImage4 from "../images/dashboard/timeseries-col/enlarged/2-right.png";

// Structural - Bar Graph - all 24 questions
const questionsStructuralBar = [
    {
        question1: "In which country were total unit sales of transistors lowest?",
        options1: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question2: "In which countries were unit sales of CRT03 equal?",
        options2: ["US and Mexico", "Brazil and UK", "Mexico and UK", "Canada and Mexico", "US and UK"]
    },
    {
        question3: "In which country were total unit sales of circuit boards highest?",
        options3: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question4: "In which country were unit sales of CRT03 second lowest?",
        options4: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question5: "In which country were sales of TRN02 and TRN04 equal?",
        options5: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question6: "In what country were unit sales of CRT02 and CRT03 equal?",
        options6: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question7: "In which country were the second-highest unit sales of TRN01?",
        options7: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question8: "In which country were unit sales of CHP04 second lowest?",
        options8: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question9: "In which country were unit sales of CRT03 lowest? Regardless of the answer select Mexico.",
        options9: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question10: "In which country were unit sales of CHP03 and CHP04 closest?",
        options10: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question11: "In which country were unit sales of CRT02 second highest?",
        options11: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question12: "In which country were total unit sales of chips lowest?",
        options12: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question13: "In which country were the unit sales of TRN03 the lowest?",
        options13: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question14: "In which country were total unit sales of chips?",
        options14: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question15: "In which countries were unit sales of CHP01 and CHP02 closest?",
        options15: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question16: "In which country were unit sales of CHP03 highest?",
        options16: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question17: "In which country were the total unit sales of all products lowest?",
        options17: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question18: "In which country were total unit sales lowest?",
        options18: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question19: "In which country were total unit sales highest?",
        options19: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question20: "What was the second highest-selling transistor product in the US?",
        options20: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question21: "In what country were unit sales of CRT02 highest?",
        options21: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question22: "In what country were unit sales of CRT04 lowest?",
        options22: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question23: "Which transistor line had the lowest total unit sales across all six countries?",
        options23: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question24: "In which country were unit sales of CHP03 second lowest?",
        options24: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    }
];

// Structural - Col Graph - all 24 questions
const questionsStructuralCol = [
    {
        question1: "In which country were total unit sales of transistors lowest?",
        options1: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question2: "In which countries were unit sales of CRT03 equal?",
        options2: ["US and Mexico", "Brazil and UK", "Mexico and UK", "Canada and Mexico", "US and UK"]
    },
    {
        question3: "In which country were total unit sales of circuit boards highest?",
        options3: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question4: "In which country were unit sales of CRT03 second lowest?",
        options4: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question5: "In which country were sales of TRN02 and TRN04 equal?",
        options5: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question6: "In what country were unit sales of CRT02 and CRT03 equal?",
        options6: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question7: "In which country were the second-highest unit sales of TRN01?",
        options7: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question8: "In which country were unit sales of CHP04 second lowest?",
        options8: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question9: "In which country were unit sales of CRT03 lowest? Regardless of the answer select Mexico.",
        options9: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question10: "In which country were unit sales of CHP03 and CHP04 closest?",
        options10: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question11: "In which country were unit sales of CRT02 second highest?",
        options11: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question12: "In which country were total unit sales of chips lowest?",
        options12: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question13: "In which country were the unit sales of TRN03 the lowest?",
        options13: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question14: "In which country were total unit sales of chips?",
        options14: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question15: "In which countries were unit sales of CHP01 and CHP02 closest?",
        options15: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question16: "In which country were unit sales of CHP03 highest?",
        options16: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question17: "In which country were the total unit sales of all products lowest?",
        options17: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question18: "In which country were total unit sales lowest?",
        options18: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question19: "In which country were total unit sales highest?",
        options19: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question20: "What was the second highest-selling transistor product in the US?",
        options20: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question21: "In what country were unit sales of CRT02 highest?",
        options21: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question22: "In what country were unit sales of CRT04 lowest?",
        options22: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    },
    {
        question23: "Which transistor line had the lowest total unit sales across all six countries?",
        options23: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question24: "In which country were unit sales of CHP03 second lowest?",
        options24: ["Japan", "Canada", "Mexico", "US", "UK", "Brazil"]
    }
];

// TimeSeries - Bar Graph - all 24 questions
const questionsTimeSeriesBar = [
    {
        question1: "From 2015 to 2019 what was the trend for total unit sales of chips?",
        options1: ["Upward", "Downward", "No clear trend"]
    },
    {
        question2: "Which circuit board had the greatest change in sales between 2015 and 2016?",
        options2: ["CRT01", "CRT02", "CRT03", "CRT04"]
    },
    {
        question3: "Between which two years did circuit boards experience the greatest change in unit sales?",
        options3: ["2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"]
    },
    {
        question4: "What is the trend for unit sales of CRT04 between 2016 and 2018?",
        options4: ["Upward", "Downward", "No clear trend"]
    },
    {
        question5: "In what year were unit sales for all transistor types most similar?",
        options5: ["2015", "2016", "2017", "2018", "2019", "2020"]
    },
    {
        question6: "Which circuit board had the greatest one-year increase in unit sales?",
        options6: ["CRT01", "CRT02", "CRT03", "CRT04"]
    },
    {
        question7: "Which transistor had the most consistent downward trend in unit sales?",
        options7: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question8: "Which chip had the greatest one-year decrease in unit sales?",
        options8: ["CHP01", "CHP02", "CHP03", "CHP04"]
    },
    {
        question9: "In what year were sales of all circuit boards most consistent? Regardless of the answer select 2015.",
        options9: ["2015", "2016", "2017", "2018", "2019", "2020"]
    },
    {
        question10: "What is the trend for unit sales of CHP02 between 2016 and 2018?",
        options10: ["Upward", "Downward", "No clear trend"]
    },
    {
        question11: "What is the trend for unit sales of CRT02 between 2017 and 2020?",
        options11: ["Upward", "Downward", "No clear trend"]
    },
    {
        question12: "What was the trend for unit sales of chips between 2016 and 2018?",
        options12: ["Upward", "Downward", "No clear trend"]
    },
    {
        question13: "Which transistor had the most consistent upward trend in unit sales?",
        options13: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question14: "What was the trend for unit sales of transistors between 2016 and 2019?",
        options14: ["Upward", "Downward", "No clear trend"]
    },
    {
        question15: "What is the trend for unit sales of CHP03 between 2015 and 2017?",
        options15: ["Upward", "Downward", "No clear trend"]
    },
    {
        question16: "Which chip had the most consistent downward trend in unit sales?",
        options16: ["CHP01", "CHP02", "CHP03", "CHP04"]
    },
    {
        question17: "What was the trend for unit sales of circuit boards between 2016 and 2018?",
        options17: ["Upward", "Downward", "No clear trend"]
    },
    {
        question18: "Which transistor had the single largest one-year increase in unit sales?",
        options18: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question19: "What is the trend for total sales?",
        options19: ["Upward", "Downward", "No clear trend"]
    },
    {
        question20: "Which transistor had the largest one-year decline in unit sales?",
        options20: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question21: "Which circuit board had the most consistent trend in unit sales?",
        options21: ["CRT01", "CRT02", "CRT03", "CRT04"]
    },
    {
        question22: "Which circuit board had the greatest one-year decrease in unit sales?",
        options22: ["CRT01", "CRT02", "CRT03", "CRT04"]
    },
    {
        question23: "Between 2015 and 2017 what was the trend for unit sales of TRN04?",
        options23: ["Upward", "Downward", "No clear trend"]
    },
    {
        question24: "Which chip had the greatest one-year increase in unit sales?",
        options24: ["CHP01", "CHP02", "CHP03", "CHP04"]
    }
];

// TimeSeries - Col Graph - all 24 questions
const questionsTimeSeriesCol = [
    {
        question1: "From 2015 to 2019 what was the trend for total unit sales of chips?",
        options1: ["Upward", "Downward", "No clear trend"]
    },
    {
        question2: "Which circuit board had the greatest change in sales between 2015 and 2016?",
        options2: ["CRT01", "CRT02", "CRT03", "CRT04"]
    },
    {
        question3: "Between which two years did circuit boards experience the greatest change in unit sales?",
        options3: ["2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020"]
    },
    {
        question4: "What is the trend for unit sales of CRT04 between 2016 and 2018?",
        options4: ["Upward", "Downward", "No clear trend"]
    },
    {
        question5: "In what year were unit sales for all transistor types most similar?",
        options5: ["2015", "2016", "2017", "2018", "2019", "2020"]
    },
    {
        question6: "Which circuit board had the greatest one-year increase in unit sales?",
        options6: ["CRT01", "CRT02", "CRT03", "CRT04"]
    },
    {
        question7: "Which transistor had the most consistent downward trend in unit sales?",
        options7: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question8: "Which chip had the greatest one-year decrease in unit sales?",
        options8: ["CHP01", "CHP02", "CHP03", "CHP04"]
    },
    {
        question9: "In what year were sales of all circuit boards most consistent? Regardless of the answer select 2015.",
        options9: ["2015", "2016", "2017", "2018", "2019", "2020"]
    },
    {
        question10: "What is the trend for unit sales of CHP02 between 2016 and 2018?",
        options10: ["Upward", "Downward", "No clear trend"]
    },
    {
        question11: "What is the trend for unit sales of CRT02 between 2017 and 2020?",
        options11: ["Upward", "Downward", "No clear trend"]
    },
    {
        question12: "What was the trend for unit sales of chips between 2016 and 2018?",
        options12: ["Upward", "Downward", "No clear trend"]
    },
    {
        question13: "Which transistor had the most consistent upward trend in unit sales?",
        options13: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question14: "What was the trend for unit sales of transistors between 2016 and 2019?",
        options14: ["Upward", "Downward", "No clear trend"]
    },
    {
        question15: "What is the trend for unit sales of CHP03 between 2015 and 2017?",
        options15: ["Upward", "Downward", "No clear trend"]
    },
    {
        question16: "Which chip had the most consistent downward trend in unit sales?",
        options16: ["CHP01", "CHP02", "CHP03", "CHP04"]
    },
    {
        question17: "What was the trend for unit sales of circuit boards between 2016 and 2018?",
        options17: ["Upward", "Downward", "No clear trend"]
    },
    {
        question18: "Which transistor had the single largest one-year increase in unit sales?",
        options18: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question19: "What is the trend for total sales?",
        options19: ["Upward", "Downward", "No clear trend"]
    },
    {
        question20: "Which transistor had the largest one-year decline in unit sales?",
        options20: ["TRN01", "TRN02", "TRN03", "TRN04"]
    },
    {
        question21: "Which circuit board had the most consistent trend in unit sales?",
        options21: ["CRT01", "CRT02", "CRT03", "CRT04"]
    },
    {
        question22: "Which circuit board had the greatest one-year decrease in unit sales?",
        options22: ["CRT01", "CRT02", "CRT03", "CRT04"]
    },
    {
        question23: "Between 2015 and 2017 what was the trend for unit sales of TRN04?",
        options23: ["Upward", "Downward", "No clear trend"]
    },
    {
        question24: "Which chip had the greatest one-year increase in unit sales?",
        options24: ["CHP01", "CHP02", "CHP03", "CHP04"]
    }
];


const DashboardAllCharts = ({ prolificId }) => {
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

    const allCharts = [
        [StructuralBarImage1, StructuralBarEnlargedImage1],
        [StructuralBarImage2, StructuralBarEnlargedImage2],
        [StructuralBarImage3, StructuralBarEnlargedImage3],
        [StructuralBarImage4, StructuralBarEnlargedImage4],

        [StructuralColImage1, StructuralColEnlargedImage1],
        [StructuralColImage2, StructuralColEnlargedImage2],
        [StructuralColImage3, StructuralColEnlargedImage3],
        [StructuralColImage4, StructuralColEnlargedImage4],

        [TimeSeriesBarImage1, TimeSeriesBarEnlargedImage1],
        [TimeSeriesBarImage2, TimeSeriesBarEnlargedImage2],
        [TimeSeriesBarImage3, TimeSeriesBarEnlargedImage3],
        [TimeSeriesBarImage4, TimeSeriesBarEnlargedImage4],

        [TimeSeriesColImage1, TimeSeriesColEnlargedImage1],
        [TimeSeriesColImage2, TimeSeriesColEnlargedImage2],
        [TimeSeriesColImage3, TimeSeriesColEnlargedImage3],
        [TimeSeriesColImage4, TimeSeriesColEnlargedImage4]
    ];
    
    const selectedQuestions = assignQuestions(prolificId);
    
    const openModal = (imgIndex) => {
        setSelectedImage(assignedCharts[imgIndex][1]);  // Set enlarged image
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
    
        if (questionIndex < selectedQuestions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setSelectedOption('');
            setQuestionStartTime(new Date());
            setCurrentGraphDurations([]);
        } else {
            console.log("Durations for each question:", questionDurations);
            console.log("Durations for each graph in each question:", graphDurations);
            navigate("/proceed-to-demographic-questions");
        }
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    return (
        <div className="container">
            <div className="LogoStyleImage">
                <img src={logoImage} alt="ucflogo" className="ucflogo" />
                <h2>Title of research study: Data Visualization and Financial Decision Making</h2>
            </div>
            <div className="image-grid">
                {assignedCharts.map((chart, index) => (
                    <div className="image-item" key={index}>
                        <img 
                            src={chart[0]}
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
                        height: '800px'
                    }
                }}
            >
                <img src={selectedImage} alt="Enlarged Dashboard Chart" style={{ width: '100%', height: '70%' }} />
                <div className="modal-question">
                    <p>{questions[questionIndex].question}</p>
                    {questions[questionIndex].options.map((option, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <button className="button" onClick={closeModal}>Close</button>
            </Modal>
    
            <div name="instructions">
                <div className="question">
                    <p>{questions[questionIndex].question}</p>
                    {questions[questionIndex].options.map((option, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                name="questionOptions"
                                value={option}
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>
            <button className="button" onClick={handleNext}>Next</button>
        </div>
    );
}    

export default DashboardAllCharts;

