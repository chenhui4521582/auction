<template>
  <div class="detail">
    <div class="title">
      <div class="name">
        商品详情
      </div>
    </div>
    <div class="center">
      <div class="item-img" v-for="(item, index) in detailImg" :key="index">
        <img v-lazy="item.detailImg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'auctionDetail',
  props: {
    detailImg: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
<style scoped lang="less">
.detail {
  margin-bottom: .2rem;
  background: #fff;
  .title {
    padding: .2rem .24rem;
    height: .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E0E0E0;
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
  .center {
    padding: .32rem .32rem .28rem;
    img {
      vertical-align: top;
      width: 100%;
      height:   100%;
    }
  }
}
</style>