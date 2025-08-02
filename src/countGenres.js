const movies = require("../data/movies");

function countGenres(movies) {
   const genreCount = {};

  for (const movie of movies) {
    if (Array.isArray(movie.genero) && movie.genero.length > 0) {
      for (const genre of movie.genero) {
        genreCount[genre] = (genreCount[genre] || 0) + 1;
      }
    }
  }

  return genreCount;
}

module.exports = {
  countGenres
}
