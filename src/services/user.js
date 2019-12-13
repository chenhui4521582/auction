import $http from './http/http'
import Api from './Api/Api'
/**
 * @description 获取用户收货地址列表
 */
const getAddressList = function() {
  return $http.get(Api.getAddressList).then(res => {
    return res ? res.data.data : []
  })
}
/**
 * @description 获取用户默认收货地址
 */
const getDefaultAddress = function() {
  return $http.get(Api.getDefaultAddress).then(res => {
    return res ? res.data.data : null
  })
}

export { getAddressList, getDefaultAddress }

// const Services = { getAddressList, getDefaultAddress }
// export default Services
