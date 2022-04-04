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
import { PageNotFound } from "./components/PageNotFound";
import React from "react";
function App() {
  
  return (
    <div id="App" className="AppLight">
      <Router>
        <Navbar/>
      
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/projects" element={<ProjectsAPI/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
      
      </Router>
    </div>
  );
}

export default App;
