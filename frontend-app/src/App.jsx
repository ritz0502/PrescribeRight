import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import your page components
import PrescribeRightLandingPage from './pages/PrescribeRightLandingPage';
import DisclaimerPage from './pages/DisclaimerPage';
import ConsultationPage from './pages/ConsultationPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfService from './pages/TermsOfService';

// Import your global layout CSS
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="main-app-container">
        <Navbar />
        <main className="page-content-wrapper">
          <Routes>
            <Route path="/" element={<PrescribeRightLandingPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;