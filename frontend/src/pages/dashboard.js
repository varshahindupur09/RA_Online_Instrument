// dashboard questions
import React from 'react';
import { useNavigate } from "react-router-dom";
import '../components/styles_css/PageStyle.css'; 
// structural bar
import {StructuralBarImage1} from "../images/dashboard/structural-bar/1-left";
import {StructuralBarImage2} from "../images/dashboard/structural-bar/1-right";
import {StructuralBarImage3} from "../images/dashboard/structural-bar/2-left";
import {StructuralBarImage4} from "../images/dashboard/structural-bar/2-right";
// structural col
import {StructuralColImage1} from "../images/dashboard/structural-col/1-left";
import {StructuralColImage2} from "../images/dashboard/structural-col/1-right";
import {StructuralColImage3} from "../images/dashboard/structural-col/2-left";
import {StructuralColImage4} from "../images/dashboard/structural-col/2-right";
//timeseries bar
import {TimeSeriesBarImage1} from "../images/dashboard/timeseries-bar/1-left";
import {TimeSeriesBarImage2} from "../images/dashboard/timeseries-bar/1-right";
import {TimeSeriesBarImage3} from "../images/dashboard/timeseries-bar/2-left";
import {TimeSeriesBarImage4} from "../images/dashboard/timeseries-bar/2-right";
//timeseries col
import {TimeSeriesColImage1} from "../images/dashboard/timeseries-col/1-left";
import {TimeSeriesColImage2} from "../images/dashboard/timeseries-col/1-right";
import {TimeSeriesColImage3} from "../images/dashboard/timeseries-col/2-left";
import {TimeSeriesColImage4} from "../images/dashboard/timeseries-col/2-right";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/proceed-to-demographic-questions");
    };

    return (
        <div className="container">
            <h3>Thank you for your participation. You're almost done! You will now be asked some basic dashboard questions.</h3>

            {/* actual code */}
            

            {/* next button */}
            <button className="button" onClick={handleNext}> Next </button>

        </div>
    );
}

export default Dashboard;