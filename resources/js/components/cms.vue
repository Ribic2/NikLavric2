<template>
    <div class="page-container">
        <md-app md-mode="reveal">
            <md-app-toolbar class="md-primary header">
                <span class="md-title">Urejanje posnetkov</span>
            </md-app-toolbar>
        </md-app>
        <md-content>
            <form action="" enctype="multipart/form-data" method="POST">
                <div>
                    <md-field class = "md-field">
                        <label>Naslov posnetka</label>
                        <md-input class = "input" v-model="naslovPosnetka"></md-input>
                    </md-field>

                    <md-field class = "md-field">
                        <label>Video link</label>
                        <md-input class = "input" v-model="videoLink"></md-input>
                    </md-field>

                    <md-field class = "md-field">
                        <label>Ime slike</label>
                        <md-input class = "input" v-model="thumbnailName"/>
                    </md-field>

                    <md-field class = "md-field">
                        <label>Slika</label>
                        <md-file class = "input" id = "thumbnail"/>
                    </md-field>

                    <md-field class = "md-field">
                        <label>Naslov posnetka API</label>
                        <md-input class = "input" v-model="apiNaslovPosnetka"></md-input>
                    </md-field>

                    <md-field class = "md-field">
                        <label>Opis posnetka</label>
                        <md-textarea  class = "input" id = "opisPosnetka" v-model="opisPosnetka"></md-textarea>
                    </md-field>
                    <md-button class="md-raised md-primary" id = "addButton" @click="addData()">Dodaj</md-button>
                </div>
            </form>
            <hr>
            <li class="list-group-item sortable" v-for="posnetek in posnetkiData" :key="posnetek.idPosnetki">
                <form enctype="multipart/form-data" method="POST">
                    <div class="blockHolder">
                        <p class = "idPosnetki element" :value = "posnetek.idPosnetki">Id {{ posnetek.idPosnetki }}</p>
                    </div>

                    <div class="blockHolder">
                        <label>Zaporedje</label>
                        <input type="text" :value = "posnetek.zaporedje" class = "zaporedje element">
                    </div>

                    <div class="blockHolder">
                        <label>Naslov posnetka</label>
                        <input type="text" :value = "posnetek.naslovPosnetka" class = "naslovProjekta element">
                    </div>

                    <div class="blockHolder">
                        <label>Link video posnetka</label>
                        <input type="text" :value = "posnetek.videoLink" class = "videoLink element">
                    </div>

                    <div class="blockHolder">
                        <label>Ime slike</label>
                        <input type="text" :value = "posnetek.thumbnail" class = "thumbnail element">
                    </div>

                    <div class="blockHolder">
                        <label>Naslov posnetka API</label>
                        <input type="text" :value = "posnetek.naslovPosnetkaApi" class = "naslovPosnetkaApi element">
                    </div>


                    <textarea :value="posnetek.opisPosnetka" class = "opisPosnetka element"></textarea>
                </form>
            	<button @click = "changeData(posnetek.id)" class = "changeButton">Spremeni</button>
                <button @click = "deleteData(posnetek.idPosnetki)" class = "deleteButton">Izbriši</button>
            </li>
        </md-content>
    </div>
</template>

<style scoped>
    *{
        padding: 0px;
        margin: 0px;
        font-family: 'Open Sans', sans-serif;
    }
    .page-container {
        min-height: 300px;
        overflow: hidden;
        position: relative;
        border: 1px solid rgba(#000, .12);
    }
    #opisPosnetka{
        height: 250px;
    }
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
    .md-content {
        padding: 16px;
    }
    .md-field{
        margin: 5px;
    }
    .md-primary{
        overflow: hidden;
    }
    #addButton{
        width: 100%;
        margin: 5px;
        height: 50px;
    }
    .modify{
        height: 40px;
        width: 100%;
        position: relative;
        bottom: 50px;
    }
    .sortable{
        width: 100%;
    }
    .input{
        margin-top: 20px;
        resize: none;
    }
    li{
        min-height: 50px;
        height: auto;
        margin-top: 10px;
    }
    .list-group-item:hover{
        transition: 0.5s;
        box-shadow: 0px 5px 10px rgba(0, 0, 1, 0.5);
    }
    /* Elements of every li element */
    .element{
        display: inline;
        margin: 5px;
    }
    .deleteButton{
        background-color: red;
        border: solid 1px red;
    }
    .changeButton{
        background-color: green;
        border: solid 1px green;
    }
    .changeButton, .deleteButton{
        margin: 5px;
        color: white;
        min-width: 100px;
        max-width: 200px;
        width: auto;
        height: 40px;
    }
    .changeButton:active, .deleteButton:active{
        opacity: 0.5;
        transition: 0.5s;
    }
    textarea{
        width: 99%;
        min-height: 150px;
        height: auto;
        resize: none;
        margin-top: 5px;
        display: block !important;
    }
    .changeFileUpload{
        width: 90%;
        position: relative;
        top: 15px;
    }
    .changeFileUploadHolder{
        width: 99%;
    }
    .blockHolder{
        display: inline;
    }

    /*Responsive section */
    @media only screen and (max-width: 575px){
        .blockHolder{
            display: block;
        }
        .element{
            width: 90%;
        }
        .header{
            height: 64px;
        }
    }
    @media only screen and (min-width: 600px) and (max-width: 960px){
        .header{
            height: 64px;
        }
    }
