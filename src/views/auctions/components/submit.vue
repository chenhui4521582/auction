<template>
  <div class="submit">
    <div class="user-amount">
      <div class="wrap">
        <img class="amount-icon" src="../img/amount-icon.png" alt="" />
        <span>{{ 2880000000000888 | unit }}</span>
        <img class="add-icon" src="../img/add-icon.png" alt="" />
      </div>
    </div>
    <!-- 没有托管 -->
    <template v-if="!isEntrust">
      <div class="entrust-btn">
        <div class="openEntrust" @click="openEntrust">委托加价</div>
        <img
          src="../img/setting1-icon.png"
          alt=""
          class="setting"
          @click="openSetting"
        />
      </div>
      <div class="commit-btn">
        <img src="../img/submit-icon.png" alt="" />
        <div class="text">
          <p>出价</p>
          <p>100拍币/次</p>
        </div>
      </div>
    </template>
    <!-- 托管中 -->
    <template v-if="isEntrust">
      <div class="entrust-info">
        <p>已委托加价5次</p>
        <p>间隔5s 限额5w</p>
      </div>
      <div class="cancel-entrust" @click="hideEntrust">
        取消委托
      </div>
      <div class="entrust-setting" @click="openSetting">
        <img src="../img/setting-icon.png" alt="" />
      </div>
    </template>
    <!-- 设置弹框 -->
    <setting-modal v-model="isSetting" />
  </div>
</template>
<script>
import SettingModal from './popup/settingModal'
export default {
  name: 'submit',
  data: () => ({
    /** 是否托管 **/
    isEntrust: false,
    /** 是否显示托管设置 **/
    isSetting: false
  }),
  components: {
    SettingModal
  },
  methods: {
    /** 打开托管 **/
    openEntrust() {
      this.isEntrust = true
    },
    /** 关闭托管 **/
    hideEntrust() {
      this.isEntrust = false
    },
    /** 去支付 **/
    gotoPay() {},
    /** 出价 **/
    commit() {},
    /** 打开设置 **/
    openSetting() {
      this.isSetting = true
    }
  },
  mounted() {}
}
</script>
<style scoped lang="less">
.submit {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  height: 0.98rem;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  .user-amount {
    width: 2.5rem;
    height: 0.98rem;
    padding: 0.21rem 0;
    display: flex;
    justify-content: center;
    .wrap {
      padding: 0 0.08rem 0 0.04rem;
      display: flex;
      align-items: center;
      height: 0.56rem;
      background: #f9f9f7;
      border-radius: 0.04rem;
      .amount-icon {
        flex-shrink: 0;
        width: 0.32rem;
        height: 0.32rem;
      }
      .add-icon {
        flex-shrink: 0;
        width: 0.28rem;
        height: 0.28rem;
      }
      span {
        margin: 0 0.12rem 0 0.08rem;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 1.5rem;
        font-size: 0.24rem;
        color: #333333;
        white-space: nowrap;
      }
    }
  }
  .entrust-btn {
    width: 2.5rem;
    height: 0.98rem;
    background: #ffc20f;
    font-size: 0.32rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    .openEntrust {
      margin-right: 0.16rem;
      padding-right: 0.26rem;
      height: 0.32rem;
      line-height: 0.32rem;
      border-right: 1px solid #fff;
    }
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
  }
  .commit-btn {
    width: 2.5rem;
    height: 0.98rem;
    background: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 0.5rem;
      height: 0.5rem;
    }
    .text {
      padding: 0.1rem 0 0 0.26rem;
      font-size: 0.2rem;
      color: #ffffff;
      text-align: center;
      p {
        &:first-child {
          line-height: 0.44rem;
          font-size: 0.32rem;
          font-weight: 600;
        }
        &:last-child {
          line-height: 0.28rem;
        }
      }
    }
  }
  .entrust-info {
    padding-top: 0.18rem;
    width: 2.32rem;
    height: 0.98rem;
    background: #fff;
    font-size: 0.24rem;
    color: #666666;
    text-align: center;
    p {
      &:first-child {
        line-height: 0.34rem;
      }
      &:last-child {
        line-height: 0.28rem;
        font-size: 0.2rem;
        color: #cccccc;
      }
    }
  }
  .cancel-entrust {
    width: 1.8rem;
    height: 0.98rem;
    background: #ffc94a;
    line-height: 0.98rem;
    text-align: center;
    font-size: 0.32rem;
    color: #ffffff;
  }
  .entrust-setting {
    width: 0.88rem;
    height: 0.98rem;
    background: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 0.36rem;
      height: 0.36rem;
    }
  }
}
</style>
