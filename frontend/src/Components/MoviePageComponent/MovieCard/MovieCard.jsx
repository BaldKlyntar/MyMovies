import React from 'react'
import './MovieCard.css'
import StarRating from '../../StarRating/StarRating'
import { IoPeople } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import ActorCollection from '../ActorCollection/ActorCollection';

const MovieCard = (props) => {
    

    let specs_list = [
        {
            logo: <FaCalendar size={25} color='rgb(230, 81, 81)'/>,
            label: 'Fecha de estreno',
            data: props.release_date
        },
        {
            logo: <FaClock size={25} color='rgb(230, 81, 81)'/>,
            label: 'Duracion',
            data: `${props.length} m`
        },
        {
            logo: <IoLocationSharp size={25} color='rgb(230, 81, 81)'/>,
            label: 'Pais',
            data: props.country
        },
        {
            logo: <MdMovie size={25} color='rgb(230, 81, 81)'/>,
            label: 'Estudio',
            data: props.studio.name
        },
        {
            logo: <MdAttachMoney size={25} color='rgb(230, 81, 81)'/>,
            label: 'Box Office',
            data: props.gross
        }
    ]
  return (
    <div className="movie-card-container">
        <div className="movie-card-image">
            <img src={props.image} alt="" />
        </div>
        <div className="movie-card-data">
            <div className="movie-card-title">
                <h1>{props.title}</h1>
                <div className="movie-card-genres">
                    {
                        props.genres.map((genre, index) => (
                            <div className="genre-element">
                                <h4>{genre.name}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="movie-card-votes">
                <div className="movie-card-rating">
                    <StarRating size= {25} rating={props.vote_average}/>
                    <div className='rating-legend'><h3>{props.vote_average}</h3><p>/ 10</p></div>
                </div>
                <div className="movie-card-vote-count">
                    <IoPeople size={25}/>
                    <p>{props.vote_count} votos</p>
                </div>
            </div>
            <div className="movie-card-description">
                <p>{props.description}</p>
            </div>
            <div className="movie-card-specs">
                {
                    specs_list.map((spec, index) => (
                        <div className="spec-element">
                            <div className="spec-logo">{spec.logo}</div>
                            <div className="spec-data">
                                <p>{spec.label}</p>
                                <h4>{spec.data}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ActorCollection/>
        </div>
    </div>
  )
}

export default MovieCard