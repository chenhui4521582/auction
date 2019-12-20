import Vue from 'vue'
import VueRouter from 'vue-router'
/***====== pages ======***/
import My from './my'
import Order from './order'
import Payment from './payment'
Vue.use(VueRouter)
const routes = [
  ...My,
  ...Order,
  ...Payment,
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: 'index' */ '@/views/index')
  },
  {
    path: '/auction',
    name: 'auction',
    component: () => import(/* webpackChunkName: 'auction' */ '@/views/auction/auction')
  },
  {
    path: '/newUserAuction',
    name: 'newUserAuction',
    component: () => import(/* webpackChunkName: 'newUserAuction' */ '@/views/newUserAction/newUserAction')
  },
  {
    path: '/dealLog',
    name: 'dealLog',
    component: () => import(/* webpackChunkName: 'dealLog' */ '@/views/dealLog/dealLog')
  }
]

export default new VueRouter({ routes })
