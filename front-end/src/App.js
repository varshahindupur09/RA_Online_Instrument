import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import InstructionsAndConsent from "./pages/instructions_consent";
import { Nav, MainContent } from "./components/NavbarElements"; // Import Nav and MainContent from NavbarElements

function App() {
    return (
        <Router>
            <Nav>
                <Navbar />
            </Nav>
            <MainContent> {/* Render the MainContent component here */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/instructions-consent" element={<InstructionsAndConsent />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </MainContent>
        </Router>
    );
}

export default App;
