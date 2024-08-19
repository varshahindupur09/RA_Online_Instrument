import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import StructuralColDashboard from './StructuralColDashboard'; //1a //12
// import StructuralBarDashboard from './StructuralBarDashboard'; //2b //13
// import TimeSeriesBarDashboard from './TimeSeriesBarDashboard'; //1b //14
// import TimeSeriesColDashboard from './TimeSeriesColDashboard'; //2b //15


const DashboardRouter = () => {
    const [chartNumber, setChartNumber] = useState(null);
    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const getNextChartNumber = (currentChartNumber) => {
        if (!currentChartNumber) {
            // If no chart is currently assigned, start with 1
            return 1;
        }
        // Calculate next chart number cyclically within 1-4 range
        return (currentChartNumber % 4) + 1;
    };

    const getChartNumberForUser = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/chartNumber`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch chart number');
            }

            const data = await response.json();
            const nextChartNumber = getNextChartNumber(data.chartNumber);
            return nextChartNumber;  

        } catch (error) {

            console.error("Error fetching or calculating chart number:", error);
            return 1; // Default to chart 1 on error or if no number is found
        }
    };

    useEffect(() => {
        const fetchAndSetChartNumber = async () => {
        const assignedChartNumber = await getChartNumberForUser();
        setChartNumber(assignedChartNumber);
        };

        fetchAndSetChartNumber();
    }, []);

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

  // As this component does not render anything itself:
  return null;

};

export default DashboardRouter;
