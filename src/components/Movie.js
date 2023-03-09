export default function Movie(movie) {
  return /*html*/ `
    <div class='movie'>
      <img class='movie-poster' src='${movie.Poster}' />
      <div class='movie-info'>
        <h1>${movie.Title}</h1>
        <p>${movie.Year}</p>
      </div>
    </div>
  `;
}
