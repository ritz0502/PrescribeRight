import { useState, useRef, useEffect } from "react";
import "./ChatBot.css";

export default function ChatBot() {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [msgs]);

  // Helper function to get current timestamp
  const getTimestamp = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Focus input on component mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Send message to backend
  const send = async (body) => {
    setIsLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:3001/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: body.message }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const msg = await res.json();

      // Handle different response types from your chatbot backend
      let messageContent = msg.message;
      let messageType = "text";

      if (msg.type === "prediction") {
        messageType = "prediction";
        messageContent = msg.message; // This contains the full prediction data
      } else if (msg.type === "question") {
        messageType = "text";
        messageContent = msg.message;
      }

      setMsgs((m) => [
        ...m,
        {
          role: "bot",
          type: messageType,
          content: messageContent,
          state: msg.state,
          timestamp: getTimestamp(),
        },
      ]);
    } catch (err) {
      console.error("Error sending message:", err);
      setMsgs((m) => [
        ...m,
        {
          role: "bot",
          type: "error",
          content:
            "⚠️ Unable to connect to server. Please check if the chatbot backend is running on port 3001 and try again.",
          timestamp: getTimestamp(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle user message submit
  const onSubmit = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const text = input.trim();
    if (!text || isLoading) return;

    setMsgs((m) => [
      ...m,
      {
        role: "user",
        type: "text",
        content: text,
        timestamp: getTimestamp(),
      },
    ]);
    setInput("");

    // Reset textarea height
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }

    send({ message: text });
  };

  // Handle textarea auto-resize
  const handleInputChange = (e) => {
    setInput(e.target.value);

    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 128) + "px";
  };

  return (
    <div className="chat-container">
      <div className="chat-widget">
        {/* Header */}
        <div className="chat-header">
          <div className="header-content">
            <div className="header-icon">🩺</div>
            <div>
              <h1 className="header-title">Health Assistant</h1>
              <p className="header-subtitle">
                AI-powered health guidance and symptom analysis
              </p>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="messages-container">
          {msgs.length === 0 && (
            <div className="welcome-message">
              <div className="welcome-icon">💬</div>
              <h3 className="welcome-title">
                Welcome to Your Health Assistant
              </h3>
              <p className="welcome-subtitle">
                Describe your symptoms or health concerns, and I'll provide
                personalized guidance and recommendations based on your
                information.
              </p>
            </div>
          )}

          {msgs.map((m, i) => (
            <Message key={i} m={m} />
          ))}

          {isLoading && (
            <div className="typing-indicator">
              <div className="typing-bubble">
                <div className="typing-dots">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
                <span className="typing-text">Analyzing...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="input-form">
          <form onSubmit={onSubmit} className="input-container">
            <div className="input-wrapper">
              <textarea
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    onSubmit();
                  }
                }}
                placeholder="Describe your symptoms or health concerns..."
                disabled={isLoading}
                className="message-input"
                rows={1}
              />
              <div className="input-icon">💭</div>
            </div>
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="send-button"
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                <>
                  <span>Send</span>
                  <span>📤</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Enhanced Message Component
function Message({ m }) {
  const isUser = m.role === "user";
  const isError = m.type === "error";

  // Handle prediction results with structured data
  if (m.type === "prediction" && typeof m.content === "object") {
    const { predicted_disease, recommendations, userInput } = m.content;

    return (
      <div className="message bot">
        <div className="prediction-result">
          <div className="prediction-header">
            <div className="prediction-icon">🧾</div>
            <h4 className="prediction-title">Diagnosis Result</h4>
            {m.timestamp && (
              <span className="message-timestamp">{m.timestamp}</span>
            )}
          </div>

          <div className="diagnosis-info">
            <div className="diagnosis-disease">
              <strong>Disease:</strong> {predicted_disease}
            </div>

            {recommendations?.description && (
              <p className="diagnosis-description">
                <strong>Description:</strong> {recommendations.description}
              </p>
            )}
          </div>

          {recommendations?.diets?.length > 0 && (
            <div className="recommendation-section">
              <h5 className="section-title">
                🥗 <span>Dietary Recommendations</span>
              </h5>
              <ul className="section-list">
                {recommendations.diets.map((diet, i) => (
                  <li key={i} className="section-item">
                    {diet}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recommendations?.medication_plan?.length > 0 && (
            <div className="recommendation-section">
              <h5 className="section-title">
                💊 <span>Medication Plan</span>
              </h5>
              <ul className="section-list">
                {recommendations.medication_plan.map((med, i) => (
                  <li key={i} className="section-item medication-item">
                    <div>
                      <span className="medication-name">{med.name}</span>{" "}
                      <span className="medication-class">({med.class})</span> —{" "}
                      <span className="medication-dosage">{med.dosage}</span>
                    </div>
                    {med.reasoning && (
                      <div className="medication-reasoning">
                        {med.reasoning}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recommendations?.precautions?.length > 0 && (
            <div className="recommendation-section">
              <h5 className="section-title">
                ⚠️ <span>Precautions</span>
              </h5>
              <ul className="section-list">
                {recommendations.precautions.map((precaution, i) => (
                  <li key={i} className="section-item">
                    {precaution}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recommendations?.workouts?.length > 0 && (
            <div className="recommendation-section">
              <h5 className="section-title">
                🏃‍♂️ <span>Exercise Recommendations</span>
              </h5>
              <ul className="section-list">
                {recommendations.workouts.map((workout, i) => (
                  <li key={i} className="section-item">
                    {workout}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {userInput && (
            <div className="user-info">
              <span className="user-info-label">Your Information:</span> Age{" "}
              {userInput?.age || "N/A"}, Gender {userInput?.gender || "N/A"}
              {userInput?.symptoms?.length > 0 && (
                <>, Symptoms: {userInput.symptoms.join(", ")}</>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Regular text messages
  return (
    <div className={`message ${isUser ? "user" : "bot"}`}>
      <div
        className={`message-bubble ${isUser ? "user" : "bot"} ${
          isError ? "error" : ""
        }`}
      >
        {typeof m.content === "string"
          ? m.content
          : JSON.stringify(m.content, null, 2)}
        {m.timestamp && m.role === "user" && (
          <span className="message-timestamp">{m.timestamp}</span>
        )}
        {m.timestamp && m.role === "bot" && (
          <span className="chat-timestamp">{m.timestamp}</span>
        )}
      </div>
    </div>
  );
}
