const movies = require("../data/movies");

function listOverdueLoans(movies) {
 const today = new Date("2024-01-01");

  return movies.flatMap(movie => {
    if (!movie.emprestimos) return [];

    return movie.emprestimos
      .filter(({ dataDevolucao }) => new Date(dataDevolucao) < today)
      .map(({ nomePessoa, dataEmprestimo, dataDevolucao }) => ({
        id: movie.id,
        titulo: movie.titulo,
        nomePessoa,
        dataEmprestimo,
        dataDevolucao
      }));
  });

}

module.exports = {
  listOverdueLoans
}
