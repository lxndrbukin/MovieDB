export default function Movie(movie) {
  return /*html*/ `
    <div class='movie'>
      <img class='movie-poster' src='${movie.Poster}' />
      <div class='movie-info'>
        <h3>${movie.Title} (${movie.Year})</h3>
        <div class='about'>
          <div class='about_rating'><i class="fas fa-star"></i> ${movie.imdbRating}</div>
          <div class='about_runtime'>${movie.Runtime}</div>
          <div class='about_genre'>${movie.Genre}</div>
        </div>
        <p class='plot'>${movie.Plot}</p>
      </div>
    </div>
  `;
}
