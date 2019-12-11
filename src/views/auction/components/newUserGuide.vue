<template>
  <div class="new-user-guide" v-if="auction.showNewUserGuide">
    <div class="mask"></div>
    <div class="center">
      <div class="step1 item" v-if="step == 1" @click="nxetStep(2)">
        <img src="../img/new-user-guide1.png" alt="" />
      </div>
      <div class="step2 item" v-if="step == 2" @click="nxetStep(3)">
        <img src="../img/new-user-guide2.png" alt="" />
      </div>
      <div class="step3 item" v-if="step == 3" @click="hideModal">
        <img src="../img/new-user-guide3.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import newUtils from '@/utils/utils'
export default {
  name: 'newUserGuide',
  data: () => ({
    step: 1
  }),
  computed: {
    ...mapState(['auction'])
  },
  methods: {
    ...mapMutations({
      closeNewUserGuide: 'SET_NEWUSERGUIDE_MODAL'
    }),
    nxetStep(index) {
      this.step = index
    },
    hideModal() {
      /*vuex mutations 关闭新手引导方法*/
      this.closeNewUserGuide(false)
      newUtils.ScrollMove()
    }
  },
  mounted() {
    if (this.auction.showNewUserGuide) {
      newUtils.ScrollNoMove()
    }
  }
}
</script>
<style scoped lang="less">
.new-user-guide {
  position: fixed;
  z-index: 11;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .mask {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
  }
  .center {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .item {
      position: absolute;
      z-index: 3;
      bottom: 0;
      left: 0;
      right: 0;
      img {
        vertical-align: bottom;
        width: 100%;
      }
    }
  }
}
</style>