</style>

<script>
    export default{
        data(){
            return{
                posnetkiData: '',
                naslovPosnetka: '',
                opisPosnetka: '',
                videoLink: '',
                thumbnail: '',
                apiNaslovPosnetka: '',
                thumbnailName: '',
                oldIndex: '',
                newIndex: '',
            }
        },
        created: function(){
            axios.get("https://niklavric.com/posnetki").then((response) => {
                this.posnetkiData = response.data.data;
            })
            .then(()=>{
               for(var i = 0; i < Object.keys(this.posnetkiData).length; i++){
                   this.posnetkiData[i].id = i;
               }
            });
        },
        methods:{
            addData(){
                //Add data to database
                let thumbnail = document.getElementById('thumbnail').files[0];
                let data = new FormData();
                let settings = { headers: { 'Content-type': 'multipart/form-data' } };

                data.append('image', thumbnail);
                data.append('sendByUser', true);
                data.append('type', 'add');
                data.append('imageName', this.thumbnailName);
                data.append('naslovPosnetka', this.naslovPosnetka);
                data.append('opisPosnetka', this.opisPosnetka);
                data.append('videoLink', this.videoLink);
                data.append('apiNaslovPosnetka', this.apiNaslovPosnetka);
                data.append('zaporedje', Object.keys(this.posnetkiData).length+1);

                axios.post('https://niklavric.com/admin-panel', data, settings)
                .then(response => {
                    this.posnetkiData = response.data.data;
                });
            },
            //Changes data
            changeData(e){
                //Data of inputs

                var indexOfElementsArray = [];
                var zaporedjeArray = [];

                var naslovProjekta = document.getElementsByClassName('naslovProjekta')
                var idPosnetki = document.getElementsByClassName('idPosnetki')
                var opisProjekta = document.getElementsByClassName('opisPosnetka')
                var videoLink = document.getElementsByClassName('videoLink')
                var thumbnail = document.getElementsByClassName('thumbnail')
                var zaporedje = document.getElementsByClassName('zaporedje')
                var naslovPosnetkaApi = document.getElementsByClassName('naslovPosnetkaApi')
                //New image code

                //Validates the user data


                    //Pregleduje zaporedja
                    for(var i = 0; i <Object.keys(this.posnetkiData).length; i++){
                        if(this.posnetkiData[i].zaporedje != zaporedje[e].value){
                           zaporedjeArray.push(this.posnetkiData[i].zaporedje)
                        }
                        else{
                            console.log("Zaporedje: ",this.posnetkiData[i].zaporedje)
                        }
                    }

                    //Pregleduje idje
                    for(var i = 0; i <Object.keys(this.posnetkiData).length; i++){
                        if(this.posnetkiData[i].idPosnetki != this.posnetkiData[e].idPosnetki){
                           indexOfElementsArray.push(this.posnetkiData[i].idPosnetki)
                        }
                    }

                    axios.post('https://niklavric.com/admin-panel', {
                        sendByUser: true,
                        type: "change",
                        id: this.posnetkiData[e].idPosnetki,
                        naslovPosnetka: naslovProjekta[e].value,
                        opisPosnetka: opisProjekta[e].value,
                        videoLink: videoLink[e].value ,
                        thumbnail: thumbnail[e].value,
                        naslovPosnetkaApi: naslovPosnetkaApi[e].value,
                        oldThumbnail: this.posnetkiData[e].thumbnail,

                        zaporedjeArray: zaporedjeArray,
                        indexOfElementsArray: indexOfElementsArray,
                        newIndex: zaporedje[e].value
                    }).then((response) => {
                        this.posnetkiData = response.data.data;
                    }).then(()=>{
                        for(var i = 0; i < (Object.keys(this.posnetkiData).length); i++){
                            this.posnetkiData[i].id = i
                        }
                    });



            },
            //Deletes data from database
            deleteData(e){
                var idPosnetkov = []
                var thumbnailName;

                for(var i = 0; i < Object.keys(this.posnetkiData).length; i++){
                    if(this.posnetkiData[i].idPosnetki != e){
                        idPosnetkov.push(this.posnetkiData[i].idPosnetki)
                    }
                    else{
                        thumbnailName = this.posnetkiData[i].thumbnail
                    }
                }




                axios.post('https://niklavric.com/admin-panel',{
                    id:e,
                    sendByUser: true,
                    type: "delete",
                    imageName: thumbnailName,
                    idPosnetkov: idPosnetkov
                }).then((response) => {
                    this.posnetkiData = response.data.data;
                })
                .then(()=>{
                    for(var i = 0; i < (Object.keys(this.posnetkiData).length); i++){
                        this.posnetkiData[i].id = i
                    }
                });
            }
        }
    }




</script>

