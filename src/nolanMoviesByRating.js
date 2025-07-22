const movies = require("../data/movies");

const nolanMoviesByRating = (movies) => {
  return movies
    .filter(movie => movie.diretor === 'Christopher Nolan')
    .sort((a, b) => b.avaliacao - a.avaliacao);


}

module.exports = {
  nolanMoviesByRating
}
