<template>
  <div class="detail">
    <div class="title">
      <div class="name">
        商品详情
      </div>
    </div>
    <div class="center">
      <div
        class="item-img"
        v-for="(item, index) in auction.detailImg"
        :key="index"
      >
        <img v-lazy="item.content" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'auctionDetail',
  computed: {
    ...mapState(['auction'])
  }
}
</script>
<style scoped lang="less">
.detail {
  background: #fff;
  .title {
    padding: 0.2rem 0.24rem;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    .name {
      font-size: 0.28rem;
      color: #333;
      font-weight: 600;
    }
    .check {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 0.24rem;
      color: #999;
      img {
        margin-left: 0.08rem;
        display: block;
        width: 0.09rem;
        height: 0.17rem;
      }
    }
  }
  .center {
    padding: 0.32rem 0.32rem 0.98rem;
    img {
      vertical-align: top;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
