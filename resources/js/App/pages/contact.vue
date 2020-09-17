<template>
    <div class="row" id = "contentArea">
        <div class = "col-xl-12" id = "Contacts">
            <div id = "contactInfo">
                <p>Located in Ljubljana, Slovenia. Available globally.</p>
                <br>
                <h2>Phone</h2>
                <p> 00386 four zero 874 144</p>
                <br>
                <h2>Email</h2>
                <p>nik.lavric@gmail.com</p>

                <div class = "row" id = "socialMediaLinkHolder">
                    <div class="col-6 socialMediaLink">
                        <a href="https://www.instagram.com/niklavric/"><img src="/storage/Instagram.png"></a>
                    </div>
                    <div class="col-6 socialMediaLink">
                        <a href="https://www.facebook.com/niklavric"><img src="/storage/Facebook_Logo.png" id = "facebookLogo"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    name: 'contact',
}
</script>

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
h3{
    font-size: 18px;
    line-height: 25px;
}
.socialMediaLink > a > img{
    height: 27px;
    width: 27px;
}
#socialMediaLinkHolder{
    min-width: 55px;
    max-width: 55px;
    width: auto;
    padding-top: 10px;
    position: relative;
    top: 10px;
}
h4{
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
}
#facebookLogo{
    height: 21px;
    width: 21px;
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
    #socialMediaLinkHolder{
        width: 100%
    }
}


</style>
