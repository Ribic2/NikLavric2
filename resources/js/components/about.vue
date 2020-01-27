<style scoped>
    *{
        padding: 0px;
        margin: 0px;
    }
    #contentArea{
        width: 100%;
        margin-top: 10px;
        padding-top: 10px;
    }
    .textHolder{
        width: 90%;
        min-height: 200px;
        height: auto;
        float: left;
    }
    .imageHolder{
        width: 90%;
        min-height: 500px;
        height: auto;
        float: right;
    }
    #profilPicture{
        height: 100%;
        width: 100%;
        animation: 0.7s ease-out  fadeOut;
    }
    #textHolder{
        width: 95%;
    }
    @keyframes fadeOut {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @media only screen and (max-width: 575px){
        .textHolder{
           width: 100%;
           float: none !important;
        }
        .imageHolder{
            float: none !important;
            width: 100%;
            margin-top: 2%;
        }
        #contentArea{
            padding-bottom: 10px;
        }
        #profilPicture{
            position: relative;
        }
        .textHolder{
            min-height: 100px !important;
            height: auto;
        }
        #textHolder{
            width: 100%;
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 767px){
        .textHolder{
            min-height: 100px !important;
            height: auto;
        }
        .imageHolder{
            float: none !important;
            width: 100%;
            margin-top: 2%;
        }
        #contentArea{
            padding-bottom: 10px;
        }
        #textHolder{
            width: 100%;
        }

    }
    @media only screen and (min-width: 768px) and (max-width: 911px){
        .textHolder{
            min-height: 100px !important;
            height: auto;
        }
        .imageHolder{
            float: none !important;
            width: 100%;
            margin-top: 2%;
        }
        #contentArea{
            padding-bottom: 10px;
        }
        #textHolder{
            width: 100%;
        }
    }
     @media only screen and (min-width: 912px) and (max-width: 1199px){
        .textHolder{
            min-height: 100px !important;
            height: auto;
        }
        .imageHolder{
            float: none !important;
            width: 100%;
            margin-top: 1%;
        }
        #contentArea{
            padding-bottom: 10px;
        }
        #textHolder{
            width: 100%;
        }
    }

    /* Test you can delete after*/

</style>

<template>
    <div class="row" id = "contentArea">
        <div class = "col-xl-6 textHolder">
           <div id = "textHolder">
            <p>Born in Novo mesto in 1998, Nik Lavrič is a young Slovenian editor and colorist. He studied multimedia production at IAM Ljubljana. <br><br>His work is primarily short form TV and web advertising content, music videos and short films.</p>
           </div>
        </div>
        <div class = "col-xl-6 imageHolder">
            <div>
                <img src="https://niklavric.com//storage/200109_Nik_fotka.jpg" id = "profilPicture">
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    name: 'about',
}
</script>
