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

    const [status, setStatus] = useState();

    useEffect(() => {
        const fetchAuthUser = async () => {
        try {
            const {data} = await customFetch.get('/status/');
            setStatus(data)
        } catch (error){
            console.log(error)
        } 
        };

        fetchAuthUser();
        
    }, [])
    
    let auth_flag = true

    if (!status){
      auth_flag = false
    }

  
  let movie_reviews = movie.reviews
  return (
    <div className="movie-page-container">
      <MovieCard {...movie}/>
      <ActorCollection actors = {movie.roles}/>
      {
        auth_flag ? <ReviewForm {...movie} user_id = {status.user.id}  /> : <></>
      }
      <ReviewList reviews = {movie_reviews}/>
    </div>
  )
}

export default MoviePageComponent