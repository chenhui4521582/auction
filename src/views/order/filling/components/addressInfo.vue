<template>
  <article>
    <router-link :to="params" v-if="!address" replace>
      <section class="of_address">
        <div class="btn_add">
          <div class="icon">
            <i class="icon-plus"></i>
          </div>
          <p>添加收货地址</p>
        </div>
      </section>
    </router-link>
    <router-link :to="params" v-if="address" replace>
      <section class="of_address">
        <div class="of_address_info">
          <div class="icon">
            <i class="icon-location"></i>
          </div>
          <div class="user_address">
            <p>{{ address.provinceName }}{{ address.cityName }}{{ address.areaName
            }}</p>
            <p class="address-details">{{ address.address }}</p>
          </div>
          <div class="user_info">
            <div class="user_name">{{ address.name }}</div>
            <div class="user_mobile">{{ address.phone }}</div>
          </div>
          <i class="el-arrow"></i>
        </div>
      </section>
    </router-link>
  </article>
</template>

<script>
import { getDefaultAddress } from '@/services/user'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: '',
  components: {},
  data () {
    return {}
  },
  computed: {
    ...mapState(['address', 'addressSelected']),
    params () {
      return {
        name: this.address ? 'addressList' : 'addAddress',
        query: {}
      }
    },
    isAuction () {
      return this.params.query.auctionId > 0
    }
  },
  methods: {
    ...mapMutations({
      setAddress: 'SET_ADDRESS'
    }),
    ...mapActions({
      getDefaultAddress: 'getDefaultAddress'
    })
  },
  mounted () {
    if (!this.addressSelected) {
      this.getDefaultAddress()
    }
  }
}
</script>

<style lang="less" scoped>
.of_address {
  font-family: "PingFangSC-Regular";
  position: relative;
  background: #fff;
  width: 100%;
  padding: 0.2rem 0 0.24rem;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 0.1rem;
  margin-bottom: 0.2rem;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.08rem;
    background: url(../../img/address-bottom.png) no-repeat left center / 100%
      100%;
  }
  a {
    color: #2c3e50;
  }

  .btn_add {
    font-size: 0.28rem;
    color: #999;
    text-align: center;
    line-height: 1.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      position: relative;
    }
  }
  .icon-plus {
    width: 0.48rem;
    height: 0.48rem;
    display: block;
    background: url("../../img/address-icon.png") no-repeat center center / 100%
      100%;
  }
  .of_address_info {
    padding-left: 0.72rem;
    padding-right: 0.82rem;
    overflow: hidden;
    .icon {
      position: absolute;
      top: calc(50% - 0.24rem);
      left: 0.12rem;
      .icon-location {
        width: 0.48rem;
        height: 0.48rem;
        display: block;
        background: url("../../img/address-icon-black.png") no-repeat center
          center / 100% 100%;
      }
    }
    .user_info {
      color: #333;
      line-height: 0.4rem;
      overflow: hidden;
      .user_name {
        float: left;
        font-size: 0.28rem;
        line-height: 0.4rem;
      }
      .user_mobile {
        font-size: 0.28rem;
        line-height: 0.4rem;
        float: left;
        margin-left: 0.2rem;
      }
    }
    .user_address {
      font-size: 0.24rem;
      line-height: 0.42rem;
      text-align: left;
      color: #333;
      .address-details {
        font-size: 0.32rem;
        font-weight: 600;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        -webkit-box-pack: start;
      }
    }
    .el-arrow {
      position: absolute;
      top: calc(50% - 0.5rem);
      right: 0.24rem;
      width: 0.5rem;
      height: 1rem;
      color: #333;
      background: url("../../img/right-arrow-icon.png") no-repeat center center /
        0.1rem 0.18rem;
    }
  }
}
</style>
