<template>
  <div class="playing">
    <div class="title">
      <div class="name">
        玩法指南
      </div>
      <div class="check" @click="checkPlaying">
        查看详情<img src="../img/right-icon.png" alt="" />
      </div>
    </div>
    <div class="center">
      <img src="../img/playing.png" alt="" />
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'auctionPlaying',
  methods: {
    ...mapMutations({
      openPlayingModal: 'SET_PLAYING_MODAL'
    }),
    checkPlaying() {
      /*vuex mutations 打开玩法指南详情*/
      this.openPlayingModal(true)
    }
  }
}
</script>
<style scoped lang="less">
.playing {
  margin-bottom: 0.2rem;
  background: #fff;
  .title {
    padding: 0.2rem 0.24rem;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    .name {
      font-size: 0.28rem;
      color: #333;
      font-weight: 600;
    }
    .check {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 0.24rem;
      color: #999;
      img {
        margin-left: 0.08rem;
        display: block;
        width: 0.09rem;
        height: 0.17rem;
      }
    }
  }
  .center {
    padding: 0.32rem 0.32rem 0.28rem;
    img {
      vertical-align: top;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
