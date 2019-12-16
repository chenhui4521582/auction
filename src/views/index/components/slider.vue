<template>
  <div class="index-banner">
    <div class="wrapper">
      <swiper :options="options">
        <swiper-slide class="swiper-slide" v-for="(item, index) in list" :key="index" @click.native="slideClick(item, index)">
          <img class="swiper-img" :src="item.image | filter" alt="" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { getBanner } from '@/services/index'
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
      observeParents: true,
      loop: true
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
      getBanner().then(res => {
        let { code, data, message } = _get(res, 'data')
        if (code == 200) {
          this.list = _get(res, 'data.data', [])
        }
      })
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
  margin-bottom: 0.24rem;
  padding: 0 0.24rem;
  overflow: hidden;
  height: 2.2rem;
  .swiper-container {
    border-radius: 0.06rem;
  }
  .swiper-img {
    vertical-align: top;
    width: 100%;
    height: 2.2rem;
    border-radius: 0.06rem;
    overflow: hidden;
  }
  .swiper-pagination {
    bottom: 0.1rem;
    left: 0;
    right: 0;
    z-index: 5;
  }
  .swiper-pagination-bullet {
    margin: 0 4px;
    width: 0.16rem;
    height: 0.02rem;
    background: #e0e0e0;
    border-radius: 0;
  }
  .swiper-pagination-bullet-active {
    background: #ffffff;
    width: 0.24rem;
  }
}
</style>
