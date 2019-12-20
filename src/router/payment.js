export default [
  {
    path: '/payment',
    component: () => import(/* webpackChunkName: 'index' */ '@/views/payment/payment'),
    redirect: '/payment/mall',
    children: [
      {
        path: '/payment/mall',
        name: 'paymentMall',
        component: () => import(/* webpackChunkName: 'mall' */ '@/views/payment/children/mall')
      },
      {
        path: '/payment/list',
        name: 'paymentList',
        component: () => import(/* webpackChunkName: 'mall' */ '@/views/payment/children/list')
      },
      {
        path: '/payment/callback',
        name: 'paymentCallback',
        component: () => import(/* webpackChunkName: 'mall' */ '@/views/payment/children/callback')
      }
    ]
  }
]
