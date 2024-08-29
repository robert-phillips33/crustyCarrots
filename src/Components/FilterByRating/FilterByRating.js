import React, { useState, useEffect } from 'react';
import './FilterByRating.css';

function FilterByRating({setFilteredMovies, moviesList, filteredMovies}) {

  const [ratings, setRatings] = useState([]);
  const [selectedRating, setSelectedRating] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
        const ratings = moviesList.map(movie => movie.average_rating); // this maps to a new array of ratings including duplicates
        const uniqueRatings = ratings.filter((rating, index, allRatings) => allRatings.indexOf(rating) === index); // this removes the duplicates
        uniqueRatings.sort((a, b) => b - a)
        setRatings(uniqueRatings);

  }, [moviesList]);
  
    function filterMoviesByRating(rating, movies) {
      return movies.filter(movie => movie.average_rating === rating )
    }

  const ratingFilterSelection = (event) => {
    if (!event.target.value) {
        setFilteredMovies(moviesList)
    } else {
        setSelectedRating(event.target.value);
        const newList = filterMoviesByRating(Number(event.target.value), moviesList)
        setFilteredMovies(newList)
    }
  };

  return (
    <select className="filter-by-rating" value={selectedRating} onChange={ratingFilterSelection}>
      <option value="">By Rating</option>
      {ratings.map((rating, index) => (
        <option key={index} value={rating}>
          {rating}
        </option>
      ))}
    </select>
  );
}

export default FilterByRating;

// -> fetch data (?)
// -> use conditional logic to measure dropdown selection (genre type) to newly fetched data (?)
// -> render new MoviesList state according to the return (?)
// -> ** not entirely sure if these are in the correct order, but they could work **