// Import React
import React from "react";
import bot from "../assets/bot.svg";
import user from "../assets/user.svg";



// Define a custom component for each chat message
const ChatMessage = ({ message, sender }) => {
  return (
    <div className={`d-flex flex-row justify-content-${sender === "user" ? "end" : "start"} mb-4`}>
      <div className={`p-3 me-3 border bg-${sender === "user" ? "light" : "info"} text-${sender === "user" ? "dark" : "white"}`} style={{ borderRadius: "15px" }}>
        <p className="small mb-0">{message}</p>
      </div>
      <img src={`${sender === "user" ? user : bot}`} alt={`${sender} avatar`} style={{ width: "45px", height: "100%" }} />
    </div>
  );
};

export default ChatMessage;
