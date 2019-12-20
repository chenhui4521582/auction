<template>
  <div class="auction" v-if="!loading">
    <div class="commodity">
      <!-- 轮播 -->
      <slider />
      <!-- 拍卖师 -->
      <auctioneer />
    </div>
    <!-- 当前拍卖信息 -->
    <current-msg />
    <!-- 商品信息 -->
    <commodity-info />
    <!-- 出价排名 -->
    <auction-user />
    <!-- 往期记录 -->
    <history-log />
    <!-- 拍卖攻略 -->
    <auction-strategy />
    <!-- 拍卖需知 -->
    <auction-introduce />
    <!-- 玩法指南 -->
    <auction-playing />
    <!-- 商品详情 -->
    <auction-detail />
    <!-- 出价,托管 操作 -->
    <submit />
    <!-- 托管设置弹框 -->
    <setting-modal />
    <!-- 玩法指南详情弹框 -->
    <playing-modal />
    <!-- 往期成交弹框 -->
    <history-auction-modal />
    <!-- 往期出价弹框 -->
    <offerlog-modal />
    <!-- 新手引导 -->
    <new-user-guide />
  </div>
  <loading v-else />
</template>
<script>
import Slider from './components/slider'
import CurrentMsg from './components/currentMsg'
import Auctioneer from './components/auctioneer'
import CommodityInfo from './components/commodityInfo'
import AuctionUser from './components/auctionUser'
import HistoryLog from './components/historyLog'
import AuctionStrategy from './components/auctionStrategy'
import AuctionIntroduce from './components/auctionIntroduce'
import AuctionPlaying from './components/auctionPlaying'
import AuctionDetail from './components/auctionDetail'
import Submit from './components/submit'
import SettingModal from './components/popup/settingModal'
import PlayingModal from './components/popup/playingModal'
import HistoryAuctionModal from './components/popup/historyAuctionModal'
import OfferlogModal from './components/popup/offerLogModal'
import NewUserGuide from './components/newUserGuide'
import _get from 'lodash.get'
import { mapActions } from 'vuex'
export default {
  name: 'auction',
  data: () => ({
    loading: true
  }),
  components: {
    Slider,
    CurrentMsg,
    Auctioneer,
    CommodityInfo,
    AuctionUser,
    HistoryLog,
    AuctionStrategy,
    AuctionIntroduce,
    AuctionPlaying,
    AuctionDetail,
    Submit,
    SettingModal,
    PlayingModal,
    HistoryAuctionModal,
    OfferlogModal,
    NewUserGuide
  },
  methods: {
    ...mapActions({
      _getAuctionInfo: 'getAuctionInfo'
    })
  },
  created() {
    this._getAuctionInfo().then(res => {
      /** 数据加载成功 关闭loading **/
      this.loading = false
    })
  }
}
</script>
<style lang="less" scoped>
.auction {
  background: #fafafa;
  .commodity {
    position: relative;
  }
}
</style>
