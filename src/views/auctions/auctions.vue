<template>
  <div class="auction">
    <div class="commodity">
      <!-- 轮播 -->
      <slider :sliderList="sliderList"/>
      <!-- 拍卖师 -->
      <auctioneer />
    </div>
    <!-- 当前拍卖信息 -->
    <current-msg />
    <!-- 商品信息 -->
    <commodity-info 
      :acutionInfo="acutionInfo"
      :onlookerCount="onlookerCount"
      :auctionUserCount="auctionUserCount"
    />
    <!-- 出价排名 -->
    <auction-user />
    <!-- 往期记录 -->
    <history-log />
    <!-- 拍卖攻略 -->
    <auction-strategy />
    <!-- 拍卖需知 -->
    <auction-introduce />
    <!-- 玩法指南 -->
    <auction-playing />
    <!-- 商品详情 -->
    <auction-detail :detailImg="detailImg"/>
  </div>
</template>
<script>
import Slider from './components/slider'
import CurrentMsg from './components/currentMsg'
import Auctioneer from './components/auctioneer'
import CommodityInfo from './components/commodityInfo'
import AuctionUser from './components/auctionUser'
import HistoryLog from './components/historyLog'
import AuctionStrategy from './components/auctionStrategy'
import AuctionIntroduce from './components/auctionIntroduce'
import AuctionPlaying from './components/auctionPlaying'
import AuctionDetail from './components/auctionDetail'
import _get from 'lodash.get'
export default {
  name: 'auction',
  data: ()=> ({
    /** 轮播图列表 **/
    sliderList: [],
    /** 拍卖信息 **/
    acutionInfo: {},
    /** 围观人数 **/
    onlookerCount: 0,
    /** 出价人数 **/
    auctionUserCount: 0,
    /** 详情图片 **/
    detailImg: []
  }),
  components: {
    Slider,
    CurrentMsg,
    Auctioneer,
    CommodityInfo,
    AuctionUser,
    HistoryLog,
    AuctionStrategy,
    AuctionIntroduce,
    AuctionPlaying,
    AuctionDetail
  },
  methods: {
    _getAuctionInfo() {
      let res = {
        data: {
          "code": 200,
          "data": {
              "auctionInfo": {
                  "auctionId": 892267,
                  "goodsId": 457,
                  "startTime": 1575338400000,
                  "endTime": 1575357169946,
                  "currentPrice": 117.78,
                  "currentUserId": -520,
                  "nickname": "152****5978",
                  "headImg": "",
                  "vipLevel": 1,
                  "city": null,
                  "paymentEndTime": null,
                  "status": 1,
                  "paymentStatus": 0,
                  "paymentTime": null,
                  "nextAuctionId": null,
                  "goodsName": "爱仕达破壁机 1.75L/800W",
                  "defaultGoodsImage": "/group1/M00/41/53/CmcEHV3JP4aATpPxABcF1G620NM939.jpg",
                  "goodsImages": "/group1/M00/41/53/CmcEHV3JP4aATpPxABcF1G620NM939.jpg,/group1/M00/41/53/CmcEHV3JP4mAabmQABcF1G620NM075.jpg",
                  "marketPrice": 1299,
                  "startPrice": 0,
                  "auctionFee": 300,
                  "auctionFeePrice": 0.03,
                  "canDeposit": 1,
                  "auctionClass": 0,
                  "freeEntryFee": null,
                  "freeRaisePrice": null,
                  "goodsType": 1,
                  "chipPiece": 0,
                  "paymentOrderId": null,
                  "rollAuctionId": 257,
                  "goodsAvePrice": 144.7,
                  "goodsDetailList": [
                      {
                          "type": 1,
                          "content": "https://file.beepai.com/group1/M00/41/53/CmcEHV3JP7yARvYfANetX3aAGN4140.jpg"
                      }
                  ],
                  "entryFee": null,
                  "delayPeriod": null,
                  "auctionTimes": 3926,
                  "delayTimes": null,
                  "validAuctionPeriod": null,
                  "shouldPayAmount": 0,
                  "voucherAmount": null,
                  "activityDiscounts": null,
                  "hotRecommend": 0,
                  "sort": null,
                  "tag": "default"
              },
              "auctionUserCount": 123,
              "bailAmount": null,
              "isAuction": null,
              "isEnroll": null,
              "isFirstEnter": null,
              "isViolationUser": null,
              "latestAuctionedUserCount": null,
              "myAuctionPrice": null,
              "onlookerCount": 182,
              "settlingSeconds": null,
              "violationTime": null,
              "violationGoodsName": null,
              "depositUserInfo": null,
              "winAuctionNum": 0,
              "smallUser": true,
              "newUserPopup": false,
              "sendTime": 1575357165306
          },
          "message": null,
          "serverTime": 1575357165314,
          "success": true
        }
      }
      let {code, data, message} = _get(res, 'data')
      if(code == 200) {
        let sliderList = _get(res, 'data.data.auctionInfo.goodsImages','')
        this.sliderList = sliderList.split(',')
        this.acutionInfo = _get(res, 'data.data.auctionInfo', {})
        this.onlookerCount = _get(res, 'data.data.onlookerCount', 0)
        this.auctionUserCount = _get(res, 'data.data.auctionUserCount', 0)
        this.detailImg = _get(res, 'data.data.auctionInfo.goodsDetailList', [])
      }
    }
  },
  created() {
    this._getAuctionInfo()
  } 
}
</script>
<style lang="less" scoped>
.auction {
  background: #FAFAFA;
  .commodity {
    position: relative;
  }
}
</style>