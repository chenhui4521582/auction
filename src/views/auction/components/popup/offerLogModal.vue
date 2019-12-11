<template>
  <div class="offerLo-modal" id="Modal" @touchmove.stop>
    <div class="mask" v-if="auction.showOfferlog"></div>
    <transition name="fade">
      <div class="center" v-if="auction.showOfferlog">
        <div class="title" ref="title">
          出价记录
          <img class="close" src="../../img/close-icon.png" alt="" @click="hidePlaying" />
        </div>
        <div class="wrap" v-if="offerLogList">
          <div class="list">
            <div class="nav">
              <div class="item type">状态</div>
              <div class="item">用户</div>
              <div class="item">出价</div>
              <div class="item">时间</div>
            </div>
            <div class="items">
              <div class="item" v-for="(item, index) in auction.offerLog" :key="index">
                <span class="type">{{ index == 0 ? '领先' : '出局' }}</span>
                <span>{{ item.nickname }}</span>
                <span>¥{{ item.afterPrice }}</span>
                <span>{{ item.createTime | formatTime('h:m:s') }}</span>
              </div>
            </div>
            <div class="bottom">只显示近20条出价记录</div>
          </div>
        </div>
        <no-data class="nodata" v-else />
      </div>
    </transition>
  </div>
</template>
<script>
import newUtils from '@/utils/utils'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'offerLogModal',
  computed: {
    ...mapState(['auction']),
    offerLogList () {
      return this.auction.offerLog.length
    },
  },
  methods: {
    ...mapMutations({
      closeOfflogModal: 'SET_OFFERLOG_MODAL'
    }),
    ...mapActions({
      _getOfferLog: 'getOfferLog'
    }),
    /** 关闭往期出价弹框 **/
    hidePlaying () {
      /*vuex mutations 关闭往期出价弹框*/
      this.closeOfflogModal(false)
    }
  },
  mounted () {
    /*vuex actions 获取往期出价数据*/
    this._getOfferLog()
  },
  watch: {
    'auction.showOfferlog' (newValue) {
      if (newValue) {
        newUtils.ScrollNoMove()
      } else {
        newUtils.ScrollMove()
      }
    }
  }
}
</script>
<style scoped lang="less">
.offerLo-modal {
  position: fixed;
  z-index: 11;
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 11;
    background: rgba(0, 0, 0, 0.5);
  }
  .center {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
    height: 9.5rem;
    background: #fff;
    border-radius: 10px 10px 0px 0px;
    .title {
      position: relative;
      height: 1.1rem;
      line-height: 1.1rem;
      color: #333;
      text-align: center;
      font-size: 0.36rem;
      font-weight: bold;
      .close {
        position: absolute;
        right: 0.34rem;
        top: 0.42rem;
        width: 0.27rem;
        height: 0.27rem;
      }
    }
    .list {
      padding: 0 0.24rem;
      .nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 0.5rem;
        background: #f5f5f5;
        .item {
          width: 28%;
          text-align: center;
          font-size: 0.24rem;
          color: #999;
        }
        .type {
          width: 16%;
        }
      }
      .items {
        height: 7.22rem;
        overflow-y: scroll;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 0.8rem;
          border-bottom: 1px solid #f0f0f0;
          color: #999;
          font-size: 0.28rem;
          span {
            text-align: center;
            width: 28%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .type {
            width: 16%;
          }
          &:last-child {
            border-bottom: none;
          }
          &:first-child {
            font-weight: 400;
            color: #333;
          }
        }
      }
      .bottom {
        line-height: 0.7rem;
        text-align: center;
        font-size: 0.24rem;
        color: #999999;
      }
    }
    .nodata {
      margin-top: 2rem;
    }
  }
}
.center.fade-enter {
  transform: translate(0, 100%);
}
.center.fade-enter-to {
  transform: translate(0, 0);
}
// .fade-enter, .fade-leave-to {
//   background: #FFC20F;
//   // transform: translate(0, -100%)
// }
// .fade-enter-to {
//    transform: translate(0, 0)
// }
// .fade-leave {
//   transform: translate(0, 0)
// }

.fade-enter-active {
  transition: all 0.3s;
}
</style>
