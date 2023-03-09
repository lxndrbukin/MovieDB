import { fetchMovies, fetchMovie } from './actions';
import App from './App';
import Movie from './components/Movie';

const root = document.querySelector('#root');
root.innerHTML = App();

const searchInput = document.querySelector('.header-search-input');
const searchButton = document.querySelector('.header-search-button');
const container = document.querySelector('.container');

searchButton.addEventListener('click', async () => {
  const movies = await fetchMovies(searchInput.value);
  const renderedMovies = movies
    .map((movie) => {
      return Movie(movie);
    })
    .join('');
  container.innerHTML = renderedMovies;
});
