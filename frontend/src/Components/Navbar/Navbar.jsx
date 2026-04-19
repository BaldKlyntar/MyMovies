import React from 'react'
import './Navbar.css'
import { RiMovie2AiFill } from "react-icons/ri";
import links from '../../Utils/links'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-logo-container">
            <RiMovie2AiFill size={45}/>
            <h2>My Movies</h2>
        </div>
        <div className="navbar-links-container">
            <div className="navbar-links">
                {links.map((link, i) => {
                    const {text, path} = link
                    return <NavLink className='nav-link' to={path} key={text}>{text}</NavLink>
                })}
            </div>
        </div>
    </div>
  )
}

export default Navbar