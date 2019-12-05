<template>
  <div class="auction-user">
    <div class="title">
      <div class="name">
        当前出价
      </div>
      <div class="check">
        出价记录<img src="../img/right-icon.png" alt="">
      </div>
    </div>
    <div class="list" v-if="showList">
      <ul>
        <template v-for="(item, index) in list">
          <li :key="index" v-if="index == 0">
            <div class="avatar">
              <img v-lazy="item.avatar" alt="">
            </div>
            <div class="desc">
              <div class="name">
                {{item.name}}
              </div>
              <div class="price">
                若无人出价，将以<span>¥{{item.price}}</span>拍得该商品
              </div>
            </div>
          </li>
          <li v-else-if="index < 3" :key="index">
            <div class="avatar">
              <img v-lazy="item.avatar" alt="">
            </div>
            <div class="desc">
              <div class="name">
                {{item.name}}
              </div>
              <div class="price">
                ¥{{item.price}}
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'auctionUser',
  // props: {
  //   list: {
  //     type: Array,
  //     default: ()=> ([])
  //   }
  // },
  data: ()=> ({
    list: [
      {avatar: 'https://file.beeplaying.com/cdn/common/images/common/img_photo.png', name: '小蜜蜂爱跳舞', price: '19.08'},
      {avatar: 'https://file.beeplaying.com/cdn/common/images/common/img_photo.png', name: '追忆楠', price: '19.05'},
      {avatar: 'https://file.beeplaying.com/cdn/common/images/common/img_photo.png', name: '稻田的麦子', price: '19.03'},
      {avatar: 'https://file.beeplaying.com/cdn/common/images/common/img_photo.png', name: '稻田的麦子1', price: '19.03'}
    ]
  }),
  computed: {
    showList() {
      return this.list.length
    }
  }
}
</script>
<style lang="less" scoped>
.auction-user {
  background: #fff;
  padding-bottom: .2rem;
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
  .list {
    padding: .2rem .24rem 0;
    li {
      &:first-child {
        padding: .2rem 0 .2rem .34rem;
        height: 1.1rem;
        background: url(../img/first-bg.png) no-repeat center top / 100% 100%;
        .avatar{
          margin-right: .1rem;
          width: .7rem;
          height: .7rem;
        }
        .desc {
          flex-direction: column;
          align-items: flex-start;
          .name {
            font-weight:600;
            color: #333;
          }
          .price {
            span {
              color: #F44236;
            }
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      margin-bottom: .12rem;
      padding: .1rem 0 .1rem .18rem;
      height: .72rem;
      background: url(../img/other-bg.png) no-repeat center top / 100% 100%;
      display: flex;
      justify-content: flex-start;
      .avatar{
        margin-right: .06rem;
        width: .52rem;
        height: .52rem;
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
        font-size: .27rem;
        color: #999;
        flex: 1;
      }
    }
  }
}
</style>