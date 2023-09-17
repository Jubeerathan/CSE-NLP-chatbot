import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feedbacks from "./components/Dashboard";
import Navigation from "./components/Navigation";
import Knowledgebase from "./components/Knowledgebase";
import ChatInterface from "./components/ChatInterface";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<ChatInterface/>}/>
      </Routes>
    </BrowserRouter>


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