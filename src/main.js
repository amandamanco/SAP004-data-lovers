import data from './data/pokemon/pokemon.js';
// import pokemon from './data/pokemon/pokemon.js';

let pokemonData = data.pokemon;

pokemonData.map((pokemon) => {
    let card = document.createElement('div');
    let img = document.createElement('img');
    let box = document.createElement('div');
    let number = document.createElement('p');
    let type = document.createElement('p');
    let name = document.createElement('p');

    img.src = pokemon.img;
    number.innerHTML = `${pokemon.num}`;
    type.innerHTML = `${pokemon.type}`;

    // if (pokemon.type[1] !== undefined) {
    //     let typeTwo = document.createElement('p');
    //     typeTwo.innerHTML = `${pokemon.type[1]}`;
    //     card.classList.add("type");
    //     box.appendChild(typeTwo);
    // }

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
    type.classList.add("type");
    name.classList.add("name");

    // switch (pokemon.type[0]) {
    //     case 'Grass':
    //         type.style.backgrounColor = "#10DB0C";
    //         break;
    //     case 'Poison':
    //         type.style.backgroundColor = "#9D00FD";
    //         break;
    //     case 'Fire':
    //         type.style.backgrundColor = "#FF0F0F"
    //         break;
    //     default:
    //         type.style.background = "#ffff"
    // }


    card.appendChild(img);
    card.appendChild(box);
    box.appendChild(number);
    box.appendChild(type);
    card.appendChild(name);

    document.getElementById("root").appendChild(card);
})





