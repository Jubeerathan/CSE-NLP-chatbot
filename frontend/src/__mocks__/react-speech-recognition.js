// src/__mocks__/react-speech-recognition.js
const useSpeechRecognition = jest.fn().mockReturnValue({
  transcript: "",
  listening: false,
  browserSupportsSpeechRecognition: true,
});

const SpeechRecognition = {
  startListening: jest.fn(),
  abortListening: jest.fn(),
};

export { useSpeechRecognition, SpeechRecognition };
