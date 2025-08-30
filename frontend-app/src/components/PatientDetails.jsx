import React, { useState } from 'react';
import { mockAnalyzeSymptoms } from '../utils/mockApi';

const PatientDetails = ({ onSubmit, initialSymptoms }) => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [allergies, setAllergies] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!age) return;

    setLoading(true);
    const patientData = {
      age: parseInt(age),
      weight: weight ? parseFloat(weight) : null,
      allergies: allergies.trim() || null,
      symptoms: initialSymptoms
    };

    try {
      const analysisResult = await mockAnalyzeSymptoms(patientData);
      onSubmit(patientData, analysisResult);
    } catch (error) {
      console.error('Error analyzing symptoms:', error);
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <div className="section-header">
        <h2>Patient Details</h2>
        <p>Please provide additional information to help with accurate analysis.</p>
      </div>

      <div className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="age">Age *</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="1"
              max="120"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min="1"
              step="0.1"
              placeholder="Optional"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="allergies">Known Allergies</label>
          <input
            type="text"
            id="allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            placeholder="e.g., Penicillin, Peanuts (optional)"
          />
        </div>

        <button onClick={handleSubmit} className="btn btn-primary" disabled={!age || loading}>
          {loading ? 'Analyzing...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;