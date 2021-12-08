<!--Template header. reused hello app data is loaded for us when you run the vue install.-->
<template>  

</template>

<!-- Start Script section,-->
<script>



export default {
  name: 'App',
  components: {
       
  },
  mounted(){//life cycle hook or methods. should get list of objects. from express server
    this.$stateService.getAllStates().then( states => console.log(states)) //making a requst
  } 
}
</script>
<!--End Script-->

<!--CSS Styling for the APP-->
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
<!--End Page-->