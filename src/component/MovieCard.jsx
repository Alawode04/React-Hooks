import { Link } from 'react-router-dom';
import './MovieList.css'

const MovieCard = ({title, description, trailerUrl, rating, id}) => {
  return (
    <Link to={`/movie/${id}`}>
    <div className='card'>
       <iframe src={trailerUrl} allowFullScreen/>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Rating: {rating}</p>

    </div>
    </Link>

  
  );
}


export default MovieCard