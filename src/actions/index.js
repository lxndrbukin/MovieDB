import Box from '../components/Box';

const apikey = 'a4daa08f';

export const fetchMovies = async (searchTerm) => {
  const movieList = [];
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`
  );

  if (searchTerm) {
    const moviesData = await res.json();
    const movieIDs = moviesData.Search.map((movie) => movie.imdbID);
    for (let movieID of movieIDs) {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${apikey}&i=${movieID}`
      );
      const data = await res.json();
      try {
        movieList.push(data);
      } catch (err) {
        console.error(err);
      }
    }
    return movieList;
  }
  return Box('Please provide an input for your search');
};
