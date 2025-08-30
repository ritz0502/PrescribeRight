import React, { useState, useEffect } from 'react';

const LoadingDisclaimer = ({ onViewResults }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDisclaimer(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showDisclaimer) {
    return (
      <div className="section loading-section">
        <div className="spinner"></div>
        <p>Analyzing your symptoms...</p>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="disclaimer">
        <div className="disclaimer-icon">⚠️</div>
        <div className="disclaimer-content">
          <h3>Important Medical Disclaimer</h3>
          <p>This tool is not a substitute for professional medical advice. Always consult a healthcare provider before starting medication or making medical decisions.</p>
        </div>
      </div>
      
      <button className="btn btn-primary" onClick={onViewResults}>
        View Results
      </button>
    </div>
  );
};

export default LoadingDisclaimer;