<template>
    <div id="block-header">
        <h1 id="title">Have you visited every state?</h1>

    </div>
</template>

<script>


export default {
    name: 'PageHeader'
}

</script>

<style scoped>

#block-header {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    border-radius: .2rem;
    background-color: brown;
    background-image: url('~@/assets/map_img_header.jpg');
    background-position: center;
    background-size: cover;

}
/* Photo by Chris Lawton on Unsplash */

#title {
    font-weight: 500;
    color: gainsboro;
}
</style>