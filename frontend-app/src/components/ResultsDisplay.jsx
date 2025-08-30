import React, { useState, useEffect } from 'react';
import { mockGetDosage } from '../utils/mockApi';

const ResultsDisplay = ({ patientData, analysisResult, onRestart }) => {
  const [dosageInfo, setDosageInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {
    const fetchDosage = async () => {
      try {
        const dosage = await mockGetDosage(patientData, analysisResult.analysisId);
        setDosageInfo(dosage);
      } catch (error) {
        console.error('Error fetching dosage:', error);
      }
      setLoading(false);
    };

    fetchDosage();
  }, [patientData, analysisResult]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (loading) {
    return (
      <div className="section loading-section">
        <div className="spinner"></div>
        <p>Getting dosage information...</p>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="section-header">
        <h2>Analysis Results</h2>
      </div>

      {analysisResult.lowConfidence && (
        <div className="warning-banner">
          <span className="warning-icon">⚠️</span>
          Please consult a healthcare provider. This result may not be accurate.
        </div>
      )}

      <div className="results-grid">
        <div className="result-card">
          <h3>Predicted Condition</h3>
          <p className="result-value">{analysisResult.predictedDisease}</p>
        </div>

        <div className="result-card">
          <h3>Recommended Medication</h3>
          <p className="result-value">{analysisResult.recommendedMedication}</p>
        </div>

        <div className="result-card">
          <h3>Precise Dosage</h3>
          <p className="result-value">{dosageInfo?.preciseDosage}</p>
        </div>
      </div>

      <div className="collapsible-sections">
        <div className="collapsible">
          <button
            className="collapsible-header"
            onClick={() => toggleSection('precautions')}
          >
            <span>Precautions</span>
            <span className={`arrow ${expandedSections.precautions ? 'expanded' : ''}`}>▼</span>
          </button>
          {expandedSections.precautions && (
            <div className="collapsible-content">
              <ul>
                {dosageInfo?.precautions.map((precaution, index) => (
                  <li key={index}>{precaution}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="collapsible">
          <button
            className="collapsible-header"
            onClick={() => toggleSection('contraindications')}
          >
            <span>Contraindications</span>
            <span className={`arrow ${expandedSections.contraindications ? 'expanded' : ''}`}>▼</span>
          </button>
          {expandedSections.contraindications && (
            <div className="collapsible-content">
              <ul>
                {dosageInfo?.contraindications.map((contraindication, index) => (
                  <li key={index}>{contraindication}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="collapsible">
          <button
            className="collapsible-header"
            onClick={() => toggleSection('sideEffects')}
          >
            <span>Side Effects</span>
            <span className={`arrow ${expandedSections.sideEffects ? 'expanded' : ''}`}>▼</span>
          </button>
          {expandedSections.sideEffects && (
            <div className="collapsible-content">
              <ul>
                {dosageInfo?.sideEffects.map((sideEffect, index) => (
                  <li key={index}>{sideEffect}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onRestart}>
          New Consultation
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;