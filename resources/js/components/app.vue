<template>
    <div id = "app" :style = "{'top': top}">
        <div v-if="checkRoute">
            <router-view></router-view>
            <cookies></cookies>
        </div>
        <div class = "container" v-else>
            <navbar></navbar>
            <router-view></router-view>
            <cookies></cookies>
        </div>
    </div>
</template>

<style scoped>
    #app{
        position: relative;
        min-height: 300px;
        height: auto;
    }
    @media only screen and (max-width: 575px){
        #app{
            position: relative;
            top: 20px;
        }
    }
</style>

<script>
    import navbar from './navbar.vue'
    import cookies from './cookie.vue'

    export default {
        components:{
            navbar,
            cookies
        },
         data(){
            return{
                top: ''
            }
        },
        computed:{
            checkRoute() {
                if(this.$route.path == "/admin-panel" || this.$route.path == '/login'){
                    this.top = '0px';
                    return true;
                }
                else{
                    this.top = '100px';
                    return false;
                }
            }
        }

    }

</script>
