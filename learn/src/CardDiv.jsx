import React from 'react'
import './Card.css'

const CardDiv = (props) => {
  return (
    <div className='card'>
        <div className='card-img'>
        <img src={props.photo} alt={`Profile photo of ${props.user}`} />
        </div>
        <h1>
            {props.user}
        </h1>
        <h2>
            {props.profession}
        </h2>
        <h3>
            {props.age} </h3>
       
    </div>
  )
}

export default CardDiv