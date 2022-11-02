<template>
    <div>
      <h2>{{ customTitle }}</h2>
    <p>{{ counter }} Contador: {{ squareCounter }}</p>
    <p>{{ counter }} Contador: {{ squareCounter }}</p>
    <button @click="sumarCounter()">+ 1</button>
    <button v-on:click="restarCounter()">- 1</button>
  </div>
</template>

<script>
import { title } from 'process';

export default {
    props: ['title'], // Tenemos acceso al título
    name: 'Contador',
    data() {
        return {
            counter: 5
        }
    },
    methods: {
        getSquareValue(){ 
            console.log( 'Resultado' )
            return this.counter * this.counter;
        },
        sumarCounter(){
            this.counter++;
        },
        restarCounter(){
            this.counter--;
        }

    },
    computed: {
        squareCounter() {
            console.log( 'Resultado' )
            return this.counter * this.counter
        },
        customTitle(){
            return this.title ? this.title : 'Counter'
        }
    }
}
</script>

<style>

    button {
        /* margin: 0 5px; */
        background-color: #64B687;
        /* border: 1px; */
        /* margin: 0 5px; */
    }

</style>