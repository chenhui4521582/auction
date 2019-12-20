<template>
  <div class="payment-list">
    <div class="price">
      <div class="unit">¥</div>
      <div class="num">10.00</div>
    </div>
    <div class="list">
      <div class="title">选择支付方式</div>
      <ul>
        <li v-for="(item, index) in payType" :key="index" @click="handleClickList(index, item)">
          <div class="icon">
            <img v-lazy="item.icon" alt="">
          </div>
          <div class="text">
            <div class="name">{{item.name}}</div>
            <div class="desc">{{item.remark}}</div>
          </div>
          <div class="select" :class="{active: currentIndex == index}"></div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="buy-btn" @click="submit">去付款</div>
    </div>
  </div>
</template>
<script>
import { getPayType } from '@/services/payment'
import _get from 'lodash.get'
export default {
  name: 'paymentList',
  data: () => ({
    payType: [],
    currentIndex: 0,
    usedType: {}
  }),
  methods: {
    /** 获取支付方式 **/
    _getPayType () {
      getPayType().then(res => {
        let { code, data, message } = _get(res, 'data')
        if (code == 200) {
          this.payType = _get(res, 'data.data')
        }
      })
    },
    handleClickList (index, item) {
      this.currentIndex = index
      this.usedType = item
    },
    submit () {
      this.$router.push({
        name: 'paymentCallback'
      })
    }
  },
  mounted () {
    this._getPayType()
  }
}
</script>
<style lang="less" scoped>
.payment-list {
  min-height: 100vh;
  padding: 0.2rem 0.24rem 0.98rem;
  background: #fafafa;
  .price {
    margin-bottom: 0.18rem;
    height: 1.7rem;
    background: #fff;
    color: #333;
    text-align: center;
    display: flex;
    justify-content: center;
    .unit {
      margin-right: 0.1rem;
      line-height: 2rem;
      font-size: 0.28rem;
    }
    .num {
      line-height: 1.7rem;
      font-size: 0.64rem;
      font-weight: 600;
    }
  }
  .list {
    background: #fff;
    .title {
      padding-left: 0.26rem;
      height: 0.82rem;
      line-height: 0.82rem;
      font-size: 0.36rem;
      font-weight: 600;
      border-bottom: 1px solid #f0f0f0;
    }
    ul {
      li {
        position: relative;
        padding-left: 0.44rem;
        display: flex;
        align-items: center;
        height: 1.4rem;
        &:last-child {
          .text {
            border-bottom: none;
          }
        }
        .icon {
          margin-right: 0.32rem;
          width: 0.6rem;
          height: 0.6rem;
          img {
            vertical-align: top;
            width: 0.6rem;
            height: 0.6rem;
          }
        }
        .text {
          display: flex;
          flex: 1;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          border-bottom: 1px solid #f0f0f0;
          .name {
            margin-bottom: 0.15rem;
            font-size: 0.3rem;
            color: #222222;
          }
          .desc {
            font-size: 0.24rem;
            color: #888888;
          }
        }
        .select {
          position: absolute;
          right: 0.28rem;
          top: 0.46rem;
          width: 0.4rem;
          height: 0.4rem;
          background: url(../img/select-icon.png) no-repeat center center / 100%
            100%;
          &.active {
            background: url(../img/selected-icon.png) no-repeat center center /
              100%;
          }
        }
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
</style>