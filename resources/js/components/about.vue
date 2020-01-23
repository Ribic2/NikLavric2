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
    }
    @media only screen and (max-width: 575px){
        .textHolder{
           width: 100%;
           float: none !important;
        }
        .imageHolder{
            float: none !important;
            width: 100%;
            margin-top: 3vw;
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
    }
    @media only screen and (min-width: 576px) and (max-width: 767px){
        .textHolder{
            min-height: 100px !important;
            height: auto;
        }
        .imageHolder{
            float: none !important;
            width: 100%;
            margin-top: 3vw;
        }
        #contentArea{
            padding-bottom: 10px;
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
            margin-top: 3vw;
        }
        #contentArea{
            padding-bottom: 10px;
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
        }
        #contentArea{
            padding-bottom: 10px;
        }
    }

    /* Test you can delete after*/

</style>

<template>
    <div class="row" id = "contentArea">
        <div class = "col-xl-6 textHolder" id = "text">
           <div>
            <p>Born in Novo mesto in 1998, Nik Lavrič is a young Slovenian editor and colorist. He studied multimedia production at IAM Ljubljana. His work is primarily short form TV and web advertising content, music videos and short films..</p>
           </div>
        </div>
        <div class = "col-xl-6 imageHolder">
            <div>
                <img src="/storage/200109_Nik_fotka.jpg" id = "profilPicture">
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    name: 'about',
}
</script>
