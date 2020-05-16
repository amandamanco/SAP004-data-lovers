import data from './data/pokemon/pokemon.js';
import { filterData, orderData, orderPokedex, calcType } from './data.js';

const pokemonData = data.pokemon;

function fixName(name) {
    return name.replace("(Male)", "").replace("(Female)", "")
}

let buildModal = function (index) {

    const way = data.pokemon.find(pokemon => pokemon.id == index)

    let allModal = document.createElement('div')
    let modalPop = document.createElement('div');
    let contentImg = document.createElement('div')
    let img = document.createElement('img');
    let contentInfo = document.createElement('div');
    let numbName = document.createElement('div')
    let number = document.createElement('p');
    let name = document.createElement('p');
    let boxInfo = document.createElement('div')
    let height = document.createElement('p')
    let weight = document.createElement('p')
    let candy = document.createElement('p')
    let evolutionNext = document.createElement('p')
    let evolutionPrev = document.createElement('p')
    let weakness = document.createElement('p')
    let amount = document.createElement('p')

    img.src = way.img;
    number.innerHTML = `${way.num}`;
    name.innerHTML = `${way.name}`;
    height.innerHTML = `<b>Peso: </b>${way.height}`;
    weight.innerHTML = `<b>Altura: </b>${way.weight}`;

    const wayNextEvolu = way.next_evolution;
    const wayPrevEvolu = way.prev_evolution;

    wayPrevEvolu ? way.prev_evolution.map((evolution) => { evolutionPrev.innerHTML = `<b>Evolução Anterior: </b>${evolution.name}` }) : null;
    wayNextEvolu ? way.next_evolution.map((evolution) => { evolutionNext.innerHTML = `<b>Próxima Evolução: </b>${evolution.name}` }) : null;

    let getWeakness = way.weaknesses.toString()
    weakness.innerHTML = `<b>Fraquezas: </b>${getWeakness}`

    candy.innerHTML = `<b>Tipo de Candy: </b>${way.candy}`
    way.candy_count ? amount.innerHTML = `<b>Quantidade de Candy: </b>${way.candy_count}` : null;

    allModal.classList.add("modal")
    modalPop.classList.add("modal-content");
    numbName.classList.add("number-name")
    img.classList.add("img-modal")

    allModal.appendChild(modalPop)
    modalPop.appendChild(contentImg);
    contentImg.appendChild(img);
    modalPop.appendChild(contentInfo);
    contentInfo.appendChild(numbName);
    numbName.appendChild(number);
    numbName.appendChild(name);
    contentInfo.appendChild(boxInfo);
    boxInfo.appendChild(height);
    boxInfo.appendChild(weight);
    boxInfo.appendChild(evolutionPrev);
    boxInfo.appendChild(evolutionNext);
    boxInfo.appendChild(weakness);
    boxInfo.appendChild(candy);
    boxInfo.appendChild(amount);

    document.getElementsByTagName('body')[0].appendChild(allModal)
    allModal.style.display = "block";
    window.onclick = function (event) {
        if (event.target == allModal) {
            allModal.style.display = "none";
        }
    }
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

let runModal = function (typeFunction) {
    for (const pokemon of typeFunction) {
        document.getElementById(`id-card-${pokemon.id}`).addEventListener("click", function () {
            buildModal(pokemon.id);
        })
    }
}

runModal(pokemonData)

document.getElementById("list").addEventListener("change", printFilter)
function printFilter() {
    let pokemonType = document.getElementById("list").value;
    let filterList = filterData(pokemonType, pokemonData);
    let cards = document.querySelectorAll("div.card");
    for (let i = 0; i < cards.length; i++) {
        document.getElementById("root").removeChild(cards[i]);
    }

    if (pokemonType === "Todos") {
        pokemonData.map(buildCard)
    }

    let filterPokemon = (filterList.length);
    let allPokemon = (pokemonData.length)
    let doneCalcule = calcType(filterPokemon, allPokemon)
    let valueFix = doneCalcule.toFixed(2)

    let resultCalc = document.createElement('div')
    let calcule = document.createElement('p')
    calcule.classList.add("result-calcule")
    calcule.innerHTML = `Esse tipo corresponde a <b>${valueFix}% </b> dos Pokemons da Geração Kanto`

    resultCalc.appendChild(calcule)

    document.getElementById("root").appendChild(resultCalc)

    filterList.map(buildCard)
    runModal(filterList)
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
        runModal(az)
    } else if (pokemonOrder === "z-a") {
        const za = orderData(pokemonData, "name", "za")
        za.map(buildCard)
        runModal(za)
    } else if (pokemonOrder === "pokedex-number") {
        const pokedex = orderPokedex(pokemonData, "id", "pokedex")
        pokedex.map(buildCard)
        runModal(pokedex)
    }

}




