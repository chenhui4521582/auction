<template>
  <div class="playing-modal">
    <div class="mask" v-if="value"></div>
    <transition name="fade">
      <div class="center" v-if="value">
        <div class="title"></div>
        <div class="text">
          1、所有商品起拍价均为0元，每次出价都消耗100拍币，每次加价后的商品价格递增0.1元。
          2、竞拍倒计时为10秒，您出价后该商品的倒计时将被自动重置；如没有其他用户对该商品出价，倒计时归零时，您便成功拍得商品。
          3、您若成功拍得商品，请在24小时内以成交价购买竞拍商品。超过24小时未付款，视为放弃。
          4、严禁通过任何违规操作参与竞拍，不得使用任何技术手段进行作弊。平台一经发现将永久取消您参与资格，并在活动页面予以公示。欢迎用户对任何违规行为举报，举报电话：400-865-5778，一经核实给予奖励。 
          5、用 

          1、所有商品起拍价均为
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import newUtils from '@/utils/utils'
export default {
  name: 'setting',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: ()=> ({
    time: 1,
    money: 100
  }),
  computed: {
    maxTime() {
      return this.time >= 10
    },
    maxMoney() {
      return this.money >= 819000
    },
    minTime() {
      return this.time <= 1
    },
    minMoney() {
      return this.time <= 100
    }
  },
  methods: {
    /** 保存设置 **/
    saveSetting() {

    },
    /** 关闭设置弹框 **/
    hideSetting() {
      this.$emit('input', false)
    }
  },
  watch: {
    value(newValue) {
      if(newValue) {
        newUtils.ScrollNoMove()
      }else {
        newUtils.ScrollMove()
      }
    }
  }
}
</script>
<style scoped lang="less">
.setting {
  position: fixed;
  z-index: 11;
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 11;
    background: rgba(0,0,0,.5);
  }
  .center {
    padding-top: .48rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5.5rem;
    z-index: 12;
    background: #fff;
    .time,.money {
      display: flex;
      justify-content: center;
    }
    .time {
      margin-bottom: .48rem;
    }
    .money {
      margin-bottom: .34rem;
    }
    .label {
      width: 1.44rem;
      height: .8rem;
      font-size: .28rem;
      color: #333;
      text-align: left;
      line-height: .8rem;
    }
    .input {
      padding: .16rem;
      display: flex;
      justify-content: space-between;
      width: 4.2rem;
      height: .8rem;
      border: 1px solid #E0E0E0;
      .add,.remove {
        width: .48rem;
        height: .48rem;
        img {
          vertical-align: top;
          width: 100%;
          height: 100%;
        }
      }
      .value {
        width: 2.9rem;
        height: .48rem;
        line-height: .48rem;
        text-align: center;
        font-size: .28rem;
        color: #333;
      }

    }
    .explain {
      margin-bottom: .48rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .24rem;
      color: #B8B8B8;
      img {
        margin-right: .12rem;
        display: block;
        width: .24rem;
        height: .24rem;
      }
    }
    .btns {
      display: flex;
      justify-content: center;
      .cancel-btn {
        margin-right: .28rem;
        width: 2.7rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        font-size: .28rem;
        color: #333333;
        background: #F5F5F5;
        border-radius: .1rem;
      }
      .confirm-btn {
        width: 2.7rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        font-size: .28rem;
        color: #333333;
        background: #FFC20F;
        border-radius: .1rem;
      }
    }
  }

}
.center.fade-enter {
  transform: translate(0, 100%)
}
.center.fade-enter-to {
  transform: translate(0, 0)
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
  transition: all .3s;
}

</style>