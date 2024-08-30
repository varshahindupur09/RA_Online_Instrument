// pages/dashboardrouter.js
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConsent } from './ConsentContext';

const DashboardRouter = () => {
    // here chartnumber gets set into context
    const { consent, chartNumber, setChartNumber, prolificId } = useConsent(); // Destructure setChartNumber from context
    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const [isChartNumberFetched, setIsChartNumberFetched] = useState(false); // Flag to track if chart number has been fetched

    console.log("Component rendered with chartNumber:", chartNumber); // Log on each render

    const currentTime = Date.now();
    const currentTestUrl = "/dashboard-router";
    const previousTestUrl = "/proceed-to-dashboard";
    const test_name_given = 'Dashboard-Router';

    // State to store responses
    const [responses, setResponses] = useState({
        // prolific_id: prolificId,
        prolific_id: '',
        test_name: test_name_given,
        consent: consent === "yes"? true : false, 
        page_number: 19,
        chart_number: 0,
        responses: {},
        graph_question_durations: [],
        per_graph_durations: [],
        time_spent: 0,
        started_at: currentTime, // Time when the survey began
        ended_at: currentTime, // Time when the survey ended
        time_user_entered_current_page: currentTime, // Time when the user entered the current page
        last_visited_test_name: previousTestUrl, 
        current_visit_test_name: currentTestUrl,
        next_visit_test_name: currentTestUrl, 
    });


    useEffect(() => {
        const manageChartNumber = async () => {
            try {
                // Step 1: Check if a chart number already exists
                let response = await fetch(`${API_BASE_URL}/api/chart-number`, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                });

                let data = await response.json();
                console.log("response first get manageChartNumber data ", data)
                const nextTestUrl = "";

                if (data.last_assigned_chart !== undefined) 
                {
                    // Chart number exists, proceed to update
                    console.log("Existing chart number found:", data.last_assigned_chart);
                    const nextChartNumber = (data.last_assigned_chart % 4) + 1;
                    
                    // Update responses with the calculated time spent
                    const updatedResponses = {
                        ...responses, 
                        prolific_id: prolificId,
                        chart_number: nextChartNumber,
                        next_visit_test_name: nextTestUrl, // The next page URL
                    };

                    response = await fetch(`${API_BASE_URL}/api/chart-number`, {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ last_assigned_chart: nextChartNumber }),
                    });

                    if (!response.ok) throw new Error('Failed to post chart number');

                    let responseSurvey = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(updatedResponses),
                    });

                    if (!responseSurvey.ok) throw new Error('Failed to post responseSurvey');

                    setChartNumber(nextChartNumber); // Set the chart number in context for existing chart number found condition

                    console.log("Chart number updated to:", chartNumber);
                } else {
                    // No chart number found, proceed to post new one
                    console.log("No chart number found, posting new one...");
                    const assignFirstChart = 1;

                    // Update responses with the calculated time spent
                    const updatedResponses = {
                        ...responses, 
                        chart_number: assignFirstChart,
                        next_visit_test_name: nextTestUrl, // The next page URL
                    };

                    response = await fetch(`${API_BASE_URL}/api/chart-number`, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ last_assigned_chart: assignFirstChart }),
                    });

                    if (!response.ok) throw new Error('Failed to post chart number');

                    let responseSurvey = await fetch(`${API_BASE_URL}/api/surveyResponse`, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(updatedResponses),
                    });

                    if (!responseSurvey.ok) throw new Error('Failed to post responseSurvey');

                    data = await response.json();
                    setChartNumber(assignFirstChart); // Set the chart number in context for No chart number found condition

                    console.log("New chart number posted: ", chartNumber);
                }

                // Set the flag to true after managing the chart number
                setIsChartNumberFetched(true);

            } catch (error) {
                console.error("Error managing chart number:", error);
            }
        };

        manageChartNumber();
    }, [setChartNumber]);


    useEffect(() => {
        // Only run this effect if the first one has completed (flag is true)
        if (isChartNumberFetched) 
        {
            console.log("I am the useeffect that displays the chart")
            switch (chartNumber) {
                case 1:
                    navigate('/structure-col-dashboard');
                    break;
                case 2:
                    navigate('/structure-bar-dashboard');
                    break;
                case 3:
                    navigate('/timeseries-bar-dashboard'); 
                    break;
                case 4:
                    navigate('/timeseries-col-dashboard');
                    break;
                default:
                    navigate('/structure-col-dashboard');
                    console.log('Chart 1 assigned as default case');
            }
        }
    }, [isChartNumberFetched, chartNumber, navigate]);

    return null;
};

export default DashboardRouter;
