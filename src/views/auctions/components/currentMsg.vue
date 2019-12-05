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
        <count-down :time="time"/>
      </div>
    </div>
  </div>  
</template>
<script>
import CountDown from './countDown'
export default {
  name: 'currentMsg',
  data: ()=> ({
    time: 10000
  }),
  components: {
    CountDown
  },
  methods: {
    /** 浮动导航栏 **/
    scrollFixed() {
      this.$nextTick(res=> {
        let navScrollTop = this.$refs['currentMsg'].offsetTop
        window.addEventListener("scroll", event => {
          let scrollTop = document.documentElement.scrollTop||document.body.scrollTop
          if(scrollTop >= navScrollTop ) {
            this.$refs.currentMsg.classList.add('fixed')
          }else {
            this.$refs.currentMsg.classList.remove('fixed')
          }
        })
      })
    }
  },
  mounted() {
    this.scrollFixed()
  }
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
      padding-left: .32rem;
      height: 1.12rem;
      background: #5A595E;
      .current-price {
        line-height: 1.12rem;
        color: #FFD00B;
        font-size: .24rem;
      }
      .unit {
        margin: 0 .08rem;
        line-height: 1.1rem;
        font-size: .36rem;
        color: #FFD00B;
      }
      .num {
        margin-right: .15rem;
        line-height: 1rem;
        font-size: .48rem;
        font-weight:600;
        color: #FFD00B;
      }
      .commodity-price {
        text-decoration:line-through;
        line-height: 1.12rem;
        color: #FFFFFF;
        opacity: .9;
      }
    }
    .end-time {
      width: 2.5rem;
      height: 1.12rem;
      background: #FFE269;
      .title {
        padding: .1rem 0;
        text-align: center;
        font-size: .2rem;
        color: #333;
      }
    }
  }
}
</style>