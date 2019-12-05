<template>
  <div class="history-log">
    <div class="title">
      <div class="name">
        往期成交
      </div>
      <div class="check">
        最近20场<img src="../img/right-icon.png" alt="">
      </div>
    </div>
    <div class="list" v-if="showList">
      <div class="list-title">
        <div class="name">成交人</div>
        <div class="price">成交价</div>
        <div class="time">时间</div>
      </div>
      <ul>
        <template v-for="(item, index) in list">
          <li v-if="index < 3" :key="index">
            <div class="name">
              {{item.name}}
            </div>
            <div class="price">
               ¥{{item.price}}
            </div>
            <div class="time">
              {{item.time}}
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'auctionUser',
  // props: {
  //   list: {
  //     type: Array,
  //     default: ()=> ([])
  //   }
  // },
  data: ()=> ({
      
    list: [
      {time: '05-30 09:32:25', name: '小蜜蜂爱跳舞', price: '19.08'},
      {time: '05-30 09:11:55', name: '追忆楠', price: '19.05'},
      {time: '05-30 09:05:25', name: '稻田的麦子', price: '19.03'},
      {time: '05-30 09:05:25', name: '稻田的麦子1', price: '19.03'}
    ]
  }),
  computed: {
    showList() {
      return this.list.length
    }
  }
}
</script>
<style lang="less" scoped>
.history-log {
  background: #fff;
  margin-bottom: .2rem;
  .title {
    padding: .2rem .24rem .2rem;
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
  .list {
    padding: .2rem .24rem 0;
    .list-title {
      height: .6rem;
      display: flex;
      justify-content: flex-start;
      line-height: .6rem;
      background: #FAFAFA;
      font-size: .24rem;
      color: #999;
      .name {
        width: 33.33%;
        text-align: center;
      }
      .price {
        width: 33.33%;
        text-align: center;
      }
      .time {
        width: 33.33%;
        text-align: center;
      }
    }
    li {
      height: .8rem;
      display: flex;
      justify-content: flex-start;
      line-height: .8rem;
      background: #fff;
      font-size: .28rem;
      color: #666;
      border-bottom: 1px solid #F0F0F0;
      &:last-child {
        border-bottom: none;
      }
      .name {
        width: 33.33%;
        text-align: center;
      }
      .price {
        width: 33.33%;
        text-align: center;
      }
      .time {
        width: 33.33%;
        text-align: center;
      }
    }
  }
}
</style>