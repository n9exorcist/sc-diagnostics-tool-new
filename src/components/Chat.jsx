import React from "react";

const Chat = ({ messages }) => {
  return (
    <div className="chat">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
};

export default Chat;
