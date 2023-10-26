
import { useState } from 'react'
import './App.css'
import MovieCard from './component/MovieCard'

const App = () => {
  const [movies, setMovies] = useState('')
  const [movieData, setMovieData] = useState()

  const staticMovieData = [
    {
      title: "BlackBerry",
      description: "With intelligence as sharp as its humor, BlackBerry takes a terrifically entertaining look at the rise and fall of a generation-defining gadget.",
      posterUrl: "https://resizing.flixster.com/vy3spbyA2xSwQ3CmyupUyqgmA_o=/fit-in/180x240/v2/https://resizing.flixster.com/s0upn5u_k0MAotQz3gxCnsjjCDE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk3NjMwMGI0LTY0ODktNDE1NS1hNmJiLWE5ZDcxOTU3YzM0Yi5qcGc=",
      rating: "4.7"
  },

  {
      title: "Past Lives",
      description: " A remarkable debut for writer-director Celine Song, Past Lives uses the bonds between its sensitively sketched central characters to support trenchant observations on the human condition.",
      posterUrl: "https://resizing.flixster.com/imQ20aaw99tk1MF6VqOgmt3g3CQ=/fit-in/180x240/v2/https://resizing.flixster.com/Rj36W7XfjR7FUlGiJBCMNfLpk5k=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg5NjQ4NjQxLTI5MzktNDVlMy04NTU0LTEzZGJiYTZmNzRlNi5qcGc=",
      rating: "5.0"
  },

  {
      title: "The First Slam Dunk",
      description: " A heart-pumping, breathtaking, wonderfully crafted manga adaptation, The First Slam Dunk shoots and scores",
      posterUrl: "https://resizing.flixster.com/6QPkSpZfciXyMzMDoJhPdJpChms=/fit-in/180x240/v2/https://resizing.flixster.com/R6h_lF1kc_Zgf2OVHyW1B2qobIc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RmZjJmYmEzLTMyYmMtNDgzMC1iZjUyLTFjNGE3OGY0ZGNmOS5wbmc=",
      rating: "3.4"
  },

  {
      title: "Rye Lane",
      description: "Good news, rom-com fans: Anyone looking for a smart, funny, and heartwarming new addition to the canon can find it waiting on Rye Lane.",
      posterUrl: "https://resizing.flixster.com/4FU2MkRf2dtKEoUUtRsIi6vCAAo=/fit-in/180x240/v2/https://resizing.flixster.com/eNSLOKTvGbLrx-KEht0EGhmbKJY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJmODljNTZmLTZmY2QtNGIzOC1iYmI3LWMwNzkwODkwMzQ1ZC5qcGc=",
      rating: "4.9"
  },


  ]
   

const [searchMovie, setSearchMovie] = useState('');



const handleSearch = (e) => {
  e.preventDefault();
  setMovieData(movies)
}

  return (
    <>
      <div className='searchMovie'>
        <form>
          <input type="text"
          placeholder='Search'
          value={searchMovie}
          onChange={(event) => setSearchMovie(event.target.value)} />
          <button type='type' onClick={handleSearch}>Search</button>
        </form>
      </div>

      <div className='grid'>
        {staticMovieData?.map(({title, description, posterUrl, rating, index}) =>{
          return(
            <MovieCard 
            key={index}
            title={title}
            description={description}
            posterUrl={posterUrl}
            rating={rating}/>
          );
        })};

      </div>
    </>
  )
}

export default App
