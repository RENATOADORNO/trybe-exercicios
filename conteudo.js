/* 
// OBJETO
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

//ACESSAR OBJETO
console.log('O carro é ' + car.type);
console.log('O carro é ' + car['type']);

car['typeModel'] = car.type + ' ' + car.model;

console.table(car); */

/* //for in array
let cars = ['Mecedes', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index, cars[index]);
}

// for in objeto
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',

};

for (let index in car) {
  console.log(index, car[index]);
} */

function sum(a, b) {
  return a + b;
}