<!--this will get states. key- unique name/object. -->
<template>
    <div class="state-list-container"> <!-- with class we can help the dipaly in css section-->
        <div class="state-container" v-for="state in states" v-bind:key="state.name">
            <state-detail 
            v-bind:state="state"
            v-on:update-visited="updateVisited"
            ></state-detail> <!-- state prop to a value state in states array.-->
        </div>

    </div>
    
</template>

<script>
import StateDetail from './StateDetail.vue'


export default{
  components: { StateDetail },
    name: 'StateList',
    //data function will return the data for/in a state array the states.
    data() {          
        return {
            states: []
        }
    },
     mounted(){//life cycle hook or methods. should get list of objects. from express server
        this.fetchAllStates()
    },
    methods: {
        fetchAllStates() { //methoid we can reuse for allthe state calls.
            this.$stateService.getAllStates().then( states => {
                this.states = states
            })
        },
        updateVisited(stateName, visited) {//object arguments...makeing api call to stateService setVisited.
            this.$stateService.stateVisited(stateName, visited).then( () =>{
                this.fetchAllStates() //latest data updated. 
            })
               
            
        }
    } 
}

</script>

<style scoped>
.state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.state-container {
    margin: 1rem;
}
</style>
