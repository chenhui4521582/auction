<template>
  <div class="auctions-banner" v-if="showSlider">
    <div class="wrapper">
      <swiper :options="options">
        <swiper-slide 
          class="swiper-slide" 
          v-for="(item, index) in sliderList" 
          :key="index" 
          @click.native="slideClick(item, index)"
        >
          <img class="swiper-img" v-lazy="item" alt="" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'banner',
  props: {
    sliderList: {
      type: Array,
      default: ()=> ([])
    }
  },
  data: () => ({
    options: {
      speed: 500,
      disableOnInteraction: false,
      pagination: '.swiper-pagination',
      observer: true,
      observeParents: true,
      paginationType: 'fraction',
      paginationFractionRender: function (swiper, currentClassName, totalClassName) {
        console.log()
        return '<span class="' + currentClassName + '"></span>' +
              '/' +
              '<span class="' + totalClassName + '"></span>';
      }
    }
  }),
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    showSlider() {
      return this.sliderList.length
    }
  },
  methods: {
    /** banner点击 **/
    slideClick (item, index) {
      let url = item.lightUrl || item.url
      if (url) {
        // 跳转
      }
    }
  }
}
</script>

<style lang="less">
.auctions-banner {
  position: relative;
  overflow: hidden;
  height: 6.38rem;
  background: #fff;
  .swiper-container {
    border-radius: .06rem;
  }
  .swiper-img {
    vertical-align: top;
    width: 100%;
    height: 6.38rem;
    overflow: hidden;
  }
  .swiper-pagination {
    bottom: .3rem;
    left: inherit;
    right: .3rem;
    z-index: 5;
    width: .48rem;
    height: .32rem;
    line-height: .32rem;
    background:rgba(51,51,51,1);
    border-radius:.16rem;
    text-align: center;
    font-size: .16rem;
    color: #fff;
    opacity: .5;
  }
  .swiper-pagination-fraction {

  }
}
</style>
