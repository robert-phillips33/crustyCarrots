import './Nav.css';
import SearchTitle from '../SearchTitle/SearchTitle.js'
import FilterByRating from '../FilterByRating/FilterByRating.js'

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
        {/* <select className="filter-by-rating">
          <option value="">By Rating</option>
          <option value="test">test</option>
        </select> */}
        {/* <input type="text" placeholder="Search by Title" className="search-by-title"/> */}
        {/* <button type="button" className="nav-search-button">Search</button> */}
      </div>
    </header >
  )
}

export default Nav;