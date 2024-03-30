import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Nav, MainContent } from "./components/NavbarElements"; // Import Nav and MainContent from NavbarElements
// import InstructionsAndConsent from "./pages/instructions-consent";
import InstructionsAndConsent2 from "./pages/instructions-consent2";
import FinancialLiteracy from "./pages/financial-literacy";
import NoConsentPage from "./pages/no-consent-page";
import PaperFoldingSampleQuestion from "./pages/paper-folding-test-sample-question";
import PaperFoldingPart1Questions from "./pages/paper-folding-test-part-1"
import PaperFoldingPart2Questions from "./pages/paper-folding-test-part-2"
import EndFLPage from "./pages/EndFLPage"
import ProceedToPart2 from "./pages/proceed-to-part2";
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
                        <Route path="/" element={<InstructionsAndConsent2 />} />
                        <Route path="/no-consent-page" element={<NoConsentPage />} />
                        <Route exact path="/financial-literacy" element={<FinancialLiteracy />} />
                        <Route path="/paper-folding-test-sample-question" element={<PaperFoldingSampleQuestion />} />
                        <Route path="/paper-folding-test-part-1" element={<PaperFoldingPart1Questions />} /> 
                        <Route path="/paper-folding-test-part-2" element={<PaperFoldingPart2Questions />} /> 
                        <Route path="/end-fl-page" element={<EndFLPage />} /> 
                        <Route path="/proceed-to-part2" element={<ProceedToPart2 />} /> 
                    </Routes>
                </MainContent>
            </div>
        </Router>
    );
}

export default App;
