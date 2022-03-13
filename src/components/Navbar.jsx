import React from 'react'
import "../styles/Navbar.css"
export const Navbar = () => {
  return (
    <div className="nav" id="nav-id">
        <a href="/" className='no-link'>
        <div className="nav-item">Home</div>
        </a>
        <a href="/projects" className="no-link">
          <div className="nav-item">Projects</div>
        </a>
        <div className="nav-item">Contact</div>
    </div>
  )
}
