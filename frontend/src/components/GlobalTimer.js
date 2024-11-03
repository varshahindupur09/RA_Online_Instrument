//components/GlobalTimer.js
import React, {useContext} from 'react';
import { TimerContext } from './TimerContext';

const GlobalTimer = () => {
    const { timeLeft } = useContext(TimerContext);

    const minutes = Math.floor( timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className='global-timer'>
            <h3>Time Remaining for the Survey: {minutes}:{seconds < 10? `0${seconds}`: seconds} </h3>
        </div>
    );
};

export default GlobalTimer;