import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <hr />
      <h3><FaRegCopyright/> 2026 MyMovies. All rights reserved.</h3>
    </div>
  )
}

export default Footer