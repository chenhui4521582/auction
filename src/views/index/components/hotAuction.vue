<template>
  <div class="hot-auction">
    <div class="title">
      <div class="name">
        热门拍场
      </div>
      <!-- 倒计时 -->
      <count-down :time="time"/> 
    </div>
    <div class="item">
      <div class="commodity-img">
        <img src="../img/hot-auction.png" alt="">
      </div>
      <div class="commodity-desc">
        <div class="desc">
          Apple iPhone 11 Pro Max 256GB全网通版 暗夜绿色 双卡双待
        </div>
        <div class="operation">
          <div class="price">
            当前价：
            <span class="now-price">
              ¥
              <span class="num">168.50</span>
            </span>
          </div>
          <div class="btn">
            立即去拍
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hotAuction',
  data: ()=> ({
    time: 548564564
  }),
  methods: {

  },
  mounted() {

  }
}
</script>
<style scoped lang="less">
.hot-auction {
  margin-bottom: .24rem;
  padding: 0 .24rem;
  .title{
    margin-bottom: .24rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .name {
      margin-right: .24rem;
      font-size: .38rem;
      font-weight:600;
      color: #333333;
    }
  }
  .item {
    padding: .24rem .24rem .26rem;
    height: 2.2rem;
    background:#FAFAFA;
    border-radius: .04px;
    display: flex;
    justify-content: space-between;
    .commodity-img{
      margin-right: .24rem;
      flex-shrink: 0;
      width: 1.7rem;
      height: 1.7rem;
      img {
        vertical-align: top;
        width: 100%;
        height: 100%;
      }
    }
    .commodity-desc {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .desc{
        font-size: .24rem;
        color: #333333;
        line-height: .4rem;
      }
      .operation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price{
          font-size: .24rem;
          color: #999999;
          .now-price {
            color: #FF3339;
            .num {
              color: #FF3339;
              font-size: .32rem;
              font-weight:600;
            }
          }
        }
        .btn {
          width:1.2rem;
          height: .4rem;
          background:linear-gradient(270deg,rgba(255,51,57,1) 0%,rgba(255,99,31,1) 100%);
          border-radius: .26rem;
          font-size: .2rem;
          color: #FFFFFF;
          text-align: center;
          line-height: .4rem;
        }
      }
    }
  }
}
</style>