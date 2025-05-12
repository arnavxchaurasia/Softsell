import React, { useState } from "react";
import axios from "axios";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true);  // Chat open/close state
  const [isLargeSize, setIsLargeSize] = useState(true);  // Chat size state

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        input,
      });

      const aiReply = response.data?.reply || "No response received.";
      const aiMessage = { sender: "ai", text: aiReply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error contacting backend:", error.message);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const toggleSize = () => {
    setIsLargeSize((prev) => !prev);
  };

  return (
    isChatOpen && (
      <div className={`chat-widget ${isLargeSize ? "large" : "small"}`}>
        <div className="messages">
        <div className="chat-topbar">
  <div className="resize-button" onClick={toggleSize} title="Resize">
    &#x21C5;
  </div>
  <div className="exit-button" onClick={toggleChat} title="Close">
    ✖
  </div>
</div>

          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === "user" ? "user" : "ai"}`}
            >
              <div className="avatar">{message.sender === "user" ? "U" : "A"}</div>
              <div className="message-text">
                <p>{message.text}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="message ai typing">
              <div className="avatar">A</div>
              <div className="message-text">
                <p>Typing...</p>
              </div>
            </div>
          )}
        </div>

        {/* Input Area (moved to the bottom) */}
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything!"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={loading}
          />
          <button onClick={sendMessage} disabled={loading || input.trim() === ""}>
            Send
          </button>
        </div>

        {/* Exit Button (Positioned correctly) */}
        <div className="exit-button" onClick={toggleChat}>
          X
        </div>

        {/* Resize Button */}
        <div className="resize-button" onClick={toggleSize}>
          &#x21C5; {/* Resize icon */}
        </div>
      </div>
    )
  );
};

export default ChatWidget;
