import address from './address'
export default {
  ...address.mutations,
  /** 设置轮播图列表 **/
  SET_AUCTION_SLIDERLIST(state, data) {
    state.auction.sliderList = data
  },
  /** 设置拍卖信息 **/
  SET_AUCTION_AUCTIONINFO(state, data) {
    state.auction.acutionInfo = data
  },
  /** 设置围观人数 **/
  SET_AUCTION_ONLOOKERCOUNT(state, data) {
    state.auction.onlookerCount = data
  },
  /** 设置出价人数 **/
  SET_AUCTION_AUCTIONUSERCOUNT(state, data) {
    state.auction.auctionUserCount = data
  },
  /** 设置详情图片 **/
  SET_AUCTION_DETAILIMG(state, data) {
    state.auction.detailImg = data
  },
  /** 设置出价记录 **/
  SET_OFFERLOG(state, data) {
    state.auction.offerLog = data
  },
  /** 设置往期成交 **/
  SET_HISTORY_AUCTION(state, data) {
    state.auction.historyAuctionList = data
  },
  /** 打开关闭往期出价弹框 **/
  SET_OFFERLOG_MODAL(state, data) {
    state.auction.showOfferlog = data
  },
  /** 打开关闭往期成交详情弹框 **/
  SET_HISTORYAUCTION_MODAL(state, data) {
    state.auction.showHistoryAuction = data
  },
  /** 打开关闭玩法指南详情弹框 **/
  SET_PLAYING_MODAL(state, data) {
    state.auction.showPlaying = data
  },
  /** 打开关闭托管设置弹框 **/
  SET_SETTING_MODAL(state, data) {
    state.auction.showSetting = data
  }
}
