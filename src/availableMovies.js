const movies = require("../data/movies");

const availableMovies = (movies) => {
  return movies
    .filter(movie => movie.disponivel === true)
    .map(movie => movie.titulo);

}

module.exports = {
  availableMovies
}
