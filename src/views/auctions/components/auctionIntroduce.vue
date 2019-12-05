<template>
  <div class="introduce">
    <div class="title">
      <div class="name">
        拍卖须知
      </div>
    </div>
    <div class="items">
      <div class="item" v-for="(item, index) in items" :key="index">
        <span class="item-key">{{item.key}}</span>
        <span class="item-value">{{item.value}}</span>
      </div>
    </div>
      <div class="icons">
        <div class="item" v-for="(item, index) in icons" :key="index">
          <img src="../img/introduce-icon.png" alt="">
          <span>{{item}}</span>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'auctionIntroduce',
  data: ()=> ({
    items: [
      {key: '起拍价格', value: '¥0'},
      {key: '加价幅度', value: '¥0.01'},
      {key: '手续费用', value: '100拍币/次'},
      {key: '竞拍倒计时', value: '10s'}
    ],
    icons: ['零风险', '正品推荐', '极速发货', '公平公正']
  })
}
</script>
<style scoped lang="less">
.introduce {
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
  .items {
    padding: .32rem 0 .18rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .item {
      margin-bottom: .2rem;
      padding-left: .32rem;
      width: 50%;
      line-height: 1;
      font-size: .24rem;
      color: #999999;
      .item-key{
        display: inline-block;
        width: 1.34rem;
      }
      .item-value {
        color: #333333;
      }
    }
  }
  .icons {
    display: flex;
    justify-content: flex-start;
    height: .72rem;
    background: #FFFAED;
    font-size: .24rem;
    color: #666666;
    padding-left: .26rem;
    .item {
      margin-right: .55rem;
      display: flex;
      align-items: center;
      img {
        display: block;
        margin-right: .06rem;
        width: .24rem;
        height: .24rem;
      }
      span {
        height: .24rem;
        line-height: .24rem;
      }
    }
  }
}
</style>