import Vue from 'vue'
import VueRouter from 'vue-router'
/***====== pages ======***/
import My from './my'
Vue.use(VueRouter)
const routes = [
  ...My,
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: 'index' */ '@/views/index')
  }
]

export default new VueRouter({ routes })