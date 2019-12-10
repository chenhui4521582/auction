<template>
  <div class="history-log">
    <div class="title">
      <div class="name">
        往期成交
      </div>
      <div class="check" @click="openModal">
        最近20场<img src="../img/right-icon.png" alt="" />
      </div>
    </div>
    <div class="list" v-if="showHistoryList">
      <div class="list-title">
        <div class="name">成交人</div>
        <div class="price">成交价</div>
        <div class="time">时间</div>
      </div>
      <ul>
        <template v-for="(item, index) in auction.historyAuctionList">
          <li v-if="index < 3" :key="index">
            <div class="name">
              {{ item.nickname }}
            </div>
            <div class="price">¥{{ item.price }}</div>
            <div class="time">
              {{ item.endTime | formatTime('m-d h:m:s') }}
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'historyAuction',
  computed: {
    ...mapState(['auction']),
    showHistoryList() {
      return this.auction.historyAuctionList.length
    }
  },
  methods: {
    ...mapActions({
      _getHistoryAuctionList: 'getHistoryAuctionList'
    }),
    ...mapMutations({
      openHisotyAuctionModal: 'SET_HISTORYAUCTION_MODAL'
    }),
    openModal() {
      /*vuex mutations 打开往期成交详情*/
      this.openHisotyAuctionModal(true)
    }
  },
  mounted() {
    /*vuex actions 获取往期成交数据*/
    this._getHistoryAuctionList()
  }
}
</script>
<style lang="less" scoped>
.history-log {
  background: #fff;
  margin-bottom: 0.2rem;
  .title {
    padding: 0.2rem 0.24rem 0.2rem;
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
  .list {
    padding: 0.2rem 0.24rem 0;
    .list-title {
      height: 0.6rem;
      display: flex;
      justify-content: flex-start;
      line-height: 0.6rem;
      background: #fafafa;
      font-size: 0.24rem;
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
      height: 0.8rem;
      display: flex;
      justify-content: flex-start;
      line-height: 0.8rem;
      background: #fff;
      font-size: 0.28rem;
      color: #666;
      border-bottom: 1px solid #f0f0f0;
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
