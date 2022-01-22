
// para fazer comparações se usa ==. Exemplo: if(x == y)

// para saber se o número é par ou ímpar é melhor usar o operador resto(%).

// Se o n resto 2 for igual a 0 é par, senão é ímpar.


let a = 1;
let b = 6;
let c = 5;

let comparar = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  comparar = true;
}

console.log(comparar);