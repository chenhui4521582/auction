<template>
  <div class="notice">

  </div>
</template>
<script>
import Services, { getNotice } from '@/services/index'
export default {
  name: 'horn',
  data: ()=> ({
    hornList: []
  }),
  methods: {
    _getHorn() {
      getNotice().then(res=> {
        // console.log(res)
      })
    }
  },
  mounted() {
    this._getHorn()
  }
}
</script>
<style lang="less" scoped>
.notice {
  margin-bottom: .24rem;
  padding: 0 .24rem;
}
</style>