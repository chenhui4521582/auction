<template>
  <div class="setting">
    <div class="mask" v-if="value"></div>
    <transition name="fade">
      <div class="center" v-if="value">
        <div class="time">
          <div class="label">出价间隔</div>
          <div class="input">
            <div class="add">
              <img v-if="!minTime" src="../img/setting-remove-icon.png" alt="">
              <img v-else src="../img/setting-remove1-icon.png" alt="">
            </div>
            <div class="value">{{time}}</div>
            <div class="remove">
              <img v-if="!maxTime" src="../img/setting-add-icon.png" alt="">
              <img v-else src="../img/setting-add1-icon.png" alt="">
            </div>
          </div>
        </div>
        <div class="money">
          <div class="label">出价限额</div>
          <div class="input">
            <div class="add">
              <img v-if="!minMoney" src="../img/setting-remove-icon.png" alt="">
              <img v-else src="../img/setting-remove1-icon.png" alt="">
            </div>
            <div class="value">{{money}}</div>
            <div class="remove">
              <img v-if="!maxMoney" src="../img/setting-add-icon.png" alt="">
              <img v-else src="../img/setting-add1-icon.png" alt="">
            </div>
          </div>
        </div>
        <div class="explain">
          <img src="../img/warning-icon.png" alt="">
          每隔x秒自动出价（若为最高价，则不会出价）
        </div>
        <div class="btns">
          <div class="cancel-btn" @click="hideSetting">取消</div>
          <div class="confirm-btn" @click="saveSetting">确认</div>
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