const { movies } = require("../data/list1");

const displayMovies = (movies) => {
  if (!Array.isArray(movies)) {
    throw new TypeError("O parâmetro 'movies' deve ser um array");
  }

  movies.forEach((movie) => {
    if (movie.titulo && movie.diretor) {
      console.log(`Título: ${movie.titulo} - Diretor: ${movie.diretor}`);
    }
  });

}

module.exports = {
  displayMovies
}
