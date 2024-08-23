import './MoviesList.css';
import Movie from '../Movie/Movie.js';
import movieData from '../../MovieData/MovieData';


// reflects ideas.js, but returns the values within the movie. 
// Delete is a holdover, but maybe useful?

function MoviesList({ moviesList, deleteMovie }) {
  console.log(movieData);
  //   const movieCards = "";
  let keyNum = 0;
  //   if (moviesList) {
  const movieCards = moviesList.map(movie => {
    keyNum++;

    // console.log(movies);
    return (
      <Movie
        title={movie.title}
        poster_path={movie.poster_path}
        id={movie.id}
        // overview={movie.overview}
        release_date={movie.release_date}
        backdrop_path={movie.backdrop_path}
        average_rating={movie.average_rating}
        // genres={movie.genres}
        // budget={movie.budget}
        // revenue={movie.revenue}
        // runtime={movie.runtime}
        // tagline={movie.tagline}
        // deleteMovie={deleteMovie}
        key={"Baargh" + keyNum}
      />
    )
  })
  let movieContainer = (<div className='movie-container'>
    {/* <Movie /> */}
    <div className="movie-card">{movieCards}</div>
    {/* <h2> TEST does this work?</h2> */}
  </div>)
  movieContainer.addEventListener('click', console.log("Clicked"));
  return (
    movieContainer
  )
}

export default MoviesList;
