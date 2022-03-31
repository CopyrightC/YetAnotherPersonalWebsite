import React from 'react'
import "../styles/Navbar.css"
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className="nav" id="nav-id">
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
  )
}
