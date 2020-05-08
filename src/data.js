import data from './data/pokemon/pokemon.js';
//import pokemon from './data/pokemon/pokemon.js';

export const filterData = typeFilter => {
    let myPokemon = data.pokemon;
    let filteredPokemons = myPokemon.filter((pokemon) => {
        if (pokemon.type.includes(typeFilter))
            return pokemon;
    })
    return filteredPokemons;
}


// export const orderData = () => {
//     let myPokemon = data.pokemon;
//     let orderList = myPokemon.sort((a, b) => {
//         return a > b ? 1 : a < b ? -1 : 0
//     })
//     return orderList
// }


