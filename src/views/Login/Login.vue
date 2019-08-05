<template>
    <div class="login-screen">
        <div></div>
        <div class="">
            <img src="../../assets/images/adshare_white.svg" alt="AdShare">
        </div>
        <div class="login-txt">
            <p>Let <span class="bold-txt">everyone</span> see your<br>
                <span class="bold-txt">business</span> in 10 Minutes</p>
        </div>
        <div class="login-box">
            <div class="email_label">
                <label class="label-email">EMAIL</label><br>
                <input class="login_input" type="email" name="email" placeholder="chioma@examplemail.com" autofocus>
            </div>
            <div class="email_label2">
                <label class="label-email">PASSWORD</label><br>
                <input class="login_input" type="password" name="password" placeholder="********">
            </div>
            <div class="login_click">
                <router-link to="Register"><button class="login-btn">Login</button></router-link>
                <div class="finger_print">
                    <img src="../../assets/images/finger_print.png" alt="">
                </div>
            </div>
        </div>
        <div class="new_here">
            <p><font-awesome-icon icon="plus" class="fontawesom"/> New here?  <router-link to="Register"><span class="create_account_now">Create Account</span></router-link></p>
        </div>
        <div class="need_help">
            <img src="../../assets/images/need_help.svg" alt="">
            <img src="../../assets/images/forgot_pw.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login.vue"
    }
</script>

<style scoped>

</style>