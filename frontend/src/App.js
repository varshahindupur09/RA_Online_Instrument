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
import PaperFoldingSampleQuestion from "./pages/5-paper-folding-test-sample-question";
import PaperFoldingPart1Questions from "./pages/6-paper-folding-test-part-1";
import ProceedToPart2PaperFoldingTest from "./pages/proceed-to-part2-paper-folding-test";
import PaperFoldingPart2Questions from "./pages/7-paper-folding-test-part-2";
import CreativeBricksGame from "./pages/11-creative-bricks-game";

//not ordered
import ConsentPage from "./pages/no-consent-page";
import RotationTest from "./pages/8-sample-rotation-test";
import ProceedToPart1RotationTest from "./pages/proceed-to-part1-rotation-test";
import RotationTestPart1 from "./pages/9-rotation-test-part-1";
import ProceedToPart2RotationTest from "./pages/proceed-to-part2-rotation-test";
import RotationTestPart2 from "./pages/10-rotation-test-part-2";
import AdditionalQuestions from "./pages/demographic-questions";
import EndSurvey from "./pages/endSurvey";
import ProceedToDemographicQuestions from "./pages/proceed-to-demographic-questions";
import Dashboard from "./pages/dashboard";
import ProceedToDashboard from "./pages/proceed-to-dashboard";
// reuse later
import EndFLPage from "./pages/EndFLPage";

// import Home from "./pages/home-page";

// Import ConsentProvider
import { ConsentProvider } from './pages/ConsentContext';

function App() {
    return (
        <ConsentProvider>
            <Router>
                <div>
                    <Routes>
                        {/* <Route path="/" element={<Home />} default /> */} Page 
                        <Route path="/" element={<FirstInstrConsent />} default /> 
                        <Route path="/ask-consent-again" element={<AskAgainConsentPage />} />
                        <Route path="/exit-survey-page" element={<ExitSurveyPage />} />
                        <Route exact path="/financial-literacy" element={<FinancialLiteracy />} />
                        <Route path="/paper-folding-test-sample-question" element={<PaperFoldingSampleQuestion />} />
                        <Route path="/paper-folding-test-part-1" element={<PaperFoldingPart1Questions />} />
                        <Route path="/proceed-to-part2-paper-folding-test" element={<ProceedToPart2PaperFoldingTest />} />
                        <Route path="/paper-folding-test-part-2" element={<PaperFoldingPart2Questions />} />
                        {/* if a breather is needed in between we can add it  */}
                        <Route path="/sample-rotation-test" element={<RotationTest />} />
                        <Route path="/proceed-to-part1-rotation-test" element={<ProceedToPart1RotationTest />} />
                        <Route path="/rotation-test-part-1" element={<RotationTestPart1 />} />
                        <Route path="/proceed-to-part2-rotation-test" element={<ProceedToPart2RotationTest />} />
                        <Route path="/rotation-test-part-2" element={<RotationTestPart2 />} />
                        <Route path="/creative-bricks-game" element={<CreativeBricksGame />} />
                        <Route path="/proceed-to-dashboard" element={<ProceedToDashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        {/* setting */}
                        <Route path="/no-consent-page" element={<ConsentPage />} />
                        <Route path="/end-survey" element={<EndSurvey />} />
                        {/* reuse later */}
                        <Route path="/demographic-questions" element={<AdditionalQuestions />} />
                        <Route path="/end-fl-page" element={<EndFLPage />} />
                        <Route path="/proceed-to-demographic-questions" element={<ProceedToDemographicQuestions />} />
                    </Routes>
                </div>
            </Router>
        </ConsentProvider>
    );
}

export default App;
