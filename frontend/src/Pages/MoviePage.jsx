import React from 'react'
import MoviePageComponent from '../Components/MoviePageComponent/MoviePageComponent'
import { useLoaderData } from 'react-router-dom'

const MoviePage = () => {
    const movie = useLoaderData();
  return (
    <>
        <MoviePageComponent movie = {movie}/>
    </>
  )
}

export default MoviePage