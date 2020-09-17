<template>
    <div class="page-container">
        <md-app md-mode="reveal">
            <md-app-toolbar class="md-primary header">
                <span class="md-title">Urejanje posnetkov</span>
            </md-app-toolbar>
        </md-app>
        <md-content>
            <form v-if="showAddSection == true">
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
                    <md-button class="md-raised md-primary" id = "addButton" @click="addData()">DODAJ</md-button>
                    <button @click="changeValueShow()" class = "changeButtonShow">SKRIJ</button>
                </div>
            </form>
            <div v-else-if="showAddSection == false">
                <button @click="changeValueShow()" class = "changeButtonShow">SKRIJ</button>
            </div>
            <hr>
            <draggable ghost-class="ghost" @end="onEnd">
                <transition-group type = "transition" name="flip-list">
                    <div class = "sortable" v-for="posnetek in posnetkiData" :key="posnetek.idPosnetki">
                        <p class = "id">Id: {{ posnetek.idPosnetki }}</p>
                        <form method="POST">
                            <input type="text" placeholder="Naslov posnetka" :value="posnetek.naslovPosnetka" class = "naslovPosnetka changeInputField">
                            <input type="text" placeholder="Video link" :value="posnetek.videoLink" class = "videoLink changeInputField">
                            <input type="text" placeholder="Naslov posnetka api" :value="posnetek.naslovPosnetkaApi" class = "naslovPosnetkaApi changeInputField">
                            <textarea placeholder="Opis posnetka" :value="posnetek.opisPosnetka" class = "opisPosnetka changeTextArea" rows = "8"></textarea>
                        </form>
                        <button @click = "deleteData(posnetek.id)" class = "deleteButton button">Delete</button>
                        <button @click = "changeData(posnetek.id)" class = "changeButton button">Spremeni</button>
                    </div>
                </transition-group>
            </draggable>
        </md-content>

        <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
            <p id = "errorDisplay">{{ filterErrorMessage }}</p>
        </md-snackbar>

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
    .md-field{
        margin: 5px;
    }
    .changeButtonShow{
        width: 100%;
        height: 50px;
        margin: 5px;
        background-color: #448aff;
        color: white;
        border: solid 1px #448aff;
    }
    .md-primary{
        overflow: hidden;
    }
    #addButton{
        width: 100%;
        margin: 5px;
        height: 50px;
    }
    .input{
        position: relative;
        top: 15px;
    }
    #errorDisplay{
        text-align: center;
        width: 100%;
        height: 100%;
    }
    /*Change, edit, delete part */
    .sortable{
        width: 100%;
        min-height: 100px;
        height: auto;
        margin: 5px;
        margin-top: 10px;
        border-radius: 2px;
        background-color: #f2f2f2;
        border: solid 1px #cccccc;
    }
    .sortable:hover{
        cursor: move;
        box-shadow: 10px 10px 10px gray;
    }
    .changeButton{
        background-color: green;
        border: solid 1px green;
    }
    .deleteButton{
        background-color: red;
        border: solid 1px red;
    }
    .button{
        color: white;
        margin: 5px;
        height: 50px;
        width: 200px;
    }
    .changeInputField{
        margin: 5px;
        width: 32.3%;
        height: 50px;
    }
    .changeTextArea{
        resize: none !important;
        position: relative;
        width: 99%;
        margin: 5px;
        display: block;
    }
    .id{
        margin: 5px;
    }
    /*Responsive section */
    @media only screen and (max-width: 767px){
        .header{
            height: 64px;
        }
        .changeInputField, .changeTextArea{
            display: block;
            width: 98%;
        }
    }
    @media only screen and (min-width: 600px) and (max-width: 960px){
        .header{
            height: 64px;
        }
        .changeInputField, .changeTextArea{
            display: block;
            width: 98%;
        }
    }
</style>

