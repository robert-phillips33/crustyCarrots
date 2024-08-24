import './App.css';
import { useState, useEffect, } from 'react';
import Nav from '../Nav/Nav';
import MoviesList from '../MoviesList/MoviesList';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';

function App() {
  // ---------------------> **** HOOKS **** <----------------------- //
  const [moviesList, setMoviesList] = useState([]);
  const [movie, setMovie] = useState(null); // Changed from array to null
  const [videos, setVideos] = useState([]);
  // const [ratingsFromUser, setRatingsFromUser] = useState([]);
  const [error, setError] = useState(null); // Changed from string to null
  const [loading, setLoading] = useState(true); // New loading state
  const [appView, setAppView] = useState('allMovies'); //change this to 'featuredMovie' while you working on the feature movie CSS stuff then back to allMovies

  function getMoviesList() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => res.json())
      .then(data => {
        setMoviesList(data.movies);
        setLoading(false); // Set loading false once data is fetched
      })
      .catch(error => {
        setError(error.message);
        setLoading(false); // Set loading false if there's an error
      });
  };

  useEffect(() => {
    getMoviesList()
  }, []);

  function getMovie(movieID) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(res => res.json())
      .then(data => setMovie(data.movie))
      .catch(error => setError(error.message))
  };

  function getVideos(movieID) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
      .then(res => res.json())
      .then(data => setVideos(data.videos))
      .catch(error => setError(error.message))
  };

  // function getRatingsFromUser(userID) {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings`)
  //     .then(res => res.json())
  //     .then(data => setRatingsFromUser(data))
  //     .catch(error => setError(error.message))
  // };

  function handleMovieCardClick(movieID) {
    getMovie(movieID);
    getVideos(movieID);
    setAppView('featuredMovie')
  };

  function handleFeaturedMovieClick(event) {
    getMoviesList();
    setAppView('allMovies')
  };

  function findMovieTrailer() {
    // event that reveals the single movie, on click event we can .then fetch the data that we need for the single video
    // pass movieID as prop to single movie, interpolate movieID into fetch call to pull correct movie trailer 
    //  <------------------> ^^ ** DO NOT DELETE !! ** ^^ <------------------>

    // I'm not sure if we need this, there is a fetch call to get videos for each movie which are now populating on featuredMovie

  };

  return (
    <div className="App">
      <Nav />
      {(!moviesList.length && !error) && (<div>This list of movies is empty.</div>)}
      {appView === 'allMovies' && <MoviesList moviesList={moviesList} handleClick={handleMovieCardClick} />}
      {appView === 'featuredMovie' && <FeaturedMovie movie={movie} videos={videos} handleClick={handleFeaturedMovieClick} />}
      {error && <h2>{error}</h2>}
    </div>
  );
};
// Export
export default App;

