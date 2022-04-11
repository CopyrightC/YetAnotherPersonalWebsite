import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

//Components Import
import {Navbar} from "./components/Navbar";
import { ProjectsAPI} from "./components/ProjectsAPI";
import {Home} from "./components/Home";
import {Contact} from "./components/Contact";
import { PageNotFound } from "./components/PageNotFound";
import React from "react";

function App() {
  let theme = localStorage.getItem("dark");
  const [dark,setDark] = React.useState(theme !== "no" ? true : false);
  return (
    <div id="App" className="AppLight">
      <Router>
        <Navbar dark={dark} setDark={setDark}/>
      
          <Routes>
            <Route exact path="/" element={<Home dark={dark}/>}/>
            <Route exact path="/projects" element={<ProjectsAPI dark={dark}/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
      
      </Router>
    </div>
  );
}

export default App;
