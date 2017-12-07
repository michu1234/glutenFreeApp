import Vue from 'vue'
import App from './App'
import Routes from './router/index'
import Vuetify from 'vuetify'
import Firebase from './firebase'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import ShoppingList from './components/ShoppingList'
import SingleRecipe from './components/SingleRecipe'


require('../node_modules/vuetify/dist/vuetify.css')

Vue.use(VueRouter)
Vue.use(VueFire)
Vue.use(Vuetify)

Vue.component('shopping-list', ShoppingList)
Vue.component('single-recipe', SingleRecipe)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})


export const bus = new Vue();