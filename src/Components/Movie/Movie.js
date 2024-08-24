import './Movie.css';


function Movie({
  title, overview, id, poster_path, release_date,
  backdrop_path, average_rating, genres, budget, revenue,
  runtime, tagline, deleteMovie, is_showing }) {


  function setMovie({ title, id }) {
    console.log("displaying " + title)
    let toggler = document.querySelector(`.${'movie' + id}`);
    if (toggler.getAttribute('isshowing') === "true") {
      toggler.setAttribute('isshowing', "false")
      is_showing = false;
    }
    else {
      toggler.setAttribute('isshowing', "true")
      is_showing = true;
    }
    console.log(is_showing)
    console.log(toggler);
  }

  // create seperate returns for if it is the one being shown

  let smallCard =
    (<div className={'movie' + id} isshowing="false" onClick={() => setMovie({ title, id })}>
      <h3 className="movie-title">
        {title} {is_showing && "WORK"};
        </h3>
      <img className="movie-poster" src={poster_path}>{ }</img>
      <p className="rating">{average_rating.toFixed(1)}</p>
    </div>)

  // if we need to show the one movie, use bigCard, rendering all the details instead of just the title, poster, and rating.
  let bigCard;
  let returnCard;
  if (is_showing) {
    returnCard = bigCard
  }
  else {
    returnCard = smallCard;
  }


  return returnCard;
}
export default Movie;

