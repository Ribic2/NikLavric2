<template>
    <div class="row" id = "Projects">
        <div v-if="posnetekData=='Video not found.'" class = "display">
            <h1>{{ posnetekData }}</h1>
        </div>
        <div v-else class = "display">

            <div style="position:relative;padding-top:56.25%;">
                <iframe :src="posnetekData.videoLink" frameborder="0" allowfullscreen
                style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
            </div>
            <h4 id = "videoTitle">{{ posnetekNaslov }}</h4>
            <p id = "videoDescription" v-for="sekcija in posnetekOpis" v-bind:key="sekcija">
                <b class = "title">{{ sekcija.opis }}:</b>{{ sekcija.ime }}
            </p>
        </div>
    </div>
</template>

<style scoped>
    *{
        padding: 0px;
        margin: 0px;
        font-family: 'Open Sans', sans-serif;
    }
    #Projects{
        width: 100%;
        position: relative;
        margin-top: 20px;
        padding-bottom: 50px;
    }
    .display{
        width: 100%;
    }
    #videoHolder{
        min-height: 250px;
        width: 100%;
        height: 30vw;
    }
    #videoTitle{
        padding-top: 10px;
        font-size: 18px;
    }
    #videoDescription{
        margin-top: 10px;
    }
    .title{
        font-weight:600;
    }

    @media only screen and (min-width: 1200px){
        #videoHolder{
            height: 30vw;
            min-height: 300px;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px){
        #videoHolder{
            height: 40vw;
            min-height: 500px;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 991px){
        #videoHolder{
            height: 40vw;
            min-height: 300px;
        }
    }
    @media only screen and (max-width: 575px){
        #videoHolder{
            height: 50vw;
            min-height: 300px;
        }
    }
</style>

<script>
export default {
    data(){
        return{
            posnetekData: '',
            posnetekOpis: [],
            posnetekNaslov: ''
        }
    },
    created:function(){
        var path = window.location.pathname;
        var splitPath = path.split('/')[2];
        var fullPathName = splitPath.split('%20').join(' ');

        axios.get("https://niklavric.com/api/posnetki/"+fullPathName).then((response) => {
            if(response.data != null){
                this.posnetekData = response.data.data[0];
                this.posnetekNaslov = response.data.data[0].naslovPosnetka.toUpperCase();

                var opis = response.data.data[0].opisPosnetka.split(";");
                for(var i = 0; i < opis.length; i++){
                    var split = opis[i].split(":");
                    var data = {opis: split[0], ime: split[1]};

                    this.posnetekOpis.push(data);

                }


            }else{
                this.posnetekData = 'Video not found!';
            }
        });
    }
}
</script>
