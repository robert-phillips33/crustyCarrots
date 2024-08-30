import './Nav.css';
import SearchTitle from '../SearchTitle/SearchTitle.js';
import FilterByRating from '../FilterByRating/FilterByRating.js';

function Nav({ setFilteredMovies, moviesList, filteredMovies }) {
  return (
    <header>
      <div className='logo-container'>
        <img className='carrot-logo' src='/orange-carrot-2.svg' alt="crusty carrots logo" />
        <h1 className="full-site-title">
          <div className="site-title">Crusty</div>
          <div className="site-title">Carrots</div>
        </h1>
      </div>
      <div className="search-all">
        <FilterByRating
          setFilteredMovies={setFilteredMovies}
          moviesList={moviesList}
          filteredMovies={filteredMovies}
        />
        <SearchTitle
          setFilteredMovies={setFilteredMovies}
          moviesList={moviesList}
          filteredMovies={filteredMovies}
        />
      </div>
    </header >
  )
}

export default Nav;