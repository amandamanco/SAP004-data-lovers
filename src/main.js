import data from './data/pokemon/pokemon.js';
import { filterData, orderData, orderPokedex } from './data.js';

const pokemonData = data.pokemon;

function fixName(name) {
    return name.replace("(Male)", "").replace("(Female)", "")
}

let buildModal = function (index) {

    const way = data.pokemon.find(pokemon => pokemon.id == index)

    let allModal = document.createElement('div')
    let modalPop = document.createElement('div');
    let img = document.createElement('img');
    let numbName = document.createElement('div')
    let number = document.createElement('p');
    let name = document.createElement('p');
    let boxInfo = document.createElement('div')
    let height = document.createElement('p')
    let weight = document.createElement('p')
    let candy = document.createElement('p')
    let evolution = document.createElement('p')
    let weakness = document.createElement('p')
    let amount = document.createElement('p')

    img.src = way.img;
    number.innerHTML = `${way.num}`;
    name.innerHTML = `${way.name}`;
    height.innerHTML = `${way.height}`;
    weight.innerHTML = `${way.weight}`;
    candy.innerHTML = `${way.candy}`
    evolution.innerHTML = `${way.next_evolution}`
    weakness.innerHTML = `${way.weakness}`
    amount.innerHTML = `${way.candy_count}`

    allModal.classList.add("modal")
    modalPop.classList.add("modal-content");
    numbName.classList.add("number-name")
    boxInfo.classList.add("box-info")
    img.classList.add("img-modal")

    allModal.appendChild(modalPop)
    modalPop.appendChild(img);
    modalPop.appendChild(numbName);
    numbName.appendChild(number);
    numbName.appendChild(name);
    modalPop.appendChild(boxInfo);
    boxInfo.appendChild(height);
    boxInfo.appendChild(weight);
    boxInfo.appendChild(candy);
    boxInfo.appendChild(evolution);
    boxInfo.appendChild(weakness);
    boxInfo.appendChild(amount);

    document.getElementsByTagName('body')[0].appendChild(allModal)
    allModal.style.display = "block";
}

let buildCard = function (pokemon) {

    let card = document.createElement('div');
    let img = document.createElement('img');
    let box = document.createElement('div');
    let number = document.createElement('p');
    let allType = document.createElement('div');
    let type = document.createElement('p');
    let name = document.createElement('p');
    let typeTwo = document.createElement('p');

    img.src = pokemon.img;
    number.innerHTML = `${pokemon.num}`;
    type.innerHTML = `<span class="${pokemon.type[0]}">${pokemon.type[0]}</span>`;
    if (pokemon.type[1] !== undefined) {
        typeTwo.innerHTML = `<span class="${pokemon.type[1]}">${pokemon.type[1]}</span>`;
        typeTwo.classList.add("type");
    }

    let nameRigth = fixName(pokemon.name);
    name.innerHTML = nameRigth;

    card.id = `id-card-${pokemon.id}`
    card.classList.add("card");
    img.classList.add("img");
    box.classList.add("box")
    number.classList.add("number");
    name.classList.add("name");
    allType.classList.add("all-type");

    card.appendChild(img);
    card.appendChild(box);
    box.appendChild(number);
    box.appendChild(allType);
    allType.appendChild(type);
    allType.appendChild(typeTwo);
    card.appendChild(name);

    document.getElementById("root").appendChild(card);
}


pokemonData.map(buildCard);

for (const pokemon of pokemonData) {
    document.getElementById(`id-card-${pokemon.id}`).addEventListener("click", function () {
        buildModal(pokemon.id);
    })
}

document.getElementById("list").addEventListener("change", printFilter)
function printFilter() {
    let pokemonType = document.getElementById("list").value;
    let filterList = filterData(pokemonType);
    let cards = document.querySelectorAll("div.card");
    for (let i = 0; i < cards.length; i++) {
        document.getElementById("root").removeChild(cards[i]);
    }
    if (pokemonType === "Todos") {
        pokemonData.map(buildCard)
    }
    filterList.map(buildCard)
}

document.getElementById("order").addEventListener("change", printOrder)
function printOrder() {
    let pokemonOrder = document.getElementById("order").value;
    let cards = document.querySelectorAll("div.card");
    for (let i = 0; i < cards.length; i++) {
        document.getElementById("root").removeChild(cards[i]);
    }
    if (pokemonOrder === "a-z") {
        const az = orderData(pokemonData, "name", "az")
        az.map(buildCard)
    } else if (pokemonOrder === "z-a") {
        const za = orderData(pokemonData, "name", "za")
        za.map(buildCard)
    } else if (pokemonOrder === "pokedex-number") {
        const pokedex = orderPokedex(pokemonData, "id", "pokedex")
        pokedex.map(buildCard)
    }
}







