// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from "fastclick"
import VueAwesomeSwiper from "vue-awesome-swiper" //轮播

import './assets/style/style.css'
import './assets/style/iconfont.css'
import './assets/style/reset.css'//重置样式
import './assets/style/border.css'//移动端多倍屏边框不准
import "swiper/dist/css/swiper.css"//click延迟300ms

Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})
