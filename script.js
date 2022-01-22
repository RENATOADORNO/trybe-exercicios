

const title = document.createElement('h1');
title.innerHTML = "Exercício 5.2 - JavaScript DOM";

const body = document.querySelector('body');
body.append(title);

const main = document.createElement('main');
main.classList.add('main-content');
body.append(main);

const sectionCenter = document.createElement('section');
sectionCenter.classList.add('center-content');
main.append(sectionCenter);

const p = document.createElement('p');
p.innerHTML = "Contrary to popular belief, Lorem Ipsum is not simply random text."
sectionCenter.append(p);















