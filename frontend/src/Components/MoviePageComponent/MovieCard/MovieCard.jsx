import React from 'react'
import './MovieCard.css'
import StarRating from '../../StarRating/StarRating'
import { IoPeople } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";

const MovieCard = (props) => {

    let genre_list =[
        {
            genre: 'Accion'
        },
        {
            genre: 'Aventura'
        }
    ]

    let specs_list = [
        {
            logo: <FaCalendar size={25} color='rgb(230, 81, 81)'/>,
            label: 'Fecha de estreno',
            data: props.release_date
        },
        {
            logo: <FaClock size={25} color='rgb(230, 81, 81)'/>,
            label: 'Duracion',
            data: '1h 30m'
        },
        {
            logo: <IoLocationSharp size={25} color='rgb(230, 81, 81)'/>,
            label: 'Pais',
            data: 'Estados Unidos'
        },
        {
            logo: <MdMovie size={25} color='rgb(230, 81, 81)'/>,
            label: 'Estudio',
            data: 'Illumination'
        },
        {
            logo: <MdAttachMoney size={25} color='rgb(230, 81, 81)'/>,
            label: 'Box Office',
            data: '892.5M'
        }
    ]
  return (
    <div className="movie-card-container">
        <div className="movie-card-image">
            <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt="" />
        </div>
        <div className="movie-card-data">
            <div className="movie-card-title">
                <h1>{props.title}</h1>
                <div className="movie-card-genres">
                    {
                        genre_list.map((genre, index) => (
                            <div className="genre-element">
                                <h4>{genre.genre}</h4>
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
                <p>{props.overview}</p>
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
        </div>
    </div>
  )
}

export default MovieCard