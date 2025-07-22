const movies = require("../data/movies");

const orderMoviesByYear = (movies) => {
  if (!Array.isArray(movies) || movies.length === 0) return [];


  const moviesCopy = [...movies];

 moviesCopy.sort((a, b) => a.anoLancamento - b.anoLancamento);

  return moviesCopy;

}

module.exports = {
  orderMoviesByYear
}
