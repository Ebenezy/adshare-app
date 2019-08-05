<template>
    <div class="post-ads-page">
        <PostAdsNav></PostAdsNav>
        <div class="container">
            <div class="post-ads-body">
                <h5>LAGOS / YABA:</h5>
                <div class="select-location">
                    <p>Select Locations in <span class="">Yaba</span> to post <br>your Adverts.</p>
                </div>
                <router-link to="PickedLocationNext">
                    <div class="picked-location-next">
                        <router-link to="PostAdsPrice"><button class="picked-location-next-btn">E-Centre</button></router-link>
                        <div class="next-btn">
                            <img src="../../assets/images/ads_location.svg" alt="AdShare">
                            <span class="">5</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location-next">
                        <router-link to="PostAdsPrice"><button class="picked-location-next-btn">SPAR - Tejuosho</button></router-link>
                        <div class="next-btn">
                            <img src="../../assets/images/ads_location.svg" alt="AdShare">
                            <span class="">12</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location-next">
                        <button class="picked-location-next-btn">Gondola Club</button>
                        <div class="next-btn">
                            <img src="../../assets/images/ads_location.svg" alt="AdShare">
                            <span class="">7</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location-next">
                        <button class="picked-location-next-btn">Sweet Sensasion</button>
                        <div class="next-btn">
                            <img src="../../assets/images/ads_location.svg" alt="AdShare">
                            <span class="">10</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location-next">
                        <button class="picked-location-next-btn">Mall Mart</button>
                        <div class="next-btn">
                            <img src="../../assets/images/ads_location.svg" alt="AdShare">
                            <span class="">4</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location-next">
                        <button class="picked-location-next-btn">Tonyson Supermarket</button>
                        <div class="next-btn">
                            <img src="../../assets/images/ads_location.svg" alt="AdShare">
                            <span class="">8</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location-next">
                        <button class="picked-location-next-btn">So Fresh Goutmet</button>
                        <div class="next-btn">
                            <img src="../../assets/images/ads_location.svg" alt="AdShare">
                            <span class="">2</span>
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
        name: "PickedLocationNext.vue"
    }
</script>

<style scoped>

</style>