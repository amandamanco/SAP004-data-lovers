import data from './data/pokemon/pokemon.js';
import { filterData, orderData, orderPokedex } from './data.js';

let pokemonData = data.pokemon;

function fixName(name) {
    return name.replace("(Male)", "").replace("(Female)", "")
}

// let buildModal = function (pokemon) {

//     let modal = document.createElement('div');
//     let img = document.createElement('img');
//     let numbName = document.createElement('div')
//     let number = document.createElement('p');
//     let name = document.createElement('p');
//     let boxInfo = document.createElement('div')
//     let height = document.createElement('p')
//     let weight = document.createElement('p')
//     let candy = document.createElement('p')
//     let evolution = document.createElement('p')
//     let weakness = document.createElement('p')
//     let amount = document.createElement('p')

//     img.src = pokemon.img;
//     number.innerHTML = `${pokemon.num}`;
//     name.innerHTML = `${pokemon.name}`;
//     height.innerHTML = `${pokemon.height}`;
//     weight.innerHTML = `${pokemon.weight}`;
//     candy.innerHTML = `${pokemon.candy}`
//     evolution.innerHTML = `${pokemon.next_evolution}`
//     weakness.innerHTML = `${pokemon.weakness}`
//     amount.innerHTML = `${pokemon.candy_count}`

//     modal.appendChild(img);
//     modal.appendChild(numbName);
//     numbName.appendChild(number);
//     numbName.appendChild(name);
//     modal.appendChild(boxInfo);
//     boxInfo.appendChild(height);
//     boxInfo.appendChild(weight);
//     boxInfo.appendChild(candy);
//     boxInfo.appendChild(evolution);
//     boxInfo.appendChild(weakness);
//     boxInfo.appendChild(amount);

// }

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

    let nameRigth = fixName(pokemon.name);
    name.innerHTML = nameRigth;

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

// document.getElementById("root").addEventListener("click", showModal)
// function showModal() {

//     buildModal()
// }

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






