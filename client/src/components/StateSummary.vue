<template>
    <div>
        <p>There are a total of  {{ states.length }} states and the District of Columbia</p>
        <p> You have visited {{totalVisited  }} {{ units }}</p>

        <p id="all-visited-msg" v-if="areAllVisited">You have visited all the States and the District of Columbia!</p>
    </div>
    
</template>

<script>


export default {
    name: 'StateSummary',
    props:{
        states: Array
    },
    computed: {// will use the props from statlist to count how many are checked.
        totalVisited() {// counter is needed
            let visitedCount = 0
            this.states.forEach( state => {
                if (state.visited) {
                    visitedCount++
                }
            })
            return visitedCount
        },
        units() {
            if (this.totalVisited ==1) {
                return 'state'
            } 
            else {
                return 'states'
            }
        },
        areAllVisited() {
            return this.totalVisited === this.states.length //total of all states. truthy
        }

    }
}
</script>

<style scoped>
#all-visited-msg {
    color: cadetblue;
    font-weight: 400;
}
</style>
