// Import React
import React from "react";
import bot from "../assets/bot.svg";
import user from "../assets/user.svg";
import speaker3 from "../assets/speaker_icon3.svg";

// Define a custom component for each chat message
const ChatMessage = ({ message, sender }) => {
  const handleSpeak = (message) => {
    const value = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(value);
  };

  return (
    <div
      className={`d-flex flex-row justify-content-${
        sender === "user" ? "end" : "start"
      } mb-4`}
    >
      <div
        className="p-3 me-3 border"
        style={{
          color: sender === "user" ? "#352F44" : "#03001C",
          backgroundColor: sender === "user" ? "#FAF0E6" : "#B6EADA",
          borderRadius: "15px",
        }}
        // className={`p-3 me-3 border bg-${
        //   sender === "user" ? "light" : "secondary"
        // } text-${sender === "user" ? "dark" : "white"}`}
        // style={{ borderRadius: "15px" }}
      >
        <button onClick={() => handleSpeak(message)}>
          <img
            src={speaker3}
            alt={"speaker_image"}
            style={{ width: "15px", height: "100%" }}
          />
        </button>
        <p className="small mb-0">{message}</p>
      </div>
      <img
        src={`${sender === "user" ? user : bot}`}
        alt={`${sender} avatar`}
        style={{ width: "45px", height: "100%" }}
      />
    </div>
  );
};

export default ChatMessage;
