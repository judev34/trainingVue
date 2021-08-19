<template>
<div>


    <ul class="liste mt-5">
        <li v-for="(film, index) in myArr" v-bind:key="index">
            <div class="card">
                <div class="card-body">
                    Titre : {{ film.titre }}
                    <br>
                    Date : {{ film.date }}
                </div>
            </div>
        </li>
    </ul>
    <p>{{ txt }}</p>
    <div v-on:click="supprFilm" class="btn btn-danger mt-2">Supprime le film</div>
    <div v-on:click="supprTxt" class="btn btn-success mt-2 ml-2">Supprime le txt</div>
    <div v-on:click="changeTitre" class="btn btn-primary mt-2 ml-2">Modifie le titre</div>

    <slot>Patientez</slot>
    <slot name="info"></slot>
</div>
</template>

<script>

    import {bus} from '../../main'

export default {
    name: 'Liste',
    data(){
        return {
            fruits: ['Orange', 'Papaye', 'Fraise']
        }
    },
    methods: {
        supprFilm: function() {
            this.myArr.pop()
        },
        supprTxt: function() {
            this.txt = ''
        },
        changeTitre: function(){
            // this.$emit('changeTitre', 'Mon nouveau titre') // emettre un evenement
            bus.$emit('changeTitre', 'Titre changé avec le bus!')
        }
    },
    props: ['myArr', 'txt'],
}

</script>

<style scoped src="./liste.css"></style>