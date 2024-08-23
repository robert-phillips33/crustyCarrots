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

      <select className="filter-by-rating">
        <option value="">--select by rating--</option>
        <option value="test">test</option>
      </select>
      <select className="filter-by-genre">
        <option value="">--select by genre--</option>
        <option value="test">test</option>
      </select>
      <input type="text" placeholder="Search by Title" />
      <button type="button" className="nav-search-button">Search</button>
    </header >
  )
}

export default Nav;