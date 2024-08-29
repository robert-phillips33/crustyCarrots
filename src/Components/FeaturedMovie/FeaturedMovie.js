import "./FeaturedMovie.css";
import PropTypes from "prop-types";
import CarrotRating from "../CarrotRating/CarrotRating";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturedMovie() {

  const [movie, setMovie] = useState(null); // Changed from array to null
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null); // Changed from string to null

  const { id } = useParams();

  useEffect(() => {
    getMovie(id);
    getVideos(id);
  }, []);

  if (!movie) return (
    <h2>Loading Movie...</h2>
  )
  
  function getMovie(movieID) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(res => res.json())
      .then(data => setMovie(data.movie))
      .catch(error => setError(error.message))
  };

  function getVideos(movieID) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
      .then(res => res.json())
      .then(data => setVideos(data.videos))
      .catch(error => setError(error.message))
  };

  return (
    <section className="featured-movie">
      <Link to='/'>
        <button className="featured-movie-button">See all Movies</button>
      </Link>
      <>
      <div className="featured-movie-info">
        <div className="featured-movie-title-poster-rating">
          <h2>{movie.title}</h2>
          <img className="featured-movie-poster" src={movie.poster_path} alt="Poster"></img>
          <div className="featured-movie-rating">
            <div>Movie Rating:</div>
            <CarrotRating rating={movie.average_rating.toFixed(0)} />
          </div>
        </div>
        <div className="featured-movie-right-info">
          <div className="featured-movie-tagline">
            <h3>{movie.tagline}</h3>
          </div>
          <div>Movie Overview:</div>
          <p className="featured-movie-overview">{movie.overview}</p>
          <div className="featured-movie-all-details">
            <div className="featured-movie-detail">
              <div>Release Date:</div>
              <div>{movie.release_date}</div>
            </div>
            <div className="featured-movie-detail">
              <div>Run Time:</div>
              <div>{movie.runtime} minutes</div>
            </div>
            <div className="featured-movie-detail">
              <div>Budget:</div>
              <div>${movie.budget}</div>
            </div>
            <div className="featured-movie-detail">
              <div>Revenue:</div>
              <div>${movie.revenue}</div>
            </div>
          </div>
          <div className="featured-movie-genres">
            <div>Genres:</div>
            <div className="featured-movie-genres-container">
              {movie.genres && movie.genres.length > 0 ? (
                movie.genres.map((genre, index) =>
                (<div key={index} className="featured-movie-genres-box">
                  {genre}
                </div>))) : (
                <div>No genres available</div>
              )}
            </div>
          </div>
        </div>
      </div>
      </>
      <div className="all-featured-movie-videos">
        <div className="featured-movie-videos">
          {videos.length > 0 ? (videos.map(video => (
            <div key={video.id} className="video-container">
              <h3>{video.type}</h3>
              <iframe
                className="video"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.type}
                allowFullScreen
              /></div>))) : (
            <p>No videos available</p>
          )}
        </div>
      </div>
    </section>
  )
};

FeaturedMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    overview: PropTypes.string,
  }),
  handleClick: PropTypes.func.isRequired,
};



export default FeaturedMovie