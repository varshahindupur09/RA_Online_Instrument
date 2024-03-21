import React from 'react';

const EndFLPage = () => {
    return (
        <div className="container">
            <h3>You must answer at least 2 out of 3 questions correctly to proceed to the main survey.</h3>
            <p>
                In order to ensure the accuracy and reliability of the survey results, it is important to demonstrate a basic level of financial literacy. 
                Your answers help researchers understand your financial knowledge and make informed conclusions based on the data collected.
            </p>
            <p>
                If you did not meet the minimum requirement, the survey has ended. 
                Unfortunately, we won't be able to do anything about it.
            </p>
            <p>
                Thank you for your participation and cooperation in this study. Your contribution is valuable to our research efforts.
            </p>
        </div>
    );
};

export default EndFLPage;
