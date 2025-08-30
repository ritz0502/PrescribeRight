import React, { useState, useEffect } from "react";

const LoadingDisclaimer = ({
  onViewResults,
  symptoms,
  patientData,
  setAnalysisResult,
}) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/diagnose", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symptoms: symptoms,
        age: patientData?.age,
        weight_kg: patientData?.weight_kg,
        gender: patientData?.gender,
        allergies: patientData?.allergies,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAnalysisResult(data);
        setShowDisclaimer(true);
      });
  }, [symptoms, patientData, setAnalysisResult]);

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
          <p>
            This tool is not a substitute for professional medical advice.
            Always consult a healthcare provider before starting medication or
            making medical decisions.
          </p>
        </div>
      </div>

      <button className="btn btn-primary" onClick={onViewResults}>
        View Results
      </button>
    </div>
  );
};

export default LoadingDisclaimer;
