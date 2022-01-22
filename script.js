//ex1 pt2
function fatorial(n) {
  if (n == 0) {
      return 1;
  }
  let resp = n;
  while (n > 2) {
      resp *= --n;
  }
  return resp;
}

//ex 2
const word = text => {
  let wordArray = text.split(' '); //separa as palavras dentro do split 
  let contWord = 0;
  let result = '';

  for(const i of wordArray) {
    if(i.length > contWord) {
      contWord = i.length;
      result = i;
    }
  }
  return result;
}

console.log(word("Antonio foi no banheiro e não sabemos o que aconteceu"));

//ex2 em uma linha 
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];




