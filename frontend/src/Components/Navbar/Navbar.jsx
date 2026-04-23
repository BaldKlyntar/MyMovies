import React from 'react'
import './Navbar.css'
import { RiMovie2AiFill } from "react-icons/ri";
import links from '../../Utils/links'
import { NavLink } from 'react-router-dom';
import customFetch from '../../Utils/customFetch';
import { redirect } from 'react-router-dom';

export const loader = async ({ params }) => {

  try {
    const { data } = await customFetch.get('/status/')
    return data
    
  } catch (error) {
    console.log(error)
    return null
    
  }
}


const Navbar = ({ flag }) => {

    const logoutUser = async () => {
    await customFetch.post('/auth/logout/')
    return redirect("/");
    }


  return (
    <div className="navbar-container">
        <div className="navbar-logo-container">
            <RiMovie2AiFill size={45}/>
            <h2>My Movies</h2>
        </div>
        <div className="navbar-links-container">
            <div className="navbar-links">
                {links.map((link) => {
                    const { text, path } = link;

                    if (flag && text === "Iniciar Sesion") {
                    return (
                        <button onClick={logoutUser} className="nav-button" key="logout-btn">
                        Cerrar Sesion
                        </button>
                    );
                    }

                    return (
                    <NavLink className="nav-link" to={path} key={text}>
                        {text}
                    </NavLink>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Navbar