
function vMaior(numbers, resultado) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > resultado ){
      resultado = [index];
    }
  }
  return resultado;
}

console.log(vMaior([2, 3, 6, 7, 10, 1], 0 ));