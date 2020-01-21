<style scoped>
    *{
        margin: 0px;
        padding: 0px;
        font-family: 'Open Sans', sans-serif;
    }
    .Projekt{
        height: 400px;
        padding-top: 10px;
    }
    .Projekt:hover{
        cursor: pointer;
    }
    #Projects{
        width: 100%;
        position: relative;
        margin-top: 10px;
        padding-bottom: 50px;
    }
    .projectVideo{
        width: 97.5%;
        height: 100%;
        position: relative;
    }
    .thumbNailText{
        height: 10%;
        position: absolute;
        width: 100%;
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        bottom: 50%;
        color: white;
        transition: 0.1s;
        display: none;
        text-shadow: 0px 8px 9px black;
    }
    .thumbnail{
        height: 100%;
        width: 100%;
    }
    @media only screen and (min-width: 1200px){
        .thumbnail{
            min-height: 360px;
        }
        .Projekt{
            height: auto;
        }
    }
    @media only screen and (max-width: 1140px){
        .Projekt{
            height: auto;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px){
        .thumbnail{
            height: 30vw;
            min-height: 453px;
        }
        .Projekt{
            height: auto;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 991px){
        .thumbnail{
            height: 30vw;
            min-height: 336px
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 767px){
        .thumbnail{
            min-height: 450px;
            height: 55vw;
        }
    }
    @media only screen and (max-width: 575px){
        .thumbnail{
            min-height: 250px;
            height: 85vw;
        }
    }

</style>
<template>
    <div class="row" id = "Projects">
        <h1></h1>
        <div class = "col-xl-4 col-md-6 Projekt" v-for="projekt in posnetkiData" v-bind:key="projekt.idPosnetki">

            <div class = "projectVideo">
                <img class = "thumbnail" v-bind:src = "'/storage/' + projekt.thumbnail" @mouseover="DisplayText(projekt.idPosnetki)" @mouseleave="HiddeText(projekt.idPosnetki)" v-on:click="redirect(projekt.idPosnetki)">
                <h3 class = "thumbNailText" v-on:click="redirect(projekt.idPosnetki)">{{ projekt.naslovPosnetka }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                posnetkiData: ''
            }
        },
        methods:{
            DisplayText: function(e){
                var image = document.getElementsByClassName('thumbnail')[e-1];
                var thumbnailText = document.getElementsByClassName('thumbNailText')[e-1];

                image.style.filter = "grayscale(100%)";
                thumbnailText.style.display = "block";
            },
            HiddeText: function(e){
                var image = document.getElementsByClassName('thumbnail')[e-1];
                var thumbnailText = document.getElementsByClassName('thumbNailText')[e-1];

                image.style.filter = "grayscale(0%)";
                thumbnailText.style.display = "none";
            },
            redirect: function(e){
                window.location.href = "/posnetek/"+e;
            }
        },
        created: function(){
            axios.get("http://127.0.0.1:8000/api/posnetki").then((response) => {
                this.posnetkiData = response.data;
            });
        }
    }

</script>
