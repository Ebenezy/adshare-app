<template>
    <div class="register-page">
        <div></div>
        <div class="">
            <img src="../../assets/images/adshare_white.svg" alt="AdShare">
        </div>
        <div class="login-box">
            <div class="email_label3">
                <label class="label-email2">VERIFICATION CODE</label><br>
                <div class="verify_code">
                    <input class="code_input" type="text" name="verify-code" >
                    <input class="code_input" type="text" name="verify-code" >
                    <input class="code_input" type="text" name="verify-code" >
                    <input class="code_input" type="text" name="verify-code" >
                </div>
            </div>
            <div class="register_click">
                <router-link to="Landing"><button class="register-btn">Finish</button></router-link>
            </div>
        </div>
        <div class="verify_txt">
            <p>Put verification code and Finish <br>Registration</p>
        </div>
        <div class="foot-note-2">
            <p><a @click="$router.go(-1)"><font-awesome-icon icon="circle" class="fontawesom1"/></a>
                <router-link to="VerifyCode"><font-awesome-icon icon="circle" class="fontawesom"/></router-link></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VerifyCode.vue"
    }
</script>

<style scoped>

</style>