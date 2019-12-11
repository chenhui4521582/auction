<template>
  <div class="strategy">
    <div class="title">
      <div class="name">
        竞拍攻略
      </div>
      <div class="check">
        拍中必看<img src="../img/right-icon.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'auctionStrategy'
}
</script>
<style scoped lang="less">
.strategy {
  margin-bottom: .2rem;
  padding: 0 .24rem;
  background: #fff;
  .title {
    height: .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      font-size: .28rem;
      color: #333;
      font-weight: 600;
    }
    .check {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: .24rem;
      color: #999;
      img {
        margin-left: .08rem;
        display: block;
        width: .09rem;
        height: .17rem;
      }
    }
  }
}
</style>