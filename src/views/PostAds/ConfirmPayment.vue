<template>
    <div class="post-ads-confirm-payment">
        <div class="confirm-payment-head">
            <img src="../../assets/images/adshare_confirm.svg" alt="AdShare">
        </div>
        <div class="input-figure-bg">
            <div class="">
                <img src="../../assets/images/key-confirm.svg" alt="AdShare">
                <p>Please confirm your payment of<br> &#8358;<b>10,000</b>.00 for advert placement at<br> E-Centre Yaba, Lagos.</p>
            </div>
            <form class="">
                <div class="input-figure">
                    <input class="figure_input" type="text" name="number"/>
                </div>
                <div class="input-figure2">
                    <button class="input-digit">1</button>
                    <button class="input-digit">2</button>
                    <button class="input-digit">3</button>
                </div>
                <div class="input-figure2">
                    <button class="input-digit">4</button>
                    <button class="input-digit">5</button>
                    <button class="input-digit">6</button>
                </div>
                <div class="input-figure2">
                    <button class="input-digit">7</button>
                    <button class="input-digit">8</button>
                    <button class="input-digit">9</button>
                </div>
                <div class="input-figure2">
                    <a @click="$router.go(-1)"><button class="input-digit-cancel">CANCEL</button></a>
                    <button class="input-digit0">0</button>
                    <button class="input-digit"> <font-awesome-icon icon="angle-left" class="fontawesom"/> </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConfirmPayment.vue"
    }
</script>

<style scoped>

</style>