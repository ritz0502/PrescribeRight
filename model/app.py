import json
import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

print("--- Initializing Final Backend Server ---")
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load all components 
try:
    with open('disease_model_final.pkl', 'rb') as f:
        data = pickle.load(f)
        diagnostic_model = data['model']
        symptom_columns = data['symptom_columns']
        label_encoder = data['label_encoder']
    print("Final diagnostic model and encoder loaded.")
except FileNotFoundError:
    diagnostic_model = None

try:
    with open('knowledge_base.json', 'r') as f:
        knowledge_base = json.load(f)
    print("Knowledge base loaded.")
except FileNotFoundError:
    knowledge_base = {}

try:
    with open('treatment_db.json', 'r') as f:
        treatment_db = json.load(f)
    print("Treatment database loaded.")
except FileNotFoundError:
    treatment_db = {}

# Helper Functions
def predict_disease(symptoms_input):
    # Handle both string and list inputs
    if isinstance(symptoms_input, list):
        user_symptoms = [s.strip().replace(' ', '_') for s in symptoms_input]
    else:
        user_symptoms = [s.strip().replace(' ', '_') for s in symptoms_input.split(',')]
    
    input_data = {symptom: [0] for symptom in symptom_columns}
    for symptom in user_symptoms:
        if symptom in input_data:
            input_data[symptom][0] = 1
            
    input_df = pd.DataFrame(input_data)[symptom_columns]

    numeric_prediction = diagnostic_model.predict(input_df)
    disease_name = label_encoder.inverse_transform(numeric_prediction)[0]
    return disease_name

def get_personalized_medication(disease_name, age_str, weight_str, gender_str, allergies_list):
    disease_treatments = treatment_db.get(disease_name, {}).get("recommended_medications", [])
    if not disease_treatments:
        return {"error": "No specific medication information found for this disease."}

    try:
        age = float(age_str) if age_str else 30
    except (ValueError, TypeError):
        age = 30
    
    suitable_medications = []
    for med in disease_treatments:
        for rule in med.get("dosage_rules", []):
            cond = rule["conditions"]
            if "min_age" in cond and age < cond["min_age"]: continue
            if "max_age" in cond and age > cond["max_age"]: continue
            
            suitable_medications.append({
                "name": med["medication_info"]["name"],
                "class": med["medication_info"].get("class", "N/A"),
                "dosage": rule["dosage"],
                "reasoning": rule["description"]
            })
            break
    return suitable_medications

# API Endpoint
@app.route('/diagnose', methods=['POST'])
def diagnose():
    if not diagnostic_model:
        return jsonify({"error": "Model not loaded."}), 500
        
    data = request.get_json()
    symptoms = data.get('symptoms')
    
    if not symptoms:
        return jsonify({"error": "A 'symptoms' field with keywords is required."}), 400

    predicted_disease = predict_disease(symptoms)
    recommendations = knowledge_base.get(predicted_disease, {}).copy()
    medication_plan = get_personalized_medication(predicted_disease, data.get('age'), data.get('weight_kg'), data.get('gender'), data.get('allergies'))
    recommendations["medication_plan"] = medication_plan

    final_response = {
        "userInput": data,
        "predicted_disease": predicted_disease,
        "recommendations": recommendations
    }
    return jsonify(final_response)

# Health check endpoint
@app.route('/', methods=['GET'])
def health_check():
    return jsonify({
        "status": "ok", 
        "message": "PrescribeRight Model Backend is running ✅",
        "endpoints": ["/diagnose"],
        "port": 3000
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)