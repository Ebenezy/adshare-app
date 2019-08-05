<template>
    <div class="ads-history-nav">
        <div class="back-btn">
            <a @click="$router.go(-1)"><img src="../../assets/images/back-btn-blue.svg" alt="Back Btn"></a>
        </div>
        <div class="head-title">
            <h4>Ads History</h4>
        </div>
        <div class="top-logo-bg">
            <img src="../../assets/images/top-logo-bg.svg" alt="Logo">
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdsHistoryNav.vue"
    }
</script>

<style scoped>

</style>