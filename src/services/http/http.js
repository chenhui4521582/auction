import Vue from 'vue'
import axios from 'axios'
import { getUrlParams } from '@/utils/utils'
let NODE_ENV = process.env.NODE_ENV
let APP_CHANNEL = getUrlParams('channel') || localStorage.getItem('APP_CHANNEL')
let ACCESS_TOKEN = getUrlParams('token') || localStorage.getItem('ACCESS_TOKEN')
if (APP_CHANNEL) {
  localStorage.setItem('APP_CHANNEL', APP_CHANNEL)
} else {
  localStorage.setItem('APP_CHANNEL', 100070)
}
if (ACCESS_TOKEN) {
  localStorage.setItem('ACCESS_TOKEN', ACCESS_TOKEN)
}
/** 平台跳转配置请勿删除!!!!! **/
localStorage.setItem('PLANT_VERSION', 'xmWap')
/** axios 请求连接等待时间 **/
axios.defaults.timeout = 10000
/** axios Request 配置 **/
axios.interceptors.request.use(
  config => {
    let ACCESS_TOKEN = getUrlParams('token') || localStorage.getItem('ACCESS_TOKEN')
    let APP_CHANNEL = getUrlParams('channel') || localStorage.getItem('APP_CHANNEL')
    ACCESS_TOKEN && (config.headers['Authorization'] = ACCESS_TOKEN)
    if (!config.headers['App-Channel']) {
      APP_CHANNEL && (config.headers['App-Channel'] = APP_CHANNEL)
    }
    config.headers['App-Version'] = '1.0.0'
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
/** axios Response 配置 **/
axios.interceptors.response.use(
  response => {
    let errorList = {
      404: '请求地址出错!',
      408: '请求超时',
      501: '服务未实现',
      502: '网关错误',
      503: '服务不可用',
      504: '网关超时'
    }
    let { code } = JSON.parse(response.request.response)
    /** 实名认证页面, 风控页面不需要监控token **/

    if (code && code != 200) {
      if (code == 401) {
        /** 本地缓存没有找到user_Info 删除本地 user_info 字段 **/
        localStorage.getItem('user_Info') && localStorage.removeItem('user_Info')
        localStorage.removeItem('ACCESS_TOKEN')
        /** 开发环境跳转登录页, 生产环境跳转断开连接 **/
        if (NODE_ENV === 'production') {
          /** 实名认证页面, 风控页面不需要监控token **/
          let noCheckTokenArr = ['riskManagement', 'authentication', 'zfbmiddle', 'wechatmiddle','feedback','loginTip']
          let noCheckToken = noCheckTokenArr.find(item => {
            if (window.location.href.indexOf(item) != -1) {
              return true
            }
          })
          if (noCheckToken) return
          Vue.prototype.$Toast('登录失效')
          setTimeout(res => {
            window.location.href = 'https://wap.beeplaying.com/loginPages/failureLogon.html'
          }, 1500)
        } /*else {
          let APP_CHANNEL = getUrlParams('channel') || localStorage.getString('APP_CHANNEL')
          Vue.prototype.$Toast('登录失效')
          setTimeout(res => {
            window.location.href = `https://wap.beeplaying.com/wap/home/?channel=${APP_CHANNEL}#/loginPop`
          },1500)
        } */
      } else {
        let message = errorList[code]
        if (message) {
          Vue.prototype.$Toast(message)
        }
      }
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
export default axios
