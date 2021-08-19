<template>
    <div class="api">
        <h2 class="text-center">Appel à une API</h2>
        <img class="img-fluid" v-bind:src="urlImg" alt="image de chat">
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name : 'Api',
        data(){
            return {
                urlImg: null
            }
        },
        methods: {

        },
        mounted() {
            axios
            .get('https://api.thecatapi.com/v1/images/search')
            .then(reponse => {
                console.log(reponse);
                this.urlImg = reponse.data[0].url
            })
        }   
    }
</script>

<style scoped>
    img {
        width: 100%;
        max-height: 250px !important;
        margin: auto !important;
    }
</style>