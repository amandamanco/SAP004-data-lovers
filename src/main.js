import data from './data/pokemon/pokemon.js';
import { filterData, orderData, orderPokedex } from './data.js';

let pokemonData = data.pokemon;

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
    console.log(pokemon, pokemon.type)
    type.innerHTML = `<span class="${pokemon.type[0]}">${pokemon.type[0]}</span>`;
    if (pokemon.type[1] !== undefined) {
        typeTwo.innerHTML = `<span class="${pokemon.type[1]}">${pokemon.type[1]}</span>`;
        typeTwo.classList.add("type");
    }

    name.innerHTML = `${pokemon.name}`;
    if (pokemon.id === 29) {
        name.innerHTML = "Nidoran ♀";
    } else if (pokemon.id === 32) {
        name.innerHTML = "Nidoran ♂ "
    }

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








