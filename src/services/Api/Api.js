// const bpUserServer = process.env.VUE_APP_REQUESTHOST_USER
const bpUserServer = '//dev.pai-api.beepai.com/bp-user-server'
export default {
  /**
   * @description 首页跑马灯
   */
  getNotice: '//platform-api.beeplaying.com/wap/api/notice/list',
  /**
   * @description 获取用户收货地址列表
   */
  getAddressList: `${bpUserServer}/bp/user/api/address/auth/list`,
  /**
   * @description 获取用户默认收货地址
   */
  getDefaultAddress: `${bpUserServer}/bp/user/api/address/auth/default`
}
