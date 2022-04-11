import React, { useEffect } from 'react'
import "../styles/Navbar.css"
import {Link} from 'react-router-dom'
import hamburger from "../hamburger.png"
export const Navbar = (props) => {

  const showLinks = () =>{
    let links = document.getElementById("links")
    links.classList.toggle("clicked");
  }

  const [checked,setChecked] = React.useState(props.dark)

  useEffect(()=>{
    try{

      let nav = document.getElementById("nav-id");
      let logo = document.getElementById("logo")
      let App = document.getElementById("App");
      let scroll = document.getElementById("scrollUp")

      if(props.dark){
          setChecked(true);
          localStorage.setItem("dark","yes")
          nav.className = "dark-nav";
          logo.src = "https://imgur.com/AXVeVvE.png";
          logo.style.height = "3.8rem"
          App.className = "AppDark";
          scroll.style.backgroundColor = "rgba(167, 185, 81, 0.7)"
      }
      
      else{
          setChecked(false);
          localStorage.setItem("dark","no")
          nav.className = "nav";
          logo.src =  "https://imgur.com/f8HDTK1.png";
          logo.style.height = "4.9rem"
          App.className = "AppLight";
          scroll.style.backgroundColor = "#a8c720"
      }

  }
  catch{}
}
    ,[props.dark])



  return (
    <nav className="nav" id="nav-id">
      <img src="https://imgur.com/f8HDTK1.png" className='logo' id="logo"/>
      <img src={hamburger} class="hamburger" id="ham" onClick={()=> showLinks()}/>
      <ul className="links" id="links">
        <Link to="/" className='no-link'>
          <div className="nav-item">Home</div>
        </Link>
        <Link to="/projects" className="no-link">
          <div className="nav-item">Projects</div>
        </Link>
        <Link to="/contact" className='no-link'>
          <div className="nav-item">Contact</div>
        </Link>
        <input type="checkbox" id="toggle" defaultChecked={checked} onChange={()=>props.setDark(!props.dark)}/>
        <label htmlFor="toggle"/>
        
      </ul>
      
    </nav>
  )
}
