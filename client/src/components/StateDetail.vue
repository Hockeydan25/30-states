<template>
    <div class="state-info">
        <span class="state-name">{{ state.name }}</span>
        <div>
            <input class="visited-state" type="checkbox" 
            v-model="visited" v-on:change="visitedChanged">
        </div>

        <div>
            <!--/map/Iowa or /map/Gerogia-->
            <router-link v-bind:to=" {name: 'StateMap', params: { state: state.name } }">
                <img class="map-icon" src="@/assets/map_america.png">
            </router-link>
        </div>
    </div>
    
</template>

<script>

//create state detail for stateList to export a state object this script.
//stateDetail parent StateList emit chaeck box changes
export default {
    name: 'StateDetail',
    emits: ['update-visited'],
    props: {
        state: Object   //don't touch/modify props
    },
    data (){
        return {
            visited: this.state.visited//okay to modify data
        }
    },
    methods: {
        visitedChanged() {// method like our event listner from html.
            this.$emit('update-visited', this.state.name, this.visited)
        }
    }

}
</script>

<style scoped>

.state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 1px lightslategrey solid;
    border-radius: .3rem;
    background-color: lightsteelblue;
}
.visited-state {
    margin: 1rem;
    
}
.map-icon {
    width: 2rem;
    height: 2rem;
}

</style>

<!--End of page nothing below here. -->
