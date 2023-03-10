import { fetchMovies } from './actions';
import Spinner from './components/Spinner';
import App from './App';
import Movie from './components/Movie';

const root = document.querySelector('#root');
root.innerHTML = App();

const searchInput = document.querySelector('.header-search-input');
const searchButton = document.querySelector('.header-search-button');
const container = document.querySelector('.container');

searchButton.addEventListener('click', async () => {
  container.innerHTML = Spinner();
  const movies = await fetchMovies(searchInput.value);
  let renderedMovies;
  if (typeof movies !== 'string') {
    console.log(movies);
    renderedMovies = movies
      .map((movie) => {
        return Movie(movie);
      })
      .join('');
  } else {
    renderedMovies = movies;
  }
  container.innerHTML = renderedMovies;
});
