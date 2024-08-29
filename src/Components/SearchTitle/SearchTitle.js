import './SearchTitle.css'
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function SearchTitle({ setFilteredMovies, moviesList }) {
    const [userSearchInput, setUserSearchInput] = useState('');

    const handleSearchInput = (e) => {
        setUserSearchInput(() => e.target.value);
        const newList = filterMoviesByTitle(e.target.value, moviesList)
        setFilteredMovies(newList)
    };

    function filterMoviesByTitle(title, movies) {
        return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setFilteredMovies(moviesList)
        setUserSearchInput('')
        // const newList = filterMoviesByTitle(userSearchInput, moviesList)
        // setFilteredMovies(newList)
        // if (userSearchInput) {
        //     fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies?query=${userSearchInput}`)
        //     .then(response => response.json())
        //     .then(data => setMoviesList(data.movies))
        //     .catch (error => {
        // setError(error.message);
//     })
// }
}

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
)}

export default SearchTitle;