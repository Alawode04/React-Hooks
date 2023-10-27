import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieDescription = ({title, description, posterUrl}) => {
    // const {id} = useParams();
    // const movies = movies.find((m) =>m.id === parseInt(id))
  return (
    <div>
        <Link to="/App"></Link>
        <div className='movieCard'>
            <img src={posterUrl} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            {/* <p>Rating: {rating}</p> */}
        </div>
    </div>
  )
}

export default MovieDescription