import React from "react";
import React, { useEffect } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function VoiceInput() {
  // Pass the recognition object to the useSpeechRecognition hook
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => startListening({ language: "en-US" })}>
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
}

export default VoiceInput;
