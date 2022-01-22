function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let idDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let listDay = document.createElement('li');

    //pode ser usado |listDay.classList.add('day')|
    if (day === 24 | day === 31) {
      listDay.className = 'holiday';
      listDay.innerHTML = day;
      idDays.append(listDay);
    } else if (day === 4 | day === 11 | day === 18) {
      listDay.className = 'friday';
      listDay.innerHTML = day;
      idDays.append(listDay);
    } else if (day === 25) {
      listDay.classList.add('holiday', 'friday')
      listDay.innerHTML = day;
      idDays.append(listDay);
    } else {
      listDay.innerHTML = day;
      listDay.className = 'day';
      idDays.append(listDay);
    }
    
  }
}
createDaysOfTheMonth();

//--EX2-----------------------------------------------
function createButtonHoliday(){
  const divBtn = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.innerText = 'Feriados';
  btn.id = 'btn-holiday';
  divBtn.append(btn);
}
createButtonHoliday();


function clickHolidays() {
  //chamou o botão 
  let getHolidayButton = document.querySelector('#btn-holiday'); 
  //chamou li com class holiday
  let getHolidays = document.querySelectorAll('.holiday')
  //armazena a cor 
  let backgroundColor = '#49cc56';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() { // add evento no botão 
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

clickHolidays();







