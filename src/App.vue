<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import url("~@/assets/less/base.less");
#app {
  line-height: 1;
  font-size: 0.28rem;
  color: #333333;
}
.bgCenter(@url) {
  background: url(@url) no-repeat center center / 100% 100%;
}
</style>
