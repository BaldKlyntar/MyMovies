import React from 'react'
import './ReviewForm.css'
import { Form } from 'react-router-dom'
import customFetch from '../../../Utils/customFetch';
import { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/reviews/create/", data);
  } catch (error) {
    return error;
  }
};


const ReviewForm = (props) => {
    
  return (
    <div className="review-form-container">
        <h2>Reseñas ({props.vote_count})</h2>
        <div className="review-form">
            <Form method='post'>
                <h4>Escribe una Reseña</h4>
                <div className="review-inputs">
                    <textarea name="text" id="" required></textarea>
                    <div className="review-rate-input">
                        <p>Agrega tu Calificacion</p>
                        <input name="score" type="number" min='0' max= '10' step='0.1' id="" required />
                        <input type="hidden" name="movie" value={props.id} />
                        <input type="hidden" name="user" value={props.user_id} />
                    </div>
                </div>
                <button type='submit' className='big-button'>Agregar Reseña</button>
            </Form>
        </div>
    </div>
  )
}

export default ReviewForm