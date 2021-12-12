<template>
    <div class="state-map">
        <h2>The state of {{ state.name }}</h2>

        <P v-if="state.visited">You have visited this state:</P>
        <p v-else >You have not visted this state yet:</p>
        <!--map will load when dataReady  =true-->
        <div id="map-container" v-if="dataReady"><!--map center is combining lat lon in a computed method.-->
            <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
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
            .catch( err => {// 404 not found and 500 server error
                if ( err.response && err.response.status === 404) { //literally is
                    this.state.name = '?' //van be better
                } else {
                    alert('Sorry, error fetching data about this state') //500 generic for user.
                    console.log(err) //for the developer eyes only.
                }
            })
        },
        onMapReady() {
            this.mapReady = true //l-map emits an event call, ready called.
        },
        setMapView() {
            if (this.mapReady && this.dataReady) {
                //-makes sure map shows correct part of the world and zoom level. manual assignments with ref.
                this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom)
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
