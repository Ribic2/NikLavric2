<style scoped>
    *{
        padding: 0px;
        margin: 0px;
    }
    /*CSS for navbar it self*/
    nav{
        min-height: 50px;
        height: auto;
        width: 100%;
        border-bottom: solid 1px black;
        background-color: white !important;
    }
    /*Nik Lavrič tekst*/
    .navbar-brand{
        width: 183px;
        height: 25px;
        left: 388px;
        top: 141px;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        color: #000000 !important;
    }
    /*Text after Nik Lavrič text*/
    #EditorColorist{
        width: 183px;
        height: 25px;
        left: 388px;
        top: 141px;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 18px;
        color: #000000;
    }
    /*Moved links a little bit to the left so it's aligned*/
    .navbar-nav{
        position: relative;
        right: 8px;
    }
    /*CSS for links in navbar*/
    .nav-item{
        width: 100%;
        height: 25px;
        left: 970px;
        top: 141px;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        color: #909090;
    }

    @media only screen and (max-width: 575px){
       .navbar-nav{
            position: relative;
            right: 0px;

        }
        .nav-item{
            height: 45px;
            z-index: 100;

        }
        .navbar-toggler{
            height: 40px;
            width: 40px;
        }
    }
</style>

<template>
   <div class = "row">
        <div class = "col-xl-12">
            <!--Navigation bar-->
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <a class="navbar-brand" href="/">NIK LAVRIČ <span id = "EditorColorist">editor colorist</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">ABOUT</a>
                        </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <!--Navigation bar-->
        </div>
   </div>
</template>

<script>
    export default {
        name: 'navbar',
        methods:{

        }
    }
</script>
