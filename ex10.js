


let valorCusto = 10;
let valorVenda = 30;

if (valorCusto >= 0 && valorVenda >= 0) {
  let valorCustoTotal = valorCusto + (0.2 * valorCusto);
  let lucroVendas = (valorVenda - valorCustoTotal) * 1000;
  console.log(lucroVendas);
} else {
  console.log("Erro, os valores não podem ser negativos");
};
