<template>
  <div class="setting">
    <div class="mask" v-if="auction.showSetting"></div>
    <transition name="fade">
      <div class="center" v-if="auction.showSetting">
        <div class="time">
          <div class="label">出价间隔</div>
          <div class="input">
            <div class="add">
              <img
                v-if="!minTime"
                src="../../img/setting-remove-icon.png"
                alt=""
              />
              <img v-else src="../../img/setting-remove1-icon.png" alt="" />
            </div>
            <div class="value">{{ time }}</div>
            <div class="remove">
              <img
                v-if="!maxTime"
                src="../../img/setting-add-icon.png"
                alt=""
              />
              <img v-else src="../../img/setting-add1-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div class="money">
          <div class="label">出价限额</div>
          <div class="input">
            <div class="add">
              <img
                v-if="!minMoney"
                src="../../img/setting-remove-icon.png"
                alt=""
              />
              <img v-else src="../../img/setting-remove1-icon.png" alt="" />
            </div>
            <div class="value">{{ money }}</div>
            <div class="remove">
              <img
                v-if="!maxMoney"
                src="../../img/setting-add-icon.png"
                alt=""
              />
              <img v-else src="../../img/setting-add1-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div class="explain">
          <img src="../../img/warning-icon.png" alt="" />
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
import { mapState, mapMutaions, mapMutations } from 'vuex'
export default {
  name: 'settingModal',
  data: () => ({
    time: 1,
    money: 100
  }),
  computed: {
    ...mapState(['auction']),
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
    ...mapMutations({
      closeSettingModal: 'SET_SETTING_MODAL'
    }),
    /** 保存设置 **/
    saveSetting() {},
    /** 关闭设置弹框 **/
    hideSetting() {
      /*vuex mutations 关闭托管设置方法*/
      this.closeSettingModal(false)
    }
  },
  watch: {
    'auction.showSetting'(newValue) {
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
.setting {
  position: fixed;
  z-index: 12;
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
  }
  .center {
    padding-top: 0.48rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5.5rem;
    z-index: 12;
    background: #fff;
    .time,
    .money {
      display: flex;
      justify-content: center;
    }
    .time {
      margin-bottom: 0.48rem;
    }
    .money {
      margin-bottom: 0.34rem;
    }
    .label {
      width: 1.44rem;
      height: 0.8rem;
      font-size: 0.28rem;
      color: #333;
      text-align: left;
      line-height: 0.8rem;
    }
    .input {
      padding: 0.16rem;
      display: flex;
      justify-content: space-between;
      width: 4.2rem;
      height: 0.8rem;
      border: 1px solid #e0e0e0;
      .add,
      .remove {
        width: 0.48rem;
        height: 0.48rem;
        img {
          vertical-align: top;
          width: 100%;
          height: 100%;
        }
      }
      .value {
        width: 2.9rem;
        height: 0.48rem;
        line-height: 0.48rem;
        text-align: center;
        font-size: 0.28rem;
        color: #333;
      }
    }
    .explain {
      margin-bottom: 0.48rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.24rem;
      color: #b8b8b8;
      img {
        margin-right: 0.12rem;
        display: block;
        width: 0.24rem;
        height: 0.24rem;
      }
    }
    .btns {
      display: flex;
      justify-content: center;
      .cancel-btn {
        margin-right: 0.28rem;
        width: 2.7rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.28rem;
        color: #333333;
        background: #f5f5f5;
        border-radius: 0.1rem;
      }
      .confirm-btn {
        width: 2.7rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.28rem;
        color: #333333;
        background: #ffc20f;
        border-radius: 0.1rem;
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
