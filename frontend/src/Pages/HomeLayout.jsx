import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import { useLoaderData } from 'react-router-dom'

const HomeLayout = () => {
  const auth = useLoaderData();
  let auth_flag = true
  if (auth === null){
    auth_flag = false 
  }

  return (
    <div>
        <Navbar flag = {auth_flag}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout