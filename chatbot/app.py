import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

from ner import ai_agent   # Extract symptoms/slots
from services import predict_disease, get_personalized_medication, knowledge_base

REQUIRED_SLOTS = ["symptoms", "age", "weight_kg", "gender", "allergies"]

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Conversation memory (for now, single-user only)
user_context = {}
pending_slot = None   # track what we asked last

# --------------------------
# Health check
# --------------------------
@app.route("/", methods=["GET"])
def home():
    return jsonify({"status": "ok", "message": "Chatbot is running ✅"})

# --------------------------
# Chat endpoint
# --------------------------
@app.route("/chat", methods=["POST"])
def chat():
    global pending_slot
    try:
        data = request.get_json()
        user_text = data.get("message", "")
        print("User said:", user_text)

        # --------------------------
        # If bot was waiting for a specific slot → parse directly
        # --------------------------
        if pending_slot:
            if pending_slot == "age":
                try:
                    user_context["age"] = int("".join([c for c in user_text if c.isdigit()]))
                except:
                    return jsonify({"type": "question", "message": "Please enter a valid number for age."})
            elif pending_slot == "weight_kg":
                try:
                    user_context["weight_kg"] = float("".join([c for c in user_text if c.isdigit()]))
                except:
                    return jsonify({"type": "question", "message": "Please enter a valid weight (in kg)."})
            elif pending_slot == "allergies":
                user_context["allergies"] = [a.strip() for a in user_text.lower().split(",")]
            elif pending_slot == "gender":
                if "male" in user_text.lower():
                    user_context["gender"] = "male"
                elif "female" in user_text.lower():
                    user_context["gender"] = "female"
            pending_slot = None  # reset after filling

        # --------------------------
        # Run NER to catch multiple things in free text
        # --------------------------
        ai_result = ai_agent(user_text)
        slots = ai_result.get("slots", {})

        # Merge symptoms instead of overwriting
        if "symptoms" in slots and slots["symptoms"]:
            old_symptoms = user_context.get("symptoms", [])
            merged = list(set(old_symptoms + slots["symptoms"]))
            user_context["symptoms"] = merged

        # Update other slots normally
        for k, v in slots.items():
            if v and k != "symptoms":
                user_context[k] = v

        # --------------------------
        # Check for missing slots
        # --------------------------
        missing_slots = [s for s in REQUIRED_SLOTS if not user_context.get(s)]
        if missing_slots:
            next_slot = missing_slots[0]
            pending_slot = next_slot  # remember what we’re asking
            questions = {
                "weight_kg": "Can you please tell me your weight (in kg)?",
                "allergies": "Do you have any known allergies?",
                "age": "What is your age?",
                "gender": "Are you male or female?",
                "symptoms": "Can you tell me what symptoms you are experiencing?"
            }
            return jsonify({"type": "question", "message": questions[next_slot]})

        # --------------------------
        # All required info is available → Predict disease
        # (Auto re-run prediction if new symptoms are added later)
        # --------------------------
        symptoms_str = ", ".join(user_context["symptoms"])
        predicted_disease = predict_disease(symptoms_str)

        recommendations = knowledge_base.get(predicted_disease, {}).copy()
        medication_plan = get_personalized_medication(
            predicted_disease,
            user_context.get("age"),
            user_context.get("weight_kg"),
            user_context.get("gender"),
            user_context.get("allergies", [])
        )
        recommendations["medication_plan"] = medication_plan

        final_response = {
            "userInput": user_context,
            "predicted_disease": predicted_disease,
            "recommendations": recommendations
        }

        return jsonify({
            "type": "prediction",
            "message": final_response,
            "note": "Updated with latest symptoms and info."
        })

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3001, debug=True)