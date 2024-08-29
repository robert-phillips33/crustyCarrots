import './App.css';
import { useState, useEffect, } from 'react';
import Nav from '../Nav/Nav';
import MoviesList from '../MoviesList/MoviesList';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';
import { Routes, Route } from 'react-router-dom';

function App() {
  // <-----> ** HOOKS ** <-----> //
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([])
  const [error, setError] = useState(null); // Changed from string to null

  // <-----> ** NETWORK REQUESTS ** <-----> //
  function getMoviesList() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => res.json())
      .then(data => {
        setMoviesList(data.movies);// never change this. this is the source of truth
        setFilteredMovies([...data.movies])
        
      })
      .catch(error => {
        setError(error.message);
      });
  };

  useEffect(() => {
    getMoviesList()
  }, []);

  return (
    <div className="App">
      <Nav setFilteredMovies={setFilteredMovies} moviesList={moviesList} filteredMovies={filteredMovies}/>
      <Routes>
        <Route path='/' element={<MoviesList moviesList={filteredMovies} />}></Route>
        <Route path='/movies/:id' element={<FeaturedMovie />}></Route>
        {error && <h2>{error}</h2>}
      </Routes>
    </div>
  );
};

// <-> Export <-> //
export default App;

