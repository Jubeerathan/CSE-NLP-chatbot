import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feedbacks from "./components/Dashboard";
import Navigation from "./components/Navigation";
import Knowledgebase from "./components/Knowledgebase";
import ChatInterface from "./components/ChatInterface";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./components/ChatPage";
import VoiceInput from "./components/VoiceInput";
import UserFeedback from "./components/UserFeedback";
import { getUserRole } from "./services/AuthenticationServices";
import React, { useState, useEffect } from "react";

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    getUserRole()
      .then((data) => {
        setUserRole(data);
        console.log(userRole);
      })
      .catch((error) => {
        console.error("Error fetching user role:", error);
      });
  }, []);
  return (
    
    // router for Dictaphone
    // <div>
    //   <Dictaphone />
    //   {/* <VoiceInput /> */}
    // </div>

    // Route for  Chatpage
    <div className="App">
    <BrowserRouter>
    {userRole === "admin" ? <Navigation /> : null}
      <Routes>
        {/* <Route path="/" element={<ChatInterface/>} /> */}
        <Route path="/" element={<ChatPage />} />
        <Route
            path="/adminDashboard/knowledgebase"
            element={<Knowledgebase />}
          />
          <Route path="/adminDashboard" element={<Feedbacks />} />
      </Routes>
    </BrowserRouter>
     </div>

    // <BrowserRouter>
    //   <Navigation />
    //   <Routes>
    //     <Route  path="/adminDashboard/knowledgebase" element={<Knowledgebase />} />
    //     <Route  path="/adminDashboard" element={<Feedbacks />} />
    //     <Route exact path="/" element={<Feedbacks />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
