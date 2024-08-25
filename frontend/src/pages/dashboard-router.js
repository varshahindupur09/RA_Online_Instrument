// pages/dashboardrouter.js
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConsent } from './ConsentContext';

const DashboardRouter = () => {
    // const [chartNumber, setChartNumber] = useState(null);
    const { chartNumber, setChartNumber } = useConsent(); // Destructure setChartNumber from context
    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // console.log("Component rendered with chartNumber:", chartNumber); // Log on each render

    useEffect(() => {
        const manageChartNumber = async () => {
            try {
                // Step 1: Check if a chart number already exists
                let response = await fetch(`${API_BASE_URL}/api/chart-number`, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                });
                let data = await response.json();
                if (!response.ok) throw new Error('Failed to fetch chart number');

                if (data.last_assigned_chart !== undefined) 
                {
                    // Chart number exists, proceed to update
                    console.log("Existing chart number found:", data.last_assigned_chart);
                    const nextChartNumber = (data.last_assigned_chart % 4) + 1;
                    response = await fetch(`${API_BASE_URL}/api/chart-number`, {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ last_assigned_chart: nextChartNumber }),
                    });

                    if (!response.ok) throw new Error('Failed to update chart number');

                    setChartNumber(nextChartNumber); // Set the chart number in context for existing chart number found condition

                    console.log("Chart number updated to:", nextChartNumber);
                } else {
                    // No chart number found, proceed to post new one
                    console.log("No chart number found, posting new one...");
                    response = await fetch(`${API_BASE_URL}/api/chart-number`, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ last_assigned_chart: 1 }),
                    });
                    if (!response.ok) throw new Error('Failed to post chart number');
                    data = await response.json();
                    setChartNumber(data.last_assigned_chart); // Set the chart number in context for No chart number found condition
                    console.log("New chart number posted:", data.last_assigned_chart);
                }
            } catch (error) {
                console.error("Error managing chart number:", error);
            }
        };

        manageChartNumber();
    }, [API_BASE_URL, setChartNumber]);


    useEffect(() => {
        switch (chartNumber) {
            case 1:
                navigate('/structure-col-dashboard');
                break;
            case 2:
                navigate('/structure-bar-dashboard');
                break;
            case 3:
                navigate('/time-series-bar-dashboard'); 
                break;
            case 4:
                navigate('/time-series-col-dashboard');
                break;
            default:
                navigate('/structure-col-dashboard');
                console.log('Chart 1 assigned as default case');
        }
    }, [chartNumber, navigate]);

    return null;
};

export default DashboardRouter;
