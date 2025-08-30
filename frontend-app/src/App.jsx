import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrescribeRightLandingPage from './pages/PrescribeRightLandingPage';
import ConsultationPage from './pages/ConsultationPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrescribeRightLandingPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/disclaimer" element={<div>Disclaimer Page</div>} />
        <Route path="/about" element={<div>About Us Page</div>} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
