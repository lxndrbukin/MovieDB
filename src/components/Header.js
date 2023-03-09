export default function Header() {
  return /*html*/ `
    <header class='header'>
      <div class='header-text'>MovieDB</div>
      <div class='header-search'>
        <div class='header-search-form'>
          <input class='header-search-input' name='search' type='text' />
          <input class='header-search-button' type='submit' value='Search'/>
        </div>
      </div>
    </header>
  `;
}
