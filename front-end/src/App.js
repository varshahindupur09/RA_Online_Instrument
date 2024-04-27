import React from "react";
import Title from "./components/Title";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { MainContent } from "./components/NavbarElements"; // Import MainContent from NavbarElements
// import InstructionsAndConsent from "./pages/instructions-consent";
import Home from "./pages/home-page";
import InstructionsAndConsent2 from "./pages/instructions-consent2";
import FinancialLiteracy from "./pages/financial-literacy";
import NoConsentPage from "./pages/no-consent-page";
import PaperFoldingSampleQuestion from "./pages/paper-folding-test-sample-question";
import PaperFoldingPart1Questions from "./pages/paper-folding-test-part-1"
import PaperFoldingPart2Questions from "./pages/paper-folding-test-part-2"
import EndFLPage from "./pages/EndFLPage"
import ProceedToPart2 from "./pages/proceed-to-part2";
import ConsentPage from "./pages/again-consent-page";
import ExitSurveyPage from "./pages/exit-survey-page";
import RotationTest from "./pages/rotation-test";
import ProceedToPart1RotationTest from "./pages/proceed-to-part1-rotation-test";
import RotationTestPart1 from "./pages/rotation-test-part-1";

function App() {
    return (
        <Router>
            <div>
                <Title /> {/* Render the Title component */}
                {/* <Nav>
                    <Navbar />
                </Nav> */}
                <MainContent> {/* Render the MainContent component */}
                    <Routes>
                        <Route path="/" element={<Home />} default />
                        <Route path="/instructions-consent2" element={<InstructionsAndConsent2 />} />
                        <Route path="/no-consent-page" element={<NoConsentPage />} />
                        <Route exact path="/financial-literacy" element={<FinancialLiteracy />} />
                        <Route path="/paper-folding-test-sample-question" element={<PaperFoldingSampleQuestion />} />
                        <Route path="/paper-folding-test-part-1" element={<PaperFoldingPart1Questions />} /> 
                        <Route path="/paper-folding-test-part-2" element={<PaperFoldingPart2Questions />} /> 
                        <Route path="/end-fl-page" element={<EndFLPage />} /> 
                        <Route path="/proceed-to-part2" element={<ProceedToPart2 />} /> 
                        <Route path="/again-consent-page" element={<ConsentPage />} /> 
                        <Route path="/exit-survey-page" element={<ExitSurveyPage />} /> 
                        <Route path="/rotation-test" element={<RotationTest />} /> 
                        <Route path="/proceed-to-part1-rotation-test" element={<ProceedToPart1RotationTest />} /> 
                        <Route path="/rotation-test-part-1" element={<RotationTestPart1 />} /> 
                    </Routes>
                </MainContent>
            </div>
        </Router>
    );
}

export default App;
