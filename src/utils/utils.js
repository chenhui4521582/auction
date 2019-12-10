import axios from 'axios'
import base64url from 'base64-url'
import _get from 'lodash.get'
import API from '@/services/Api/Api'
class utils {
  constructor() {}
  getPhoneInfo() {
    var _phoneData = {}
    var app = navigator.appVersion
    var left = app.indexOf('(')
    var right = app.indexOf(')')
    var str = app.substring(left + 1, right)
    var Str = str.split(';')
    // 手机型号--苹果 iPhone
    var Mobile_Iphone = Str[0]
    // 手机型号--安卓
    var Mobile_Android = Str[2]
    var res = /Android/
    var reslut = res.test(Mobile_Android)

    // 根据设备型号判断设备系统
    var phoneVersion = Str[0]
    if (phoneVersion == 'iPhone') {
      _phoneData.client = Mobile_Iphone
      _phoneData.os = Str[1].substring(4, 19)
    } else if (phoneVersion == 'Linux') {
      if (reslut) {
        _phoneData.client = Str[4].substring(0, 9)
        _phoneData.os = Str[2]
      } else {
        _phoneData.client = Mobile_Android.substring(0, 9)
        _phoneData.os = Str[1]
      }
    } else if (phoneVersion == 'iPad') {
      _phoneData.client = Str[0]
      _phoneData.os = Str[1].substring(4, 12)
    }
    return _phoneData
  }
  isIOS() {
    let U = window.navigator.userAgent
    return !(U.indexOf('Android') > -1 || U.indexOf('Adr') > -1)
  }
  isAndroid() {
    let U = window.navigator.userAgent
    return !U.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  }
  isWechat() {
    var U = window.navigator.userAgent.toLowerCase()
    return !!(U.match(/MicroMessenger/i) == 'micromessenger')
  }
  isAlipay() {
    var U = window.navigator.userAgent.toLowerCase()
    return !!(U.match(/Alipay/i) == 'alipay')
  }
  trimStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  }
  isEmptyArray(array) {
    if (array instanceof Array) {
      return !array.length
    } else {
      console.error('传入的值非数组')
    }
  }
  isEmptyObject(object) {
    if (object instanceof Object) {
      return !Object.keys(object).length
    } else {
      console.error('传入的值非对象')
    }
  }
  getUrlParams(ename) {
    let url = window.location.href
    let Request = {}
    if (url.indexOf('?') != -1) {
      let str = url.split('?')[1]
      let strs = str.split('&')
      for (let i = 0; i < strs.length; i++) {
        Request[strs[i].split('=')[0]] = strs[i].split('=')[1]
      }
    }
    return ename
      ? Request[ename]
        ? Request[ename].split('#')[0]
        : ''
      : Request
  }
  move(e) {
    e.preventDefault()
  }
  ScrollNoMove() {
    document.body.style.overflow = 'hidden'
    document.addEventListener('touchmove', this.move, { passive: false })
  }
  ScrollMove() {
    document.body.style.overflow = null
    document.removeEventListener('touchmove', this.move, { passive: false })
  }
  ScrollToTop() {
    window.scrollTo(0, 0)
  }
}
let newUtils = new utils(),
  getUrlParams = newUtils.getUrlParams
export { getUrlParams, newUtils }
export default newUtils
