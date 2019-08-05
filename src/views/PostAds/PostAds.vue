<template>
    <div class="post-ads-page">
        <PostAdsNav></PostAdsNav>
        <div class="ads_picture">
            <img src="../../assets/images/ads_picture.jpg" alt="AdShare">
        </div>
        <div class="container">
            <div class="ads_picture_format">
                <p>JPG,PNG,MP4 file should be <b>1980px</b> by <b>625px</b></p>
            </div>
            <router-link to="ConfirmPayment">
                <div class="picked-location3">
                    <div style="width: 60px;"></div>
                    <button class="picked-location-btn3">Publish</button>
                    <div class="next-btn">
                        <img src="../../assets/images/btn-publish.svg" alt="AdShare">
                    </div>
                </div>
            </router-link>
            <div class="publish-foot">
                <p>By publishing you Agree and <br>Accept the Rules of <b>Adshare Inc</b></p>
            </div>
        </div>
    </div>
</template>

<script>
    import PostAdsNav from '../HeaderNav/PostAdsNav.vue';

    export default {
        components:{
            PostAdsNav,
        },
        name: "PostAds.vue"
    }
</script>

<style scoped>
    .ads_picture{
        width: 100%;
        border-bottom: 4px solid #0F83D1;
    }
    .ads_picture img{
        width: 100%;
    }
    .ads_picture_format{
        padding-top: 1rem;
    }
    .ads_picture_format p{
        font-family: WorkSans-Regular;
        font-size: 14px;
        color: #4A4A4A;
        letter-spacing: 0;
        text-align: center;
        margin-bottom: 0;
    }
    .picked-location3{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        background: #1ABC9C;
        border-radius: 30px;
        border: 3px solid #FFFFFF;
        text-align: center;
        margin-top: 1rem;
    }
    .picked-location-btn3{
        width: 100%;
        text-align: center;
        padding-left: 1.5rem;
        font-family: Montserrat-SemiBold;
        font-size: 20px;
        color: #FFFFFF;
        letter-spacing: 0;
        border: none;
        background: none;
    }
    .publish-foot p{
        font-family: WorkSans-Regular;
        font-size: 12px;
        color: #4A4A4A;
        letter-spacing: 0;
        text-align: center;
        padding: 1rem 0;
        margin-bottom: 0;
    }

</style>