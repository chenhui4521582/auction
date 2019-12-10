<template>
  <div class="auction-user">
    <div class="title">
      <div class="name">
        当前出价
      </div>
      <div class="check" @click="openModal">
        出价记录<img src="../img/right-icon.png" alt="" />
      </div>
    </div>
    <div class="list" v-if="showList">
      <ul>
        <template v-for="(item, index) in list">
          <li :key="index" v-if="index == 0">
            <div class="avatar">
              <img v-lazy="item.avatar" alt="" />
            </div>
            <div class="desc">
              <div class="name">
                {{ item.name }}
              </div>
              <div class="price">
                若无人出价，将以<span>¥{{ item.price }}</span
                >拍得该商品
              </div>
            </div>
          </li>
          <li v-else-if="index < 3" :key="index">
            <div class="avatar">
              <img v-lazy="item.avatar" alt="" />
            </div>
            <div class="desc">
              <div class="name">
                {{ item.name }}
              </div>
              <div class="price">¥{{ item.price }}</div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'auctionUser',
  data: () => ({
    list: [
      {
        avatar:
          'https://file.beeplaying.com/cdn/common/images/common/img_photo.png',
        name: '小蜜蜂爱跳舞',
        price: '19.08'
      },
      {
        avatar:
          'https://file.beeplaying.com/cdn/common/images/common/img_photo.png',
        name: '追忆楠',
        price: '19.05'
      },
      {
        avatar:
          'https://file.beeplaying.com/cdn/common/images/common/img_photo.png',
        name: '稻田的麦子',
        price: '19.03'
      },
      {
        avatar:
          'https://file.beeplaying.com/cdn/common/images/common/img_photo.png',
        name: '稻田的麦子1',
        price: '19.03'
      }
    ]
  }),
  computed: {
    ...mapState(['auction']),
    showList() {
      return this.list.length
    }
  },
  methods: {
    ...mapMutations({
      openOfferLogModal: 'SET_OFFERLOG_MODAL'
    }),
    /** 打开往期出价弹框 **/
    openModal() {
      /**vuex mutations 打开往期出价弹框 **/
      this.openOfferLogModal(true)
    }
  }
}
</script>
<style lang="less" scoped>
.auction-user {
  background: #fff;
  padding-bottom: 0.2rem;
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
  .list {
    padding: 0.2rem 0.24rem 0;
    li {
      &:first-child {
        padding: 0.2rem 0 0.2rem 0.34rem;
        height: 1.1rem;
        background: url(../img/first-bg.png) no-repeat center top / 100% 100%;
        .avatar {
          margin-right: 0.1rem;
          width: 0.7rem;
          height: 0.7rem;
        }
        .desc {
          flex-direction: column;
          align-items: flex-start;
          .name {
            font-weight: 600;
            color: #333;
          }
          .price {
            span {
              color: #f44236;
            }
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      margin-bottom: 0.12rem;
      padding: 0.1rem 0 0.1rem 0.18rem;
      height: 0.72rem;
      background: url(../img/other-bg.png) no-repeat center top / 100% 100%;
      display: flex;
      justify-content: flex-start;
      .avatar {
        margin-right: 0.06rem;
        width: 0.52rem;
        height: 0.52rem;
        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }
      .desc {
        padding-right: 1.36rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.27rem;
        color: #999;
        flex: 1;
      }
    }
  }
}
</style>
