<template>
  <div class="current-msg">
    <div class="center" ref="currentMsg">
      <div class="price">
        <div class="current-price">成交价</div>
        <div class="unit">¥</div>
        <div class="num">8.86</div>
        <div class="commodity-price">¥100</div>
      </div>
      <div class="end-time">
        <div class="title">距结束仅剩</div>
        <!-- 毫秒倒计时 -->
        <count-down :time="time" />
      </div>
    </div>
  </div>
</template>
<script>
import CountDown from './countDown'
import { mapState } from 'vuex'
export default {
  name: 'currentMsg',
  data: () => ({
    time: 10000
  }),
  components: {
    CountDown
  },
  computed: {
    ...mapState(['auction'])
  },
  methods: {
    /** 浮动导航栏 **/
    scrollFixed() {
      this.$nextTick(res => {
        let navScrollTop = this.$refs['currentMsg'].offsetTop
        window.addEventListener('scroll', event => {
          let scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop
          if (scrollTop >= navScrollTop) {
            this.$refs.currentMsg.classList.add('fixed')
          } else {
            this.$refs.currentMsg.classList.remove('fixed')
          }
        })
      })
    }
  },
  mounted() {
    this.scrollFixed()
  },
  watch: {}
}
</script>
<style lang="less" scoped>
.current-msg {
  height: 1.12rem;
  .center {
    height: 1.12rem;
    display: flex;
    &.fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }
    .price {
      display: flex;
      flex: 1;
      padding-left: 0.32rem;
      height: 1.12rem;
      background: #5a595e;
      .current-price {
        line-height: 1.12rem;
        color: #ffd00b;
        font-size: 0.24rem;
      }
      .unit {
        margin: 0 0.08rem;
        line-height: 1.1rem;
        font-size: 0.36rem;
        color: #ffd00b;
      }
      .num {
        margin-right: 0.15rem;
        line-height: 1rem;
        font-size: 0.48rem;
        font-weight: 600;
        color: #ffd00b;
      }
      .commodity-price {
        text-decoration: line-through;
        line-height: 1.12rem;
        color: #ffffff;
        opacity: 0.9;
      }
    }
    .end-time {
      width: 2.5rem;
      height: 1.12rem;
      background: #ffe269;
      .title {
        padding: 0.1rem 0;
        text-align: center;
        font-size: 0.2rem;
        color: #333;
      }
    }
  }
}
</style>
