const nav = document.querySelector('.header__game-nav');
const tab = document.getElementsByClassName('button');

const people = document.createElement('button');
people.textContent = 'People';
people.classList.add('active');
people.classList.add('button');
// nav.append(people);

const houses = document.createElement('button');
houses.textContent = 'Houses';
houses.classList.add('button');
// nav.append(houses);

const wands = document.createElement('button');
wands.textContent = 'Wands';
wands.classList.add('button');
nav.append(people, houses, wands);

function init() {
  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function () {
      if (tab[i].classList.contains('active')) {
        clear(tab);
      } else {
        clear(tab);
        tab[i].classList.add('active');
        console.log(tab[i].textContent);
      }
    });
  }
}
function clear(a) {
  for (let i = 0; i < a.length; i++) {
    a[i].classList.remove('active');
  }
}
init();
// Zadanie do headerowe menu z opcjami. Musisz założyć że klikniecie spowoduje wywolanie funkcji, ktora przekaze reszcie aplikacji informacji o wybranym trybie oraz wizualne zaznaczenie tego trybu.
