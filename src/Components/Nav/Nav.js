import './Nav.css';

function Nav() {
  return (
    <header>
      <div className='logo-container'>
        <img className='carrot-logo' src='/orange-carrot-2.svg' alt="crusty carrots logo" />
        <div className="full-site-title">
          <div className="site-title">Crusty</div>
          <div className="site-title">Carrots</div>
        </div>
      </div>
      <div className="search-all">
        <select className="filter-by-rating">
          <option value="">By Rating</option>
          <option value="test">test</option>
        </select>
        <select className="filter-by-genre">
          <option value="">By Genre</option>
          <option value="test">test</option>
        </select>
        <input type="text" placeholder="Search by Title" className="search-by-title"/>
        <button type="button" className="nav-search-button">Search</button>
      </div>
    </header >
  )
}

export default Nav;