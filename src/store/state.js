let state = {
  auction: {
    /** 轮播图列表 **/
    sliderList: [],
    /** 拍卖信息 **/
    acutionInfo: {},
    /** 围观人数 **/
    onlookerCount: 0,
    /** 出价人数 **/
    auctionUserCount: 0,
    /** 详情图片 **/
    detailImg: [],
    /** 往期成交数据 **/
    historyAuctionList: [],
    /** 往期出价数据 **/
    offerLog: [],
    /** 打开关闭出价记录弹框 **/
    showOfferlog: false,
    /** 打开关闭成交记录弹框 **/
    showHistoryAuction: false,
    /** 打开关闭托管设置弹框 **/
    showSetting: false,
    /** 打开关闭玩法指南详情弹框 **/
    showPlaying: false
  }
}
export default state
