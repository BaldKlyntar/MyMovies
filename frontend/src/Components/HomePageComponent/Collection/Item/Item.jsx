import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const Item = (props) => {

  return (
    <div className="item-container">
        <Link to={`/movie/${props.id}`}>
        <div className="item-image">
            <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt="" />
        </div>
        </Link>
        <div className="item-specs">
            <h3 className='item-title'>{props.title}</h3>
            <p> <FaStar color='red'/> {props.vote_average}</p>
            <p>{props.release_date}</p>
        </div>
    </div>
  )
}

export default Item