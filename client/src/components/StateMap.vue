<template>
    <div class="state-map">
        <h2>The state of {{ state.name }}</h2>

        <P v-if="state.visited">You have visited this state:</P>
        <p v-else >You have not visted this state yet:</p>
        <!--todo map here-->
        <div id="map-container"><!--map center is combining lat lon in a computed method.-->
            <l-map v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
                <l-tile-layer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors">
                        <!-- mine did not copy exact?-->
                </l-tile-layer>
            </l-map>

        </div>
    </div>
</template>

<script>

import { LMap, LTileLayer} from '@vue-leaflet/vue-leaflet'

//created no necassarly a child.
export default {
    name: 'StateMap',
    components: { LMap, LTileLayer },
    data() {
        return {
            state: {},
            dataReady: false,
            mapReady: false
        }
    },
    mounted() {
        this.state.name = this.$route.params.state
        this.fetchStateData()
    },
    methods: {
        fetchStateData() {    //one argument
            this.$stateService.getOneState(this.state.name).then( state => {
                this.state = state //over write
                this.dataReady = true //now we can load state
            })
        },
        onMapReady() {
            this.mapReady = true //l-map emits an event call, ready called.
        },
        setMapView() {
            if (this.mapReady && this.dataReady){
                //todo -make sure map shows correct part of the world.
            }
        }
    },
    computed: {
        mapCenter() {
            return [ this.state.lat, this.state.lon ]
        }
    }

    
}

</script>

<style scoped>

#map-container {
    height: 30rem;
    
}
</style>
