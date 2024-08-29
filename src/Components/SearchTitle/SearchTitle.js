import './SearchTitle.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchTitle({ setMoviesList, setError }) {
    const [userSearchInput, setUserSearchInput] = useState('');

    const handleSearchInput = (e) => {
        setUserSearchInput(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (userSearchInput) {
            fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies?query=${userSearchInput}`)
            .then(response => response.json())
            .then(data => setMoviesList(data.movies))
            .catch (error => {
        setError(error.message);
    })
}}

return (
    <form onSubmit={handleSearchSubmit}>
        <input 
            type="text"
            placeholder="Search by Title"
            className="search-by-title"
            value={userSearchInput}
        />
        <button type="submit" className="nav-search-button">Search</button>
    </form>
)}

export default SearchTitle;