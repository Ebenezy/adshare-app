<template>
  <div id="app">
      <!--<HeaderNav v-if="!['login','landing','moviePlayer','musicPlayer'].includes(currentPage)"/>-->
    <router-view/>
  </div>
</template>

<script>
    // import PostAdsNav from './views/HeaderNav/PostAdsNav.vue';

    export default {
        name: 'app',
        computed: {
            // currentPage() {
            //     return this.$route.name;
            // }
        },
        components: {
            // PostAdsNav
        }
    }
</script>
<style>
@import "assets/css/adshare.css";
</style>
