import React from 'react'
import SliderImport from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerComponent.css'
import { FaStar } from "react-icons/fa";
import { BiSolidUpvote } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';

const BannerComponent = ({ banner_movies }) => {

const settings ={
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 9000,
  arrows:false,
}

const Slider = SliderImport.default

  return (
    <div className='banner-container'>
        <Slider {...settings}>
            {
                banner_movies.map(movie => (
                    <div key={movie.id} className="banner-movie-element">
                        <div className="banner-movie-image">
                            <img src={movie.image} alt="" />
                        </div>
                        <div className="banner-movie-info">
                            <h1>{movie.title}</h1>
                            <div className="banner-movie-specs">
                                <p><FaStar size={15} color='red'/> {movie.vote_average}</p>
                                <p>{movie.release_date}</p>
                                <p><BiSolidUpvote size={15} color='red'/>{movie.vote_count}</p>
                                <p>Accion, Aventura</p>
                            </div>
                            <p>{movie.description}</p>
                            <Link to={`/movie/${movie.id}`}><button className='big-button'><CiCirclePlus size={20}/>Ver mas</button></Link>
                        </div>
                        
                    </div>
                ))
            }
        </Slider>
    </div>
  )
}

export default BannerComponent