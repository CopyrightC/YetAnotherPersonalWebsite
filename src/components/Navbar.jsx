import React, { useEffect } from 'react'
import "../styles/Navbar.css"
import {Link} from 'react-router-dom'
// import Switch from '@mui/material/Switch';
export const Navbar = () => {

  let theme = localStorage.getItem("dark");
  const [dark,setDark] = React.useState(theme !== "no" ? true : false);
  const [checked,setChecked] = React.useState(dark)
  useEffect(()=>{
    try{

      let nav = document.getElementById("nav-id");
      let logo = document.getElementById("logo")
      let App = document.getElementById("App");
      let hr = document.getElementsByTagName("hr");
      let btn = document.getElementsByTagName("button")
      let chess = document.getElementById("chessDiv")
      let scroll = document.getElementById("scrollUp")
      if(dark){
          setChecked(true);
          localStorage.setItem("dark","yes")
          nav.className = "dark-nav";
          logo.src = "https://imgur.com/AXVeVvE.png";
          logo.style.height = "3.8rem"
          App.className = "AppDark";
          for(let i = 0; i < hr.length; i++){
            hr[i].className = "darkHr"
          }
          scroll.style.backgroundColor = "rgba(167, 185, 81, 0.7)"
          btn[0].style.backgroundColor = "rgba(167, 185, 81, 0.7)"
          chess.className = "chessDark"
      }
      else{
          setChecked(false);
          localStorage.setItem("dark","no")
          nav.className = "nav";
          logo.src =  "https://imgur.com/f8HDTK1.png";
          logo.style.height = "4.9rem"
          App.className = "AppLight";
          scroll.style.backgroundColor = "#a8c720"
          for(let i = 0; i < hr.length; i++){
            hr[i].className = "lightHr"
          }
          btn[0].style.backgroundColor = "#a8c720"
          chess.className = "chessLight"
      }
  }
  catch{}
}
    ,[dark])



  return (
    <div className="nav" id="nav-id">
      <img src="https://imgur.com/f8HDTK1.png" className='logo' id="logo"/>
      <div className="links">
        <Link to="/" className='no-link'>
        <div className="nav-item">Home</div>
        </Link>
        <Link to="/projects" className="no-link">
          <div className="nav-item">Projects</div>
        </Link>
        <Link to="/contact" className='no-link'>
          <div className="nav-item">Contact</div>
        </Link>
      </div>
      <input type="checkbox" id="toggle" defaultChecked={checked} onChange={()=>setDark(!dark)}/>
      <label htmlFor="toggle"/>
    </div>
  )
}
