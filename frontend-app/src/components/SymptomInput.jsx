import React, { useState } from 'react';

const SymptomInput = ({ onContinue }) => {
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = () => {
    if (symptoms.trim()) {
      onContinue(symptoms);
    }
  };

  return (
    <div className="section">
      <div className="section-header">
        <h2>Describe Your Symptoms</h2>
        <p>Please provide a detailed description of your symptoms, including your age and any relevant information.</p>
      </div>
      
      <div className="form">
        <div className="form-group">
          <label htmlFor="symptoms">Symptom Description</label>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Example: I'm 35 years old, weigh 80kg, and have been experiencing fever, sore throat, and fatigue for 2 days..."
            rows={6}
            required
          />
        </div>
        
        <button onClick={handleSubmit} className="btn btn-primary" disabled={!symptoms.trim()}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default SymptomInput;