import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery';



Vue.config.productionTip = false

import 'bootstrap';
import './assets/app.scss'

window.$ = window.jQuery = jQuery;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");