import data from './data/pokemon/pokemon.js';

let myPokemon = data.pokemon;

export const filterData = typeFilter => {
    let myPokemon = data.pokemon;
    let filteredPokemons = myPokemon.filter((pokemon) => {
        if (pokemon.type.includes(typeFilter))
            return pokemon;
    })
    return filteredPokemons;
}

export const orderData = (myPokemon, name, alfaOrder) => {
    if (alfaOrder == "az") {
        return myPokemon.sort((a, b) => {
            if (b[name] < a[name]) return 1;
            else if (a[name] < b[name]) return -1;
            else return 0
        })
    }
    if (alfaOrder == "za") {
        return myPokemon.sort((a, b) => {
            if (b[name] < a[name]) return -1;
            else if (a[name] < b[name]) return 1;
            else return 0
        })
    }
}

export const orderPokedex = (myPokemon, id, alfaOrder) => {
    if (alfaOrder == "pokedex") {
        return myPokemon.sort((a, b) => {
            if (b[id] < a[id]) return 1;
            else if (a[id] < b[id]) return -1;
            else return 0
        })
    }
}

