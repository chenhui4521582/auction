<template>
  <div class="rule">
    <div class="mask" v-if="value"></div>
    <transition name="scale">
      <div class="center" v-if="value">
        <div class="title">
          活动规则
          <div class="close" @click="hideRule"></div>
        </div>
        <div class="wrap">
          1、新人拍场仅限新注册用户参与，注册成功后XX小时内可见。<br>
          2、新人拍场为新注册用户的福利场，最多可拍中Y场； 一旦达到拍中上限，活动倒计时归零。<br>
          3、禁止通过任何违规操作参与新人拍场，一经发现永久封号处理并停发奖励。<br>
        </div>
      </div>
    </transition>
  </div>

</template>
<script>
import { newUtils } from '@/utils/utils'
export default {
  name: 'rule',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideRule () {
      this.$emit('input', false)
    }
  },
  watch: {
    value (newValue) {
      if (newValue) {
        newUtils.ScrollNoMove()
      } else {
        newUtils.ScrollMove()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.rule {
  position: fixed;
  .mask {
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .center {
    overflow: hidden;
    position: fixed;
    z-index: 2;
    left: 50%;
    top: 50%;
    width: 5.6rem;
    height: 5.2rem;
    transform: translate(-50%, -50%);
    border-radius: 0.1rem;
    .title {
      position: relative;
      height: 0.92rem;
      line-height: 0.92rem;
      font-weight: 600;
      font-size: 0.36rem;
      text-align: center;
      background: url(../img/rule-title.png) no-repeat center top / 100% 100%;
      .close {
        position: absolute;
        width: 0.27rem;
        height: 0.27rem;
        right: 0.24rem;
        top: 0.34rem;
        background: url(../img/rule-close.png) no-repeat center center / 100%
          100%;
      }
    }
    .wrap {
      height: 4.28rem;
      background: #fff;
      padding: 0.3rem;
      font-size: 0.24rem;
      color: #666;
      line-height: 0.48rem;
    }
  }
}
.center.scale-enter {
  transform: translate(-50%, -50%) scale(0);
}
.center.scale-enter-to {
  transform: translate(-50%, -50%) scale(1);
}
.center.scale-leave {
  transform: translate(-50%, -50%) scale(1);
}
.center.scale-leave-to {
  transform: translate(-50%, -50%) scale(0);
}
.center.scale-enter-active,
.center.scale-leave-active {
  transition: all 0.3s;
}
</style>