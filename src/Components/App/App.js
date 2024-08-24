import './App.css';
import { useState, useEffect, } from 'react';
import Nav from '../Nav/Nav';
// import MovieCard from '../MovieCard/MovieCard';
import MoviesList from '../MoviesList/MoviesList';
import movieData from '../../MovieData/MovieData';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';

function App() {
  // Consts
  const [moviesList, setMoviesList] = useState(movieData.movies);
  const [movie, setMovie] = useState(movieData.featuredMovie);
  const [videos, setVideos] = useState(movieData.videos);
  const [ratingsFromUser, setRatingsFromUser] = useState([]);
  const [error, setError] = useState('');
  const [appView, setAppView] = useState('allMovies') //change this to 'featureMoive' while you working on the feature moive CSS stuff



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
  // function getRatingsFromUser(userID) {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings`)
  //     .then(res => res.json())
  //     .then(data => setRatingsFromUser(data))
  //     .catch(error => setError(error.message))
  // }
  function deleteMovie() { }


  function handleMovieCardClick(event) {
    // will need to fetch indavidual movie data here
    setAppView('featuredMovie')
  }

  function handleFeaturedMoiveClick(event) {
    setAppView('allMovies')
  }

  // Return
  return (
    <div className="App">

      <Nav />
      {(!moviesList.length && !error) && (<p>This list of movies is empty.</p>)}
      {appView === 'allMovies' && <MoviesList moviesList={moviesList} handleClick={handleMovieCardClick} />}
      {appView === 'featuredMovie' && <FeaturedMovie movie={movie} videos={videos} handleClick={handleFeaturedMoiveClick} />}
      {error && <h2>{error}</h2>}

      {/* <movieData /> */}
    </div>
  );
}


// Export
export default App;
