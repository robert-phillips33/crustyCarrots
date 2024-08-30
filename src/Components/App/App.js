import './App.css';
import { useState, useEffect, } from 'react';
import Nav from '../Nav/Nav';
import MoviesList from '../MoviesList/MoviesList';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  // <-----> ** HOOKS ** <-----> //
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([])
  // const [error, setError] = useState(null); // Changed from string to null
  const [noMovieResults, setNoMovieResults] = useState(false);
  const navigate = useNavigate();


  // <-----> ** NETWORK REQUESTS ** <-----> //
  function getMoviesList() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/')
      .then(res => {
        if(!res.ok) {
          const err = new Error(res.statusText)
          err.statusCode = res.status
          throw err
        }
        return res.json()
      })
      .then(data => {
        // console.log(data.movies)
        setMoviesList(data.movies);// never change this. this is the source of truth
        setFilteredMovies([...data.movies])

      })
      .catch(err => {
        console.error(err)
        navigate(`/error/${err.statusCode}`)
      });
  };

  useEffect(() => {
    getMoviesList()
  }, []);


  return (
    <div className="App">
      <Nav setFilteredMovies={setFilteredMovies} moviesList={moviesList} filteredMovies={filteredMovies} />
      <Routes>
        <Route path='/' element={<MoviesList moviesList={filteredMovies} />}></Route>
        <Route path='/movies/:id' element={<FeaturedMovie />}></Route>
        <Route path='/error/:code' element={<ErrorPage />}></Route>
        <Route path='*' element={<ErrorPage error={404} />}></Route>
      </Routes>
    </div>
  );
};

// <-> Export <-> //
export default App;

