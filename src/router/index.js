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
  },
  {
    path: '/auctions',
    name: 'auctions',
    component: () => import(/* webpackChunkName: 'auctions' */ '@/views/auctions/auctions')
  }
]

export default new VueRouter({ routes })