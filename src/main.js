// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from 'jquery'
import './assets/styles/reset.css'
import './assets/styles/border.css'
// import './assets/styles/iconfont.css'
// import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios
// fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  $,
  router,
  components: { App },
  template: '<App/>'
})
