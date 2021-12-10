const nav = document.querySelector('.header__game-nav');
const tab = document.getElementsByClassName('button');

const students = document.createElement('button');
students.textContent = 'Students';
students.classList.add('active');
students.classList.add('button');

const houses = document.createElement('button');
houses.textContent = 'Houses';
houses.classList.add('button');

const staff = document.createElement('button');
staff.textContent = 'Staff';
staff.classList.add('button');
nav.append(students, houses, staff);

function clearSelection(item) {
  for (let i = 0; i < item.length; i++) {
    item[i].classList.remove('active');
  }
}

function init() {
  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', () => {
      if (tab[i].classList.contains('active')) {
        clearSelection(tab);
      } else {
        clearSelection(tab);
        tab[i].classList.add('active');

        console.log(tab[i].textContent);
      }
    });
  }
}

init();
