<template>
  <div class="new-auction">
    <div class="title">
      <div class="name">
        <img src="../img/new-title.png" alt="">
        <!-- 倒计时 -->
        <count-down :time="time"/> 
      </div>
      <div class="check">
        <span>查看全部</span>
        <img src="../img/check-icon.png" alt="">
      </div>
    </div>
    <div class="list">
      <template v-for="(item, index) in list">
        <div class="item" :key="index" v-if="index < 4">
          <div class="commodity-img">
            <img v-lazy="item.defaultGoodsImage" alt="">
          </div>
          <div class="commodity-price">
            ¥<span>{{item.currentPrice}}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import _get from 'lodash.get'
export default {
  name: 'newAuction',
  data: ()=> ({
    time: '',
    list: []
  }),
  methods: {
    _getNewUserAuctionList() {
      let res = {
        data: {
          "code": 200,
          "data": {
              "hallList": [
                  {
                      "id": 893985,
                      "defaultGoodsImage": "/group1/M00/3F/2D/CmcEHF3XfO-Aa2SgAABUZ_oE4Eo449.png",
                      "goodsName": "5元话费充值卡",
                      "currentPrice": 1.65,
                      "nickname": "152****7415",
                      "auctionStatus": 1,
                      "startTime": 1575342587000,
                      "endTime": 1575342777825,
                      "auctionUserCount": 14,
                      "auctionClass": 0,
                      "onlookerCount": 89,
                      "audit": 0,
                      "sort": 999,
                      "startPrice": 1,
                      "auctionTag": null,
                      "goodsColumnId": 12,
                      "channel": "app_bp,app_ios_bp,wap_wf,app_huawei,app_vivo,app_oppo,app_baidu,app_anzhi,app_meizu,app_test,app_wdj,app_360,app_sougou,app_sanxing,app_ttfl",
                      "tag": "new_user"
                  },
                  {
                      "id": 893731,
                      "defaultGoodsImage": "/group1/M00/2D/D6/CmcEHFyu3QSAb4-_AAA4hm3vhjA672.jpg",
                      "goodsName": "纳米多功能水手吸附无痕贴（2片）",
                      "currentPrice": 5.49,
                      "nickname": "182****5990",
                      "auctionStatus": 1,
                      "startTime": 1575339837000,
                      "endTime": 1575342771248,
                      "auctionUserCount": 13,
                      "auctionClass": 0,
                      "onlookerCount": 53,
                      "audit": 1,
                      "sort": null,
                      "startPrice": 0,
                      "auctionTag": null,
                      "goodsColumnId": 25,
                      "channel": null,
                      "tag": "new_user"
                  },
                  {
                      "id": 893852,
                      "defaultGoodsImage": "/group1/M00/3C/BA/CmcEHFz3vYOAV6A9AAI1U0QAfXw713.jpg",
                      "goodsName": "充电听歌二合一音频转换器分线头适用iphone7/8/X/Plus 黑/银/红",
                      "currentPrice": 2.15,
                      "nickname": "预感大师",
                      "auctionStatus": 1,
                      "startTime": 1575341804000,
                      "endTime": 1575342775417,
                      "auctionUserCount": 9,
                      "auctionClass": 0,
                      "onlookerCount": 32,
                      "audit": 1,
                      "sort": null,
                      "startPrice": 0,
                      "auctionTag": null,
                      "goodsColumnId": 25,
                      "channel": null,
                      "tag": "new_user"
                  },
                  {
                      "id": 893881,
                      "defaultGoodsImage": "/group1/M00/3C/BA/CmcEHFz3tt2ASmzfAAEO5Oi90ZE938.jpg",
                      "goodsName": "茶花 晾衣架子通用型晒衣架 6支装",
                      "currentPrice": 2.31,
                      "nickname": "西红柿鸡蛋面",
                      "auctionStatus": 1,
                      "startTime": 1575341834000,
                      "endTime": 1575342777733,
                      "auctionUserCount": 11,
                      "auctionClass": 0,
                      "onlookerCount": 25,
                      "audit": 1,
                      "sort": null,
                      "startPrice": 0,
                      "auctionTag": null,
                      "goodsColumnId": 22,
                      "channel": null,
                      "tag": "new_user"
                  },
                  {
                      "id": 893867,
                      "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wkCAPtdrAABg-h1tqBo109.png",
                      "goodsName": "30元话费充值卡",
                      "currentPrice": 2.14,
                      "nickname": "刘小龙🙂",
                      "auctionStatus": 1,
                      "startTime": 1575341985000,
                      "endTime": 1575342777505,
                      "auctionUserCount": 20,
                      "auctionClass": 0,
                      "onlookerCount": 171,
                      "audit": 0,
                      "sort": null,
                      "startPrice": 0,
                      "auctionTag": null,
                      "goodsColumnId": 12,
                      "channel": null,
                      "tag": "new_user"
                  },
                  {
                      "id": 893897,
                      "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wu6AYzFbAABfzTYyPBY521.png",
                      "goodsName": "50元话费充值卡",
                      "currentPrice": 1.82,
                      "nickname": "傲娇货物",
                      "auctionStatus": 1,
                      "startTime": 1575342361000,
                      "endTime": 1575342772732,
                      "auctionUserCount": 12,
                      "auctionClass": 0,
                      "onlookerCount": 107,
                      "audit": 0,
                      "sort": null,
                      "startPrice": 0,
                      "auctionTag": null,
                      "goodsColumnId": 12,
                      "channel": null,
                      "tag": "new_user"
                  },
                  {
                      "id": 893929,
                      "defaultGoodsImage": "/group1/M00/3E/2F/CmcEHF1eNv2AFFvaAAD6_40FUrs842.jpg",
                      "goodsName": "【爆款】三合一数据线苹果安卓type-c一拖三充电线华为快充oppo小米通用（颜色随机发）",
                      "currentPrice": 1.64,
                      "nickname": "187****2079",
                      "auctionStatus": 1,
                      "startTime": 1575342517000,
                      "endTime": 1575342776504,
                      "auctionUserCount": 7,
                      "auctionClass": 0,
                      "onlookerCount": 21,
                      "audit": 0,
                      "sort": null,
                      "startPrice": 1,
                      "auctionTag": null,
                      "goodsColumnId": 26,
                      "channel": null,
                      "tag": "new_user"
                  },
                  {
                      "id": 893933,
                      "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wiGABZ8tAABX5qB4XCw780.png",
                      "goodsName": "10元话费充值卡",
                      "currentPrice": 0.88,
                      "nickname": "yu",
                      "auctionStatus": 1,
                      "startTime": 1575342535000,
                      "endTime": 1575342771642,
                      "auctionUserCount": 7,
                      "auctionClass": 0,
                      "onlookerCount": 56,
                      "audit": 0,
                      "sort": null,
                      "startPrice": 0,
                      "auctionTag": null,
                      "goodsColumnId": 12,
                      "channel": null,
                      "tag": "new_user"
                  },
                  {
                      "id": 893938,
                      "defaultGoodsImage": "/group1/M00/3E/5A/CmcEHVz_Vl2AHoKxAAGPkd2sqlE556.jpg",
                      "goodsName": "腾讯好莱坞会员月卡",
                      "currentPrice": 0,
                      "nickname": null,
                      "auctionStatus": 0,
                      "startTime": 1575342929000,
                      "endTime": null,
                      "auctionUserCount": 0,
                      "auctionClass": 0,
                      "onlookerCount": 25,
                      "audit": 0,
                      "sort": null,
                      "startPrice": 0,
                      "auctionTag": null,
                      "goodsColumnId": 12,
                      "channel": null,
                      "tag": "new_user"
                  },
                  {
                      "id": 893991,
                      "defaultGoodsImage": "/group1/M00/3E/88/CmcEHF14wjOADE0NAABetHEzQXE695.png",
                      "goodsName": "20元话费充值卡",
                      "currentPrice": 0,
                      "nickname": null,
                      "auctionStatus": 0,
                      "startTime": 1575343321000,
                      "endTime": null,
                      "auctionUserCount": 0,
                      "auctionClass": 0,
                      "onlookerCount": 9,
                      "audit": 0,
                      "sort": null,
                      "startPrice": 0,
                      "auctionTag": null,
                      "goodsColumnId": 12,
                      "channel": null,
                      "tag": "new_user"
                  }
              ],
              "newUserWithinOneDayRemainTime": 259119085,
              "newUserLengthOfHour": 72,
              "successCount": 6
          },
          "message": null,
          "serverTime": 1575342767922,
          "success": true
        }
      }
      let {code, data, message} = _get(res, 'data')
      if(code == 200) {
        this.time = _get(res, 'data.data.newUserWithinOneDayRemainTime', 0)
        this.list = _get(res, 'data.data.hallList', 0)
      }
    }
  },
  mounted() {
    this._getNewUserAuctionList()
  }
}
</script>
<style scoped lang="less">
.new-auction {
  margin-bottom: .24rem;
  padding: 0 .24rem;
  .title{
    margin-bottom: .24rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: .38rem;
      color: #333333;
      img {
        vertical-align: middle;
        margin-right: .18rem;
        width: 1.8rem;
        height: .5rem;
      }
    }
    .check {
      line-height: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: .24rem;
      color: #999999;
      img {
        margin-left: .08rem;
        width: .07rem;
        height: .13rem;
      }
    }
  }
  .list {
    overflow: hidden;
    height: 2.5rem;
    padding: .2rem .12rem .2rem .2rem;
    background: #F5F5F5;
    display: flex;
    justify-content: flex-start;
    .item {
      margin-right: .08rem;
      width: 1.6rem;
      height: 2.1rem;
      background:#FFFFFF;
      border-radius: .04rem;
      .commodity-img{
        margin-right: .24rem;
        width: 1.6rem;
        height: 1.6rem;
        img {
          vertical-align: top;
          width: 100%;
          height: 100%;
        }
      }
      .commodity-price {
        color: #FF3339;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        font-size: .24rem;
        span{ 
          font-size: .2rem;
        }
      }
    }
  }
}
</style>