# PrescribeRight: Your AI-Powered Health Assistant

## 💡 About the Project
**PrescribeRight** is a full-stack web application that provides users with preliminary health insights and personalized care recommendations.  
It uses an AI model to analyze symptoms and patient data, offering potential disease diagnoses, medication plans, and lifestyle advice.  

The application has two main interaction modes:
- **Guided Consultation**: A step-by-step form for structured symptom input and detailed results display.  
- **AI Chatbot**: An interactive chat interface for conversational, AI-driven health consultations.  

> **Disclaimer**: PrescribeRight is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional.

---

## ✨ Key Features
- **AI-Powered Symptom Analysis**: Accurately analyzes symptoms to suggest potential conditions.  
- **Personalized Recommendations**: Provides tailored suggestions for medicines, dosage, diet, and exercise.  
- **Interactive Chatbot**: A conversational interface for intuitive health consultations.  
- **Comprehensive Results**: Displays detailed information on predicted diseases, including lifestyle advice.  
- **Responsive Design**: A modern UI that works across desktop and mobile devices.  

---

## 🚀 Technologies Used
### Frontend
- React.js  
- React Router  
- Vite  
- CSS Modules  

### Backend (Model)
- Python  
- Flask  
- Pandas & NumPy  
- Scikit-learn  

### Backend (Chatbot)
- Python  
- Flask  

---

## 🔧 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)  
- **Python** (v3.8 or higher)  
- **pip**

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/ritz0502/PrescribeRight.git
cd PrescribeRight
````

---

### Step 2: Set up the Backend (Model)

Open a terminal and navigate to the `model` directory:

```bash
cd backend/model
python -m venv venv

# On Windows
.\venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
python app.py
```

👉 The backend server will run on **[http://127.0.0.1:3000](http://127.0.0.1:3000)**

---

### Step 3: Set up the Backend (Chatbot)

Open a new terminal and navigate to the `chatbot` directory:

```bash
cd ../chatbot
python -m venv venv

# On Windows
.\venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
flask run
```

👉 The chatbot server will run on **[http://127.0.0.1:5000](http://127.0.0.1:5000)**

---

### Step 4: Run the Frontend

Open a third terminal and navigate to the `frontend-app` directory:

```bash
cd ../../frontend-app
npm install
npm run dev
```

👉 The frontend will run on **[http://localhost:5173](http://localhost:5173)**

---

## 📁 Project Structure

```
.
├── backend/
│   ├── chatbot/
│   └── model/
├── frontend-app/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   └── ...
└── README.md
```

