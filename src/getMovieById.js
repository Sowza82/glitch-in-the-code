const movies = require("../data/movies");

function getMovieById(id) {
 if (typeof id !== "number") return undefined;
  if (id <= 0) return undefined;

  return movies.find(movie => movie.id === id);

}

module.exports = {
  getMovieById
}
