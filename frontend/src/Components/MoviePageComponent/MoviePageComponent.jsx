import React from 'react'
import './MoviePageComponent.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMovies } from '../../Utils/tmdb_api'
import MovieCard from './MovieCard/MovieCard'
import ReviewForm from './ReviewForm/ReviewForm'
import ReviewList from './ReviewList/ReviewList'
import customFetch from '../../Utils/customFetch'
import ActorCollection from './ActorCollection/ActorCollection'

export const loader = async ({ params }) => {

  const { id } = params
  try {
    const { data } = await customFetch.get(`/movies/${id}`)
    return data
    
  } catch (error) {
    console.log(error)
    return null
    
  }
}


const MoviePageComponent = ({movie}) => {
  
  let movie_reviews = movie.reviews
  return (
    <div className="movie-page-container">
      <MovieCard {...movie}/>
      <ActorCollection actors = {movie.roles}/>
      <ReviewForm {...movie} />
      <ReviewList reviews = {movie_reviews}/>
    </div>
  )
}

export default MoviePageComponent