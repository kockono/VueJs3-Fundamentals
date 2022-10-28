<template>
  <!-- <h2>Counter</h2> -->
    <p> Contador: {{ getSquareValue() }}</p>
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
        }
    },
    computed: {
        
    }
}
</script>

<style>

</style>