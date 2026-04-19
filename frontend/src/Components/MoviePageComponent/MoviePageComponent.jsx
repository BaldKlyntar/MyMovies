import React from 'react'
import './MoviePageComponent.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMovies } from '../../Utils/tmdb_api'
import MovieCard from './MovieCard/MovieCard'
import ReviewForm from './ReviewForm/ReviewForm'
import ReviewList from './ReviewList/ReviewList'

const MoviePageComponent = () => {

  const [movies, setMovies] = useState([])
  
  const loadMovies = async () => {
      const movies = await getMovies();
      setMovies(movies)
    };
  
      useEffect(() => {
          loadMovies()
    }, []);

  const { id } = useParams();

  const movie = movies.find(u => u.id === Number(id))


  

  return (
    <div className="movie-page-container">
      <MovieCard {...movie}/>
      <ReviewForm {...movie} />
      <ReviewList/>
    </div>
  )
}

export default MoviePageComponent