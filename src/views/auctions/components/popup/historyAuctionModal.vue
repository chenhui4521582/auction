<template>
  <div class="playing-modal" id="Modal" @touchmove.stop>
    <div class="mask" v-if="auction.showHistoryAuction"></div>
    <transition name="fade">
      <div class="center" v-if="auction.showHistoryAuction">
        <div class="title" ref="title">
          近20期成交价
          <img
            class="close"
            src="../../img/close-icon.png"
            alt=""
            @click="hidePlaying"
          />
        </div>
        <div class="wrap" ref="wrap">
          <div class="price">
            <div class="item">
              <p class="num">{{ minPrice || '' }}</p>
              <p class="type">最低（元）</p>
            </div>
            <div class="item">
              <p class="num">{{ avragePrice || '' }}</p>
              <p class="type">平均（元）</p>
            </div>
            <div class="item">
              <p class="num">{{ maxPrice || '' }}</p>
              <p class="type">最高（元）</p>
            </div>
          </div>
          <div class="echarts">
            <v-chart :options="options" :auto-resize="true"></v-chart>
          </div>
          <div class="list" ref="list">
            <div class="nav">
              <div class="item">用户</div>
              <div class="item">成交价</div>
              <div class="item">时间</div>
            </div>
            <div class="items">
              <div
                class="item"
                v-for="(item, index) in auction.historyAuctionList"
                :key="index"
              >
                <span>{{ item.nickname }}</span>
                <span>¥{{ item.price }}</span>
                <span>{{ item.endTime | formatTime('m-d h:m:s') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
Vue.component('v-chart', ECharts)
import newUtils from '@/utils/utils'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'historyAuction',
  data: () => ({
    options: {},
    avragePrice: '',
    maxPrice: '',
    minPrice: ''
  }),
  computed: {
    ...mapState(['auction'])
  },
  methods: {
    ...mapMutations({
      closeHisotyAuctionModal: 'SET_HISTORYAUCTION_MODAL'
    }),
    ...mapActions({
      _getHistoryAuctionList: 'getHistoryAuctionList'
    }),
    /** 关闭往期成交弹框 **/
    hidePlaying() {
      /*vuex mutations 关闭往期成交详情*/
      this.closeHisotyAuctionModal(false)
    },
    /** 展示数据 **/
    echartsData() {
      let arr = []
      this.auction.historyAuctionList.forEach(item => {
        if (item.price) {
          arr.push(item.price)
        }
      })
      return arr
    },
    /** 最高成交价 **/
    maxData() {
      /** 第一条数据价格 **/
      let maxData = this.auction.historyAuctionList[0].price
      this.auction.historyAuctionList.forEach(item => {
        if (item.price > maxData) {
          maxData = item.price
        }
      })
      return maxData
    },
    /** 最低成交价 **/
    minData() {
      /** 第一条数据价格 **/
      let minData = this.auction.historyAuctionList[0].price
      this.auction.historyAuctionList.forEach(item => {
        if (item.price < minData) {
          minData = item.price
        }
      })
      return minData
    },
    /** 平均成交价 **/
    avrageData() {
      let length = this.auction.historyAuctionList.length
      /** 第一条数据价格 **/
      let allData = 0
      this.auction.historyAuctionList.forEach(item => {
        if (item.price) {
          allData += item.price
        }
      })
      return (allData / length).toFixed(2)
    },
    /** 浮动导航栏 **/
    scrollFiexd() {
      this.$nextTick(() => {
        let element = this.$refs.wrap
        if (element) {
          let listScrollTop =
            this.$refs.list.offsetTop - this.$refs.title.clientHeight
          element.addEventListener('scroll', event => {
            let scrollTop = element.scrollTop
            if (scrollTop >= listScrollTop) {
              this.$refs.list.classList.add('fixed')
            } else {
              this.$refs.list.classList.remove('fixed')
            }
          })
        }
      })
    }
  },
  mounted() {
    /*vuex actions 获取往期成交数据*/
    this._getHistoryAuctionList()
  },
  watch: {
    'auction.showHistoryAuction'(newValue) {
      if (newValue) {
        this.scrollFiexd()
        newUtils.ScrollNoMove()
      } else {
        newUtils.ScrollMove()
      }
    },
    'auction.historyAuctionList'(newValue) {
      if (newValue.length) {
        this.avragePrice = this.avrageData()
        this.maxPrice = this.minData()
        this.minPrice = this.maxData()
        let echartsData = this.echartsData()
        this.options = {
          grid: {
            top: '8%',
            left: '0',
            right: '0',
            bottom: '0',
            containLabel: true
          },
          title: {
            show: false
          },

          xAxis: {
            type: 'category',
            data: [
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12',
              '13',
              '14',
              '15',
              '16',
              '17',
              '18',
              '19',
              '20'
            ],
            axisLine: {
              lineStyle: {
                color: '#CCC'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#CCC'
              }
            }
          },
          series: [
            {
              data: echartsData,
              type: 'line',
              itemStyle: {
                color: '#508DB0'
              }
            }
          ]
        }
      }
    }
  }
}
</script>
<style scoped lang="less">
.playing-modal {
  position: fixed;
  z-index: 11;
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 11;
    background: rgba(0, 0, 0, 0.5);
  }
  .center {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
    height: 10rem;
    background: #fff;
    border-radius: 10px 10px 0px 0px;
    .title {
      position: relative;
      height: 1.1rem;
      line-height: 1.1rem;
      color: #333;
      text-align: center;
      font-size: 0.36rem;
      font-weight: bold;
      .close {
        position: absolute;
        right: 0.34rem;
        top: 0.42rem;
        width: 0.27rem;
        height: 0.27rem;
      }
    }
    .wrap {
      padding: 0 0.32rem;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      height: 8.9rem;
      .price {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.4rem;
        background: #fafafa;
        .item {
          width: 33.33%;
          height: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .num {
            margin-bottom: 0.1rem;
            font-size: 0.32rem;
            font-weight: 600;
          }
          .type {
            font-size: 0.24rem;
            color: #999999;
          }
          &:first-child {
            .num {
              color: #f44236;
            }
          }
          &:last-child {
            .num {
              color: #fccc60;
            }
          }
        }
      }
      .echarts {
        margin-bottom: 0.2rem;
        width: 100%;
        height: 3rem;
      }
      .list {
        &.fixed {
          padding-top: 0.5rem;
          .nav {
            position: fixed;
            bottom: 8.4rem;
            left: 0.32rem;
            right: 0.32rem;
          }
        }
        .nav {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 0.5rem;
          background: #f5f5f5;
          .item {
            width: 33.33%;
            text-align: center;
            font-size: 0.24rem;
            color: #999;
          }
        }
        .items {
          .item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 0.8rem;
            border-bottom: 1px solid #f0f0f0;
            span {
              font-size: 0.28rem;
              color: #999;
              text-align: center;
              width: 33.33%;
            }
            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
}
.center.fade-enter {
  transform: translate(0, 100%);
}
.center.fade-enter-to {
  transform: translate(0, 0);
}
// .fade-enter, .fade-leave-to {
//   background: #FFC20F;
//   // transform: translate(0, -100%)
// }
// .fade-enter-to {
//    transform: translate(0, 0)
// }
// .fade-leave {
//   transform: translate(0, 0)
// }

.fade-enter-active {
  transition: all 0.3s;
}
</style>
