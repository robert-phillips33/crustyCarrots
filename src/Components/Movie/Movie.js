import './Movie.css';

function Movie({
  title, overview, id, poster_path, release_date,
  backdrop_path, average_rating, genres, budget, revenue,
  runtime, tagline, deleteMovie }) {
  return (
    <div className='movie'>
      <h3 className="movie-title">{title}</h3>
      <p className="overview">{overview}</p>
      <p className="rating">{average_rating}</p>

      {/* <button onClick={() => deleteMovie(id)}>🗑</button> */}
    </div>
  )
}

export default Movie;
