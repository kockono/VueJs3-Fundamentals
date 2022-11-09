<template>
    <div>
        <h1>Quien es ese pokemon</h1>
        <!-- Todo: img -->

        <PokemonPicture v-bind:pokemonId="31" v-bind:showPokemon="false" />
        <PokemonOptions />
    </div>
</template>

<script>
import PokemonOptions from '../components/pokemonOptions'
import PokemonPicture from '../components/pokemonPicture'
// eslint-disable-next-line no-unused-vars
import getPokemonOptions  from '../helpers/getPokemonOptions'

console.log( getPokemonOptions() )

export default {
    name:'PokemonPage',
    components: { PokemonOptions, PokemonPicture },
    methods: {
        
    }
}
</script>

<style>

</style>