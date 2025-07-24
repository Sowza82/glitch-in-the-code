const movies = require("../data/movies");
function averageRatingByGenre(genero) {
 if (genero === undefined || genero === '') {
    return "O parâmetro é obrigatório.";
  }

  if (typeof genero !== "string") {
    return "O parâmetro tem que ser uma string.";
  }

  const filmesDoGenero = movies.filter((filme) =>
    filme.genero.includes(genero)
  );

  if (filmesDoGenero.length === 0) {
    return `Não há filmes do gênero ${genero}.`;
  }

  const somaAvaliacoes = filmesDoGenero.reduce((total, filme) => {
    return total + filme.avaliacao;
  }, 0);

  const media = somaAvaliacoes / filmesDoGenero.length;
  const mediaFormatada = Number(media.toFixed(2));

  return `A média de avaliação dos filmes do gênero ${genero} é ${mediaFormatada}.`;

}

module.exports = {
  averageRatingByGenre
}
