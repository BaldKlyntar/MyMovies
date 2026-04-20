import React from 'react'
import HomePageComponent from '../Components/HomePageComponent/HomePageComponent'
import { useLoaderData } from 'react-router-dom'

const HomePage = () => {
  const movies = useLoaderData();
  return (
    <>
        <HomePageComponent movies={movies}/>
    </>
  )
}

export default HomePage