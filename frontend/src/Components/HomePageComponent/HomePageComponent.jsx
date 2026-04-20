import React from 'react'
import { useEffect } from 'react'
import {getMovies} from '../../Utils/tmdb_api.js'
import { useState } from 'react'
import './HomePageComponent.css'
import BannerComponent from './BannerComponent/BannerComponent'
import Collection from './Collection/Collection.jsx'
import customFetch from '../../Utils/customFetch.js'
import { redirect } from 'react-router-dom'

export const loader = async () => {
  try{
    const { data } = await customFetch.get('/movies/');
    return data;
  } catch (error) {
    console.log(error)
    return redirect("/")
  }
}

const HomePageComponent = ({movies}) => {
  console.log(movies)
  const banner_movies = movies.slice(0,5)
  const new_movies = movies.slice(0,10)
  const recommended_movies = movies.slice(5, 15)

  return (
    <div className='home-page-container'>
        <BannerComponent banner_movies={banner_movies}/>
        <Collection label={'Peliculas nuevas'} movies={new_movies}/>
        <Collection label={'Recomendado para ti'} movies={recommended_movies}/>
    </div>
  )
}

export default HomePageComponent