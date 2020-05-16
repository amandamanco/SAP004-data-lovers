import { filterData } from '../src/data.js';
import {Bulbasaur, Ivysaur, myPokemons} from '../test/mockPokemon.js'

describe('filterData', () => {

  it('should be a function', () => {
    expect(typeof filterData).toBe('function');
  })
  it('return filter type', () => {
    const typeFilter = "Poison";
    const allPokemons = myPokemons.pokemon;
    expect(filterData(typeFilter, allPokemons)).toEqual([Bulbasaur, Ivysaur]);
  });
})


// describe('orderData', () => {

//   it('should be a function', () => {
//     expect(typeof orderData).toBe('function');
//   })
//   it('return order alfabetic', () => {
//    const myPokemon = myPokemons.pokemon;
//    const name = myPokemon.pokemon.name;
//    const alfabeticOrder = "az"
//     expect(orderData(myPokemon, name, alfabeticOrder)).toEqual([Bulbasaur, Charmander, Charmeleon, Ivysaur]);
//   });
// })



// filterPokemon, allPokemon

// describe('calcType', () => {
//   it('should be a function', () => {
//     expect(typeof calcType).toBe('function');
//   })
//   it('return calculation of type', () => {
//     const filterPokemon = 2;
//     const allPokemon = myPokemons.length;
//     expect(calcType(filterPokemon, allPokemon)).toEqual(50);
//   });
// });


// , orderData, orderPokedex, calcType 




// describe('orderPokedex', () => {

//   it('should be a function', () => {
//     expect(typeof orderPokedex).toBe('function');
//   })
// })


// describe('calcType', () => {

//   it('should be a function', () => {
//     expect(typeof calcType).toBe('function');
//   })
//    it('Retorna a media de typo', () => {
//         expect(calcType(teansTitans, "personagens", "type", "Alien")).toBe([{type:"Alien"}]);
//       });
// })


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

