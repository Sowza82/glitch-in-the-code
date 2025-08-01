const movies = require("../data/movies");

function categorizeMovies(movies, details = true) {
 if (!Array.isArray(movies) || movies.length === 0) return {};

  const categorized = {};

  for (const movie of movies) {
    const generos = movie.generos || movie.genero;

    if (!Array.isArray(generos) || generos.length === 0) continue;

    for (const genero of generos) {
      if (!categorized[genero]) {
        categorized[genero] = [];
      }

      if (details) {
        const { id, titulo, anoLancamento, avaliacao, diretor } = movie;
        categorized[genero].push({ id, titulo, anoLancamento, avaliacao, diretor });
      } else {
        categorized[genero].push(movie.titulo);
      }
    }
  }

  for (const genero in categorized) {
    categorized[genero].sort((a, b) => {
      const tituloA = details ? a.titulo : a;
      const tituloB = details ? b.titulo : b;
      return tituloA.localeCompare(tituloB);
    });
  }

  return categorized;

}
module.exports = {
  categorizeMovies
}
