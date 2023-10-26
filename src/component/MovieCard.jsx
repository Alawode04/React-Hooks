import React from 'react'
import './MovieList.css'

const MovieCard = ({title, description, posterUrl, rating}) => {
  return (
    <div className='card'>
        <img src={posterUrl} alt='' />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Rating: {rating}</p>
    </div>

  
  );
}


export default MovieCard