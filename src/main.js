import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';

let pokemonData = data.pokemon;

pokemonData.map((pokemon) => {
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
})








