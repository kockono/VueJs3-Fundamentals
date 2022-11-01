<template>
    <div>
      <h2>Counter</h2>
    <p>{{ counter }} Contador: {{ squareCounter }}</p>
    <p>{{ counter }} Contador: {{ squareCounter }}</p>
    <p>{{ counter }} Contador: {{ squareCounter }}</p>
    <p>{{ counter }} Contador: {{ squareCounter }}</p>
    <button v-on:click="sumarCounter()">+ 1</button>
    <button v-on:click="restarCounter()">- 1</button>
  </div>
</template>

<script>
export default {
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