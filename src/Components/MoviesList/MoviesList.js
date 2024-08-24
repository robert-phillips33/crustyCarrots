import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard.js';
// import movieData from '../../MovieData/MovieData';


// reflects ideas.js, but returns the values within the movie. 
// Delete is a holdover, but maybe useful?

function MoviesList({ moviesList, handleClick }) {
console.log('LIST<><>', moviesList)
  return (
    <div className='movie-container'>
      <div className="all-movie-cards">{
          moviesList.map((movie, idx) => {
   
            return (
              <MovieCard
                title={movie.title}
                poster_path={movie.poster_path}
                id={movie.id}
                average_rating={movie.average_rating}
                handleClick={handleClick}
                key={"Key" + idx}
              />
            )
          })
        }</div>
    </div>
  )
}

export default MoviesList;
