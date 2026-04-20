import React from 'react'
import './ReviewList.css'
import all_reviews from '../../../Utils/all_reviews.js'
import StarRating from '../../StarRating/StarRating.jsx'

const ReviewList = ({reviews}) => {
  return (
    <div className="review-list-container">
        {
            reviews.map((review, index) => (
                <div className="review-element">
                    <div className="review-element-header">
                        <h4>{review.user}</h4>
                        <StarRating rating={review.score}/>
                    </div>
                    <div className="review-element-content">
                        <p>{review.text}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ReviewList