<script>
    import draggable from 'vuedraggable'

    export default {
        components:{
            draggable
        },
        data(){
            return{
                posnetkiData: '',
                naslovPosnetka: '',
                opisPosnetka: '',
                videoLink: '',
                thumbnail: '',
                apiNaslovPosnetka: '',
                thumbnailName: '',
                filterErrorMessage: '',
                //Snackbar
                showSnackbar: false,
                position: 'center',
                duration: 4000,
                isInfinity: false,
                //Add new record settings
                showAddSection: false
            }
        },
        //When page is loaded it calls to API and stores returned data into global variable
        created: function(){
            axios.get("/api/posnetki").then((response) => {
                this.posnetkiData = response.data.data;
            })
            .then(()=>{
                for(var i = 0; i < Object.keys(this.posnetkiData).length; i++){
                   this.posnetkiData[i].id = i;
                   this.showArray.push(true);
                }

            });
        },
        methods:{
            //Filters all the data if its correct
            checkData(){
                //Variables that check if data that was submited is correct before sending it to database

                if(this.naslovPosnetka == "" || this.videoLink == "" || this.thumbnailName == "" || this.thumbnail == null || this.opisPosnetka == "" || this.apiNaslovPosnetka == ""){
                    this.showSnackbar = true
                    this.filterErrorMessage = "Some fields are empty.";
                    return false;
                }

                var checkVideoLink = false;
                var checkImageName = false;

                //Checks apiNaslovPosnetka is correct, if it have '-' insted of spaces
                //If not then it splits it and joins it on '-'
                var split = this.apiNaslovPosnetka.split(' ');
                var splitJoin = split.join('-');
                this.apiNaslovPosnetka = splitJoin.toLowerCase()

                //Check if provided video link is valid
                if(this.videoLink.includes("embed"))
                {
                    var checkVideoLink = true;
                }

                //Checks if image name contains extenstion
                if(!this.thumbnailName.includes(".")){
                    checkImageName = true;
                }

                if(checkVideoLink && checkVideoLink){
                    return true;
                }
                this.showSnackbar = true
                this.filterErrorMessage = "Some of the given data is not correct.";
                return false;
            },
            //Adds news record to database
            addData(){

                //Gets image file
                let thumbnail = document.getElementById('thumbnail').files[0];
                let data = new FormData();

                //Sets header to multipart/form-data so it can send files
                let settings = { headers: { 'Content-type': 'multipart/form-data' } };

                //if function 'checkData()' return true program procedes with axioes request
                if(this.checkData()){
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
                    }).then(()=>{
                        for(var i = 0; i < (Object.keys(this.posnetkiData).length); i++){
                            this.posnetkiData[i].id = i
                        }
                    })
                    .then(()=>{
                        this.naslovPosnetka =  ''
                        this.opisPosnetka = ''
                        this.videoLink = ''
                        this.thumbnail = ''
                        this.apiNaslovPosnetka =''
                        this.thumbnailName = ''
                        this.filterErrorMessage = ''
                    });
                }
            },
            changeValueShow(){
                if(this.showAddSection == true){
                    this.showAddSection = false;
                }else{
                    this.showAddSection = true;
                }
            },
            changeData(e){
                //Data to change
                var naslovPosnetka = document.getElementsByClassName('naslovPosnetka')[e].value;
                var opisPosnetka = document.getElementsByClassName('opisPosnetka')[e].value
                var naslovPosnetkaApi = document.getElementsByClassName('naslovPosnetkaApi')[e].value
                var videoLink = document.getElementsByClassName('videoLink')[e].value
                var id = this.posnetkiData[e].idPosnetki;


                axios.post('https://niklavric.com/admin-panel',
                    {
                        sendByUser: true,
                        type: "changeData",
                        naslovPosnetka: naslovPosnetka,
                        opisPosnetka: opisPosnetka,
                        naslovPosnetkaApi: naslovPosnetkaApi,
                        id: id
                    }
                )
                .then(response => {
                    this.posnetkiData = response.data.data;
                }).then(()=>{
                    for(var i = 0; i < (Object.keys(this.posnetkiData).length); i++){
                        this.posnetkiData[i].id = i
                    }
                })
            },

            //This function changes the order of elements
            onEnd: function(evt){

                var oldIndex = evt.oldIndex
                var newIndex = evt.newIndex

                var indexOfElementsArray = []
                var zaporedjeArray = []

                //Appends order of ids, if order is not the same as order of moved id
                for(var i = 0; i < Object.keys(this.posnetkiData).length; i++){
                    if(this.posnetkiData[i].zaporedje != this.posnetkiData[newIndex].zaporedje){
                        zaporedjeArray.push(parseInt(this.posnetkiData[i].zaporedje))
                    }
                }

                //Checks all of ids and appends those who are not the same as the selected one
                for(var i = 0; i <Object.keys(this.posnetkiData).length; i++){
                    if(this.posnetkiData[i].idPosnetki != this.posnetkiData[oldIndex].idPosnetki){
                        indexOfElementsArray.push(this.posnetkiData[i].idPosnetki)
                    }
                }
                //Sends data to backend
                axios.post('https://niklavric.com/admin-panel', {
                    sendByUser: true,
                    type: "changeOrder",
                    id:this.posnetkiData[oldIndex].idPosnetki,
                    zaporedjeArray: zaporedjeArray,
                    indexOfElementsArray: indexOfElementsArray,
                    newIndex: newIndex+1
                }).then((response) => {
                    this.posnetkiData = response.data.data
                }).then(()=>{
                    for(var i = 0; i < (Object.keys(this.posnetkiData).length); i++){
                        this.posnetkiData[i].id = i
                    }
                });
            },
            //Deletes record from the database and reincrements the order
            deleteData(e){

                var idPosnetkovArray = []
                var thumbnailName;

                //Loops through data and appends all id that are not equal to selected one.
                //It also stores thumbnail name to variable and sends everything to database
                for(var i = 0; i < Object.keys(this.posnetkiData).length; i++){
                    if(this.posnetkiData[i].idPosnetki != e+1){
                        idPosnetkovArray.push(this.posnetkiData[i].idPosnetki)
                    }
                    else{
                        thumbnailName = this.posnetkiData[e].thumbnail
                    }
                }

                //Sends data to database
                axios.post('/admin-panel',{
                    sendByUser: true,
                    type: "delete",
                    id:this.posnetkiData[e].idPosnetki,
                    thumbnailName: thumbnailName,
                    idPosnetkov: idPosnetkovArray
                }).then((response) => {
                    this.posnetkiData = response.data.data;
                })
                .then(()=>{
                    for(var i = 0; i < (Object.keys(this.posnetkiData).length); i++){
                        this.posnetkiData[i].id = i
                    }
                })
            }
        }
    }




</script>

