import './MovieCard.css';
// import { useState } from 'react';

function MovieCard({
    title, id, poster_path, average_rating, handleClick }) {
    
    return (
	    <div className={'movie' + id} onClick={() => handleClick(id)}>
		    <h3 className="movie-title">{title}</h3>
		    <img className="movie-poster" src={poster_path} alt="movie poster">{ }</img>
		    <p className="rating">{average_rating.toFixed(1)}</p>
		  </div>)
}
    export default MovieCard;