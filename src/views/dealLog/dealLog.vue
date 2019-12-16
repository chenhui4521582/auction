<template>
  <div class="deal-log" ref="box">
    <better-scroll :data="list" :probeType="3" :listenScroll="true" @scroll="onScroll">
      <ul ref="wrap">
        <li v-for="(item, index) in list" :key="index">
          <div class="time">
            {{ item.endTime | formatTime }}
          </div>
          <div class="detail">
            <div class="deal-img">
              <img v-lazy="item.defaultGoodsImage" alt="" />
              <div class="type">
                <img src="./img/success-icon.png" alt="" />
                <span>已成交</span>
              </div>
            </div>
            <div class="deal-detail">
              <div class="goods-name">{{ item.goodsName }}</div>
              <div class="nickname">
                <span class="key">成交人：</span>
                <span class="value">{{ item.nickname }}</span>
              </div>
              <div class="market-price">
                <span class="key">市场价：</span>
                <span class="value">¥{{ item.marketPrice }}</span>
              </div>
              <div class="auction-price">
                <span class="key">成交价：</span>
                <span class="value">¥{{ item.currentPrice }}</span>
              </div>
            </div>
            <div class="deal-btn">
              <div class="price-rate">{{ item.priceRate }}</div>
              <p>节省</p>
              <div class="go-auction">
                立即拍
              </div>
            </div>
          </div>
        </li>
      </ul>
    </better-scroll>
    <loading v-if="lock" />
  </div>
</template>
<script>
import BetterScroll from '@/components/betterScroll/betterScroll'
import { getDealLog } from '@/services/index'
import _get from 'lodash.get'
export default {
  name: 'dealLog',
  data: () => ({
    list: [],
    lock: false
  }),
  components: {
    BetterScroll
  },
  methods: {
    _getDealLog() {
      console.log('拉接口')
      if (this.lock) {
        return false
      }
      this.lock = true
      getDealLog()
        .then(res => {
          let { code, data, message } = _get(res, 'data')
          this.lock = false
          if (code == 200) {
            this.list = this.list.concat(_get(res, 'data.data', []))
          }
        })
        .catch(error => {
          this.lock = false
        })
    },
    onScroll({ y }) {
      let box = this.$refs.box.clientHeight
      let scrollBox = this.$refs.wrap.clientHeight
      let entPosition = scrollBox - box
      if (-y >= entPosition) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this._getDealLog()
        }, 200)
      }
    }
  },
  mounted() {
    this._getDealLog()
  }
}
</script>
<style scoped lang="less">
.deal-log {
  overflow: hidden;
  height: 100vh;
  padding-top: 0.18rem;
  background: #e0e0e0;
  ul {
    li {
      padding: 0 0.32rem;
      margin-bottom: 0.16rem;
      background: #fff;
      .time {
        height: 0.66rem;
        line-height: 0.66rem;
        font-size: 0.24rem;
        color: #555;
        border-bottom: 1px solid #e0e0e0;
      }
      .detail {
        padding: 0.3rem 0;
        display: flex;
        justify-content: space-between;
        .deal-img {
          position: relative;
          flex-shrink: 0;
          margin-right: 0.16rem;
          width: 1.7rem;
          height: 1.7rem;
          border: 1px solid #f0f0f0;
          img {
            vertical-align: top;
            width: 100%;
            height: 100%;
          }
          .type {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0.4rem;
            background: #ff8a3a;
            line-height: 0.4rem;
            text-align: center;
            font-size: 0.24rem;
            color: #fff;
            img {
              margin: 0.06rem 0.08rem 0 0;
              width: 0.28rem;
              height: 0.28rem;
            }
          }
        }
        .deal-detail {
          margin-right: 0.2rem;
          width: 3.4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .key {
            margin-right: 0.1rem;
            font-size: 0.24rem;
            color: #888888;
          }
          .value {
            font-size: 0.24rem;
            color: #222222;
          }
          .goods-name {
            margin-bottom: 0.1rem;
            font-size: 0.28rem;
            font-weight: 600;
            color: #222222;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .auction-price {
            .value {
              color: #f44336;
            }
          }
        }
        .deal-btn {
          flex-shrink: 0;
          width: 1.38rem;
          font-size: 0.24rem;
          color: #888;
          text-align: center;
          .price-rate {
            color: #ff8a3a;
            font-size: 0.48rem;
          }
          p {
            margin: 0.1rem 0;
          }
          .go-auction {
            width: 1.3rem;
            height: 0.5rem;
            line-height: 0.5rem;
            background: #f44336;
            border-radius: 0.1rem;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
