<!--this will get states. key- unique name/object. -->
<template>
    <div>
        <div>
            <state-summary v-bind:states="states"></state-summary>
        </div>

        <div class="state-list-container"> <!-- with class we can help the dipaly in css section-->
            <div class="state-container" v-for="state in states" v-bind:key="state.name">
                <state-detail 
                    v-bind:state="state"
                    v-on:update-visited="updateVisited"
                ></state-detail> <!-- state prop to a value state in states array.-->
            </div>
        </div>
    </div>    
</template>

<script>
import StateDetail from './StateDetail.vue'
import StateSummary from './StateSummary.vue'


export default{
    components: { 
      StateDetail, 
      StateSummary
        
    },
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
            .catch( err => {// 404 not found and 500 server error
                alert('Sorry, can\'t fetch state list now') //500 generic for user.
                console.log(err) //for the developer eyes only.
            })
        },
        updateVisited(stateName, visited) {//object arguments...makeing api call to stateService setVisited.
            this.$stateService.setVisited(stateName, visited).then( () =>{
                this.fetchAllStates() //latest data updated. 
            })
            .catch( err => {// 404 not found and 500 server error
                alert('Sorry, can\'t update the state list now') //500 generic for user.
                console.log(err) //for the developer eyes only.
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
