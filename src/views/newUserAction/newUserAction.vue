<template>
  <div class="new-auction-list">
    <div class="title">
      <img src="./img/newUserAuction-banner.png" alt="">
      <div class="rule-icon" @click="openRule">
        <img src="./img/rule-icon.png" alt="">
      </div>
      <CountDown class="countDown" :time="1999999" />
    </div>
    <div class="list">
      <ul class="left-list" ref="left">
        <li v-for="(item, index) in leftArr" :key="index" @click="goAuction">
          <div class="auction-img">
            <img v-lazy="item.defaultGoodsImage" alt="">
          </div>
          <div class="detail">
            <div class="name">
              {{item.goodsName}}
            </div>
            <div class="wrap">
              <div class="price">
                当前价 <span class="unit">¥</span><span class="num">{{item.currentPrice}}</span>
              </div>
              <!-- 没开始 显示围观 -->
              <!-- 开始的时候 显示出价 -->
              <div class="people">
                {{item.onlookerCount}}人出价
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul class="right-list" ref="right">
        <li v-for="(item, index) in rightArr" :key="index">
          <div class="auction-img">
            <img v-lazy="item.defaultGoodsImage" alt="">
          </div>
          <div class="detail">
            <div class="name">
              {{item.goodsName}}
            </div>
            <div class="wrap">
              <div class="price">
                当前价 <span class="unit">¥</span><span class="num">{{item.currentPrice}}</span>
              </div>
              <!-- 没开始 显示围观 -->
              <!-- 开始的时候 显示出价 -->
              <div class="people">
                {{item.onlookerCount}}人出价
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 规则 -->
    <rule v-model="showRule" />
  </div>
