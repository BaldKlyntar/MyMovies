import React from 'react'
import './ActorPageComponent.css'
import customFetch from '../../Utils/customFetch'
import { useParams } from 'react-router-dom'
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


export const loader = async ({ params }) => {

  const { tmdb_id } = params
  try {
    const { data } = await customFetch.get(`/actors/${tmdb_id}`)
    return data
    
  } catch (error) {
    console.log(error)
    return null
    
  }
}

const ActorPageComponent = ({actor}) => {
  return (
   <div className="actor-page-container">
        <div className="actor-page-top">
            <div className="actor-page-image">
                <img src={actor.image} alt="" />
            </div>
            <div className="actor-page-data">
                <h1>{actor.name}</h1>
                <div className="actor-page-meta">
                    <p><FaCalendarAlt color='rgb(230, 74, 74)'/> {actor.birthday}</p>
                    <p><FaLocationDot color='rgb(230, 74, 74)'/> {actor.place_of_birth}</p>
                </div>
            </div>      
        </div>
        <div className="actor-page-bottom">
            <div className="actor-page-biography">
                <h2>Biografia</h2>
                <hr />
                <p>{actor.biography}</p>
                <hr />
            </div>
        </div>
   </div>
  )
}

export default ActorPageComponent