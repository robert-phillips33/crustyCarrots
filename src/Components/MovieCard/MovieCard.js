import './MovieCard.css';
import CarrotRating from '../CarrotRating/CarrotRating';
import PropTypes from 'prop-types';

function MovieCard({
  title, id, poster_path, average_rating, handleClick }) {

  return (
    <div className="movie-card" onClick={() => handleClick(id)}>
      <h3 className="movie-title">{title}</h3>
      <img className="movie-poster" src={poster_path} alt="movie poster">{ }</img>
      <div className="movie-card-rating">
        <div>Movie Rating:</div>
        {/* <div className="rating">{average_rating}</div> */}
        <CarrotRating rating={average_rating.toFixed(0)} />
      </div>
    </div>)
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MovieCard;