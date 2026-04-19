import React from 'react'
import './StarRating.css'
import { IoIosStar } from "react-icons/io";

const StarRating = (props) => {

    let rating_total = Math.round(props.rating / 2)
    
  return (
    <div className='star-rating'>{
        [...Array(5)].map((star, index) => {
            index +=1;
            return (
                index > rating_total ? <IoIosStar size={props.size} /> : <IoIosStar color='rgb(226, 43, 43)' size={props.size}/>
            )
        })
    }
    </div>
  )
}

export default StarRating