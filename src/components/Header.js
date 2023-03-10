export default function Header() {
  return /*html*/ `
    <header class='header'>
      <div class='header-nav'>
        <a href='/' class='header-logo'>
          <i class='fas fa-film'></i>
          <span>MovieDB</span>
        </a>
        <div class='header-search'>
          <div class='header-search-form'>
            <input class='header-search-input' name='search' type='text' />
            <input class='header-search-button' type='submit' value='Search'/>
          </div>
        </div>
      </div>
    </header>
  `;
}
