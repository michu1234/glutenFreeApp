import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Firebase from './firebase'
import VueFire from 'vuefire'


require('../node_modules/vuetify/dist/vuetify.css')


Vue.use(VueFire)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
