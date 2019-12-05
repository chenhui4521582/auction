<template>
  <div class="index-banner">
    <div class="wrapper">
      <swiper :options="options">
        <swiper-slide class="swiper-slide" v-for="(item, index) in list" :key="index" @click.native="slideClick(item, index)">
          <img class="swiper-img" v-lazy="item.image" alt="" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Services, { index } from '@/services/index'
import _get from 'lodash.get'
export default {
  name: 'banner',
  data: () => ({
    options: {
      autoplay: 5000,
      speed: 500,
      disableOnInteraction: false,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      observer: true,
      observeParents: true
    },
    list: []
  }),
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    /** 获取banner图 **/
    _getBannerList () {
    
        let res = {
          data: {
            "code": 200,
            "data": [
                {
                    "id": 46,
                    "name": "特惠购-首单0元购",
                    "link": "beepaiapp://dispatcher/goodsMall/newUserList?activityId=12",
                    "image": "/group1/M00/41/5C/CmcEHV3OBU2ATbfbAANgnNEDNO8040.png",
                    "type": "banner",
                    "businessId": null
                },
                {
                    "id": 40,
                    "name": "竞拍攻略",
                    "link": "https://pai.beepai.com/auctionH5App/strategy",
                    "image": "/group1/M00/41/5B/CmcEHV3NTXqAHqztAAFE0aGDH70435.png",
                    "type": "banner",
                    "businessId": null
                }
            ],
            "message": null,
            "serverTime": 1575344915585,
            "success": true
         }
        }
        let {code, data, message} = _get(res, 'data')
        if(code == 200) {
          this.list = _get(res, 'data.data', [])
        }
    },
    /** banner点击 **/
    slideClick (item, index) {
      let url = item.lightUrl || item.url
      if (url) {
        // 跳转
      }
    }
  },
  mounted () {
    this._getBannerList()
  }
}
</script>

<style lang="less">
.index-banner {
  position: relative;
  margin-bottom: .24rem;
  padding: 0 .24rem;
  overflow: hidden;
  height: 2.2rem;
  .swiper-container {
    border-radius: .06rem;
  }
  .swiper-img {
    vertical-align: top;
    width: 100%;
    height: 2.2rem;
    border-radius: .06rem;
    overflow: hidden;
  }
  .swiper-pagination {
    bottom: .1rem;
    left: 0;
    right: 0;
    z-index: 5;
  }
  .swiper-pagination-bullet {
    margin: 0 4px;
    width: .16rem;
    height: .02rem;
    background: #E0E0E0;
    border-radius: 0;
  }
  .swiper-pagination-bullet-active {
    background: #FFFFFF;
    width: .24rem;
  }
}
</style>
