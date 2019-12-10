<template>
  <div class="introduce">
    <div class="title">
      <div class="name">
        拍卖须知
      </div>
    </div>
    <div class="items">
      <div class="item" v-for="(item, index) in items" :key="index">
        <span class="item-key">{{ item.key }}</span>
        <span class="item-value">{{ item.value }}</span>
      </div>
    </div>
    <div class="icons">
      <div class="item" v-for="(item, index) in icons" :key="index">
        <img src="../img/introduce-icon.png" alt="" />
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'auctionIntroduce',
  data: () => ({
    items: [
      { key: '起拍价格', value: '¥0' },
      { key: '加价幅度', value: '¥0.01' },
      { key: '手续费用', value: '100拍币/次' },
      { key: '竞拍倒计时', value: '10s' }
    ],
    icons: ['零风险', '正品推荐', '极速发货', '公平公正']
  })
}
</script>
<style scoped lang="less">
.introduce {
  margin-bottom: 0.2rem;
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
  .items {
    padding: 0.32rem 0 0.18rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .item {
      margin-bottom: 0.2rem;
      padding-left: 0.32rem;
      width: 50%;
      line-height: 1;
      font-size: 0.24rem;
      color: #999999;
      .item-key {
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
    height: 0.72rem;
    background: #fffaed;
    font-size: 0.24rem;
    color: #666666;
    padding-left: 0.26rem;
    .item {
      margin-right: 0.55rem;
      display: flex;
      align-items: center;
      white-space: nowrap;
      img {
        display: block;
        margin-right: 0.06rem;
        width: 0.24rem;
        height: 0.24rem;
      }
      span {
        height: 0.24rem;
        line-height: 0.24rem;
      }
    }
  }
}
</style>
