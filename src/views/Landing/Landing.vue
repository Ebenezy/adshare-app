<template>
    <div class="landing-page">
        <div class="container">
            <div class="home_top">
                <div class="logo_img">
                    <img src="../../assets/images/adshare_logo_home.svg" alt="">
                </div>
                <div class="user_name_img">
                    <div class="user_name">
                        <p>Hi, Chioma</p>
                    </div>
                    <div class="user_img">
                        <img src="../../assets/images/profile_img.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="intro-txt">
            <p>Tell <b class="intro-txt-bold">everyone</b> about <br>your business <b class="intro-txt-bold">instantly</b>.</p>
            <div class="post-ads-history">
                <div class="post-ads">
                    <router-link to="PickLocation"><button class="post-ads-btn">Post Ads</button></router-link>
                </div>
                <div class="ads-history">
                    <router-link to="AdsHistory"><button class="ads-history-btn">Ads History</button></router-link>
                </div>
            </div>
        </div>
        <div class="need_help2">
            <img src="../../assets/images/need_help2.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Landing.vue"
    }
</script>

<style scoped>
    .home_top{
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
    }
    .user_name{
        padding: 20px 10px 0;
    }
    .user_name p{
        font-family: Montserrat-SemiBold;
        font-size: 20px;
        color: #585858;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .user_img{
        border: 4px solid #00B4CD;
        border-radius: 50%;
        text-align: center;
    }
    .user_img img{
        border-radius: 50%;
        width: 64px;
        height: 64px;
    }
    .user_name_img{
        display: flex;
    }
    .intro-txt{
        text-align: center;
    }
    .intro-txt p{
        font-family: Montserrat-ExtraLight;
        font-size: 23px;
        color: #4A4A4A;
        text-align: center;
        line-height: 34px;
    }
    .intro-txt-bold{
        font-family: Montserrat-Bold;
        font-size: 23px;
        color: #4A4A4A;
        text-align: center;
        line-height: 34px;
    }
    .post-ads-history{
        padding: 1.5rem 3rem;
    }
    .post-ads-btn{
        width: 100%;
        background: #0F83D1;
        border-radius: 42px;
        font-family: Montserrat-SemiBold;
        font-size: 23px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        padding: 1rem 2rem;
        margin-bottom: 20px;
    }
    .ads-history-btn{
        width: 100%;
        background: #00B4CD;
        border-radius: 42px;
        font-family: Montserrat-SemiBold;
        font-size: 23px;
        color: #FFFFFF;
        letter-spacing: 0;
        padding: 1rem 2rem;
    }


</style>