function vMaior(numbers) {
  let resultado = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < resultado ){
      resultado = [index];
    }
  }
  return resultado;
}

console.log(vMaior([2, 4, 6, 7, 10, 0, -3]));