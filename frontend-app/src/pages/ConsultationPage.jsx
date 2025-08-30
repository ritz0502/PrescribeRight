import React, { useState } from 'react';
import SymptomInput from '../components/SymptomInput';
import PatientDetails from '../components/PatientDetails';
import LoadingDisclaimer from '../components/LoadingDisclaimer';
import ResultsDisplay from '../components/ResultsDisplay';
import './ConsultationPage.css';

const ConsultationPage = () => {
  const [currentSection, setCurrentSection] = useState('symptom-input');
  const [symptomsData, setSymptomsData] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleSymptomsContinue = (symptoms) => {
    setSymptomsData(symptoms);
    setCurrentSection('patient-details');
  };

  const handlePatientSubmit = (patient, analysis) => {
    setPatientData(patient);
    setAnalysisResult(analysis);
    setCurrentSection('loading-disclaimer');
  };

  const handleViewResults = () => {
    setCurrentSection('results');
  };

  const handleRestart = () => {
    setSymptomsData('');
    setPatientData(null);
    setAnalysisResult(null);
    setCurrentSection('symptom-input');
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'symptom-input':
        return <SymptomInput onContinue={handleSymptomsContinue} />;
      case 'patient-details':
        return (
          <PatientDetails
            onSubmit={handlePatientSubmit}
            initialSymptoms={symptomsData}
          />
        );
      case 'loading-disclaimer':
        return <LoadingDisclaimer onViewResults={handleViewResults} />;
      case 'results':
        return (
          <ResultsDisplay
            patientData={patientData}
            analysisResult={analysisResult}
            onRestart={handleRestart}
          />
        );
      default:
        return <SymptomInput onContinue={handleSymptomsContinue} />;
    }
  };

  return (
    <main className="app-main">
      <header className="app-header">
        <h1>Medical Consultation Assistant</h1>
        <p>AI-powered symptom analysis and medication recommendations</p>
      </header>
      <div className="container">{renderCurrentSection()}</div>
    </main>
  );
};

export default ConsultationPage;
