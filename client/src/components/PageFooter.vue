<template>
    <div>
        <div id="navigation-links">
            
            <span class="nav-link">    
                <!--<router-link to="/">Home</router-link>-->
                <router-link v-bind:to="{ name: 'StateList' }">Home</router-link>
            </span>

            <span class="nav-link">
                <!-- Router-links can use absolute paths, as strings -->
                <router-link v-bind:to="{ name: 'AboutSite' }">About this site</router-link>
            </span>

        </div>
            <p>Header image by 
                <a href="https://unsplash.com/photos/KpBXAOs80YI">Photo by @ChrisLawton on Unsplash></a>
            </p>
        
            <p><a target="_blank" href="https://icons8.com/icon/3Tfh1tGyWiEj/america">Map icon</a> 
                icon by <a target="_blank" href="https://icons8.com">Icons8</a>            
            </p>
    </div>
</template>

<script>

//dont' need to import anything for the footer no child components.

export default {
    name: 'PageFooter'
}
</script>

<style scoped>
/* rem units scale well on different size pages. Spacing for the two span links our pages */
.nav-link{

    margin: 1rem;

}

</style>
