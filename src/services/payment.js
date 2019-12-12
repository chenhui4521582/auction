import $http from './http/http'
import Api from './Api/Api'
/**
 * @description 商城获取列表
 */
const getMallList = function() {
  return new Promise((resolve, reject) => {
    let res = {
      data: {
        code: 200,
        data: [
          {
            amount: '10',
            coinNum: '10000',
            recommend: 1
          },
          {
            amount: '50',
            coinNum: '50000',
            recommend: 0
          },
          {
            amount: '100',
            coinNum: '100000',
            recommend: 0
          },
          {
            amount: '200',
            coinNum: '200000',
            recommend: 0
          },
          {
            amount: '500',
            coinNum: '500000',
            recommend: 0
          },
          {
            amount: '1000',
            coinNum: '1000000',
            recommend: 0
          }
        ],
        message: null,
        serverTime: 1576035353579,
        success: true
      }
    }
    resolve(res)
  })
}
/**
 * @description 商城获取周卡
 */
const getWeek = function() {
  return new Promise((resolve, reject) => {
    let res = {
      data: {
        code: 200,
        data: {
          url: '/group1/M00/40/D4/CmcEHV2mjMyAAy5rAABXmz9mSRg371.png',
          price: 30,
          process: '',
          status: 0,
          activityId: 15,
          selectUrl: '/group1/M00/40/D4/CmcEHV2mjPqAGsrgAABcTAJrcL8609.png'
        },
        message: null,
        serverTime: 1576035353632,
        success: true
      }
    }
    resolve(res)
  })
}

export { getMallList, getWeek }

const Services = { getMallList, getWeek }
export default Services
