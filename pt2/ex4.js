






function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let index in palavras) {
    if (maiorPalavra.length < palavras[index].length) {
      maiorPalavra = palavras[index];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 




