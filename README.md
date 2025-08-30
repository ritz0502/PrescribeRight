PrescribeRight: Your AI-Powered Health Assistant

💡 About the Project
PrescribeRight is a full-stack web application that provides users with preliminary health insights and personalized care recommendations. It uses AI models to analyze symptoms and patient data, offering potential disease diagnoses, medication plans, and lifestyle advice.

The application has two main interaction modes:

Guided Consultation: A step-by-step form for structured symptom input and detailed results display.

AI Chatbot: An interactive chat interface where users can have a conversation with an NLP model, helping them understand possible diseases and prescribing appropriate medications.

⚠️ Disclaimer: PrescribeRight is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional.

✨ Key Features

AI-Powered Symptom Analysis: Analyzes user-input symptoms to suggest potential medical conditions.

Personalized Medication Recommendations: Suggests medications and correct dosages for detected diseases.

Interactive AI Chatbot: Conversational interface where the NLP chatbot interacts with the user to extract symptoms, understand the disease, and recommend medications.

Guided Consultations Page: Structured AI-powered form where users can fill in symptoms and patient details to get disease and medication predictions.

Comprehensive Results Display: Shows detailed information including suggested medicines, dosage, and lifestyle advice.

Responsive Design: Works seamlessly on desktop and mobile devices.

🧠 Models Used

PrescribeRight leverages state-of-the-art Hugging Face models for NLP and biomedical entity extraction, enabling accurate symptom understanding and disease prediction.

1. General NLP & Text Processing

Model: google/flan-t5-small

Purpose: Handles text summarization, keyword extraction, and general text-to-text transformations.

Use Case: Extracts key information from user input before passing it to the biomedical entity recognition model.

Link: Hugging Face Model

2. Biomedical Named Entity Recognition (NER)

Model: d4data/biomedical-ner-all

Purpose: Extracts biomedical entities such as diseases, symptoms, chemicals, treatments, and durations from text.

Use Case: Identifies relevant medical entities from user inputs to populate slots like symptoms, duration, age, and severity.

Link: Hugging Face Model

3. How They Work Together

google/flan-t5-small processes the user’s input, summarizing text and extracting keywords.

Extracted keywords are then fed into d4data/biomedical-ner-all for precise biomedical entity recognition.

Identified entities are used by the backend to generate disease predictions and recommend appropriate medications with correct dosages.

🏗️ Workflow & Architecture

PrescribeRight follows a streamlined AI-powered pipeline:

Model Training (train.py) – Trains the AI model using symptom-disease-medication datasets (CSV) to learn accurate mappings.

Knowledge Base Construction (buildknowledge.py) – Converts the trained model outputs into a structured knowledge base for quick retrieval of diseases, symptoms, medications, and dosages.

Backend (app.py) – Loads the model and knowledge base, provides API endpoints, predicts diseases, suggests medications with proper dosage, and returns structured responses.

Frontend (React.js) – Provides an interactive interface for guided consultations and chatbot interactions, sending user input to the backend and displaying AI-driven health insights.

Enhancements & Notes: Include architecture diagrams, sample API requests/responses, and screenshots to visualize the flow. Optionally, add logging, error handling, or multi-user session management for production-readiness.

🚀 Technologies Used
Frontend

React.js

React Router

Vite

CSS Modules

Backend (Model)

Python

Flask

Pandas & NumPy

Scikit-learn

Backend (Chatbot)

Python

Flask

🔧 Getting Started
Prerequisites

Node.js (v14 or higher)

Python (v3.8 or higher)

pip

Step 1: Clone the Repository
git clone https://github.com/ritz0502/PrescribeRight.git
cd PrescribeRight

Step 2: Set up the Backend (Model)
cd model
python -m venv venv

# On Windows
.\venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
python app.py


👉 The backend server will run on http://127.0.0.1:3000

Step 3: Set up the Backend (Chatbot)
cd chatbot
python -m venv venv

# On Windows
.\venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
python app.py


👉 The chatbot server will run on http://127.0.0.1:3001

Step 4: Run the Frontend
cd frontend-app
npm install
npm run dev


👉 The frontend will run on http://localhost:5173

📁 Project Structure
.
├── chatbot/            # NLP-based chatbot backend
├── model/              # AI model backend for predictions
├── frontend-app/       # React frontend
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   └── ...
└── README.md
