// import superheroes from 'superheroes';

const button = document.getElementById ('button');
const display = document.getElementById ('display');

function getNewSuperhero() {
    display.innerHTML = Math.random();
}

button.addEventListener ('click', getNewSuperhero);