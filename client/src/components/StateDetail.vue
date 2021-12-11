<template>
    <div class="state-info">
        
        <span class="state-name">{{ state.name }}</span>
        <div>
            <input class="visited-state" type="checkbox" name="" id="">
        </div>

    </div>
    
</template>

<script>

//create state detail for stateList to export a state object this script.
export default {
    name: 'StateDetail',
    props: {
        state: Object
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

</style>

<!--End of page nothing below here. -->
