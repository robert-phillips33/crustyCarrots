import './Movie.css';


function Movie({
  title, overview, id, poster_path, release_date,
  backdrop_path, average_rating, genres, budget, revenue,
  runtime, tagline, deleteMovie }) {
    return (
      <div className='movie'>
        {/* {!setMovie.length && <p>This are no movies that match your search. Please try again</p>} */}
        <h3 className="movie-title">{title}</h3>
        <img className="movie-poster" src={poster_path}>{ }</img>
       <p className="rating">{average_rating.toFixed(0)}</p>
        {/* <button onClick={() => deleteMovie(id)}>🗑</button> */}
    </div>
  )
}

export default Movie;
