import React, { useState } from 'react';
import '../components/components.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hi there! How can I assist you?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(prev => !prev);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: "I'm still learning! But I'll have better answers soon. 😊", sender: "bot" }
      ]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>
        💬
      </button>

      <div className={`chatbot-window ${isOpen ? 'open' : 'closed'}`}>        <div className="chatbot-header">
          <h3>Janetix AI Chat</h3>
          <button className="chatbot-close" onClick={toggleChat}>✖</button>
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </div>
  );
};
console.log("✅ Chatbot Component Loaded!");

export default Chatbot;