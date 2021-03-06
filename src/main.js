import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'swiper/dist/css/swiper.min.css'
import './css/base.scss'
import './css/icons.scss'
import './css/widthfix.scss'
import './js/rem'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
