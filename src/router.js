import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Splash from './views/Onboarding/Splash.vue'
import Login from './views/Login/Login.vue'
import Register from './views/Register/Register.vue'
import VerifyCode from './views/Register/VerifyCode.vue'
import Landing from './views/Landing/Landing.vue'
import PickLocation from './views/PostAds/PickLocation.vue'
import PickedLocation from './views/PostAds/PickedLocation.vue'
import PickedLocationNext from './views/PostAds/PickedLocationNext.vue'
import PostAdsPrice from './views/PostAds/PostAdsPrice.vue'
import PostAds from './views/PostAds/PostAds.vue'
import ConfirmPayment from './views/PostAds/ConfirmPayment.vue'
import AdsHistory from './views/AdsHistory/AdsHistory.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
      {
          path: '/Login',
          name: 'Login',
          component: Login
      },
      {
          path: '/Register',
          name: 'Register',
          component: Register
      },
      {
          path: '/VerifyCode',
          name: 'VerifyCode',
          component: VerifyCode
      },
      {
          path: '/Landing',
          name: 'Landing',
          component: Landing
      },
      {
          path: '/PickLocation',
          name: 'PickLocation',
          component: PickLocation
      },
      {
          path: '/PickedLocation',
          name: 'PickedLocation',
          component: PickedLocation
      },
      {
          path: '/PickedLocationNext',
          name: 'PickedLocationNext',
          component: PickedLocationNext
      },
      {
          path: '/PostAdsPrice',
          name: 'PostAdsPrice',
          component: PostAdsPrice
      },
      {
          path: '/PostAds',
          name: 'PostAds',
          component: PostAds
      },
      {
          path: '/ConfirmPayment',
          name: 'ConfirmPayment',
          component: ConfirmPayment
      },
      {
          path: '/AdsHistory',
          name: 'AdsHistory',
          component: AdsHistory
      },
      {
          path: '/home',
          name: 'home',
          component: Home
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
    mode:'history'
})
