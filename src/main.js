import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      meta: { title: 'home' },
      component: r => require(['@/pages/Home'], r)
    },
    {
      name: 'jobs',
      path: '/jobs',
      meta: { title: 'jobs' },
      component: r => require(['@/pages/Jobs'], r)
    },
    {
      name: 'profile',
      path: '/profile',
      meta: { title: 'profile' },
      component: r => require(['@/pages/Profile'], r)
    }
   ]
})

const app = new Vue({
  name: 'root',
  router,
  render: h => h(App)
})

app.$mount('#app')