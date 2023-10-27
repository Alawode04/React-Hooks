import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
    
  return (
    <>
     
        {movies.map((movie, index) => (
          <MovieCard key={index} 
          title={movie.title}
          description={movie.description}
          posterUrl={movie.posterUrl}
          rating={movie.rating}
          trailer={trailer}/>
        ))}
      
    </>
  )
}

export default MovieList