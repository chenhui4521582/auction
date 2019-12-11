<template>
  <main class="order-filling" v-if="goods">
    <address-info v-if="goods.type === 1"></address-info>
    <article class="of_product">
      <div class="product_info_wrapper">
        <img :src="goods.defaultImage | imgFilter" class="product_img" />
        <div class="product_info">
          <p class="title">{{ goods.name }}</p>
          <div class="price">
            ￥<span>{{ goods.price | numFilter }}</span>
          </div>
          <div class="count">x{{ count || 0 }}</div>
        </div>
      </div>
      <div class="order_info" v-if="goods.type === 1">
        <div class="title">配送方式</div>
        <div class="style">包邮</div>
      </div>
      <div class="order_info" v-if="goods.type === 1">
        <div class="title">订单备注</div>
        <div class="text">
          <input placeholder="选填，填写您需要的规格" />
        </div>
      </div>
    </article>
    <div class="number_wrap order_info" v-if="isShowNumber">
      <div class="title">充值号码</div>
      <div class="text">
        <input type="tel" :maxlength="numberMax" id="txtPhone" ref="txtPhone" v-model="account" :placeholder="placeholderText" />
      </div>
    </div>
    <p class="tips">下单后24小时内发货，正品承诺。</p>
    <section class="of_price border-top">
      <div class="price_wrap">
        合计金额:
        <span class="price"
          >￥<span>{{ this.payCount | numFilter(true) }}</span></span
        >
      </div>
      <div class="btn_submit" @click="submit" :class="{ disable: disableSubmit.disable }">
        提交订单
      </div>
    </section>
  </main>
</template>

<script>
import AddressInfo from './components/addressInfo'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'orderFilling',
  filters: {
    formatAddress(value) {
      if (!value) return ''
      value = value.toString()
      return value.replace(/\d+_/, '')
    },
    numFilter(value, showfixed) {
      let realVal = parseFloat(value).toFixed(2)
      if (showfixed) {
        return realVal
      }
      return parseFloat(realVal)
    }
  },
  components: { AddressInfo },
  computed: {
    ...mapState['address'],
    totalCount() {
      return this.goods.price * this.count
    },
    payCount() {
      return this.totalCount.toFixed(2)
    },
    isShowNumber() {
      // 1=实物，2=手机话费，3=手机流量，4=京东E卡，5=猫币 6=金叶子 100=滴滴 101=腾讯视频 102=优酷土豆 103=爱奇艺 104=QQ音乐 105=京东E卡(佳之易) 106=星巴克 107=肯德基 108=必胜客 109=猫眼电影
      let goodsNeedNumberArr = [2, 101, 102]
      return goodsNeedNumberArr.includes(this.goods.type)
    },
    numberMax() {
      switch (this.goods.type) {
        case 2:
        case 102:
          return 11

        default:
          return false
      }
    },
    placeholderText() {
      switch (this.goods.type) {
        case 2:
        case 102:
          return '输入手机号码'
        case 101:
          return '输入QQ号码'

        default:
          return '输入账号'
      }
    },
    //是否可以提交
    disableSubmit() {
      if (this.goods.type == 4) {
        this.goods.availableNum = this.goods.availableNum < 10 ? this.goods.availableNum : 10
      } else if (this.goods.type == 2 || this.goods.type == 3) {
        this.goods.availableNum = 1
      }

      //拍的数量是否合理
      if (this.count > this.goods.availableNum) {
        return {
          disable: true,
          msg: '数量超过了库存'
        }
      } else if (this.count < 1) {
        return {
          disable: true,
          msg: '数量不能小于1'
        }
      }
      //检查手机号填写是否符合规范
      if (this.goods.type === 2 || this.goods.type === 102) {
        if (!this.account) {
          return {
            disable: true,
            msg: '请输入充值手机号'
          }
        }
        let reg = /^1[0-9]{10}$/
        if (reg.test(this.account)) {
          return {
            disable: true,
            msg: '请输入正确的手机号码'
          }
        }
      }
      return {
        disable: false,
        msg: ''
      }
    }
  },
  data() {
    return {
      goods: {
        activityId: 0,
        activityPrice: 0,
        amount: 0,
        availableNum: 0,
        buttonText: 'string',
        buyPerson: 0,
        buyPersonList: [
          {
            headImg: 'string',
            nickname: 'string'
          }
        ],
        couponPrice: 0,
        defaultImage: 'https://file.beeplaying.com/group1/M00/3F/74/CmcEHF3uAyaAUn3qAAHPnf48OOk424.png',
        freight: 'string',
        goodsDetailList: [
          {
            content: 'string',
            type: 0
          }
        ],
        goodsIcon: 'string',
        goodsImages: 'string',
        goodsTagList: ['string'],
        id: 0,
        marketPrice: 0,
        name: '华为 HUAWEI P30 超感光徕卡三摄麒麟980处理器夜光黑华为 HUAWEI P30 超感光徕卡三摄麒麟980处理器夜光黑',
        nameSuffix: 'string',
        number: 'string',
        price: 0,
        returnDesc: 'string',
        saleDesc: 'string',
        saleNum: 0,
        status: 0,
        type: 2,
        voucherAmount: 0,
        voucherRate: 0
      },
      address: {},
      count: 0,
      account: ''
    }
  },
  methods: {
    submit() {
      if (this.disableSubmit.disable) {
        this.$Toast(this.disableSubmit.msg)
        return
      }
    }
  },
  mounted() {}
}
</script>

