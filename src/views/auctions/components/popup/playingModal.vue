<template>
  <div class="playing-modal" id="Modal" @touchmove.stop>
    <div class="mask" v-if="auction.showPlaying"></div>
    <transition name="fade">
      <div class="center" v-if="auction.showPlaying">
        <div class="title">
          玩法指南
          <img
            class="close"
            src="../../img/close-icon.png"
            alt=""
            @click="hidePlaying"
          />
        </div>
        <div class="text">
          1、所有商品起拍价均为<span>0元</span>，每次出价都
          <span>消耗100拍币，每次加价后的商品价格递增0.1元。</span><br />
          2、竞拍倒计时为<span>10秒</span>，您出价后该商品的倒计时将被自动重置；如没有其他用户对该商品出价，倒计时归零时，您便成功拍得商品。<br />
          3、您若成功拍得商品，请在<span>24小时内</span>以成交价购买竞拍商品。超过24小时未付款，视为放弃。<br />
          4、严禁通过任何违规操作参与竞拍，不得使用任何技术手段进行作弊。平台一经发现将永久取消您参与资格，并在活动页面予以公示。欢迎用户对任何违规行为举报，举报电话：400-865-5778，一经核实给予奖励。<br />
          5、用户头像、昵称禁止包含涉黄、涉政、涉赌等各种敏感信息，禁止包含影响平台正常运营的各种敏感词。一经发现，平台有权修改；如多次违规，平台有权做账号封停处理。
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import newUtils from '@/utils/utils'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'playingModal',
  computed: {
    ...mapState(['auction'])
  },
  methods: {
    ...mapMutations({
      closePlayingModal: 'SET_PLAYING_MODAL'
    }),
    /** 关闭玩法指南详情弹框 **/
    hidePlaying() {
      /*vuex mutations 关闭玩法指南详情*/
      this.closePlayingModal(false)
    }
  },
  watch: {
    'auction.showPlaying'(newValue) {
      if (newValue) {
        newUtils.ScrollNoMove()
      } else {
        newUtils.ScrollMove()
      }
    }
  }
}
</script>
<style scoped lang="less">
.playing-modal {
  position: fixed;
  z-index: 11;
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 11;
    background: rgba(0, 0, 0, 0.5);
  }
  .center {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
    background: #fff;
    border-radius: 10px 10px 0px 0px;
    .title {
      position: relative;
      height: 1.1rem;
      line-height: 1.1rem;
      color: #333;
      text-align: center;
      font-size: 0.36rem;
      font-weight: bold;
      .close {
        position: absolute;
        right: 0.34rem;
        top: 0.42rem;
        width: 0.27rem;
        height: 0.27rem;
      }
    }
    .text {
      padding: 0 0.58rem 0.5rem;
      font-size: 0.28rem;
      overflow: scroll;
      -webkit-overflow-scrolling: touch; /* ios5+ */
      color: #333;
      line-height: 0.48rem;
      span {
        color: #f44236;
      }
    }
  }
}
.center.fade-enter {
  transform: translate(0, 100%);
}
.center.fade-enter-to {
  transform: translate(0, 0);
}
// .fade-enter, .fade-leave-to {
//   background: #FFC20F;
//   // transform: translate(0, -100%)
// }
// .fade-enter-to {
//    transform: translate(0, 0)
// }
// .fade-leave {
//   transform: translate(0, 0)
// }

.fade-enter-active {
  transition: all 0.3s;
}
</style>
