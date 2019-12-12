<template>
  <div class="mall">
    <div class="wrap">
      <div class="my-info">
        <div class="name">我的拍币</div>
        <div class="price">10,888</div>
      </div>
      <div class="title">
        <div class="name">充值金额</div>
        <div class="unit">（充值比例:1元=1000拍币）</div>
      </div>
      <div class="list">
        <div class="week" :class="{ active: weekToggle }" @click="handleWeek(0)">
          <div class="buy" v-if="week.status == 0"></div>
          <div class="bought" v-else></div>
        </div>

        <ul>
          <li
            v-for="(item, index) in mallList"
            :key="index"
            :class="{ action: currentIndex == index }"
            @click="handleClickList"
          >
            <div class="icon"></div>
            <div class="coin">{{ item.coinNum | unit }}拍币</div>
            <div class="amount">{{ item.amount }}元</div>
          </li>
        </ul>
        <div class="custom">
          <input type="text" placeholder="自定义充值金额(≥1元)" />
        </div>
      </div>
      <div class="footer">
        <div class="buy-btn"></div>
      </div>
    </div>
  </div>
</template>
<script>
import _get from 'lodash.get'
import Services from '@/services/payment'
export default {
  name: 'paymentMall',
  data: () => ({
    week: {},
    mallList: [],
    currentIndex: null,
    weekToggle: false
  }),
  filters: {
    unit(value) {
      if (value) {
        let valueArr = value.split('').reverse()
        valueArr.splice(3, 0, ',')
        return valueArr.reverse().join('')
      }
    }
  },
  methods: {
    handleWeek() {
      this.weekToggle = !this.weekToggle
      if (this.weekToggle) {
        this.currentIndex = null
      }
    },
    handleClickList(index) {
      this.currentIndex = index
    },
    /** 获取周卡 **/
    _getWeek() {
      Services.getWeek().then(res => {
        let { code, data, message } = _get(res, 'data')
        if (code == 200) {
          this.week = _get(res, 'data.data')
          if (this.week.status == 0) {
            this.currentIndex = null
          } else {
            this.currentIndex = 0
          }
        }
      })
    },
    /** 获取商城列表 **/
    _getMallList() {
      Services.getMallList().then(res => {
        let { code, data, message } = _get(res, 'data')
        if (code == 200) {
          this.mallList = _get(res, 'data.data')
        }
      })
    }
  },
  mounted() {
    this._getWeek()
    this._getMallList()
  }
}
</script>
<style lang="less" scoped>
.mall {
  min-height: 100vh;
  padding: 0.2rem 0.24rem 0.98rem;
  background: #fafafa;
  .wrap {
    background: #fff;
    .my-info {
      padding-left: 0.44rem;
      display: flex;
      justify-content: flex-start;
      height: 0.9rem;
      background: url(../img/user-info.png) no-repeat center top / 100% 100%;
      .name {
        margin-right: 0.1rem;
        font-size: 0.24rem;
        color: #333333;
        line-height: 1.05rem;
      }
      .price {
        font-size: 0.42rem;
        font-weight: 600;
        color: #333;
        line-height: 0.94rem;
      }
    }
    .title {
      padding-left: 0.24rem;
      display: flex;
      justify-content: flex-start;
      height: 0.84rem;
      border-bottom: 1px solid #f0f0f0;
      .name {
        margin-right: 0.1rem;
        font-size: 0.36rem;
        color: #333333;
        font-weight: 600;
        line-height: 0.84rem;
      }
      .unit {
        font-size: 0.24rem;
        color: #ccc;
        line-height: 0.94rem;
      }
    }
    .list {
      padding: 0.2rem 0.3rem;
      .week {
        margin-bottom: 0.2rem;
        height: 1.2rem;
        &.active {
          .buy {
            background: url(../img/week-active.png) no-repeat center top / 100% 100%;
          }
        }
        .buy {
          width: 100%;
          height: 100%;
          background: url(../img/week-bg.png) no-repeat center top / 100% 100%;
        }
        .bought {
          width: 100%;
          height: 100%;
          background: url(../img/week-active.png) no-repeat center top / 100% 100%;
        }
      }
      ul {
        li {
          position: relative;
          overflow: hidden;
          margin: 0 0.2rem 0.24rem 0;
          float: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 3.1rem;
          height: 1.1rem;
          border: 1px solid #ffe69c;
          border-radius: 0.1rem;
          &:nth-child(even) {
            margin: 0 0 0.24rem 0;
          }
          .icon {
            position: absolute;
            right: 0;
            top: 0;
            width: 0.88rem;
            height: 0.28rem;
            background: url(../img/list-icon.png) no-repeat center top / 100% 100%;
          }
          .coin {
            margin-bottom: 0.1rem;
            font-size: 0.28rem;
            color: #333333;
            font-weight: 600;
          }
          .amount {
            font-size: 0.24rem;
            color: #333333;
          }
        }
      }
    }
    .footer {
    }
  }
}
</style>
