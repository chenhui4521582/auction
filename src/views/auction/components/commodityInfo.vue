<template>
  <div class="commodity-info">
    <div class="name">
      {{ auction.goodsName }}
    </div>
    <div class="auction-info">
      <div class="onlooker">
        <img src="../img/onlooker-icon.png" alt="" />
        围观{{ auction.onlookerCount }}次
      </div>
      <div class="bidder">
        <img src="../img/auction-user-icon.png" alt="" />
        出价{{ auction.auctionUserCount }}人
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'commodityInfo',
  computed: {
    ...mapState(['auction'])
  }
}
</script>
<style lang="less" scoped>
.commodity-info {
  padding: 0.2rem 0.24rem;
  background: #fff;
  .name {
    margin-bottom: 0.18rem;
    color: #333333;
    font-size: 0.32rem;
    font-weight: 600;
    line-height: 0.44rem;
  }
  .auction-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.24rem;
    color: #999999;
    img {
      margin-right: 0.08rem;
      vertical-align: top;
      width: 0.28rem;
      height: 0.28rem;
    }
    .onlooker {
      margin-right: 1rem;
    }
  }
}
</style>
