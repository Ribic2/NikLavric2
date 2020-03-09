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
        overflow: auto;
        margin-top: 10px;
        padding-bottom: 50px;
    }
    .projectVideo{
        width: 97.5%;
        height: 100%;
        margin: 0 auto;
        position: relative;
    }
    .thumbNailText{
        height: 100%;
        width: 80%;
        position: absolute;
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        bottom: 0%;
        left: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        transition: 0.1s;
        opacity: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        text-shadow: 0px 8px 9px black;
    }
    .thumbnail{
        height: 100%;
        width: 100%;
        animation: 0.7s ease-out  fadeOut;
        margin: 0 auto;
    }
    @keyframes fadeOut {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
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
        <div class = "col-xl-4 col-md-6 Projekt" v-for="projekt in posnetkiData" v-bind:key="projekt.idPosnetki">
            <div class = "projectVideo">
                <img class = "thumbnail" v-bind:src = "'/storage/' + projekt.thumbnail" @mouseover="DisplayText(projekt.id)" @mouseleave="HiddeText(projekt.id)" v-on:click="redirect(projekt.naslovPosnetkaApi)">
                <h3 class = "thumbNailText" v-on:click="redirect(projekt.naslovPosnetkaApi)" @mouseover="DisplayText(projekt.id)" @mouseleave="HiddeText(projekt.id)">{{ projekt.naslovPosnetka.toUpperCase() }}</h3>
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
                var image = document.getElementsByClassName('thumbnail')[e];
                var thumbnailText = document.getElementsByClassName('thumbNailText')[e];

                image.style.filter = "grayscale(100%)";
                thumbnailText.style.opacity = "1";
            },
            HiddeText: function(e){
                var image = document.getElementsByClassName('thumbnail')[e];
                var thumbnailText = document.getElementsByClassName('thumbNailText')[e];

                image.style.filter = "grayscale(0%)";
                thumbnailText.style.opacity = "0";
            },
            redirect: function(e){
                window.location.href = "/work/"+e;
            }
        },
        created: function(){
            axios.get("https://niklavric.com/api/posnetki").then((response) => {
                this.posnetkiData = response.data.data;
            })
            .then(()=>{
                for(var i = 0; i < (Object.keys(this.posnetkiData).length); i++){
                    this.posnetkiData[i].id = i
                }
            });
        }
    }

    window.onload = function(){
        var image = document.getElementsByClassName('thumbnail');
        var thumbnailText = document.getElementsByClassName('thumbNailText')

        for(var i = 0; i < image.length; i++){
            image[i].classList.remove('fade');
        }
    }

</script>
