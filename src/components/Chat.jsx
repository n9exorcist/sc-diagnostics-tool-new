import React from "react";
import { copyToClipboard } from "./utils"; // Custom utility function
import "./Chat.css"; // Import your CSS file for styling

const Chat = ({ messages }) => {
  return (
    <div className="chat">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
