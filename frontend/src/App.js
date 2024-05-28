import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// import InstructionsAndConsent from "./pages/instructions-consent";
import Home from "./pages/home-page";
import FirstInstrConsent from "./pages/first-instr-consent";
import NoConsentPage from "./pages/no-consent-page";
import PaperFoldingSampleQuestion from "./pages/paper-folding-test-sample-question";
import PaperFoldingPart1Questions from "./pages/paper-folding-test-part-1"
import ProceedToPart2 from "./pages/proceed-to-part2-paper-folding-test";
import PaperFoldingPart2Questions from "./pages/paper-folding-test-part-2";
import ConsentPage from "./pages/again-consent-page";
import ExitSurveyPage from "./pages/exit-survey-page";
import RotationTest from "./pages/sample-rotation-test";
import ProceedToPart1RotationTest from "./pages/proceed-to-part1-rotation-test";
import RotationTestPart1 from "./pages/rotation-test-part-1";
import ProceedToPart2RotationTest from "./pages/proceed-to-part2-rotation-test";
import RotationTestPart2 from "./pages/rotation-test-part-2";
import AdditionalQuestions from "./pages/demographic-questions";
import EndSurvey from "./pages/endSurvey";
import ProceedToDemographicQuestions from "./pages/proceed-to-demographic-questions";
import Dashboard from "./pages/dashboard";
import ProceedToDashboard from "./pages/proceed-to-dashboard";
// reuse later
import FinancialLiteracy from "./pages/financial-literacy";
import EndFLPage from "./pages/EndFLPage"

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} default />
                    <Route path="/first-instr-consent" element={<FirstInstrConsent />} default />
                    <Route path="/no-consent-page" element={<NoConsentPage />} />
                    <Route path="/again-consent-page" element={<ConsentPage />} /> 
                    <Route path="/paper-folding-test-sample-question" element={<PaperFoldingSampleQuestion />} />
                    <Route path="/paper-folding-test-part-1" element={<PaperFoldingPart1Questions />} /> 
                    <Route path="/proceed-to-part2-proceed-to-part2-paper-folding-test" element={<ProceedToPart2 />} /> 
                    <Route path="/paper-folding-test-part-2-paper-folding-test" element={<PaperFoldingPart2Questions />} /> 
                    <Route path="/sample-rotation-test" element={<RotationTest />} /> 
                    <Route path="/proceed-to-part1-rotation-test" element={<ProceedToPart1RotationTest />} /> 
                    <Route path="/rotation-test-part-1" element={<RotationTestPart1 />} /> 
                    <Route path="/proceed-to-part2-rotation-test" element={<ProceedToPart2RotationTest />} /> 
                    <Route path="/rotation-test-part-2" element={<RotationTestPart2 />} /> 
                    <Route path="/proceed-to-dashboard" element={<ProceedToDashboard  />} /> 
                    <Route path="/dashboard" element={<Dashboard  />} /> 
                    <Route path="/end-survey" element={<EndSurvey  />} /> 
                    {/* resuse later */}
                    <Route exact path="/financial-literacy" element={<FinancialLiteracy />} />
                    <Route path="/demographic-questions" element={<AdditionalQuestions />} /> 
                    <Route path="/end-fl-page" element={<EndFLPage />} /> 
                    <Route path="/exit-survey-page" element={<ExitSurveyPage />} /> 
                    <Route path="/proceed-to-demographic-questions" element={<ProceedToDemographicQuestions  />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;


// testing
// http://localhost:3000/paper-folding-test-part-1
// http://localhost:3000/paper-folding-test-part-2
// http://localhost:3000/rotation-test
// http://localhost:3000/proceed-to-part1-rotation-test
// http://localhost:3000/rotation-test-part-1
// http://localhost:3000/proceed-to-part2-rotation-test
// http://localhost:3000/rotation-test-part-2
// http://localhost:3000/additional-questions
// http://localhost:3000/end-survey
// http://localhost:3000/proceed-to-demographic-questions