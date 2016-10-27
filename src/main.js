import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import './assets/css/base.css'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 组件
import formA from 'components/formA.vue'
import tableA from 'components/tableA.vue'
const routes = [
  { path: '/home', component: app },
  { path: '/formA', component: formA },
  { path: '/tableA', component: tableA }
]
const router = new VueRouter({
  routes
})
const app = new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
