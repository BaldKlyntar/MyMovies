import React from 'react'
import HomePageComponent from '../Components/HomePageComponent/HomePageComponent'
import { useLoaderData } from 'react-router-dom'

const HomePage = ({flag}) => {
  const movies = useLoaderData();
  console.log(flag)
  return (
    <>
        <HomePageComponent movies={movies}/>
    </>
  )
}

export default HomePage