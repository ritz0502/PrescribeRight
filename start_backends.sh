#!/bin/bash

echo "🚀 Starting PrescribeRight Backends..."

echo ""
echo "1️⃣ Starting Model Backend (Port 3000)..."
cd model
source env/bin/activate
python app.py &
MODEL_PID=$!
cd ..

echo "⏳ Waiting for Model Backend to start..."
sleep 3

echo ""
echo "2️⃣ Starting Chatbot Backend (Port 3001)..."
cd chatbot
source env/bin/activate
python app.py &
CHATBOT_PID=$!
cd ..

echo ""
echo "✅ Both backends are starting..."
echo "   📊 Model Backend: http://127.0.0.1:3000"
echo "   💬 Chatbot Backend: http://127.0.0.1:3001"
echo ""
echo "Press Ctrl+C to stop both backends"

# Wait for user to stop
trap "echo '🛑 Stopping backends...'; kill $MODEL_PID $CHATBOT_PID; exit" INT
wait
