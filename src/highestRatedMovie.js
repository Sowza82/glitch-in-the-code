const movies = require("../data/movies");

const highestRatedMovie = (movies) => {
if (!movies || movies.length === 0) return undefined;

  let highestRated = movies[0];

  for (let i = 1; i < movies.length; i++) {
    if (movies[i].avaliacao > highestRated.avaliacao) {
      highestRated = movies[i];
    }
  }

  return highestRated;

}

module.exports = {
  highestRatedMovie
}
