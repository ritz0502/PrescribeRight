import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../index.css';
import './disclaimer.css';
import disclaimerImage from '../assets/disclaimer.png'; // Import your image here

const DisclaimerPage = () => {
    return (
        <div className="disclaimer-body">
            <Navbar activePage="Disclaimer" />
            <div className="disclaimer-container">
                <h1 className="disclaimer-title">Disclaimer</h1>
                <p className="disclaimer-text">
                    The information provided through PrescribeRight is intended for general informational purposes only and is not a
                    substitute for professional medical advice, diagnosis, or treatment. We strongly advise consulting a qualified
                    healthcare provider for any health concerns or serious conditions.
                </p>
                <div className="illustration-container">
                    {/* Replaced the old illustration with the new image */}
                    <img src={disclaimerImage} alt="Medical Disclaimer" className="disclaimer-image" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DisclaimerPage;