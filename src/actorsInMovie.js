const movies = require("../data/movies");

const actorsInMovie = (titulo) => {
if (!titulo) return "Filme não encontrado.";

  const movie = movies.find((m) => m.titulo === titulo);

  if (!movie || !Array.isArray(movie.elenco)) return "Filme não encontrado.";

  return movie.elenco.slice(0, 2);

}

module.exports = {
  actorsInMovie
}
