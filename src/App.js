import {Navbar} from "./components/Navbar"
import './App.css';
import {Home} from "./components/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Projects } from "./components/Projects";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