<style scoped lang="less">
@border-color: #bbb;
*:focus {
  outline: none;
}
.order-filling {
  background: #f8f8f8;
  min-height: 100vh;
  padding: 0.24rem;
}
#txtPhone {
  text-align: right;
}

.of_product {
  background: #fff;
  padding: 0.24rem;
  text-align: left;
  border-radius: 0.1rem;
  .product_img {
    float: left;
    width: 1.58rem;
    height: 1.58rem;
    margin-right: 0.32rem;
    background: #f7f7f9;
  }
  .product_info_wrapper {
    overflow: hidden;
  }
  .product_info {
    .title {
      font-size: 0.28rem;
      line-height: 0.4rem;
      font-weight: bolder;
      color: #222;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      -webkit-box-pack: start;
      text-overflow: ellipsis;
      margin-bottom: 0.52rem;
      height: 0.8rem;
    }
    .price {
      float: left;
      text-align: left;
      color: #ff3339;
      font-size: 0.28rem;
      line-height: 0.4rem;
      span {
        font-size: 0.36rem;
        font-weight: bolder;
      }
    }
    .count {
      float: right;
      font-size: 0.24rem;
      color: #999;
    }
  }
}
.number_wrap {
  padding: 0.24rem;
  background: #fff;
  border-radius: 0.1rem;
}
.order_info {
  margin-top: 0.32rem;
  overflow: hidden;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 0.28rem;
    line-height: 0.4rem;
    min-width: 1.6rem;
  }
  .text {
    flex: 1;
    text-align: right;
    input {
      line-height: 0.4rem;
      text-align: right;
      width: 100%;
      font-size: 0.28rem;
    }
  }
  .style {
    flex: 1;
    color: #999;
    font-size: 0.28rem;
    line-height: 0.4rem;
    text-align: right;
  }
}
.of_deduction {
  background: #fff;
  padding: 0.3rem;
  margin-top: 0.2rem;
  text-align: left;
  height: 1rem;
  overflow: hidden;
  .vochernum {
    color: #ff3339;
  }

  .title {
    float: left;
  }

  .select {
    float: right;
    margin-top: -0.17rem;
  }
}

.of_price {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1rem;
  text-align: left;
  background: #ffffff;
  .price_wrap {
    padding: 0.24rem;
    font-size: 0.32rem;
    height: 100%;

    .price {
      color: #ff3339;
      font-size: 0.28rem;
      line-height: 0.4rem;
      span {
        font-size: 0.36rem;
        font-weight: bolder;
      }
    }
  }

  .btn_submit {
    text-align: center;
    line-height: 1rem;
    font-size: 0.32rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 2.5rem;
    height: 1rem;
    color: #fff;
    background: #ff3339;
    &.disable {
      background: #fc8d77;
    }
  }
}
.tips {
  color: #ccc;
  font-size: 0.24rem;
  text-align: center;
  margin-top: 0.5rem;
}
::-webkit-input-placeholder {
  color: #ccc;
}

:-moz-placeholder {
  color: #ccc;
}

::moz-placeholder {
  color: #ccc;
}

:-ms-input-placeholder {
  color: #ccc;
}
</style>
