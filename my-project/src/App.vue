<template>
  <div id="app">
    <h1>Gem TD</h1>
    <div id="nav">
      <router-link v-bind:to="'/'" class="btn btn-default">Home</router-link>
      <router-link v-bind:to="'/Instructions'" class="btn btn-default">Instructions</router-link>
      <router-link v-bind:to="'/Updates'" class="btn btn-default">Updates</router-link>
      
    </div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
