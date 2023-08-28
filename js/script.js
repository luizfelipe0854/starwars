const persons = document.getElementById('persons');
const  starships = document.getElementById('starships');
const  planets = document.getElementById('planets');

const btnFrases = document.getElementById('btn-frases');
const frase = document.getElementById('frase');

//https://swapi.dev/api/

function fillCounters(){
    Promise.all([
        getData('people'),
        getData('starships'),
        getData('planets'),
        ])
        .then(data => {
            persons.innerHTML = data[0].count;
            starships.innerHTML = data[1].count;
            planets.innerHTML = data[2].count;

            persons.style.fontSize = '5em';
            starships.style.fontSize = '5em';
            planets.style.fontSize = '5em';
        })
        .catch(err => console.error('ERROR: ', err))
}

fillCounters();

function getData(param){
    return fetch(`https://swapi.dev/api/${param}`).then(res => res.json())
}


