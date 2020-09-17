<template>
    <div class="row"
         id="Projects">
        <div
            class="col-xl-4 col-md-6 Projekt"
            v-for="video in videos" v-bind:key="video.id">
            <div class="projectVideo">
                <img
                    class="thumbnail"
                    v-bind:src="'/storage/' + video.videoThumbnail"
                     @mouseover="DisplayText(video.id)"
                     @mouseleave="HiddeText(video.id)"
                     v-on:click="redirect(video.videoApiTitle)">
                <h3
                    class="thumbNailText"
                    @click="redirect(video.videoApiTitle)"
                    @mouseover="DisplayText(video.id)"
                    @mouseleave="HiddeText(video.id)">
                    {{ video.videoTitle.toUpperCase() }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../Services/api'

export default {
    data() {
        return {
            videos: []
        }
    },
    methods: {
        // Gets all videos from database
        getVideos() {
            api.getVideos()
                .then((response) => {
                    this.videos = response.data.response
                })
        },
        DisplayText: function (e) {
            var image = document.getElementsByClassName('thumbnail')[e-1];
            var thumbnailText = document.getElementsByClassName('thumbNailText')[e-1];

            image.style.filter = "grayscale(100%)";
            thumbnailText.style.opacity = "1";
        },
        HiddeText: function (e) {
            var image = document.getElementsByClassName('thumbnail')[e-1];
            var thumbnailText = document.getElementsByClassName('thumbNailText')[e-1];

            image.style.filter = "grayscale(0%)";
            thumbnailText.style.opacity = "0";
        },
        redirect: function (e) {
            window.location.href = "/work/" + e;
        }
    },
    mounted() {
        this.getVideos()
    }
}

window.onload = function () {
    var image = document.getElementsByClassName('thumbnail');
    var thumbnailText = document.getElementsByClassName('thumbNailText')

    for (var i = 0; i < image.length; i++) {
        image[i].classList.remove('fade');
    }
}

</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
    font-family: 'Open Sans', sans-serif;
}

.Projekt {
    height: 400px;
    padding-top: 10px;
}

.Projekt:hover {
    cursor: pointer;
}

#Projects {
    width: 100%;
    position: relative;
    overflow: auto;
    margin-top: 10px;
    padding-bottom: 50px;
}

.projectVideo {
    width: 97.5%;
    height: 100%;
    margin: 0 auto;
    position: relative;
}

.thumbNailText {
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

.thumbnail {
    height: 100%;
    width: 100%;
    animation: 0.7s ease-out fadeOut;
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

@media only screen and (min-width: 1200px) {
    .thumbnail {
        min-height: 360px;
    }

    .Projekt {
        height: auto;
    }
}

@media only screen and (max-width: 1140px) {
    .Projekt {
        height: auto;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .thumbnail {
        height: 30vw;
        min-height: 453px;
    }

    .Projekt {
        height: auto;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .thumbnail {
        height: 30vw;
        min-height: 336px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .thumbnail {
        min-height: 450px;
        height: 55vw;
    }
}

@media only screen and (max-width: 575px) {
    .thumbnail {
        min-height: 250px;
        height: 85vw;
    }
}

</style>
