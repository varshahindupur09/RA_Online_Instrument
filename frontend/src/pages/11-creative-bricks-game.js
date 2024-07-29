import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css';
import BricksImage from '../images/bricks_image.png';
import logoImage from '../images/UCF_Logo.png';
import Timer from "../components/Timer"; 

const CreativeBricksGame = () => {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0);
    const [timerVisible] = useState(true);

    const handleNext = () => {
        navigate("/proceed-to-dashboard");
    };

    const handleTimerCompletion = () => {
        navigate("/proceed-to-dashboard");
    };

    return (
        <div className="container">
            <div className="instructionsFL">
                <div className="LogoStyleImage">
                    <p>
                        <img src={logoImage} alt="ucflogo" className="ucflogo"></img> <h2> Title of research study: Data Visualization and Financial Decision Making </h2>
                        <h2> PART B </h2> 
                    </p>
                    <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
                </div>
                <br />
                <br />
                {timerVisible && <Timer initialTime={180} onCompletion={handleTimerCompletion} />}
                <br />
                <br />
                <p>Below, you will see a picture of a common household brick.</p>
                <img src={BricksImage} alt="bricksimage" className="bricksimage"></img>
                <br />
                <br />
                <p>In the next two minutes, please list in the text box below all the uses you can think of for this brick</p>
                <div>
                    <textarea
                        type="text"
                        name = "writeafewlinesaboutbricks"
                        rows={15}
                        cols={60}
                        className="full_height_Width"
                        onChange={e => setCount(e.target.value.length)}
                    />
                    <p>{count}</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />

            {/* Next button */}
            <button className="button" onClick={handleNext} > Next </button> 
            {/* disabled={!allAnswered} */}
        </div>
            )

}

export default CreativeBricksGame;
