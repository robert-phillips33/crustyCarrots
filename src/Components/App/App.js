import './App.css';
import { useState, useEffect, } from 'react';
import Nav from '../Nav/Nav';
import Movie from '../Movie/Movie';
import MoviesList from '../MoviesList/MoviesList';
import movieData from '../../MovieData/MovieData';

function App() {
  // Consts
  const [moviesList, setMoviesList] = useState([]);
  const [movie, setMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  const [ratingsFromUser, setRatingsFromUser] = useState([]);
  const [error, setError] = useState('');



  // Functions within app

  // //get all movies
  function getMoviesList() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => res.json())
      .then(data => setMoviesList(data))
      .catch(error => setError(error.message))
  }
  //get the movie with movieID as its id
  function getMovie(movieID) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(error => setError(error.message))
  }
  function getVideos(movieID) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(error => setError(error.message))
  }
  function getRatingsFromUser(userID) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings`)
      .then(res => res.json())
      .then(data => setRatingsFromUser(data))
      .catch(error => setError(error.message))
  }
  function deleteMovie() {

  }
  
  // Return
  return (
    <div className="App">
      {/* <h1>Temp movies location</h1> */}

      <Nav />
      {(moviesList.length && !error) && (<p>This list of movies is empty.</p>)}
      <MoviesList moviesList={movieData.movies} 
      deleteMovie={deleteMovie} />
      {error && <h2>{error}</h2>}

      {/* <movieData /> */}
    </div>
  );
}


// Export
export default App;
