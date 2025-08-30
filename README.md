# PrescribeRight: Your AI-Powered Health Assistant

💡 About the Project
PrescribeRight is a full-stack AI-powered health assistant that provides preliminary health insights and personalized care recommendations. It analyzes symptoms and patient data to suggest potential disease diagnoses, medications, and lifestyle advice.

Interaction Modes:

Guided Consultation: Step-by-step AI-powered form for structured symptom input and results.

AI Chatbot: Conversational interface where the NLP model interacts with users to extract symptoms, understand diseases, and recommend medications.

⚠️ Disclaimer: PrescribeRight is for informational purposes only and is not a substitute for professional medical advice. Always consult a qualified healthcare professional.

# ✨ Key Features

AI-Powered Symptom Analysis: Extracts symptoms from user input to suggest potential conditions.

Personalized Medication Recommendations: Suggests medicines with correct dosages for detected diseases.

Interactive AI Chatbot: Conversational interface for intuitive, real-time health consultations.

Guided Consultations Page: AI-powered form where users fill symptoms and patient details.

Comprehensive Results Display: Shows diseases, recommended medicines, dosage, and lifestyle advice.

Responsive Design: Works seamlessly on desktop and mobile devices.

# 🧠 Models Used

PrescribeRight leverages Hugging Face models for NLP and biomedical entity extraction:

1. General NLP & Text Processing

Model: google/flan-t5-small

Purpose: Text summarization, keyword extraction, and text-to-text transformations.

Use Case: Extracts relevant keywords before biomedical entity recognition.

Link: Hugging Face Model

2. Biomedical Named Entity Recognition (NER)

Model: d4data/biomedical-ner-all

Purpose: Extracts biomedical entities like diseases, symptoms, chemicals, treatments, and durations.

Use Case: Populates slots such as symptoms, duration, age, gender, and severity from user input.

Link: Hugging Face Model

3. Workflow Between Models

google/flan-t5-small extracts keywords and summarizes user input.

Keywords are passed to d4data/biomedical-ner-all for precise biomedical entity extraction.

Extracted entities feed the backend for disease prediction and medication recommendation.

# 🏗️ Workflow & Architecture

PrescribeRight follows a streamlined AI-powered pipeline:

Model Training (train.py) – Trains AI model on symptom-disease-medication CSV datasets.

Knowledge Base Construction (buildknowledge.py) – Converts trained model outputs into a structured knowledge base for fast retrieval of diseases, symptoms, medicines, and dosages.

Backend (app.py) – Loads model & knowledge base, exposes API endpoints, predicts diseases, suggests medications with proper dosage, and returns structured responses.

Frontend (React.js) – Interactive interface for guided consultations and chatbot, sending user input to the backend and displaying AI-driven health insights.

Enhancements: Architecture diagrams, API request/response examples, and screenshots can further improve clarity and usability.

# 🚀 Technologies Used
Frontend

- React.js
- React Router
- Vite
- CSS Modules

Backend (Model)

- Python
- Flask
- Pandas & NumPy
- Scikit-learn

Backend (Chatbot)

- Python
- Flask

🔧 Getting Started

Step 1: Clone the Repository
```
bash git clone https://github.com/ritz0502/PrescribeRight.git
cd PrescribeRight
```
Step 2: Set up Backend (Model)
```
bash cd model
python -m venv venv

Windows
.\venv\Scripts\activate

macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
python app.py
```

👉 Backend server runs on http://127.0.0.1:3000

Step 3: Set up Backend (Chatbot)
```
cd chatbot
python -m venv venv

Windows
.\venv\Scripts\activate

macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
python app.py
```

👉 Chatbot server runs on http://127.0.0.1:3001

Step 4: Run the Frontend
```
cd frontend-app
npm install
npm run dev
```
👉 Frontend runs on http://localhost:5173

# 📁 Project Structure
```.
├── chatbot/            # NLP-based chatbot backend
├── model/              # AI model backend for predictions
├── frontend-app/       # React frontend
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   └── ...
└── README.md```
