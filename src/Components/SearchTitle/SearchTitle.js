import './SearchTitle.css'
import { useState } from 'react';

function SearchTitle({ setFilteredMovies, moviesList }) {
  const [userSearchInput, setUserSearchInput] = useState('');

  const handleSearchInput = (e) => {
    setUserSearchInput(() => e.target.value);
    const newList = filterMoviesByTitle(e.target.value, moviesList)
    setFilteredMovies(newList)
    if (newList.length === 0) {
      alert("No results matching your search, please try again!")
    }
    // setEmptyMovieResults(!newList.length);
  };

  function filterMoviesByTitle(title, movies) {
    return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setFilteredMovies(moviesList);
    setUserSearchInput('');
    // setEmptyMovieResults(false);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search by Title"
        className="search-by-title"
        value={userSearchInput}
        onChange={handleSearchInput}
      />
      <button type="submit" className="nav-search-button">Reset</button>
    </form>
  )
};

export default SearchTitle;