//components/TimerContext.js
import React, {createContext, useState, useEffect} from 'react';

export const TimerContext = createContext();

const TimerProvider = ({ children }) => {
    const TIMER__WEB_DECIDED = 1;
    const TOTAL_TIME = TIMER__WEB_DECIDED * 60; // 40 mins in secs
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

    useEffect(() => {
        //decrement time left every second
        const timer = setInterval(() => {
            setTimeLeft(prevTime => Math.max(prevTime - 1, 0));
        }, 1000);

        // clear interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <TimerContext.Provider value = {{ timeLeft }}>
            {children}
        </TimerContext.Provider>
    );
};

export default TimerProvider;