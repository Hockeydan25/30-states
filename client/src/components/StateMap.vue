<template>
    <div class="state-map">
        <h2>The state of {{ state.name }}</h2>

        <P v-if="state.visited">You have visited this state:</P>
        <p v-else >You have not visted this state yet</p>
        <!--todo map here-->

    </div>
</template>

<script>

//created no necassarly a child.
export default {
    name: 'StateMap',
    data() {
        return {
            state: {}
        }
    },
    mounted() {
        this.state.name = this.$route.params.state
    }
    
}

</script>

<style scoped>

</style>
