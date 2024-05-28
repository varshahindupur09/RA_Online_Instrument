import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css';  
import '../components/styles_css/dashboardStyles.css'; 
import logoImage from '../images/UCF_Logo.png';

import TimeSeriesBarImage1 from "../images/dashboard/timeseries-bar/1-left.png";
import TimeSeriesBarImage2 from "../images/dashboard/timeseries-bar/1-right.png";
import TimeSeriesBarImage3 from "../images/dashboard/timeseries-bar/2-left.png";
import TimeSeriesBarImage4 from "../images/dashboard/timeseries-bar/2-right.png";

import TimeSeriesBarEnlargedImage1 from "../images/dashboard/timeseries-bar/enlarged/1-left.png";
import TimeSeriesBarEnlargedImage2 from "../images/dashboard/timeseries-bar/enlarged/1-right.png";
import TimeSeriesBarEnlargedImage3 from "../images/dashboard/timeseries-bar/enlarged/2-left.png";
import TimeSeriesBarEnlargedImage4 from "../images/dashboard/timeseries-bar/enlarged/2-right.png";

const questions = [
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
    }
];

const Dashboard = () => {
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

    const TimeSeriesBarImages = [
        TimeSeriesBarImage1,
        TimeSeriesBarImage2,
        TimeSeriesBarImage3,
        TimeSeriesBarImage4
    ];

    const TimeSeriesBarEnlargedImages = [
        TimeSeriesBarEnlargedImage1,
        TimeSeriesBarEnlargedImage2,
        TimeSeriesBarEnlargedImage3,
        TimeSeriesBarEnlargedImage4
    ];

    const openModal = (imgIndex) => {
        setSelectedImage(TimeSeriesBarEnlargedImages[imgIndex]);
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

        if (questionIndex < questions.length - 1) {
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
        if (questionIndex >= questions.length) {
            console.log("Durations for each question:", questionDurations);
            console.log("Durations for each graph in each question:", graphDurations);
        }
    }, [questionIndex, questionDurations, graphDurations]);

    return (
        <div className="container">
            <div className="LogoStyleImage">
                <p>
                    <img src={logoImage} alt="ucflogo" className="ucflogo"></img> <h2> Title of research study: Data Visualization and Financial Decision Making </h2>
                    <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
                </p>
            </div>
            <div className="image-grid">
                {TimeSeriesBarImages.map((imgSrc, index) => (
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
                <br />
                <br />
                <button className="button" onClick={closeModal}>Close</button>
            </Modal>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div name="instructions">
                <div className="question">
                    <p>{questions[questionIndex].question}</p>
                        {questions[questionIndex].options.map((option, index) => (
                            <label key={index}>
                                <input
                                    type="radio"
                                    id={`option-${index}`} // Unique ID for each input
                                    name="questionOptions" // Same name for all radio buttons in this group
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange}
                                />
                                {option} {/* This will display the option text next to the custom radio button */}
                            </label>
                        ))}
                </div>
            </div>
            <br />
            <br />
            <button className="button" onClick={handleNext}>Next</button>
        </div>
    );
}

export default Dashboard;
