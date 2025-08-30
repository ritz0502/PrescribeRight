// Mock API functions for testing
// Replace these with actual API calls to your backend

export const mockAnalyzeSymptoms = (symptomsData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        predictedDisease: 'Upper Respiratory Tract Infection',
        recommendedMedication: 'Amoxicillin',
        lowConfidence: Math.random() > 0.7, // Randomly show warning
        analysisId: 'analysis_' + Date.now()
      });
    }, 2000); // 2 second delay to simulate API call
  });
};

export const mockGetDosage = (patientData, analysisId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        preciseDosage: '500mg every 8 hours for 7 days',
        precautions: [
          'Take with food to reduce stomach upset',
          'Complete the full course even if symptoms improve',
          'Stay hydrated and get plenty of rest'
        ],
        contraindications: [
          'Known allergy to penicillin or amoxicillin',
          'Severe kidney disease',
          'Infectious mononucleosis'
        ],
        sideEffects: [
          'Common: Nausea, diarrhea, stomach upset',
          'Less common: Headache, dizziness',
          'Rare but serious: Severe allergic reactions, C. diff infection'
        ]
      });
    }, 1500); // 1.5 second delay to simulate API call
  });
};

// For production, replace with actual API calls like:
/*
export const analyzeSymptoms = async (symptomsData) => {
  const response = await fetch('/api/analyze-symptoms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(symptomsData)
  });
  
  if (!response.ok) {
    throw new Error('Failed to analyze symptoms');
  }
  
  return response.json();
};

export const getDosage = async (patientData, analysisId) => {
  const response = await fetch('/api/get-dosage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...patientData,
      analysisId
    })
  });
  
  if (!response.ok) {
    throw new Error('Failed to get dosage information');
  }
  
  return response.json();
};
*/