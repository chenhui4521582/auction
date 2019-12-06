<template>
  <div class="index">
    <!-- 首页轮播图 -->
    <banner />
    <!-- 获取跑马灯 -->
    <notice />
    <div class="go-payment-title">
      <div class="name">充值中心</div>
      <div class="operation">
        最高加赠15%
      </div>
    </div>
    <!-- 热门拍场 -->
    <hot-auction />
    <!-- 新用户拍场 -->
    <new-auction />
    <!-- 拍卖列表 -->
    <auction-list />
  </div>
</template>
<script>
import Banner from './components/slider'
import Notice from './components/notice'
import HotAuction from './components/hotAuction'
import AuctionList from './components/auctionList'
import NewAuction from './components/newAuction'
export default {
  name: 'index',
  components: {
    Banner,
    Notice,
    HotAuction,
    NewAuction,
    AuctionList
  }
}
</script>
<style lang="less" scoped>
.index {
  overflow-x: hidden;
  padding: 0.16rem 0 0.16rem;
  .go-payment-title {
    margin: 0 0.24rem 0.24rem 0.24rem;
    padding: 0 0.32rem 0 0.24rem;
    height: 0.78rem;
    background: url(./img/payment_bg.png) no-repeat center top / 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      font-size: 0.28rem;
      color: #333;
      font-weight: bold;
    }
    .operation {
      padding-right: 0.21rem;
      background: url(./img/right-icon.png) no-repeat right center / 0.09rem
        0.17rem;
      font-size: 0.24rem;
      color: #333;
    }
  }
}
</style>
