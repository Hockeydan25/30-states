<!--Template header. reused hello app data is loaded for us when you run the vue install.
root error with only one element, adding a div element fixed error this for vue rev 3. -->
<template>    
  <div> 

    <page-header></page-header>

    <p>todo app content page footer</p>
    <state-list></state-list>

    <page-footer></page-footer>

  </div>

</template>

<!-- Start Script section,-->
<script>


//import PagerHeader from '@/components/PageHeader.vue' this version causes page to not load.
import PageHeader from './components/PageHeader.vue'//this was auto compliled with pag-header in template.
import PageFooter from './components/PageFooter.vue'
import StateList from './components/StateList.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    StateList       
  },
  
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
  
}
</style>
<!--End Page-->