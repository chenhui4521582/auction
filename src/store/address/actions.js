import _get from 'lodash.get'
const bpUserServer = '//dev.pai-api.beepai.com/bp-user-server'
export default {
  // getAddressList: ({ state, commit, rootState }) => {
  //   return axios
  //     .get(`${bpUserServer}/bp/user/api/address/auth/list`)
  //     .then(res => {
  //       return _get(res, 'data.data', [])
  //     })
  // },
  // saveAddress: ({ state, commit, rootState }, param) => {
  //   return axios
  //     .post(`${bpUserServer}/bp/user/api/address/auth/save`, param)
  //     .then(res => {
  //       return _get(res, 'data.data', {})
  //     })
  // },
  // deleteAddress: ({ state, commit, rootState }, param) => {
  //   return axios
  //     .post(`${bpUserServer}/bp/user/api/address/auth/delete`, param)
  //     .then(res => {
  //       return _get(res, 'data.data', '')
  //     })
  // },
  getDefaultAddress: ({ state, commit, rootState }) => {
    // axios
    //   .get(`${bpUserServer}/bp/user/api/address/auth/default`, {})
    //   .then(res => {
    const res = {
      data: {
        data: {
          address: '若水路388号国际纳米园H栋810室赛达搜到科技有限公司',
          area: 0,
          areaName: '吴中区',
          city: 0,
          cityName: '苏州市',
          createTime: '2019-12-09T08:20:04.598Z',
          defaultAddress: 0,
          id: 0,
          name: '李柳',
          phone: '13129295656',
          postCode: 'string',
          province: 0,
          provinceName: '江苏省',
          updateTime: '2019-12-09T08:20:04.598Z',
          userId: 0
        }
      }
    }
    let address = _get(res, 'data.data', '')
    if (address && !address.address) address = ''
    commit('SET_ADDRESS', address)
    // })
  }
}
