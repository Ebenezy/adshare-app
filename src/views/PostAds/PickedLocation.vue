<template>
    <div class="post-ads-page">
        <PostAdsNav></PostAdsNav>
        <div class="container">
            <div class="post-ads-body">
                <h5>LAGOS LOCATIONS:</h5>
                <div class="select-location">
                    <p>Select Locations in <span class="">Lagos</span> to post <br>your Adverts.</p>
                </div>
                <router-link to="PickedLocationNext">
                    <div class="picked-location">
                        <button class="picked-location-btn">Yaba</button>
                        <div class="next-btn">
                            <img src="../../assets/images/next.svg" alt="AdShare">
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location">
                        <button class="picked-location-btn">Surulere</button>
                        <div class="next-btn">
                            <img src="../../assets/images/next.svg" alt="AdShare">
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location">
                        <button class="picked-location-btn">Ikeja</button>
                        <div class="next-btn">
                            <img src="../../assets/images/next.svg" alt="AdShare">
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location">
                        <button class="picked-location-btn">Maryland</button>
                        <div class="next-btn">
                            <img src="../../assets/images/next.svg" alt="AdShare">
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location">
                        <button class="picked-location-btn">Victoria Island</button>
                        <div class="next-btn">
                            <img src="../../assets/images/next.svg" alt="AdShare">
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location">
                        <button class="picked-location-btn">Ikoyi</button>
                        <div class="next-btn">
                            <img src="../../assets/images/next.svg" alt="AdShare">
                        </div>
                    </div>
                </router-link>
                <router-link to="PickedLocationNext">
                    <div class="picked-location">
                        <button class="picked-location-btn">Lagos Island</button>
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
        name: "PickedLocation.vue"
    }
</script>

<style scoped>

</style>