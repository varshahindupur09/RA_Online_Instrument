import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

// Import pages
//final page ordering
import FirstInstrConsent from "./pages/1-explanantion-of-research";
import AskAgainConsentPage from "./pages/2-ask-consent-again";
import ExitSurveyPage from "./pages/3-exit-survey-page";
import FinancialLiteracy from "./pages/4-financial-literacy";
import ProceedToPart1PaperFoldingTest from "./pages/proceed-to-part1-paper-folding-test"; // buffer
import PaperFoldingSampleQuestion from "./pages/5-sample-paper-folding-test";
import PaperFoldingPart1Questions from "./pages/6-paper-folding-test-part-1";
import PaperFoldingPart2Questions from "./pages/7-paper-folding-test-part-2";
import RotationTest from "./pages/8-sample-rotation-test";
import AttentionCheck from "./pages/attention-check"
import RotationTestPart1 from "./pages/9-rotation-test-part-1";
import RotationTestPart2 from "./pages/10-rotation-test-part-2";
import CreativeBricksGame from "./pages/11-creative-bricks-game";
// dashboard
import ProceedToDashboard from "./pages/proceed-to-dashboard";
import DashboardRouter from "./pages/dashboard-router";
import StructuralColDashboard from "./pages/13-StructuralColDashboard";
import StructuralBarDashboard from "./pages/14-StructuralBarDashboard";
import TimeSeriesBarDashboard from "./pages/unused/15-TimeSeriesBarDashboard";
import TimeSeriesColDashboard from "./pages/unused/16-TimeSeriesColDashboard";
//feedback
import FeedbackQuestions from "./pages/17-feedback-questions";
//demographic
import Demographics from "./pages/18-demographic-questions";
// Import ConsentProvider
import { ConsentProvider } from './pages/ConsentContext';
import TimerProvider from "./components/TimerContext";

//not ordered
// import ProceedToPart1RotationTest from "./not-required/proceed-to-part1-rotation-test";
// import ProceedToPart2RotationTest from "./pages/proceed-to-part2-rotation-test";
// import ProceedToDemographicQuestions from "./pages/proceed-to-demographic-questions";
// import ProceedToPart2PaperFoldingTest from "./pages/proceed-to-part2-paper-folding-test";

import ScrollToTop from "./components/ScrollToTop";


function App() {
    return (
        // <TimerProvider>
        <ConsentProvider>
            <Router>
                <ScrollToTop />
                <div>
                    <Routes>
                        {/* <Route path="/" element={<Home />} default /> */} 
                        <Route path="/" element={<FirstInstrConsent />} default /> 
                        <Route path="/ask-consent-again" element={<AskAgainConsentPage />} />
                        <Route path="/exit-survey-page" element={<ExitSurveyPage />} />
                        <Route exact path="/financial-literacy" element={<FinancialLiteracy />} />
                        <Route path="/proceed-to-part1-paper-folding-test" element={<ProceedToPart1PaperFoldingTest />} />
                        <Route path="paper-folding-test-sample-question" element={<PaperFoldingSampleQuestion />} />
                        <Route path="/paper-folding-test-part-1" element={<PaperFoldingPart1Questions />} />
                        {/* <Route path="/proceed-to-part2-paper-folding-test" element={<ProceedToPart2PaperFoldingTest />} /> */}
                        <Route path="/paper-folding-test-part-2" element={<PaperFoldingPart2Questions />} />
                        {/* if a breather is needed in between we can add it  */}
                        <Route path="/sample-rotation-test" element={<RotationTest />} />
                        <Route path="/attention-check" element={<AttentionCheck />} />
                        {/* <Route path="/proceed-to-part1-rotation-test" element={<ProceedToPart1RotationTest />} /> */}
                        <Route path="/rotation-test-part-1" element={<RotationTestPart1 />} />
                        {/* <Route path="/proceed-to-part2-rotation-test" element={<ProceedToPart2RotationTest />} /> */}
                        <Route path="/rotation-test-part-2" element={<RotationTestPart2 />} />
                        <Route path="/creative-bricks-game" element={<CreativeBricksGame />} />
                        <Route path="/proceed-to-dashboard" element={<ProceedToDashboard />} />
                        {/* <Route path="/dashboard" element={<DashboardAllCharts />} /> */}
                        {/* selecting any one of the dashboards */}
                        <Route path="/dashboard-router" element={<DashboardRouter />} />
                        <Route path="/structure-col-dashboard" element={<StructuralColDashboard />} />
                        <Route path="/structure-bar-dashboard" element={<StructuralBarDashboard />} />
                        <Route path="/timeseries-bar-dashboard" element={<TimeSeriesBarDashboard />} />
                        <Route path="/timeseries-col-dashboard" element={<TimeSeriesColDashboard />} />
                        {/* feedback */}
                        <Route path="/feedback-questions" element={<FeedbackQuestions />} />
                        {/* demographics */}
                        <Route path="/demographic-questions" element={<Demographics />} />
                        {/* reuse later */}
                        {/* <Route path="/proceed-to-demographic-questions" element={<ProceedToDemographicQuestions />} /> */}
                    </Routes>
                </div>
            </Router>
        </ConsentProvider>
        // </TimerProvider>
    );
}

export default App;
