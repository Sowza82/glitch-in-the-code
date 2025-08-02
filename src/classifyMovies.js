const movies = require("../data/movies");

function classifyMovies(movies) {
  const avaliacaoBuckets = {
    '0-4.9': [],
    '5.0-7.9': [],
    '8.0-10.0': [],
  };

  const disponibilidade = {
    disponiveis: [],
    naoDisponiveis: [],
  };

  if (!movies || movies.length === 0) {
    return { avaliacao: avaliacaoBuckets, disponibilidade };
  }

  const extractFields = ({ titulo, diretor, genero, anoLancamento, avaliacao }) => ({
    titulo, diretor, genero, anoLancamento, avaliacao
  });

  for (const movie of movies) {
    const rating = movie.avaliacao;
    const movieSimplified = extractFields(movie);

    if (rating >= 0 && rating <= 4.9) {
      avaliacaoBuckets['0-4.9'].push(movieSimplified);
    } else if (rating >= 5.0 && rating <= 7.9) {
      avaliacaoBuckets['5.0-7.9'].push(movieSimplified);
    } else if (rating >= 8.0 && rating <= 10.0) {
      avaliacaoBuckets['8.0-10.0'].push(movieSimplified);
    }

    if (movie.disponivel) {
      disponibilidade.disponiveis.push({ titulo: movie.titulo });
    } else {
      disponibilidade.naoDisponiveis.push({ titulo: movie.titulo });
    }
  }

  const sortByTitle = (arr) => [...arr].sort((a, b) => a.titulo.localeCompare(b.titulo));

  for (const key in avaliacaoBuckets) {
    avaliacaoBuckets[key] = sortByTitle(avaliacaoBuckets[key]);
  }

  return { avaliacao: avaliacaoBuckets, disponibilidade };
}

module.exports = {
  classifyMovies
}
