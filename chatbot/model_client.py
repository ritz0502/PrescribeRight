import pickle
import os
import pandas as pd

# ==========================
# Load model and data
# ==========================
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "model", "disease_model_final.pkl")

with open(MODEL_PATH, "rb") as f:
    model_data = pickle.load(f)

# Extract objects
model = model_data['model']
symptom_columns = model_data['symptom_columns']
label_encoder = model_data['label_encoder']
disease_info_dict = model_data.get("disease_info", {})

# ==========================
# Predictor Function
# ==========================
def call_predictor(slots):
    """
    slots: dict containing extracted info like symptoms, age, gender, etc.
    Returns full structured info dynamically based on pickle contents.
    Handles multiple symptoms and unknown symptoms gracefully.
    """
    if not isinstance(slots, dict):
        return {"error": "Invalid input slots", "userInput": slots}

    # Extract symptoms and normalize
    symptoms = slots.get("symptoms", [])
    if not isinstance(symptoms, list):
        symptoms = []

    normalized_symptoms = [s.lower().replace(" ", "_") for s in symptoms]

    # 1️⃣ Build input features dynamically
    input_df = pd.DataFrame([[0]*len(symptom_columns)], columns=symptom_columns)
    for symptom in normalized_symptoms:
        if symptom in input_df.columns:
            input_df.at[0, symptom] = 1
        # silently ignore unknown symptoms

    # 2️⃣ Predict disease dynamically
    try:
        pred_encoded = model.predict(input_df)
        pred_disease = label_encoder.inverse_transform(pred_encoded)[0]
    except Exception as e:
        print("Prediction failed:", e)
        return {"error": "Prediction failed", "userInput": slots}

    # 3️⃣ Fetch disease info dynamically
    disease_info = disease_info_dict.get(pred_disease, {})

    # 4️⃣ Build full dynamic response
    response = {"predicted_disease": pred_disease, "userInput": slots}
    response.update(disease_info)  # merge everything from pickle dynamically

    return response
