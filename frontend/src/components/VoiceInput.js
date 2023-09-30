import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceInput = ({ setUserInput }) => {
  // Pass the recognition object to the useSpeechRecognition hook
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    // Update userInput when a new transcript is received
    if (transcript !== "") {
      setUserInput(transcript);
    }
  }, [transcript, setUserInput]);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);

  const toggleMicrophone = () => {
    if (!isMicrophoneActive) {
      startListening({ language: "en-US" });
    } else {
      SpeechRecognition.stopListening();
    }
    setIsMicrophoneActive(!isMicrophoneActive);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      {/* <p>Microphone: {listening ? "on" : "off"}</p> */}
      <button onClick={toggleMicrophone}>
        {isMicrophoneActive ? "Stop" : "Start"}
      </button>
      <button onClick={resetTranscript}>Reset</button>
      {/* <p>{transcript}</p> */}
    </div>
  );
};

export default VoiceInput;
