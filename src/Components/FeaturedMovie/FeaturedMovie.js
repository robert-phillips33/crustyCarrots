import "./FeaturedMovie.css"

function FeaturedMovie({ movie, videos, handleClick }) {

  if (!movie) return (
    <h2>Loading Movie...</h2>
  )
  //{(!movie.length && !error) && (<h2>Loading Movie...</h2>)}
  // {(error) && (<h2>{/* error handeling meggage*/}</h2>)} // dose the error live here or only on apps.js?

  console.log(movie)
  console.log(videos)
  //     const { title, poster_path, backdrop_path, release_date,
  //    overview, average_rating, genres, budget, revenue, runtime, tagline, idx } = movie

  //look through the array of videos to find the one whos id matches the idx?
  console.log(movie)
  console.log(videos)

  return (
    <section className="featured-movie" onClick={handleClick}>
      <button className="featured-movie-button">See all Movies</button>
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
          <div className="featured-movie-tagline">
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
              <div>Buget:</div>
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
                movie.genres.map((genre, index) => (
                  <div key={index} className="featured-movie-genres-box">
                    {genre}
                  </div>
                ))
              ) : (
                <div>No genres available</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="all-featured-movie-videos">
      <div className="featured-movie-videos">
          {videos.length > 0 ? (
            videos.map(video => (
              <div key={video.id} className="video-container">
                <h3>{video.type}</h3>
                <iframe
                  className="video"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.type}
                  allowFullScreen
                />
              </div>
            ))
          ) : (
            <p>No videos available</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie