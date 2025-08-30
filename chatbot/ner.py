# ai_agent_medicine.py
import os
import requests
import re
from dotenv import load_dotenv

load_dotenv()

HF_API_KEY = os.getenv("HF_API_KEY")
HF_NER_MODEL = os.getenv("HF_NER_MODEL", "d4data/biomedical-ner-all")
PREDICT_URL = os.getenv("PREDICT_URL")

HEADERS = {"Authorization": f"Bearer {HF_API_KEY}"}

SYMPTOM_LABELS = ["SYMPTOM", "DISEASE", "SIGN_SYMPTOM", "PROBLEM"]
DURATION_LABELS = ["DURATION", "DATE", "TIME"]
AGE_LABELS = ["AGE", "NUMBER", "AGE_INDICATOR"]
GENDER_LABELS = ["GENDER", "SEX"]
SEVERITY_LABELS = ["SEVERITY", "MILD", "MODERATE", "SEVERE"]

COMMON_SYMPTOMS = ["fever", "vomiting", "cough", "headache", "nausea"]
GENDERS = ["male", "female"]

def extract_slots(text: str):
    """Extract symptoms, duration, age, gender, severity using Hugging Face NER"""
    slots = {"symptoms": set(), "duration": None, "severity": None, "age": None, "gender": None}

    url = f"https://api-inference.huggingface.co/models/{HF_NER_MODEL}"
    try:
        response = requests.post(url, headers=HEADERS, json={"inputs": text}, timeout=30)
        if response.status_code != 200:
            print("HF error:", response.text)
            return slots
        result = response.json()
        if isinstance(result, dict) and "error" in result:
            return slots

        entities = result[0] if isinstance(result, list) and isinstance(result[0], list) else result

        # Combine subwords
        combined_entities = []
        for ent in entities:
            word = ent.get("word", "")
            if combined_entities and word.startswith("##"):
                combined_entities[-1]["word"] += word[2:]
            else:
                combined_entities.append(ent)

        for ent in combined_entities:
            word = ent.get("word", "").strip().rstrip(".,")
            label = ent.get("entity_group", "").upper()
            word_clean = word.lower()

            if any(l in label for l in SYMPTOM_LABELS):
                slots["symptoms"].add(word_clean)
            elif any(l in label for l in DURATION_LABELS):
                if not slots["duration"]:
                    slots["duration"] = word
            elif any(l in label for l in AGE_LABELS):
                digits = re.findall(r"\d+", word)
                if digits:
                    slots["age"] = int(digits[0])
            elif any(l in label for l in GENDER_LABELS) or word_clean in GENDERS:
                slots["gender"] = word_clean
            elif any(l in label for l in SEVERITY_LABELS):
                slots["severity"] = word_clean

    except requests.exceptions.RequestException as e:
        print("Request error:", e)

    # Fallback scan for common symptoms and gender
    for word in text.lower().split():
        word_clean = word.strip(".,")
        if word_clean in COMMON_SYMPTOMS:
            slots["symptoms"].add(word_clean)
        if word_clean in GENDERS and not slots["gender"]:
            slots["gender"] = word_clean

    slots["symptoms"] = list(slots["symptoms"])
    return slots

def get_medicine(slots: dict):
    """Send slots to medicine prediction model and get response"""
    try:
        response = requests.post(PREDICT_URL, json=slots, timeout=30)
        if response.status_code == 200:
            return response.json()  # Expecting {"medicine": ["Paracetamol", "ORS"]}
        else:
            return {"error": "Prediction failed"}
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}

def ai_agent(text: str):
    """Full pipeline: text -> NER -> prediction -> structured response"""
    slots = extract_slots(text)
    prediction = get_medicine(slots)

    # Build structured response
    response = {
        "slots": slots,
        "prediction": prediction
    }

    # Optional: human-readable sentence
    if "medicine" in prediction:
        meds = ", ".join(prediction["medicine"])
        response["sentence"] = (
            f"Based on your symptoms of {', '.join(slots['symptoms'])}"
            f"{f' for {slots['duration']}' if slots['duration'] else ''}, "
            f"age {slots['age'] if slots['age'] else 'unknown'}, "
            f"gender {slots['gender'] if slots['gender'] else 'unknown'}, "
            f"you can take {meds}."
        )
    else:
        response["sentence"] = f"Sorry, could not get a medicine recommendation. {prediction.get('error', '')}"

    return response
