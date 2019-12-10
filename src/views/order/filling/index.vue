<template>
  <main class="order-filling" v-if="goods">
    <address-info @setAddress="setAddress"></address-info>
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
      <div class="order_info" v-if="goods.type === 2 && !this.goods.chipPiece">
        <div class="title">手机号</div>
        <div class="number">
          <input type="tel" maxlength="11" id="txtPhone" ref="txtPhone" v-model="phone" placeholder="请输入充值手机号" />
        </div>
      </div>
      <div class="order_info" v-if="goods.type === 1">
        <div class="title">配送方式</div>
        <div class="style">包邮</div>
      </div>
      <div class="order_info" v-if="goods.type === 1">
        <div class="title">订单备注</div>
        <div class="number">
          <input placeholder="选填，填写您需要的规格" />
        </div>
      </div>
    </article>
    <p class="tips">下单后24小时内发货，正品承诺。</p>
    <section class="of_price border-top">
      <div class="price_wrap">
        合计金额:
        <span class="price">￥<span>{{ this.payCount | numFilter(true) }}</span></span>
      </div>
      <div class="btn_submit" @click="submit" :class="{ disable: disableSubmit.disable }">
        提交订单
      </div>
    </section>
  </main>
</template>

<script>
import AddressInfo from './components/addressInfo'
export default {
  name: 'orderFilling',
  filters: {
    formatAddress (value) {
      if (!value) return ''
      value = value.toString()
      return value.replace(/\d+_/, '')
    },
    numFilter (value, showfixed) {
      let realVal = parseFloat(value).toFixed(2)
      if (showfixed) {
        return realVal
      }
      return parseFloat(realVal)
    }
  },
  components: { AddressInfo },
  computed: {
    params () {
      return {
        name: this.address ? 'addressList' : 'addAddress',
        query: {}
      }
    },
    isAuction () {
      return this.params.query.auctionId > 0
    },
    totalCount () {
      return this.goods.price * this.count
    },
    payCount () {
      return this.totalCount.toFixed(2)
    },

    //是否可以提交
    disableSubmit () {
      if (this.goods.type == 4) {
        this.goods.availableNum =
          this.goods.availableNum < 10 ? this.goods.availableNum : 10
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
      if (this.goods.type === 2 && !this.goods.chipPiece) {
        if (!this.phone) {
          return {
            disable: true,
            msg: '请输入充值手机号'
          }
        }
        let reg = /^1[0-9]{10}$/
        if (reg.test(this.phone)) {
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
  data () {
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
        defaultImage:
          'https://file.beeplaying.com/group1/M00/3F/74/CmcEHF3uAyaAUn3qAAHPnf48OOk424.png',
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
        name:
          '华为 HUAWEI P30 超感光徕卡三摄麒麟980处理器夜光黑华为 HUAWEI P30 超感光徕卡三摄麒麟980处理器夜光黑',
        nameSuffix: 'string',
        number: 'string',
        price: 0,
        returnDesc: 'string',
        saleDesc: 'string',
        saleNum: 0,
        status: 0,
        type: 1,
        voucherAmount: 0,
        voucherRate: 0
      },
      address: {},
      count: 0
    }
  },
  methods: {
    setDefaultAddress (address) { this.address = address },
    submit () { }
  },
  mounted () {
    // Promise.all([]).then(results => { })
  }
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

.of_address {
  font-family: "PingFangSC-Regular";
  position: relative;
  background: #fff;
  width: 100%;
  padding: 0.25rem;
  padding-left: 1rem;
  overflow: hidden;
  a {
    color: #2c3e50;
  }

  .icon {
    position: absolute;
    top: 0.28rem;
    left: 0.3rem;

    i {
      font-size: 0.5rem;
    }
  }

  .btn_add {
    float: left;
    font-size: 0.32rem;
    color: #333;
  }
  .icon-plus {
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    background-size: 0.4rem 0.4rem;
  }
  .of_address_info {
    padding-right: 0.1rem;
    .icon-location {
      width: 0.5rem;
      height: 0.5rem;
      display: block;
      background-size: 0.3rem 0.4rem;
    }
    .user_info {
      color: #999;
      height: 0.3rem;
      margin-top: 0.2rem;
      .user_name {
        float: left;
        font-size: 0.28rem;
      }
      .user_mobile {
        font-size: 0.28rem;
        float: left;
        margin-left: 0.2rem;
      }
    }
    .user_address {
      font-size: 0.3rem;
      text-align: left;
      padding-right: 0.8rem;
      color: #333;
    }
    .el-arrow {
      position: absolute;
      top: calc(50% - 0.5rem);
      right: 0.2rem;
      width: 0.5rem;
      height: 1rem;
      color: #333;
      background-size: 0.2rem 0.3rem;
    }
  }
}

.of_product {
  background: #fff;
  padding: 0.24rem;
  margin-top: 0.2rem;
  text-align: left;
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

  .order_info {
    margin-top: 0.5rem;
    overflow: hidden;
    color: #333;
    .title {
      font-size: 0.28rem;
      float: left;
    }
    .number {
      float: right;
      input {
        font-size: 0.32rem;
      }
    }
    .style {
      float: right;
      color: #999;
      font-size: 0.28rem;
    }
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
</style>
