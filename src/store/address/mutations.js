export default {
  SET_ADDRESS: (state, data) => {
    state.address = data || ''
  },
  SET_ADDRESS_SELECTED: (state, data) => {
    state.addressSelected = data
  }
}
