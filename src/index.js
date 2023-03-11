import { fetchMovies } from './actions';
import Box from './components/Box';
import Spinner from './components/Spinner';
import App from './App';
import MovieTemplate from './components/MovieTemplate';

const root = document.querySelector('#root');
root.innerHTML = App();

const searchInput = document.querySelector('.header-search-input');
const searchButton = document.querySelector('.header-search-button');
const container = document.querySelector('.container');

searchButton.addEventListener('click', async () => {
  container.innerHTML = Spinner();
  const data = await fetchMovies(searchInput.value);
  let renderedMovies;
  if (typeof data === 'string') {
    renderedMovies = Box(data);
  } else {
    renderedMovies = data
      .map((movie) => {
        return MovieTemplate(movie);
      })
      .join('');
  }
  container.innerHTML = renderedMovies;
});
