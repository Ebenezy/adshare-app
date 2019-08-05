<template>
    <div class="post-ads-page">
        <PostAdsNav></PostAdsNav>
        <div class="container">
            <div class="post-ads-body">
                <h5>LAGOS / YABA:</h5>
                <div class="select-location">
                    <p>Select how many screens you want your advert displayed on, prices are below</p>
                </div>
                <div class="select_size">
                    <div class="screen_price">NGN 10,000.00</div>
                    <div class="select_price">
                        <div class="screen_size">
                            <button class="screen_size_btn active">1</button>
                            <button class="screen_size_btn">2</button>
                            <button class="screen_size_btn">3</button>
                            <button class="screen_size_btn">4</button>
                            <button class="screen_size_btn">5</button>
                        </div>
                        <div class="screen_size">
                            <button class="screen_size_btn">6</button>
                            <button class="screen_size_btn">7</button>
                            <button class="screen_size_btn">8</button>
                            <button class="screen_size_btn">9</button>
                            <button class="screen_size_btn">10</button>
                        </div>
                        <div class="screen_size2">
                            <button class="screen_size_use_all_btn">USE ALL</button>
                        </div>
                    </div>
                </div>
                <router-link to="PostAds">
                    <div class="picked-location2">
                        <div style="width: 60px;"></div>
                        <button class="picked-location-btn2">Next</button>
                        <div class="next-btn">
                            <img src="../../assets/images/next.svg" alt="AdShare">
                        </div>
                    </div>
                </router-link>

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
        name: "PostAdsPrice.vue"
    }
</script>

<style scoped>
    .picked-location2{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        background: #0F83D1;
        border-radius: 30px;
        border: 3px solid #FFFFFF;
        text-align: center;
        margin-top: 3rem;
    }
    .picked-location-btn2{
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
    .screen_price{
        font-family: WorkSans-SemiBold;
        font-size: 24px;
        color: #0F83D1;
        letter-spacing: 0;
        text-align: right;
        padding-bottom: 30px;
    }
    .screen_size{
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
    }
    .screen_size_btn{
        font-family: WorkSans-SemiBold;
        font-size: 25px;
        color: #4A4A4A;
        text-align: center;
        border: 1px solid #0F83D1;
        border-radius: 10px;
        background: #ffffff;
        padding: 10px;
        height: 60px;
        width: 60px;
    }
    .screen_size_btn:active,.screen_size_btn:focus,.screen_size_btn:hover{
        background: #0F83D1;
        border-radius: 10px;
        color: #ffffff;
        font-family: WorkSans-SemiBold;
    }
    .screen_size2{
        text-align: right;
        padding-bottom: 10px;
    }
    .screen_size_use_all_btn{
        font-family: WorkSans-SemiBold;
        font-size: 18px;
        color: #0F83D1;
        text-align: center;
        border: 1px solid #0F83D1;
        border-radius: 10px;
        background: #ffffff;
        padding: 10px;
        height: 60px;
        width: 38%;
    }

</style>