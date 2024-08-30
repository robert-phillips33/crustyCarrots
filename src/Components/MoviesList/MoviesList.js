import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard.js';
import PropTypes from 'prop-types';

// reflects ideas.js, but returns the values within the movie. 
// Delete is a holdover, but maybe useful?
function MoviesList({ moviesList, error }) {
  return (
    <div className='movie-container'>
      <div className="all-movie-cards">{
        moviesList.map((movie, id) => {

          return (
            <MovieCard
              title={movie.title}
              poster_path={movie.poster_path}
              id={movie.id}
              average_rating={movie.average_rating}
              key={"key" + id}
            />
          )
        })
      }</div>
    </div>
  )
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      average_rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
