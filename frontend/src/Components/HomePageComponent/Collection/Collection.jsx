import React, { useRef } from 'react'
import Item from './Item/Item'
import './Collection.css'

const Collection = ({ movies, label }) => {

    const content = useRef(null)

    const scrollRight = () => {
        content.current.scrollBy({
            left: 1000,
            behavior: "smooth"
        })

    }

    const scrollLeft = () => {
        content.current.scrollBy({
            left: -1000,
            behavior:"smooth"
        })
    }   

  return (
    <div className="new-product-container">
        <div className="new-product-header">
            <h2>{label}</h2>
            <div className="arrow-buttons">
                <button className='arrow-button' onClick={scrollLeft} >{'<'}</button>
                <button className='arrow-button' onClick={scrollRight} >{'>'}</button>
            </div>
        </div>
        <div className="item-list" ref={content}>
            {movies.map((item, index) => (
                <Item {...item}/>
            ))}
        </div>
    </div>
  )
}

export default Collection