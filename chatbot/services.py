# services.py
import os
import json
import pickle
import pandas as pd

# ==============================
# Paths to model folder
# ==============================
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # root dir
MODEL_DIR = os.path.join(BASE_DIR, "model")

MODEL_PATH = os.path.join(MODEL_DIR, "disease_model_final.pkl")
KNOWLEDGE_PATH = os.path.join(MODEL_DIR, "knowledge_base.json")
TREATMENT_PATH = os.path.join(MODEL_DIR, "treatment_db.json")

# ==============================
# Load ML Model
# ==============================
with open(MODEL_PATH, "rb") as f:
    data = pickle.load(f)
    diagnostic_model = data["model"]
    symptom_columns = data["symptom_columns"]
    label_encoder = data["label_encoder"]

# ==============================
# Load Knowledge Base
# ==============================
try:
    with open(KNOWLEDGE_PATH, "r") as f:
        knowledge_base = json.load(f)
except FileNotFoundError:
    knowledge_base = {}

# ==============================
# Load Treatment DB
# ==============================
try:
    with open(TREATMENT_PATH, "r") as f:
        treatment_db = json.load(f)
except FileNotFoundError:
    treatment_db = {}

# ==============================
# Helper Functions
# ==============================
def predict_disease(symptoms_str: str):
    """Predict disease given a comma-separated symptom string"""
    user_symptoms = [s.strip().replace(" ", "_") for s in symptoms_str.split(",")]
    input_data = {symptom: [0] for symptom in symptom_columns}
    for symptom in user_symptoms:
        if symptom in input_data:
            input_data[symptom][0] = 1

    input_df = pd.DataFrame(input_data)[symptom_columns]
    numeric_prediction = diagnostic_model.predict(input_df)
    disease_name = label_encoder.inverse_transform(numeric_prediction)[0]
    return disease_name


def get_personalized_medication(disease_name, age_str, weight_str, gender_str, allergies_list):
    """Return medication plan customized by age, gender, allergies"""
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
            if "min_age" in cond and age < cond["min_age"]:
                continue
            if "max_age" in cond and age > cond["max_age"]:
                continue

            suitable_medications.append({
                "name": med["medication_info"]["name"],
                "class": med["medication_info"].get("class", "N/A"),
                "dosage": rule["dosage"],
                "reasoning": rule["description"],
            })
            break
    return suitable_medications
