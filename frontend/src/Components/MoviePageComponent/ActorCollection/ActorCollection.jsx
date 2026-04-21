import React from 'react'
import './ActorCollection.css'
import { Link } from 'react-router-dom'

const ActorCollection = ({actors}) => {

  console.log(actors)

  return (
    <div className="actor-collection-container">
        <h2>Reparto Principal</h2>
        <div className="actor-collection-list">
          {
            actors.map((actor, index) => (
              <div className="actor-card">
                <Link to={`/actor/${actor.tmdb_id}`}><img src={actor.actor_image} alt="" /></Link>
                <div className="actor-card-data">
                  <h4>{actor.actor_name}</h4>
                  <p>{actor.character_name}</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default ActorCollection