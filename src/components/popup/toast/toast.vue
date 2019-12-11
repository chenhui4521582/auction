<template>
  <!-- 全局提示框 -->
  <transition name="van-fade">
    <div v-show="visible" class="notify-tips">
      <div class="notify-tips-text">{{ message }}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'toast',
  data() {
    return {
      visible: false,
      message: ''
    }
  },
  computed: {}
}
</script>
<style lang="less" scope>
.notify-tips {
  position: fixed;
  z-index: 9999;
  white-space: nowrap;
  left: 0;
  right: 0;
  top: 30%;
  box-sizing: border-box;
  color: #ffffff;
  text-align: center;
  .notify-tips-text {
    font-size: 0.24rem;
    background-color: rgba(51, 51, 51, 0.7);
    padding: 0.1rem;
    line-height: 0.34rem;
    border-radius: 0.06rem;
    display: inline;
    vertical-align: middle;
  }
}
</style>
