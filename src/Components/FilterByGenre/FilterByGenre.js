import './FilterByGenre.css';
import { useState, useEffect } from 'react';

function FilterByGenre() {

    const [genre, setGenre] = useState([]);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null); // Changed from string to null

    useEffect(() => {
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then(response => response.json())
            .then(movieData => setMovies(movieData))

            .catch(error => {
                setError(error.message)
            });
    })

    return (
        <select className="filter-by-genre">
            <option value="">By Genre</option>
            <option value="test">test</option>
        </select>
    )
}

export default FilterByGenre;

// -> fetch data (?)
// -> use conditional logic to measure dropdown selection (genre type) to newly fetched data (?)
// -> render new MoviesList state according to the return (?)
// -> ** not entirely sure if these are in the correct order, but they could work 
