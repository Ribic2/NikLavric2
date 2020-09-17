<template>
    <div class="row" id="Projects">

        <h1>{{ video.videoTitle }}</h1>

        <div id = "test">
            <iframe
                class="col-12"
                :src="video.videoLink"
                frameborder="0"
                allowfullscreen
                id="iframe">
            </iframe>
        </div>

        <div id = "videoDescription" class="col-12" v-for="section in videoDescription" :key="section.index">
            <p><b class = "title">{{ section.title }}</b>:{{ section.text }}</p>
        </div>
    </div>
</template>

<script>
import api from "../../Services/api";

export default {
    data() {
        return {
            video: [],
            videoDescription: []
        }
    },
    methods: {
        getVideo() {
            let path = window.location.pathname;
            let splitPath = path.split('/')[2];
            let fullPathName = splitPath.split('%20').join(' ');

            api.getVideo(fullPathName)
                .then((response) => {
                    this.video = response.data.response

                    console.log(this.video.videoDescription)
                    let split = this.video.videoDescription.split(";");

                    split.forEach((element, index) => {
                        let obj = element.split(":")
                        this.videoDescription.push({title: obj[0], text: obj[1], index: index})
                    })

                });
        }
    },
    mounted() {
        this.getVideo()
    }
}
</script>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
    font-family: 'Open Sans', sans-serif;
}
#videoDescription{
    margin-top: 10px;
}
#Projects {
    width: 100%;
    position: relative;
    margin-top: 20px;
    padding-bottom: 50px;
}

#iframe {
    position:absolute;top:0;left:0;width:100%;height:100%
}

#test{
    position:relative;
    padding-top:56.25%;
}

.title {
    font-weight: 600;
}
</style>

