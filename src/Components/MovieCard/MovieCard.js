import './MovieCard.css';
import { useState } from 'react';

function MoiveCard({
    title, id, poster_path, average_rating, handleClick }) {
    
    return (
	    <div className={'movie' + id} onClick={handleClick}>
		    <h3 className="movie-title">{title}</h3>
		    <img className="movie-poster" src={poster_path}>{ }</img>
		    <p className="rating">{average_rating.toFixed(1)}</p>
		  </div>)
}
    export default MoiveCard;



// import './Movie.css';


// function Movie({
//   title, overview, id, poster_path, release_date,
//   backdrop_path, average_rating, genres, budget, revenue,
//   runtime, tagline, deleteMovie, is_showing }) {
//   function setMovie({
//     title, overview, id, poster_path, release_date,
//     backdrop_path, average_rating, genres, budget, revenue,
//     runtime, tagline, deleteMovie }) {
//     console.log("displaying " + title)
//     let toggler = document.querySelector(`.${'movie' + id}`);
//     console.log(toggler)
//     if (toggler.getAttribute('isshowing') === "true") {
//       toggler.setAttribute('isshowing', "false")
//     }
//     else {
//       toggler.setAttribute('isshowing', "true")
//     }
//     console.log(toggler);
//   }
//   // create seperate returns for if it is the one being shown
//   let smallCard = (<div className={'movie' + id} isshowing="false" onClick={() => setMovie({
//     title, overview, id, poster_path, release_date,
//     backdrop_path, average_rating, genres, budget, revenue,
//     runtime, tagline, deleteMovie
//   })}>
//     <h3 className="movie-title">{title}</h3>
//     <img className="movie-poster" src={poster_path}>{ }</img>
//     <p className="rating">{average_rating.toFixed(1)}</p>
//   </div>)

// // if we need to show the one movie, use bigCard, rendering all the details instead of just the title, poster, and rating.
//   let bigCard;
//   let returnCard;
//   if (is_showing) {
//     returnCard = bigCard
//   }
//   else {
//     returnCard = smallCard;
//   }

  
//   return returnCard;
// }
// export default Movie;
