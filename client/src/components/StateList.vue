<template>
    <div>
        <p v-for="state in states" v-bind:key="state.name" >
            {{ state }}
        </p>

    </div>
    
</template>

<script>


export default{
    name: 'StateList',
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
        }
    } 
}

</script>

<style scoped>

</style>
