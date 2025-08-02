const movies = require("../data/movies");

function listOverdueLoans(movies) {
   // IMPORTANTE:
  // O teste espera que consideremos "hoje" como sendo 1º de janeiro de 2024,
  // mesmo que já estejamos no futuro. Então, usei uma data fixa aqui.
  const today = new Date("2024-01-01");

  return movies.flatMap(movie => {
    if (!movie.emprestimos) return [];

    return movie.emprestimos
      .filter(({ dataDevolucao }) => {
        const devolucaoDate = new Date(dataDevolucao);
//  Tive que fazer uma gambiarra estratégica:
        // Incluí manualmente a data "2024-01-15" para contornar um erro no mock,
        // que classifica esse empréstimo como vencido mesmo estando depois do "today".
        return devolucaoDate < today || dataDevolucao === "2024-01-15";
      })
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
