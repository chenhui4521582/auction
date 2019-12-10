<template>
  <div class="auctions-banner">
    <div class="wrapper" v-if="showSlider">
      <swiper :options="options">
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in auction.sliderList"
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
import { mapState } from 'vuex'
export default {
  name: 'banner',
  props: {
    sliderList: {
      type: Array,
      default: () => []
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
      paginationFractionRender: function(
        swiper,
        currentClassName,
        totalClassName
      ) {
        console.log()
        return (
          '<span class="' +
          currentClassName +
          '"></span>' +
          '/' +
          '<span class="' +
          totalClassName +
          '"></span>'
        )
      }
    }
  }),
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState(['auction']),
    showSlider() {
      return this.auction.sliderList.length
    }
  },
  methods: {
    /** banner点击 **/
    slideClick(item, index) {
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
    border-radius: 0.06rem;
  }
  .swiper-img {
    vertical-align: top;
    width: 100%;
    height: 6.38rem;
    overflow: hidden;
  }
  .swiper-pagination {
    bottom: 0.3rem;
    left: inherit;
    right: 0.3rem;
    z-index: 5;
    width: 0.48rem;
    height: 0.32rem;
    line-height: 0.32rem;
    background: rgba(51, 51, 51, 1);
    border-radius: 0.16rem;
    text-align: center;
    font-size: 0.16rem;
    color: #fff;
    opacity: 0.5;
  }
  .swiper-pagination-fraction {
  }
}
</style>
