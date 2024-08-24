import "./FeaturedMovie.css"

function FeaturedMovie({ movie, videos, handleClick }) {

  // if (!movie) return (
  //   <h2>Loading Movie...</h2>
  // )
  {(!movie.length && !error) && (<h2>Loading Movie...</h2>)}
  {(error) && (<h2>{/* error handeling meggage*/}</h2>)} // dose the error live here or only on apps.js?

  console.log(movie)
  console.log(videos)
  //     const { title, poster_path, backdrop_path, release_date,
  //    overview, average_rating, genres, budget, revenue, runtime, tagline, idx } = movie

  //look through the array of videos to find the one whos id matches the idx?
  console.log(movie)
  console.log(videos)

  return (
    <section className="featured-movie" onClick={handleClick}>
      <div className="featured-movie-info">
        <div className="featured-movie-title-poster-rating">
          <h2>{movie.title}</h2>
          <img className="featured-movie-poster" src={movie.poster_path} alt="Poster"></img>
          <div className="featured-movie-rating">
            <div>Movie Rating:</div>
            <div>{movie.average_rating}</div>
          </div>
        </div>
        <div className="featured-movie-right-info">
          <div className="featured-movie-button-and-tagline">
            <button className="featured-movie-button">See all Movies</button>
            <h3>{movie.tagline}</h3>
          </div>
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
            </div>Buget:<div>
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
              <div className="featured-movie-genres-box">{movie.genres}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-movie-videos">
        <iframe src="https://www.youtube.com/embed/b1pMQasDnhM" title="video">{ }</iframe>
      </div>
    </section>
  )
}

export default FeaturedMovie