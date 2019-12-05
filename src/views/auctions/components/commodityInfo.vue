<template>
  <div class="commodity-info">
    <div class="name">
      {{acutionInfo.goodsName}}
    </div>
    <div class="auction-info">
      <div class="onlooker">
        <img src="../img/onlooker-icon.png" alt="">围观{{onlookerCount}}次
      </div> 
      <div class="bidder">
        <img src="../img/auction-user-icon.png" alt="">出价{{auctionUserCount}}人
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  name: 'commodityInfo',
  props: {
    acutionInfo: {
      type: Object,
      default: ()=> ({})
    },
    onlookerCount: {
      default: 0
    },
    auctionUserCount: {
      default: 0
    }
  }
}
</script>
<style lang="less" scoped>
.commodity-info {
  padding: .2rem .24rem;
  background: #fff;
  .name {
    margin-bottom: .18rem;
    color: #333333;
    font-size: .32rem;
    font-weight:600;
    line-height: .44rem;
  }
  .auction-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: .24rem;
    color: #999999;
    img {
      margin-right: .08rem;
      vertical-align: top;
      width: .28rem;
      height: .28rem;
    }
    .onlooker {
      margin-right: 1rem;
    }
  }
}
</style>