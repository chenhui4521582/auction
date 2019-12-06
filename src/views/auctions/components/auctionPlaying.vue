<template>
  <div class="playing">
    <div class="title">
      <div class="name">
        玩法指南
      </div>
      <div class="check">
        查看详情<img src="../img/right-icon.png" alt="">
      </div>
    </div>
    <div class="center">
      <img src="../img/playing.png" alt="">
    </div>
    <playing-modal />
  </div>
  
</template>
<script>
import PlayingModal from './popup/playingModal'
export default {
  name: 'auctionPlaying',
  components: {
    PlayingModal
  }
}
</script>
<style scoped lang="less">
.playing {
  margin-bottom: .2rem;
  background: #fff;
  .title {
    padding: .2rem .24rem;
    height: .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E0E0E0;
    .name {
      font-size: .28rem;
      color: #333;
      font-weight: 600;
    }
    .check {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: .24rem;
      color: #999;
      img {
        margin-left: .08rem;
        display: block;
        width: .09rem;
        height: .17rem;
      }
    }
  }
  .center {
    padding: .32rem .32rem .28rem;
    img {
      vertical-align: top;
      width: 100%;
      height:   100%;
    }
  }
}
</style>