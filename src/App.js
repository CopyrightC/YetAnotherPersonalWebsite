import {Navbar} from "./components/Navbar"
import './App.css';
import {Home} from "./components/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ProjectsAPI} from "./components/ProjectsAPI";
import {Contact} from "./components/Contact"
import React from "react";
function App() {
  
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/projects" element={<ProjectsAPI/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
