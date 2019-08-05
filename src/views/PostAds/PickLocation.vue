<template>
    <div class="post-ads-page">
        <PostAdsNav></PostAdsNav>
        <div class="container">
            <div class="post-ads-body">
                <h5>PICK LOCATION:</h5>
                <div class="pick-location">
                    <router-link to="PickedLocation"><p>Lagos State</p></router-link>
                </div>
                <div class="pick-location">
                    <router-link to="PickedLocation"><p>Abuja FCT</p></router-link>
                </div>
                <div class="pick-location">
                    <router-link to="PickedLocation"><p>Ogun State</p></router-link>
                </div>
                <div class="pick-location">
                    <router-link to="PickedLocation"><p>Port Harcourt</p></router-link>
                </div>
                <div class="pick-location">
                    <router-link to="PickedLocation"><p>Imo State</p></router-link>
                </div>
                <div class="pick-location">
                    <router-link to="PickedLocation"><p>Anambra State</p></router-link>
                </div>
                <div class="pick-location">
                    <router-link to="PickedLocation"><p>Abia State</p></router-link>
                </div>
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
        name: "PickLocation.vue"
    }
</script>

<style scoped>

</style>