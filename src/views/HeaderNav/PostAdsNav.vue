<template>
    <div class="post-ads-nav">
        <div class="back-btn">
            <a @click="$router.go(-1)"><img src="../../assets/images/back-btn-white.svg" alt="Back Btn"></a>
        </div>
        <div class="head-title">
            <h4>Post Ads</h4>
        </div>
        <div class="top-logo-bg">
            <img src="../../assets/images/top-logo-bg.svg" alt="Logo">
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostAdsNav.vue"
    }
</script>

<style scoped>

</style>