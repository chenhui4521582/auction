export default [
  {
    path: '/order/filling',
    name: 'orderFilling',
    component: () => import(/* webpackChunkName: 'orderFilling' */ '@/views/order/filling/index.vue')
  }
]