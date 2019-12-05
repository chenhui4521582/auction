import $http from './http/http'
import Api from './Api/Api'
/**
 * @description 首页获取banner图
 */
const getBanner= function() {
  return 1111
}
/**
 * @description 首页获取跑马灯
 */
const getNotice= function() {
  return $http.post(Api.getNotice)
}



export {
  getBanner,
  getNotice,
}

const Services = {getBanner,getNotice}
export default Services