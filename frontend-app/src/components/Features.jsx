import React, { useState } from 'react';

const Features = () => {
    // State to hold the dynamic gradient style for each card
    const [gradientStyle1, setGradientStyle1] = useState({});
    const [gradientStyle2, setGradientStyle2] = useState({});
    const [gradientStyle3, setGradientStyle3] = useState({});

    // Function to handle the mouse move event and update the gradient
    const handleMouseMove = (e, setGradientStyle) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left; // x position relative to the element
        const y = e.clientY - top;  // y position relative to the element
        const gradient = `radial-gradient(circle at ${x}px ${y}px, rgba(175, 255, 203, 0.4), transparent)`;
        setGradientStyle({
            background: gradient,
            transform: 'translateY(-5px)',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
        });
    };

    // Function to reset the style when the mouse leaves
    const handleMouseLeave = (setGradientStyle) => {
        setGradientStyle({
            background: '#F5F5F5',
            transform: 'translateY(0)',
            cursor: 'default',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
        });
    };

    return (
        <section id="features" className="features-section">
            <h2 className="section-title">Why Choose PrescribeRight?</h2>
            <div className="features-grid">
                <div
                    className="feature-card"
                    style={gradientStyle1}
                    onMouseMove={(e) => handleMouseMove(e, setGradientStyle1)}
                    onMouseLeave={() => handleMouseLeave(setGradientStyle1)}
                >
                    <div className="feature-icon">🔍</div>
                    <h3 className="feature-title">Accurate Symptom Analysis</h3>
                    <p className="feature-description">
                        Our AI accurately analyzes your symptoms to suggest potential conditions and next steps.
                    </p>
                </div>
                <div
                    className="feature-card"
                    style={gradientStyle2}
                    onMouseMove={(e) => handleMouseMove(e, setGradientStyle2)}
                    onMouseLeave={() => handleMouseLeave(setGradientStyle2)}
                >
                    <div className="feature-icon">💊</div>
                    <h3 className="feature-title">Personalized Prescriptions</h3>
                    <p className="feature-description">
                        Receive personalized, AI-suggested medication plans tailored to your specific needs.
                    </p>
                </div>
                <div
                    className="feature-card"
                    style={gradientStyle3}
                    onMouseMove={(e) => handleMouseMove(e, setGradientStyle3)}
                    onMouseLeave={() => handleMouseLeave(setGradientStyle3)}
                >
                    <div className="feature-icon">🛡️</div>
                    <h3 className="feature-title">Trusted Information</h3>
                    <p className="feature-description">
                        All suggestions are backed by up-to-date, trusted medical research and data.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;