<template>
  <div>
      <indecision />
      <Counter title="Entraron" :start=101 />
  </div>

</template>

<script>
// import Counter from './components/Counter.vue'
import Indecision from './components/indecision.vue'


export default {
  name: 'App',
  components: {
    // Counter,
    Indecision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
