import pokemonApi from '../api/pokemonApi'

 const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )
    return  pokemonsArr.map( ( _ , index) => index + 1)
}

const getPokemonOptions = () => {
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5)
    console.log( mixedPokemons )
    getPokemonsNames( mixedPokemons.splice(0, 4) )    
}

const getPokemonsNames = async( [a,b,c,d] = [] ) => {
    const resp = await pokemonApi.get(`/1`)
    console.log( a, b, c, d )
    console.log( resp )
}

// const getPokemonsNamesTwo = ( pokemons = [] ) => {
//     console.log( pokemons )
// }


export default getPokemonOptions