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
        <div class="week">
          <div class="buy" v-if="week.status == 0" :class="{ active: weekToggle }" @click="handleWeek()"></div>
          <div class="bought" v-else>
            <div class="progress">
              <p class="key">进度</p>
              <p class="value">（<span>1</span>/7）</p>
            </div>
          </div>
        </div>
        <ul>
          <li v-for="(item, index) in mallList" :key="index" :class="{ action: currentIndex == index }" @click="handleClickList(index)">
            <div class="icon"></div>
            <div class="coin">{{ item.coinNum | unit }}拍币</div>
            <div class="amount">{{ item.amount }}元</div>
          </li>
        </ul>
        <div class="custom" :class="{active: custom}">
          <input type="number" placeholder="自定义充值金额(≥1元)" v-model.number="custom" @input="handleInput" />
          <div class="clear" v-if="custom" @click="clear"></div>
        </div>
      </div>
      <div class="footer">
        <div class="buy-btn" @click="gotoPay">立即支付</div>
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
    weekToggle: false,
    mallList: [],
    currentIndex: null,
    custom: ''
  }),
  filters: {
    unit (value) {
      if (value) {
        let valueArr = value.split('').reverse()
        valueArr.splice(3, 0, ',')
        return valueArr.reverse().join('')
      }
    }
  },
  methods: {
    handleWeek () {
      this.weekToggle = !this.weekToggle
      this.currentIndex = null
    },
    handleClickList (index) {
      this.currentIndex = index
      this.weekToggle = false
    },
    handleInput (evnet) {
      this.currentIndex = null
      this.weekToggle = false
    },
    /** 清除自定义加钱输入 **/
    clear () {
      this.custom = ''
    },
    /** 获取周卡 **/
    _getWeek () {
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
    _getMallList () {
      Services.getMallList().then(res => {
        let { code, data, message } = _get(res, 'data')
        if (code == 200) {
          this.mallList = _get(res, 'data.data')
        }
      })
    },
    /** 去支付 **/
    gotoPay () {
      this.$router.push({
        name: 'paymentList'
      })
    }
  },
  mounted () {
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
        .buy {
          width: 100%;
          height: 100%;
          background: url(../img/week-bg.png) no-repeat center top / 100% 100%;
          &.active {
            background: url(../img/week-active.png) no-repeat center top / 100%
              100%;
          }
        }
        .bought {
          position: relative;
          width: 100%;
          height: 100%;
          background: url(../img/week-bg.png) no-repeat center top / 100% 100%;
          .progress {
            position: absolute;
            right: 0;
            top: 0;
            padding-right: 0.2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            .key {
              margin-bottom: 0.1rem;
              font-size: 0.2rem;
              color: #999999;
            }
            .value {
              font-size: 0.24rem;
              color: #333;
              span {
                color: #ffbd3a;
              }
            }
          }
        }
      }
      ul {
        overflow: hidden;
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
          &.action {
            background: url(../img/list-active.png) no-repeat center top / 100%
              100%;
            border: none;
            .icon {
              background: url(../img/list-icon-active.png) no-repeat center top /
                100% 100%;
            }
          }
          .icon {
            position: absolute;
            right: 0;
            top: 0;
            width: 0.88rem;
            height: 0.28rem;
            background: url(../img/list-icon.png) no-repeat center top / 100%
              100%;
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
      .custom {
        padding: 0 0.24rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #ffe69c;
        border-radius: 0.1rem;
        &.active {
          box-shadow: 0px 0px 6px rgba(255, 230, 156, 1);
        }
        input {
          height: 0.88rem;
          padding: 0.22rem 0;
          line-height: 0.44rem;
        }
        .clear {
          width: 0.24rem;
          height: 0.24rem;
          background: url(../img/clear-icon.png) no-repeat center center / 100%
            100%;
        }
      }
    }
    .footer {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      height: 0.98rem;
      padding: 0.1rem 0;
      background: #fff;
      border-top: 1px solid #f0f0f0;
      .buy-btn {
        margin: 0 auto;
        width: 7.02rem;
        height: 0.78rem;
        line-height: 0.88rem;
        text-align: center;
        color: #333;
        font-size: 0.3rem;
        background: linear-gradient(
          267deg,
          rgba(255, 201, 74, 1) 0%,
          rgba(251, 231, 79, 1) 100%
        );
        border-radius: 3rem;
      }
    }
  }
}
</style>
