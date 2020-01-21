<template>
   <div class = "container" id = "app">
        <navbar></navbar>
        <router-view></router-view>
   </div>
</template>
<style scoped>
    #app{
        position: relative;
        top: 100px;
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
    export default {
        components:{
            navbar
        }
    }
</script>
