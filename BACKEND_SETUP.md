# 🏥 PrescribeRight Backend Setup Guide

## 🚀 Quick Start

### Option 1: Use the Startup Script (Recommended)

```bash
./start_backends.sh
```

### Option 2: Manual Startup

```bash
# Terminal 1: Start Model Backend
cd model
source env/bin/activate
python app.py

# Terminal 2: Start Chatbot Backend
cd chatbot
source env/bin/activate
python app.py
```

## 📊 System Architecture

```
Frontend (React) ←→ Chatbot Backend (Port 3001) ←→ Model Backend (Port 3000)
```

- **Frontend**: React app with chat interface
- **Chatbot Backend**: Handles conversation flow and user input processing
- **Model Backend**: ML model for disease prediction and recommendations

## 🌐 API Endpoints

### Model Backend (Port 3000)

- `GET /` - Health check
- `POST /diagnose` - Disease prediction

### Chatbot Backend (Port 3001)

- `GET /` - Health check
- `POST /chat` - Chat conversation
