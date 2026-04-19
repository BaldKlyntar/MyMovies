import React from 'react'
import { useEffect } from 'react'
import {getMovies} from '../../Utils/tmdb_api.js'
import { useState } from 'react'
import './HomePageComponent.css'
import BannerComponent from './BannerComponent/BannerComponent'
import Collection from './Collection/Collection.jsx'

const HomePageComponent = () => {

const [movies, setMovies] = useState([])

const loadMovies = async () => {
    const movies = await getMovies();
    setMovies(movies)
  };

    useEffect(() => {
        loadMovies()
  }, []);

  const banner_movies = movies.slice(0,5)
  const new_movies = movies.slice(0,10)
  const recommended_movies = movies.slice(10, 20)

  return (
    <div>
        <BannerComponent banner_movies={banner_movies}/>
        <Collection label={'Peliculas nuevas'} movies={new_movies}/>
        <Collection label={'Recomendado para ti'} movies={recommended_movies}/>
    </div>
  )
}

export default HomePageComponent