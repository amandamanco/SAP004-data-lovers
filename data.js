export const filterData = (typeFilter, allPokemons) => {
    let filteredPokemons = allPokemons.filter((pokemon) => {
        if (pokemon.type.includes(typeFilter))
            return pokemon;
    })
    return filteredPokemons;
}

export const orderData = (myPokemon, name, alfaOrder) => {
    const direction = (alfaOrder === "az") ? 1 : -1;
    return myPokemon.sort((a, b) => {
        if (b[name] < a[name]) return direction;
        else if (a[name] < b[name]) return -direction;
        else return 0;
    })
}

export const orderPokedex = (myPokemon, id, alfaOrder) => {
    if (alfaOrder == "pokedex") {
        return myPokemon.sort((a, b) => {
            if (b[id] < a[id]) return 1;
            else if (a[id] < b[id]) return -1;
            else return 0;
        })
    }
}

export const calcType = (filterPokemon, allPokemon) => {
    let percentage = filterPokemon * 100 / allPokemon;
    return percentage;
}



