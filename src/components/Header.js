export default function Header() {
  return /*html*/ `
    <header class='header'>
      <div class='header-nav'>
        <a href='/' class='header-logo'>
          <i class='fas fa-film'></i>
          <span>MovieDB</span>
        </a>
        <div class='header-search'>
          <input 
            class='header-search-input' 
            name='search' 
            type='text'
            placeholder='Search for movies'
          />
          <button 
            class='header-search-button' 
            type='submit' 
            value='Search'
          >
            <i class='fas fa-search'></i>
          </button>
        </div>
      </div>
    </header>
  `;
}
