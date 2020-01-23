<style scoped>
    *{
        padding: 0px;
        margin: 0px;
        font-family: 'Open Sans', sans-serif;
    }
    #contactInfo{
        height: 504px;
        margin-top: 10px;
        padding-top: 10px;
        width: 95%;
    }
    #formArea{
        margin-top: 30px;
    }
    form{
        margin-top: 30px;
    }
    input{
        width: 95%;
        height: 39px;
        left: 773px;
        top: 332px;
        border-radius: 0px;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        border: none;
        border-top: solid 1px black;
        border-left: solid 1px black;
        border-right: solid 1px black;
    }
    textarea{
        width: 95%;
        height: 125px;
        left: 773px;
        top: 408px;
        background: #FFFFFF;
        resize: none;
        border: 1px solid #000000;
        box-sizing: border-box;
    }
    #submit{
        width: 103px;
        height: 39px;
        margin-top: 20px;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
    }
    h3{
        font-size: 18px;
        line-height: 25px;
    }
    h4{
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
    }
    @media  screen and (max-width: 1140px){
       #Contacts{
           height: 300px;
       }
       input{
           width: 60%;
       }
    }
    @media screen and (max-width: 575px){
        #contentArea{
            padding-bottom: 10px;
        }
    }


</style>

<template>
    <div class="row" id = "contentArea">
        <div class = "col-xl-12" id = "Contacts">
            <div id = "contactInfo">
                <p>Located in Ljubljana, Slovenia. Available globaly.</p>
                <br>
                <h2>Phone</h2>
                <p>00386 40 874 144</p>
                <br>
                <h2>Email</h2>
                <p>hello@niklavric.com</p>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    name: 'contact',
}
</script>
