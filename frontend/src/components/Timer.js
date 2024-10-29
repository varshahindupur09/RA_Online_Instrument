//frontend/src/components/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime = 180, onCompletion }) => {
  const [seconds, setSeconds] = useState(initialTime);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      onCompletion(); // Call onCompletion function when timer reaches zero
    }
  }, [seconds, onCompletion]);

  // Helper function to format seconds into MM:SS format
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h3 style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'default' }}>Timer:{formatTime(seconds)}</h3>
    </div>
  );
};

export default Timer;