</template>
<script>
import CountDown from '@/components/countDown/countDown'
import Rule from './components/rule'
import _get from 'lodash.get'
export default {
  name: 'newAuctionList',
  data: () => ({
    showRule: false,
    list: [],
    leftArr: [],
    rightArr: []
  }),
  components: {
    CountDown,
    Rule
  },
  methods: {
    /** 打开规则 **/
    openRule () {
      this.showRule = true
    },
    /** 瀑布流 **/
    updateWaterfall () {
      const leftHeight = this.$refs.left.clientHeight
      const rightHeight = this.$refs.right.clientHeight
      let item = this.list.shift()
      if (item == null) {
        return
      }
      if (leftHeight <= rightHeight) {
        this.leftArr.push(item)
      } else {
        this.rightArr.push(item)
      }
      this.$nextTick(function () {
        this.updateWaterfall()
      })
    },
    /** 获取列表 **/
    _getAuctionList () {
      let res = {
        "data": {
          "code": 200,
          "data": [
            {
              "id": 886651,
              "defaultGoodsImage": "/group1/M00/3D/75/CmcEHF0j-RWARtDeAAF3IKEzTpQ647.jpg",
              "goodsName": "苹果ipad pro2018 12.9 英寸 WLAN版256G",
              "currentPrice": 1124.6,
              "nickname": "remi",
              "auctionStatus": 1,
              "startTime": 1575252000000,
              "endTime": 1575277916403,
              "auctionUserCount": 132,
              "auctionClass": 0,
              "onlookerCount": 652,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 33,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 886834,
              "defaultGoodsImage": "/group1/M00/41/B4/CmcEHV3hE52AeN9rAAE_twCC7GM522.png",
              "goodsName": "华为mate30 RS 5G版保时捷限量版手机全网通 玄黑 5G版全网通12G+512G",
              "currentPrice": 1712.4,
              "nickname": "我不是你爹",
              "auctionStatus": 1,
              "startTime": 1575252000000,
              "endTime": 1575277911397,
              "auctionUserCount": 140,
              "auctionClass": 0,
              "onlookerCount": 1159,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 1,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 888103,
              "defaultGoodsImage": "/group1/M00/41/63/CmcEHV3WN_OAcR_KAAGio2q5fA8448.jpg",
              "goodsName": "Apple MacBook Air 2018 13.3英寸（i5 1.6 8G 256G）",
              "currentPrice": 1003.6,
              "nickname": "159****5190",
              "auctionStatus": 1,
              "startTime": 1575253258000,
              "endTime": 1575277914511,
              "auctionUserCount": 121,
              "auctionClass": 0,
              "onlookerCount": 413,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 2,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 888231,
              "defaultGoodsImage": "/group1/M00/41/53/CmcEHV3JP4aATpPxABcF1G620NM939.jpg",
              "goodsName": "爱仕达破壁机 1.75L/800W",
              "currentPrice": 147.99,
              "nickname": "注定",
              "auctionStatus": 1,
              "startTime": 1575254799000,
              "endTime": 1575277912764,
              "auctionUserCount": 131,
              "auctionClass": 0,
              "onlookerCount": 241,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 5,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 886683,
              "defaultGoodsImage": "/group1/M00/2B/D8/CmcEHFyd7l2AF40IAAArTEfpeWQ916.jpg",
              "goodsName": "Apple MacBook Pro 13.3英寸（i5/2.3/8G 512G）",
              "currentPrice": 952,
              "nickname": "186****0109",
              "auctionStatus": 1,
              "startTime": 1575255600000,
              "endTime": 1575277910844,
              "auctionUserCount": 124,
              "auctionClass": 0,
              "onlookerCount": 251,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 2,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 886792,
              "defaultGoodsImage": "/group1/M00/3F/2F/CmcEHV0d2Y6AXWvzAAC_sK8BCu8851.jpg",
              "goodsName": "iPad mini5 256G（WLAN版）7.9寸",
              "currentPrice": 489.2,
              "nickname": "流水指年",
              "auctionStatus": 1,
              "startTime": 1575255600000,
              "endTime": 1575277912188,
              "auctionUserCount": 142,
              "auctionClass": 0,
              "onlookerCount": 261,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 33,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 888935,
              "defaultGoodsImage": "/group1/M00/2E/E9/CmcEHFy3Db6AT7oyAAET50WzJUs319.jpg",
              "goodsName": "JBL蓝牙耳机 280bt",
              "currentPrice": 91.29,
              "nickname": "庄周",
              "auctionStatus": 1,
              "startTime": 1575263697000,
              "endTime": 1575277916046,
              "auctionUserCount": 56,
              "auctionClass": 0,
              "onlookerCount": 102,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 26,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889154,
              "defaultGoodsImage": "/group1/M00/41/58/CmcEHV3LmkiAfsBNAAp_J_7elc4532.jpg",
              "goodsName": "海谜璃（HMILY）头层牛皮女士时尚百搭双肩包简约大方女款手提背包",
              "currentPrice": 53.12,
              "nickname": "无人之境",
              "auctionStatus": 1,
              "startTime": 1575266096000,
              "endTime": 1575277917346,
              "auctionUserCount": 96,
              "auctionClass": 0,
              "onlookerCount": 117,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 15,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889351,
              "defaultGoodsImage": "/group1/M00/2F/07/CmcEHFy4IcqAMYe6AAFmwXAPyFw619.jpg",
              "goodsName": "Bose SoundSport Free 真无线蓝牙耳机",
              "currentPrice": 368,
              "nickname": "137****4334",
              "auctionStatus": 1,
              "startTime": 1575269059000,
              "endTime": 1575277916534,
              "auctionUserCount": 44,
              "auctionClass": 0,
              "onlookerCount": 56,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 2,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889412,
              "defaultGoodsImage": "/group1/M00/41/64/CmcEHV3WWFyAYLwUAARXCGTJmf8653.jpg",
              "goodsName": "艾美特（AIRMATE）取暖器家用节能立式冷暖电暖气智能恒温办公暖风机",
              "currentPrice": 55.29,
              "nickname": "我不是你爹",
              "auctionStatus": 1,
              "startTime": 1575269122000,
              "endTime": 1575277916403,
              "auctionUserCount": 75,
              "auctionClass": 0,
              "onlookerCount": 108,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 5,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889445,
              "defaultGoodsImage": "/group1/M00/41/58/CmcEHV3Lm62AaLtgAAFz15lEtO8012.jpg",
              "goodsName": "【秋冬百搭小香风】小CK CHARLES＆KEITH 2019新色邮差包 时尚单肩斜挎百搭小方包（颜色备注）",
              "currentPrice": 38.86,
              "nickname": "世界的屋檐",
              "auctionStatus": 1,
              "startTime": 1575269596000,
              "endTime": 1575277914432,
              "auctionUserCount": 90,
              "auctionClass": 0,
              "onlookerCount": 101,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 15,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889578,
              "defaultGoodsImage": "/group1/M00/3E/EB/CmcEHF2ztQeAahg8AAKKDjcYnSg354.jpg",
              "goodsName": "华为 HUAWEI Mate 30  5G全网通8G+128G（颜色随机发）",
              "currentPrice": 273.6,
              "nickname": "绿色更健康",
              "auctionStatus": 1,
              "startTime": 1575271376000,
              "endTime": 1575277916403,
              "auctionUserCount": 81,
              "auctionClass": 0,
              "onlookerCount": 287,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 2,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889682,
              "defaultGoodsImage": "/group1/M00/2F/08/CmcEHFy4I1SAAyXtAAA9iX1a6RQ158.jpg",
              "goodsName": "Apple H1芯片AirPods 无线充电盒蓝牙耳机",
              "currentPrice": 128.3,
              "nickname": "136****0620",
              "auctionStatus": 1,
              "startTime": 1575272049000,
              "endTime": 1575277915662,
              "auctionUserCount": 63,
              "auctionClass": 0,
              "onlookerCount": 89,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 26,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889659,
              "defaultGoodsImage": "/group1/M00/41/53/CmcEHV3JPuSAEJ0YAAo1_dfi0RA638.jpg",
              "goodsName": "九阳（Joyoung）电饭煲家用土灶原釜内胆电饭锅可预约",
              "currentPrice": 24.52,
              "nickname": "口实心非",
              "auctionStatus": 1,
              "startTime": 1575272130000,
              "endTime": 1575277913517,
              "auctionUserCount": 71,
              "auctionClass": 0,
              "onlookerCount": 100,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 37,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889708,
              "defaultGoodsImage": "/group1/M00/41/91/CmcEHV3fND2AE4cGAAEL9pfT6nA821.jpg",
              "goodsName": "【冬日必备】长虹小太阳取暖器",
              "currentPrice": 11.82,
              "nickname": "牙膏炸弹",
              "auctionStatus": 1,
              "startTime": 1575272647000,
              "endTime": 1575277913293,
              "auctionUserCount": 65,
              "auctionClass": 0,
              "onlookerCount": 79,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 57,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889719,
              "defaultGoodsImage": "/group1/M00/40/F0/CmcEHV2pob2AOqDsAAhvkJj2QMc346.jpg",
              "goodsName": "丹爵（DANJUE）欧美休闲气质双肩包头层牛皮男士背包百搭帅气出行男包 黑色",
              "currentPrice": 35.22,
              "nickname": "138****5360",
              "auctionStatus": 1,
              "startTime": 1575272817000,
              "endTime": 1575277912328,
              "auctionUserCount": 54,
              "auctionClass": 0,
              "onlookerCount": 61,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 15,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889734,
              "defaultGoodsImage": "/group1/M00/41/7F/CmcEHV3cvxOAEacxAAqmC7FwH-Q379.jpg",
              "goodsName": "养身纯粮食去湿茶  天然无添加  健脾养胃 （2盒装）",
              "currentPrice": 22.04,
              "nickname": "三无先森",
              "auctionStatus": 1,
              "startTime": 1575272924000,
              "endTime": 1575277916404,
              "auctionUserCount": 26,
              "auctionClass": 0,
              "onlookerCount": 36,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 17,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889774,
              "defaultGoodsImage": "/group1/M00/2E/E7/CmcEHFy2_7mAYyWKAACtoilCDag232.jpg",
              "goodsName": "Apple Watch Series 4智能手表（GPS款 44毫米）",
              "currentPrice": 177,
              "nickname": "153****2204",
              "auctionStatus": 1,
              "startTime": 1575274373000,
              "endTime": 1575277916973,
              "auctionUserCount": 41,
              "auctionClass": 0,
              "onlookerCount": 61,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 27,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889893,
              "defaultGoodsImage": "/group1/M00/40/EA/CmcEHV2pgLKAELuOAAe4zAGqYks920.jpg",
              "goodsName": "丹爵（DANJUE）头层牛皮男士编织手拿包时尚休闲大容量手包优雅大方男手包  黑色",
              "currentPrice": 12.8,
              "nickname": "南巷清风",
              "auctionStatus": 1,
              "startTime": 1575274770000,
              "endTime": 1575277916427,
              "auctionUserCount": 49,
              "auctionClass": 0,
              "onlookerCount": 56,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 15,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889914,
              "defaultGoodsImage": "/group1/M00/41/46/CmcEHV3BHtWABRzrAADR1oLB02A848.png",
              "goodsName": "200元京东卡",
              "currentPrice": 55.4,
              "nickname": "全要了",
              "auctionStatus": 1,
              "startTime": 1575274973000,
              "endTime": 1575277911531,
              "auctionUserCount": 24,
              "auctionClass": 0,
              "onlookerCount": 256,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889928,
              "defaultGoodsImage": "/group1/M00/3E/F8/CmcEHF21gJ6AcDkpABCEq__ghXs692.jpg",
              "goodsName": "姚朵朵 五谷丰登有机杂粮礼盒3200g有机糙米红绿黄豆黑米薏米仁黄米玉米渣",
              "currentPrice": 7.06,
              "nickname": "九二一三",
              "auctionStatus": 1,
              "startTime": 1575275082000,
              "endTime": 1575277913362,
              "auctionUserCount": 40,
              "auctionClass": 0,
              "onlookerCount": 52,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 50,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889934,
              "defaultGoodsImage": "/group1/M00/41/52/CmcEHV3JPbWARY23AATK7QJXQtA209.jpg",
              "goodsName": "九阳电热水壶不锈钢内胆1.3L自动断电防干烧",
              "currentPrice": 12.1,
              "nickname": "钱少来了",
              "auctionStatus": 1,
              "startTime": 1575275128000,
              "endTime": 1575277913589,
              "auctionUserCount": 52,
              "auctionClass": 0,
              "onlookerCount": 60,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 37,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889970,
              "defaultGoodsImage": "/group1/M00/3F/2B/CmcEHV0daG-Aa85TAAFW2nYpDPM785.jpg",
              "goodsName": "华为 WATCH GT运动版  黑色",
              "currentPrice": 58.4,
              "nickname": "冤枉",
              "auctionStatus": 1,
              "startTime": 1575275241000,
              "endTime": 1575277917424,
              "auctionUserCount": 34,
              "auctionClass": 0,
              "onlookerCount": 43,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 27,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889886,
              "defaultGoodsImage": "/group1/M00/2F/08/CmcEHFy4IquAdPIBAAGmvrUbiOY052.jpg",
              "goodsName": "Beats Studio3 Wireless 录音师无线3代 头戴式 蓝牙无线降噪游戏耳机 - 魅影灰（限量款）",
              "currentPrice": 106,
              "nickname": "两难",
              "auctionStatus": 1,
              "startTime": 1575275325000,
              "endTime": 1575277914976,
              "auctionUserCount": 34,
              "auctionClass": 0,
              "onlookerCount": 41,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 2,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889956,
              "defaultGoodsImage": "/group1/M00/41/58/CmcEHV3LnNSADrpEAAO4dcnarLI332.jpg",
              "goodsName": "新加坡小CK·CHARLES＆KEITH 菱格大包 手提单肩斜挎链条女包",
              "currentPrice": 15.96,
              "nickname": "向烟酒述说我们的回忆",
              "auctionStatus": 1,
              "startTime": 1575275371000,
              "endTime": 1575277911130,
              "auctionUserCount": 46,
              "auctionClass": 0,
              "onlookerCount": 53,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 15,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889961,
              "defaultGoodsImage": "/group1/M00/3E/82/CmcEHV0EtYGAT_b3AABukQFECGA446.jpg",
              "goodsName": "皮卡丘儿童限量版牙刷",
              "currentPrice": 9.72,
              "nickname": "买梦人",
              "auctionStatus": 1,
              "startTime": 1575275412000,
              "endTime": 1575277916414,
              "auctionUserCount": 19,
              "auctionClass": 0,
              "onlookerCount": 26,
              "audit": 1,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 9,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889991,
              "defaultGoodsImage": "/group1/M00/3F/2B/CmcEHV0dZa2AV-7WAAF65AUVjpc285.jpg",
              "goodsName": "华为 儿童手表3 Pro 极光蓝",
              "currentPrice": 56.5,
              "nickname": "安分男人",
              "auctionStatus": 1,
              "startTime": 1575275512000,
              "endTime": 1575277913998,
              "auctionUserCount": 32,
              "auctionClass": 0,
              "onlookerCount": 40,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 27,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889950,
              "defaultGoodsImage": "/group1/M00/3E/EB/CmcEHF2zt1aAbUcVAAEk_VeK8oM626.jpg",
              "goodsName": "华为 HUAWEI Mate30pro 5G全网通8G+512G（颜色随机发）",
              "currentPrice": 99.6,
              "nickname": "150****6067",
              "auctionStatus": 1,
              "startTime": 1575275654000,
              "endTime": 1575277914523,
              "auctionUserCount": 52,
              "auctionClass": 0,
              "onlookerCount": 80,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 2,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 889955,
              "defaultGoodsImage": "/group1/M00/41/46/CmcEHV3BHvWABBlCAADUaFVOSh0314.png",
              "goodsName": "1000元京东卡",
              "currentPrice": 98.4,
              "nickname": "石头",
              "auctionStatus": 1,
              "startTime": 1575275670000,
              "endTime": 1575277915317,
              "auctionUserCount": 51,
              "auctionClass": 0,
              "onlookerCount": 98,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889915,
              "defaultGoodsImage": "/group1/M00/3F/2D/CmcEHV0dsC6AT0ukAAMVdizbaa4027.jpg",
              "goodsName": "华为P30 pro 8G+128G(颜色随机发）",
              "currentPrice": 128.4,
              "nickname": "静候缘来",
              "auctionStatus": 1,
              "startTime": 1575275874000,
              "endTime": 1575277913058,
              "auctionUserCount": 38,
              "auctionClass": 0,
              "onlookerCount": 57,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 2,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889996,
              "defaultGoodsImage": "/group1/M00/41/53/CmcEHV3JQAyAJRTEAAmtsbnBEto689.jpg",
              "goodsName": "东菱（Donlim）家用多功能迷你小烤箱 红色 10L",
              "currentPrice": 8.8,
              "nickname": "181****1566",
              "auctionStatus": 1,
              "startTime": 1575275882000,
              "endTime": 1575277911367,
              "auctionUserCount": 44,
              "auctionClass": 0,
              "onlookerCount": 47,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 37,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890027,
              "defaultGoodsImage": "/group1/M00/40/A7/CmcEHV2gK_WAKOB8AAB_QuxzCbc805.jpg",
              "goodsName": "无线蓝牙电脑键盘 （颜色随机）",
              "currentPrice": 8.3,
              "nickname": "薄荷茶",
              "auctionStatus": 1,
              "startTime": 1575275970000,
              "endTime": 1575277915916,
              "auctionUserCount": 25,
              "auctionClass": 0,
              "onlookerCount": 104,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 26,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889979,
              "defaultGoodsImage": "/group1/M00/41/46/CmcEHV3BHumATgPgAADRBLEWT6s047.png",
              "goodsName": "500元京东卡",
              "currentPrice": 41.5,
              "nickname": "冤枉",
              "auctionStatus": 1,
              "startTime": 1575276005000,
              "endTime": 1575277917356,
              "auctionUserCount": 30,
              "auctionClass": 0,
              "onlookerCount": 62,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 889985,
              "defaultGoodsImage": "/group1/M00/40/91/CmcEHV2dseWALjUgAABFeuRIUkE900.jpg",
              "goodsName": "魅族16Xs 全面屏三摄拍照游戏手机 6GB+ 64GB骑士黑",
              "currentPrice": 82.4,
              "nickname": "丧",
              "auctionStatus": 1,
              "startTime": 1575276048000,
              "endTime": 1575277917434,
              "auctionUserCount": 41,
              "auctionClass": 0,
              "onlookerCount": 62,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 1,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890022,
              "defaultGoodsImage": "/group1/M00/2B/D8/CmcEHFyd8e2ANp2IAAILJC6qJ-Y281.jpg",
              "goodsName": "JBL FLIP4 便携式蓝牙音箱 低音炮 防水设计 支持多台串联 户外音箱",
              "currentPrice": 18.65,
              "nickname": "139****4557",
              "auctionStatus": 1,
              "startTime": 1575276247000,
              "endTime": 1575277911024,
              "auctionUserCount": 23,
              "auctionClass": 0,
              "onlookerCount": 39,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 26,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890028,
              "defaultGoodsImage": "/group1/M00/41/46/CmcEHV3BHumATgPgAADRBLEWT6s047.png",
              "goodsName": "500元京东卡",
              "currentPrice": 30.9,
              "nickname": "暗送电波",
              "auctionStatus": 1,
              "startTime": 1575276279000,
              "endTime": 1575277916861,
              "auctionUserCount": 28,
              "auctionClass": 0,
              "onlookerCount": 45,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890072,
              "defaultGoodsImage": "/group1/M00/3C/6B/CmcEHFzuY4-AASyaAAH3zuPNsEM359.jpg",
              "goodsName": "全铝合金铝镁合金拉杆箱 20寸（多颜色可选）",
              "currentPrice": 35.9,
              "nickname": "爷才有钱",
              "auctionStatus": 1,
              "startTime": 1575276433000,
              "endTime": 1575277911339,
              "auctionUserCount": 13,
              "auctionClass": 0,
              "onlookerCount": 19,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 10,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890054,
              "defaultGoodsImage": "/group1/M00/41/46/CmcEHV3BHvWABBlCAADUaFVOSh0314.png",
              "goodsName": "1000元京东卡",
              "currentPrice": 58.6,
              "nickname": "无心者",
              "auctionStatus": 1,
              "startTime": 1575276537000,
              "endTime": 1575277917001,
              "auctionUserCount": 26,
              "auctionClass": 0,
              "onlookerCount": 40,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890077,
              "defaultGoodsImage": "/group1/M00/41/5E/CmcEHV3Q1k6APa1YAALPE3PDBEw915.jpg",
              "goodsName": "黑人 薄旋洁软性牙刷二支装",
              "currentPrice": 2.32,
              "nickname": "暖风吹怀",
              "auctionStatus": 1,
              "startTime": 1575276815000,
              "endTime": 1575277915599,
              "auctionUserCount": 25,
              "auctionClass": 0,
              "onlookerCount": 26,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 9,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890083,
              "defaultGoodsImage": "/group1/M00/41/46/CmcEHV3BHwKASq2sAADV2FFcpt0680.png",
              "goodsName": "2000元京东卡",
              "currentPrice": 41.4,
              "nickname": "137****1681",
              "auctionStatus": 1,
              "startTime": 1575276883000,
              "endTime": 1575277914990,
              "auctionUserCount": 37,
              "auctionClass": 0,
              "onlookerCount": 53,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890155,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wjOADE0NAABetHEzQXE695.png",
              "goodsName": "20元话费充值卡",
              "currentPrice": 3.32,
              "nickname": "Adolph",
              "auctionStatus": 1,
              "startTime": 1575276957000,
              "endTime": 1575277917253,
              "auctionUserCount": 6,
              "auctionClass": 0,
              "onlookerCount": 82,
              "audit": 0,
              "sort": 1,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890160,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wiGABZ8tAABX5qB4XCw780.png",
              "goodsName": "10元话费充值卡",
              "currentPrice": 2.12,
              "nickname": "AA小鹏.",
              "auctionStatus": 1,
              "startTime": 1575277083000,
              "endTime": 1575277916935,
              "auctionUserCount": 20,
              "auctionClass": 0,
              "onlookerCount": 253,
              "audit": 0,
              "sort": 4,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890129,
              "defaultGoodsImage": "/group1/M00/3F/29/CmcEHV0cpISANmOqAAEW6VO4oag121.jpg",
              "goodsName": "华为手环3 Pro",
              "currentPrice": 16.8,
              "nickname": "大叔酱",
              "auctionStatus": 1,
              "startTime": 1575277113000,
              "endTime": 1575277909621,
              "auctionUserCount": 26,
              "auctionClass": 0,
              "onlookerCount": 27,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 27,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890167,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wjOADE0NAABetHEzQXE695.png",
              "goodsName": "20元话费充值卡",
              "currentPrice": 3.19,
              "nickname": "余。",
              "auctionStatus": 1,
              "startTime": 1575277156000,
              "endTime": 1575277913562,
              "auctionUserCount": 5,
              "auctionClass": 0,
              "onlookerCount": 30,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890030,
              "defaultGoodsImage": "/group1/M00/3E/A1/CmcEHF2AoV-AHzD2AACyI1wKcpg273.jpg",
              "goodsName": "Apple iPhone 11 Pro Max (A2220) 256GB 暗夜绿色   其他颜色请备注",
              "currentPrice": 456,
              "nickname": "青青草原头上在",
              "auctionStatus": 1,
              "startTime": 1575277224000,
              "endTime": 1575277917334,
              "auctionUserCount": 44,
              "auctionClass": 0,
              "onlookerCount": 72,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 1,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890123,
              "defaultGoodsImage": "/group1/M00/41/53/CmcEHV3JPn2AJjJTAADOSrPQolU091.png",
              "goodsName": "TCL黑旋风便捷吸尘器",
              "currentPrice": 2.44,
              "nickname": "少年就要狂",
              "auctionStatus": 1,
              "startTime": 1575277351000,
              "endTime": 1575277912340,
              "auctionUserCount": 31,
              "auctionClass": 0,
              "onlookerCount": 35,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 5,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890124,
              "defaultGoodsImage": "/group1/M00/40/52/CmcEHV2F74qAAztJAAJQlxYbkag594.jpg",
              "goodsName": "乐心智能手表男女防水运动手环手表多功能测心率触屏蓝牙计步器Mambo watch",
              "currentPrice": 2.54,
              "nickname": "欧阳珠宝店",
              "auctionStatus": 1,
              "startTime": 1575277363000,
              "endTime": 1575277915964,
              "auctionUserCount": 34,
              "auctionClass": 0,
              "onlookerCount": 43,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 2,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890095,
              "defaultGoodsImage": "/group1/M00/40/92/CmcEHV2ds02Ad5XbAAE5cFhpaMg024.png",
              "goodsName": "魅族 16th 全面屏游戏手机 8GB+128GB 静夜黑",
              "currentPrice": 22.6,
              "nickname": "黄金啥时候拍",
              "auctionStatus": 1,
              "startTime": 1575277381000,
              "endTime": 1575277914318,
              "auctionUserCount": 32,
              "auctionClass": 0,
              "onlookerCount": 50,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 1,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890128,
              "defaultGoodsImage": "/group1/M00/41/46/CmcEHV3BHymANOZbAADHybhKDZk196.png",
              "goodsName": "50元京东卡",
              "currentPrice": 1.94,
              "nickname": "186****6227",
              "auctionStatus": 1,
              "startTime": 1575277406000,
              "endTime": 1575277911406,
              "auctionUserCount": 18,
              "auctionClass": 0,
              "onlookerCount": 36,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890196,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wu6AYzFbAABfzTYyPBY521.png",
              "goodsName": "50元话费充值卡",
              "currentPrice": 1.9,
              "nickname": "我又来了",
              "auctionStatus": 1,
              "startTime": 1575277540000,
              "endTime": 1575277915674,
              "auctionUserCount": 7,
              "auctionClass": 0,
              "onlookerCount": 23,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890144,
              "defaultGoodsImage": "/group1/M00/3F/0F/CmcEHF25SUuAQPSwAABaAaUUdbM204.jpg",
              "goodsName": "Apple AirPods Pro Apple主动降噪无线蓝牙耳机 （预售）",
              "currentPrice": 12.4,
              "nickname": "夜色",
              "auctionStatus": 1,
              "startTime": 1575277579000,
              "endTime": 1575277910332,
              "auctionUserCount": 31,
              "auctionClass": 0,
              "onlookerCount": 38,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 25,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890222,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wiGABZ8tAABX5qB4XCw780.png",
              "goodsName": "10元话费充值卡",
              "currentPrice": 0.27,
              "nickname": "风云锐欧",
              "auctionStatus": 1,
              "startTime": 1575277826000,
              "endTime": 1575277915199,
              "auctionUserCount": 5,
              "auctionClass": 0,
              "onlookerCount": 16,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890087,
              "defaultGoodsImage": "/group1/M00/3F/2C/CmcEHV0dnleASgjTAAE1Crsfdxs269.jpg",
              "goodsName": "iPhone xs max 256G",
              "currentPrice": 5.4,
              "nickname": "我在路边捡到一个女朋友",
              "auctionStatus": 1,
              "startTime": 1575277833000,
              "endTime": 1575277917539,
              "auctionUserCount": 14,
              "auctionClass": 0,
              "onlookerCount": 37,
              "audit": 0,
              "sort": 30,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 2,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890183,
              "defaultGoodsImage": "/group1/M00/3F/CB/CmcEHV1FRwuAGiBpAAeH2sPLbJQ508.png",
              "goodsName": "USB炫光   LOL手游游戏机有线鼠标（颜色随机）",
              "currentPrice": 0.2,
              "nickname": "石榴薄荷",
              "auctionStatus": 1,
              "startTime": 1575277847000,
              "endTime": 1575277913166,
              "auctionUserCount": 6,
              "auctionClass": 0,
              "onlookerCount": 8,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 26,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890210,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wu6AYzFbAABfzTYyPBY521.png",
              "goodsName": "50元话费充值卡",
              "currentPrice": 4.5,
              "nickname": "170****1202",
              "auctionStatus": 1,
              "startTime": 1575277852000,
              "endTime": 1575277913956,
              "auctionUserCount": 6,
              "auctionClass": 0,
              "onlookerCount": 13,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": [
                "/group1/M00/40/6D/CmcEHV2Nt9CAF-WJAAAIU8wVUNY021.png"
              ],
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890184,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wiGABZ8tAABX5qB4XCw780.png",
              "goodsName": "10元话费充值卡",
              "currentPrice": 0.12,
              "nickname": "137****7178",
              "auctionStatus": 1,
              "startTime": 1575277852000,
              "endTime": 1575277914997,
              "auctionUserCount": 6,
              "auctionClass": 0,
              "onlookerCount": 19,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890213,
              "defaultGoodsImage": "/group1/M00/40/A7/CmcEHV2gLwKAQZxWAAE7XMH2XEE236.jpg",
              "goodsName": "荷兰艾优成人声波电动牙刷P7",
              "currentPrice": 0.18,
              "nickname": "183****5244",
              "auctionStatus": 1,
              "startTime": 1575277887000,
              "endTime": 1575277916744,
              "auctionUserCount": 4,
              "auctionClass": 0,
              "onlookerCount": 6,
              "audit": 1,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 9,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890227,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wjOADE0NAABetHEzQXE695.png",
              "goodsName": "20元话费充值卡",
              "currentPrice": 0.07,
              "nickname": "余。",
              "auctionStatus": 1,
              "startTime": 1575277891000,
              "endTime": 1575277913019,
              "auctionUserCount": 2,
              "auctionClass": 0,
              "onlookerCount": 9,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890223,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wu6AYzFbAABfzTYyPBY521.png",
              "goodsName": "50元话费充值卡",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575277922000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 5,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890216,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wiGABZ8tAABX5qB4XCw780.png",
              "goodsName": "10元话费充值卡",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575277931000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 6,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": [
                "/group1/M00/40/6D/CmcEHV2Nt9CAF-WJAAAIU8wVUNY021.png"
              ],
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890192,
              "defaultGoodsImage": "/group1/M00/41/46/CmcEHV3BHymANOZbAADHybhKDZk196.png",
              "goodsName": "50元京东卡",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575277933000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 15,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890172,
              "defaultGoodsImage": "/group1/M00/40/52/CmcEHV2F7uaASU93AAMRJv0-uyM222.png",
              "goodsName": "十足酷H60智能运动手环",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575277971000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 32,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 2,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890197,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wiGABZ8tAABX5qB4XCw780.png",
              "goodsName": "10元话费充值卡",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575277978000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 9,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890239,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wkCAPtdrAABg-h1tqBo109.png",
              "goodsName": "30元话费充值卡",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575278042000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 5,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890202,
              "defaultGoodsImage": "/group1/M00/3E/55/CmcEHF1ohZCAWDcIAAL2c-1TiLs580.png",
              "goodsName": "棉柔洗脸巾 柔韧好用 亲肤安全（2包装）",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575278046000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 5,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 8,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890241,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wjOADE0NAABetHEzQXE695.png",
              "goodsName": "20元话费充值卡",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575278180000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 5,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": [
                "/group1/M00/40/6D/CmcEHV2Nt9CAF-WJAAAIU8wVUNY021.png"
              ],
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890188,
              "defaultGoodsImage": "/group1/M00/40/54/CmcEHV2GDyeAe9XEAAL-S9UnI_g448.jpg",
              "goodsName": "十足酷R100 10000mA显示屏双输入双输出华为/苹果/安卓/小米通用",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575278201000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 30,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 26,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890218,
              "defaultGoodsImage": "/group1/M00/3E/5A/CmcEHVz_WqSAGVP1AAGWTBhAN-0665.png",
              "goodsName": "爱奇艺视频月卡",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575278267000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 27,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890205,
              "defaultGoodsImage": "/group1/M00/41/58/CmcEHV3LnGSAMwVqAAF6-yYLRv4657.jpg",
              "goodsName": "【秋冬百搭小香风】小CK· CHARLES＆KEITH 编织链条包 女士链条翻盖单肩包（淑女红)",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575278384000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 30,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 15,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890232,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wjOADE0NAABetHEzQXE695.png",
              "goodsName": "20元话费充值卡",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575278398000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 10,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890236,
              "defaultGoodsImage": "/group1/M00/3F/CB/CmcEHV1FTwuATRTmAAIVWc543Ig105.png",
              "goodsName": "无线 充电鼠标  超薄办公游戏无声静音（太空银）",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575278433000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 8,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 26,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890237,
              "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wjOADE0NAABetHEzQXE695.png",
              "goodsName": "20元话费充值卡",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575278438000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 6,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": null,
              "tag": "default"
            },
            {
              "id": 890225,
              "defaultGoodsImage": "/group1/M00/41/46/CmcEHV3BHr2AKVf0AADKVLxBdc0091.png",
              "goodsName": "100元京东卡",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575278662000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 15,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 12,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890230,
              "defaultGoodsImage": "/group1/M00/41/13/CmcEHV2u5fWAVa0sAAXHMmNHNec447.jpg",
              "goodsName": "茅台酒厂贵州习酒53度习酒经典酱香1992坛子酒1.5L",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575278697000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 35,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 30,
              "channel": "",
              "tag": "default"
            },
            {
              "id": 890224,
              "defaultGoodsImage": "/group1/M00/2F/08/CmcEHFy4IlKAfgw9AACXx-f1M7s384.jpg",
              "goodsName": "华为（ HUAWEI） 华为无线耳机 真无线蓝牙耳机 双耳蓝牙音乐耳机 Freebuds 2 Pro",
              "currentPrice": 0,
              "nickname": null,
              "auctionStatus": 0,
              "startTime": 1575279260000,
              "endTime": null,
              "auctionUserCount": 0,
              "auctionClass": 0,
              "onlookerCount": 8,
              "audit": 0,
              "sort": null,
              "startPrice": 0,
              "auctionTag": null,
              "goodsColumnId": 26,
              "channel": null,
              "tag": "default"
            }
          ],
          "message": null,
          "serverTime": 1575277907630,
          "success": true
        }
      }
      let { code, data, message } = _get(res, 'data')
      if (code == 200) {
        this.list = _get(res, 'data.data')
        this.updateWaterfall()
      }
    },
    /** 详情跳转 **/
    goAuction () {
      this.$router.push({
        name: 'auction'
      })
    }
  },
  mounted () {
    this._getAuctionList()
  }
}
</script>
<style lang="less" scoped>
.new-auction-list {
  .title {
    position: relative;
    height: 2.2rem;
    overflow: hidden;
    img {
      vertical-align: top;
      width: 100%;
      height: 100%;
    }
    .rule-icon {
      position: absolute;
      top: 0.04rem;
      right: 0;
      width: 0.96rem;
      height: 0.36rem;
      z-index: 2;
    }
    .countDown {
      position: absolute;
      left: 0.36rem;
      top: 0.3rem;
    }
  }
  .list {
    overflow: hidden;
    padding: 0.12rem 0.24rem;
    background: #f8f8f8;
    ul {
      &:first-child {
        float: left;
      }
      &:last-child {
        float: right;
      }
      width: 3.45rem;
      height: auto;
      li {
        overflow: hidden;
        margin-bottom: 0.12rem;
        background: #fff;
        .auction-img {
          width: 3.45rem;
          height: 3.45rem;
          display: flex;
          justify-items: center;
          align-items: center;
          img {
            vertical-align: top;
            width: 100%;
          }
        }
        .detail {
          padding: 0.18rem;
          .name {
            word-wrap: break-word;
            position: relative;
            margin-bottom: 0.1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            max-height: 0.86rem;
            line-height: 0.45rem;
            font-size: 0.28rem;
            color: #333;
          }
          .wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .price {
              white-space: nowrap;
              line-height: 1;
              font-size: 0.2rem;
              color: #999999;
              .unit {
                color: #ff3339;
              }
              .num {
                color: #ff3339;
                font-weight: 600;
                font-size: 0.28rem;
              }
            }
            .people {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 0.2rem;
              color: #999999;
            }
          }
        }
      }
    }
  }
}
</style>