import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardRouter = () => {
    const [chartNumber, setChartNumber] = useState(null);
    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    console.log("Component rendered with chartNumber:", chartNumber); // Log on each render

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

                if (data.last_assigned_chart !== undefined) {
                    // Chart number exists, proceed to update
                    console.log("Existing chart number found:", data.last_assigned_chart);
                    const nextChartNumber = (data.last_assigned_chart % 4) + 1;
                    response = await fetch(`${API_BASE_URL}/api/chart-number`, {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ last_assigned_chart: nextChartNumber }),
                    });
                    if (!response.ok) throw new Error('Failed to update chart number');
                    setChartNumber(nextChartNumber);
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
                    setChartNumber(data.last_assigned_chart);
                    console.log("New chart number posted:", data.last_assigned_chart);
                }
            } catch (error) {
                console.error("Error managing chart number:", error);
            }
        };

        manageChartNumber();
    }, [API_BASE_URL]);


//     const getNextChartNumber = (currentChartNumber) => {
//         if (!currentChartNumber) {
//             console.log("If no chart is currently assigned, starting with 1");
//             return 1;
//         }
//         console.log("Calculate next chart number cyclically within 1-4 range");
//         return (currentChartNumber % 4) + 1;
//     };

//     // Check if a chart number already exists in the DB
//     useEffect(() => {
//         const checkForExistingChartNumber = async () => {
//             console.log("Checking for existing chart number...");
//             try {
//                 const response = await fetch(`${API_BASE_URL}/api/chart-number`, {
//                     method: 'GET',
//                     headers: {'Content-Type': 'application/json'},
//                 });
//                 console.log("Response received:", response); 
//                 const data = await response.json();
                
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch chart number');
//                 }
//                 else
//                 {
//                     console.log("GET response data in checkForExistingChartNumber :", data)
//                     console.log("GET response data in checkForExistingChartNumber :", data.last_assigned_chart)
//                 }
//                 if (data.last_assigned_chart) {
//                     setChartNumber(data.last_assigned_chart);
//                     // firstAssignmentDone.current = true;
//                     setFirstAssignmentDone(true);
//                     console.log("Existing chart number found:", data.last_assigned_chart);
//                 } else {
//                     console.log("No chart number found, needs first assignment.");
//                     // firstAssignmentDone.current = false;
//                     setFirstAssignmentDone(false);
//                 }
//             } catch (error) {
//                 console.error("Error fetching chart number:", error);
//                 // firstAssignmentDone.current = false;
//                 setFirstAssignmentDone(false);
//             }
//             finally {
//                 setIsCheckingDone(true); // Indicate that the checking process is complete
//             }
//         };
//         checkForExistingChartNumber();
//     }, [API_BASE_URL]);

//     // post if there is no record
//     useEffect(() => {
//         console.log("POST chartNumber is:", isCheckingDone, firstAssignmentDone, chartNumber ); // Log on each render
//         if (isCheckingDone && !firstAssignmentDone) {
//             const postChartNumberToDB = async (chartNumber) => {
//                 console.log("****** Attempting to post initial chart number...", chartNumber);
//                 try {
//                     const response = await fetch(`${API_BASE_URL}/api/chart-number`, {
//                         method: 'POST',
//                         headers: {'Content-Type': 'application/json'},
//                         body: JSON.stringify({last_assigned_chart: chartNumber}),
//                     });
//                     const data = await response.json();
//                     if (response.ok) {
//                         console.log("POST response data:", data)
//                         setChartNumber(data.last_assigned_chart || 1);
//                         // firstAssignmentDone.current = true;
//                         setFirstAssignmentDone(true);
//                         console.log("POST successful, chartNumber set to:", data.last_assigned_chart);
//                     }
//                     else {
//                         throw new Error('Failed to post chart number');
//                     }
//                 } catch (error) {
//                     console.error("Error posting chart number:", error);
//                 }
//             };

//             const assignFirstChartNumber = async () => {
//                 await postChartNumberToDB(1);
//                 setChartNumber(1);
//                 console.log("assignFirstChartNumber setChartNumber to 1");
//             };
//             assignFirstChartNumber();
//             firstAssignmentDone.current = true; // Mark as done
//         }
//     }, [API_BASE_URL, isCheckingDone, firstAssignmentDone]);

//     //update must happen if there is already one record existing
//    useEffect(() => {
//     console.log("PUT chartNumber is:", isCheckingDone, firstAssignmentDone, chartNumber ); // Log on each render
//     if (isCheckingDone && firstAssignmentDone && chartNumber !== null) {
//         console.log("Updating chart number...");
//         const updateChartNumber = async () => {
//             const nextChartNumber = getNextChartNumber(chartNumber);
//             try {
//                 const response = await fetch(`${API_BASE_URL}/api/chart-number`, {
//                     method: 'PUT',
//                     headers: {'Content-Type': 'application/json'},
//                     body: JSON.stringify({ last_assigned_chart: nextChartNumber }),
//                 });
//                 if (response.ok) {
//                     setChartNumber(nextChartNumber);
//                     console.log("PUT successful, chart number updated to:", nextChartNumber);
//                 } else {
//                     throw new Error('Failed to update chart number');
//                 }
//             } catch (error) {
//                 console.error("Error updating chart number:", error);
//             }
//         };

//         updateChartNumber();
//         }
//     }, [API_BASE_URL, isCheckingDone, firstAssignmentDone, chartNumber]);


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
