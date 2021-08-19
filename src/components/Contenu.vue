<template>
    <div class="container mt-5">

        <h1 class="text-center">{{ titre }}</h1>



        <div class="mb-3 mt-3 text-center">
            <div class="btn btn-outline-primary mr-2" v-on:click="toggleOng1">Onglet 1</div>
            <!-- <div class="btn btn-outline-primary mr-2" v-on:click="component = 'texte1'">Onglet 1</div> -->
            <!-- <div class="btn btn-outline-primary mr-2" v-on:click="component = 'texte2'">Onglet 2</div> -->
            <div class="btn btn-outline-primary mr-2" v-on:click="toggleOng2">Onglet 2</div>
            <div class="btn btn-outline-primary mr-2" v-on:click="toggleApi">API</div>
        </div>

        <div class="onglets card mb-5" >
            <texte1 class="p-5" v-if="toggle1"></texte1>
            <texte2 class="p-5" v-if="toggle2"></texte2>
            <api v-if="toApi"></api>
            <!-- <component class="p-5" v-bind:is="component"></component> -->
        </div>


        <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
        <button class="btn btn-success mt-2" v-on:click="toggleModale">Ouvre la modale</button>
        
        <div class="mt-5">
            <h2>Mon formulaire</h2>
            <form action="">
                <div class="form-group">
                    <label for="prenom">Prénom</label>
                    <input v-on:input="toggleResult" v-model="formData.prenom" type="text" id="prenom" class="form-control">
                </div>
                <div class="form-group">
                    <label for="text">Le texte</label>
                    <textarea v-on:input="toggleResult" v-model="formData.txt" class="form-control" id="txt"></textarea>
                </div>

                <h3 class="mt-3">Selectbox</h3>
                <select v-model="formData.select">
                    <option v-on:input="toggleResult" v-bind:key="index" v-for="(pays, index) in formData.listePays">{{ pays }}</option>
                </select>

                <h3 class="mt-3">Checkboxs</h3>
                <div class="form-check">
                    <input v-on:input="toggleResult" v-model="formData.checkFruits" type="checkbox" value="fraise" id="fraise" class="form-check-input">
                    <label for="fraise">Fraise</label>
                </div>
                <div class="form-check">
                    <input v-on:input="toggleResult" v-model="formData.checkFruits" type="checkbox" value="pomme" id="pomme" class="form-check-input">
                    <label for="pomme">Pomme</label>
                </div>
                <div class="form-check">
                    <input v-on:input="toggleResult" v-model="formData.checkFruits" type="checkbox" value="cerise" id="cerise" class="form-check-input">
                    <label for="cerise">Cerise</label>
                </div>

                <button v-on:click.prevent="envoiForm" class="btn btn-primary mt-3">Envoyer les données</button>
            </form>

            <div class="mt-3" v-if="infoSubmit">
                <h3>Résultats</h3>
                <div class="card p-3">
                    <p>Prenom : {{ formData.prenom }} </p>
                    <p style="white-space: pre">Texte : {{ formData.txt }} </p>

                    <p>Résultat checkbox</p>
                    <ul>
                        <li v-bind:key="index" v-for="(fruit, index) in formData.checkFruits">{{ fruit }}</li>
                    </ul>

                    <p>Choix du select : {{ formData.select }}</p>
                </div>
            </div>
        </div>

        <h3 class="mt-3">To-do list</h3>

        <form class="form-group" action="">
            <div class="form-group">
                <label for="action">Action</label>
                <input v-model="formDataTodo.tache" type="text" id="action" class="form-control">
            </div>

            <button v-on:click.prevent="creationItem" class="btn btn-primary">Créer une tache</button>

        </form>

        <ul>
            <li v-bind:key="index" v-for="(tache, index) in tableauTaches">
                <item v-bind:id="index" v-bind:tache="tache" v-bind:suppression="suppression"></item>
            </li>
        </ul>

    </div>
</template>

<script>

    import Texte1 from './Texte1'
    import Texte2 from './Texte2'
    import Modale from './Modale'
    import Api from './Api'
    import Item from './Item'

    export default {
        name: 'Contenu',
        data() {
            return {
                titre: 'Je suis le titre',
                toggle1: true,   
                toggle2: false ,
                component: 'texte1',
                revele: false,
                toApi: false,
                formData: {
                    prenom: '',
                    txt: '',
                    checkFruits: [],
                    select: '',
                    listePays: ['Russie', 'Japon', 'Canada', 'Mexique']
                },
                infoSubmit: false,
                formDataTodo: {
                    tache: '',
                },
                tableauTaches: ['Javascript', 'Vue', 'Python', 'React']
            }
        },
        methods: {
            toggleOng1: function() {
                this.toggle1 = true,
                this.toggle2 = false,
                this.toApi = false
            },
            toggleOng2: function() {
                this.toggle1 = false,
                this.toApi = false,
                this.toggle2 = true
            },
            toggleModale: function() {
                this.revele = !this.revele;
            },
            toggleApi: function(){
                this.toApi = true,
                this.toggle1 = false,
                this.toggle2 = false
            },
            envoiForm: function() {
                this.infoSubmit = true;
            },
            toggleResult: function(){
                this.infoSubmit = false;
            },
            creationItem: function(){
                this.tableauTaches.push(this.formDataTodo.tache)
                this.formDataTodo.tache = ''
            },
            suppression: function(e){
                // console.log(e.target.parentNode.id);
                this.tableauTaches.splice(e.target.parentNode.id, 1)
            }
        },
        components: {
            'texte1': Texte1,
            'texte2': Texte2,
            'modale' : Modale,
            'api' : Api,
            'item': Item
        }    
    }

</script>


<style>

    h1{
        margin-top: 100px !important;
    }

    .onglets{
        height: 300px;
    }

    ul{
        list-style: none;
        padding: 0;
    }


</style>