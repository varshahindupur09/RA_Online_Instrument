//frontend/src/BigTimerComponent.js:

import React, { useState, useEffect } from 'react';

const TimerComponent = ({ sessionId }) => {
  const [timeLeft, setTimeLeft] = useState(1800); // 1800 seconds for 30 minutes

  useEffect(() => {
    // Fetch the initial time left from the server when the component mounts
    fetch(`http://backend.adg429.com/check-timer/${sessionId}`)
      .then(response => response.json())
      .then(data => {
        // Assume the server returns the remaining time in seconds
        setTimeLeft(data.remainingTime);
      });

    // Set up an interval to update the timer every second
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, [sessionId]);

  // When time runs out
  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(timerId);
      alert('Time is up!');
      // Here you can handle what happens when the timer runs out
    }
  }, [timeLeft]);

  // Format timeLeft into minutes and seconds
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h1>{formatTime()}</h1>
    </div>
  );
};

export default TimerComponent;