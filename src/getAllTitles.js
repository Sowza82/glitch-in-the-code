const movies = require("../data/movies");

const getAllTitles = (movies) => {
if (!Array.isArray(movies)) return [];
  return movies.map(movie => movie.title || movie.titulo);

}

module.exports = {
  getAllTitles
}
