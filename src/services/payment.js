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
          status: 1,
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
/**
 * @description 收银台获取支付方式
 */
const getPayType = function() {
  return new Promise((resolve, reject) => {
    let res = {
      data: {
        code: 200,
        data: [
          {
            id: 11,
            name: '支付宝',
            icon: 'http://file.beepai.com/group1/M00/3F/C1/CmcEHV1CV3eAe_u4AAAKZsEMec8397.png',
            recommend: 1,
            payMode: 'alipayapp',
            sort: 1,
            remark: '推荐使用'
          },
          {
            id: 17,
            name: '京东支付',
            icon: 'http://file.beepai.com/group1/M00/41/5C/CmcEHV3OR6iAC_R-AABg3DLYemk741.png',
            recommend: 0,
            payMode: 'jdapp',
            sort: 1,
            remark: '京东支付新用户立减10元'
          }
        ],
        message: null,
        serverTime: 1576137562080,
        success: true
      }
    }
    resolve(res)
  })
}

export { getMallList, getWeek, getPayType }

const Services = { getMallList, getWeek, getPayType }
export default Services
