const movies = require ("../data/movies");

function getMoviesByActor(actor) {

 if (typeof actor !== "string" || actor.trim() === "") {
    return [];
  }

  const nomeNormalizado = actor.trim().toLowerCase();

  return movies.filter((movie) =>
    movie.elenco.some(
      (name) => name.trim().toLowerCase() === nomeNormalizado
    )
  );



}

module.exports = {
  getMoviesByActor
}
