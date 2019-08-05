<template>
    <div class="register-page">
        <div></div>
        <div class="">
            <img src="../../assets/images/adshare_white.svg" alt="AdShare">
        </div>
        <div class="login-box">
            <div class="email_label">
                <label class="label-email">EMAIL</label><br>
                <input class="login_input" type="email" name="email" placeholder="chioma@examplemail.com" >
            </div>
            <div class="email_label">
                <label class="label-email">PHONE</label><br>
                <input class="login_input" type="email" name="email" placeholder="+23481234567890" >
            </div>
            <div class="email_label2">
                <label class="label-email">PASSWORD</label><br>
                <input class="login_input" type="password" name="password" placeholder="********">
            </div>
            <div class="register_click">
                <router-link to="VerifyCode"><button class="register-btn">Continue</button></router-link>
            </div>
        </div>
        <div class="verify_txt">
            <p>A verification code will be sent <br>to your phone number</p>
        </div>
        <div class="foot-note-2">
            <p><a><font-awesome-icon icon="circle" class="fontawesom"/></a>
                <router-link to="VerifyCode"><font-awesome-icon icon="circle" class="fontawesom1"/></router-link></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register.vue"
    }
</script>

<style scoped>

</style>