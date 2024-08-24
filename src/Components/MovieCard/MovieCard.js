import './MovieCard.css';
// import { useState } from 'react';

function MovieCard({
	title, id, poster_path, average_rating, handleClick }) {

	return (
		<div className="movie-card" onClick={() => handleClick(id)}>
			<h3 className="movie-title">{title}</h3>
			<img className="movie-poster" src={poster_path} alt="movie poster">{ }</img>
			<div className="movie-card-rating">
				<div>Movie Rating:</div>
				<div className="rating">{average_rating.toFixed(0)}</div>
			</div>
		</div>)
}
export default MovieCard;