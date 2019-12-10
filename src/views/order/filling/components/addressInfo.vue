<template>
  <article>
    <router-link :to="params" v-if="!address" replace>
      <section v-if="this.goods.type == 1" class="of_address">
        <div class="btn_add">
          <div class="icon">
            <i class="icon-plus"></i>
          </div>
          添加收货地址
        </div>
      </section>
    </router-link>
    <router-link :to="params" v-if="address" replace>
      <section v-if="this.goods.type == 1" class="of_address">
        <div class="of_address_info">
          <div class="icon">
            <i class="icon-location"></i>
          </div>
          <div class="user_address">
            {{ address.provinceName }}{{ address.cityName }}{{ address.areaName
            }}{{ address.address }}
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
export default {
  name: '',
  components: {

  },
  data () {
    return {

    }
  },
  mounted () {
    this.getDefaultAddress()
  },
  methods: {
    async getDefaultAddress () {
      // this.address = await getDefaultAddress()
      this.address = {
        address: 'string',
        area: 0,
        areaName: 'string',
        city: 0,
        cityName: 'string',
        createTime: '2019-12-09T08:20:04.598Z',
        defaultAddress: 0,
        id: 0,
        name: 'string',
        phone: 'string',
        postCode: 'string',
        province: 0,
        provinceName: 'string',
        updateTime: '2019-12-09T08:20:04.598Z',
        userId: 0
      }
      this.$emit('setDefaultAddress', this.address)
    },
  }
}
</script>

<style lang="less" scoped>
</style>
