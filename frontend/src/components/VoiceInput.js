// VoiceInput.js
import React from "react";
import { useEffect, useState } from "react";
import createSpeechServicesPonyfill from "web-speech-cognitive-services";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
import mic_on from "../assets/mic_on_icon.svg";
import mic_off from "../assets/mic_off_icon.svg";

const VoiceInput = ({ userInput, setUserInput }) => {
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  const [azureToken, setAzureToken] = useState("");

  useEffect(() => {
    // Fetch the Azure Cognitive Services token from backend
    axios
      .get("/geraente_azure_token/")
      .then((response) => {
        setAzureToken(response.data.token);

        const { SpeechRecognition: AzureSpeechRecognition } =
          createSpeechServicesPonyfill({
            credentials: {
              authorizationToken: azureToken,
            },
          });

        SpeechRecognition.applyPolyfill(AzureSpeechRecognition);
      })
      .catch((error) => {
        console.error("Error fetching Azure token:", error);
      });
  }, [azureToken]);

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    // Update userInput when a new transcript is received
    if (transcript !== "") {
      setUserInput(transcript);
    }
  }, [transcript, setUserInput]);

  const startListening = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });

  const toggleMicrophone = () => {
    if (!isMicrophoneActive) {
      startListening();
    } else {
      SpeechRecognition.abortListening();
    }
    setIsMicrophoneActive(!isMicrophoneActive);
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Speech recognition is not supported.</div>;
  }

  return (
    <div>
      <button onClick={toggleMicrophone}>
        {isMicrophoneActive ? (
          <img
            src={mic_off}
            alt="mic_off"
            style={{ width: "30px", height: "100%" }}
          />
        ) : (
          <img
            src={mic_on}
            alt="mic_on"
            style={{ width: "30px", height: "100%" }}
          />
        )}
      </button>
    </div>
  );
};

export default VoiceInput;
