import React from 'react'
import './ReviewForm.css'
import { Form } from 'react-router-dom'

const ReviewForm = (props) => {

  return (
    <div className="review-form-container">
        <h2>Reseñas ({props.vote_count})</h2>
        <div className="review-form">
            <Form>
                <h4>Escribe una Reseña</h4>
                <div className="review-inputs">
                    <textarea name="" id=""></textarea>
                    <div className="review-rate-input">
                        <p>Agrega tu Calificacion</p>
                        <input type="number" min='0' max= '10' step='0.1' name="" id="" />
                    </div>
                </div>
                <button className='big-button'>Agregar Reseña</button>
            </Form>
        </div>
    </div>
  )
}

export default ReviewForm