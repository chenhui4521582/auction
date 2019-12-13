<template>
  <div class="payment-callabck">
    <div class="pay-success">
      <img src="../img/success-icon.png" alt="">
      <p>支付成功</p>
    </div>
    <div class="pay-error">
      <img src="../img/error-icon.png" alt="">
      <p>支付失败</p>
    </div>
    <div class="btns">
      <!-- 充值回调 -->
      <template>
        <div class="go-on-Pay">继续充值</div>
        <div class="back-home">返回首页</div>
      </template>
      <!-- 订单支付回调 -->
      <template>
        <div class="check-order">查看订单</div>
        <div class="back-home">返回首页</div>
      </template>
    </div>

  </div>
</template>
<script>
export default {
  name: 'paymentCallback'
}
</script>
<style lang="less" scoped>
.payment-callabck {
  overflow: hidden;
  .pay-success,
  .pay-error {
    margin: 1.3rem 0 0.8rem;
    text-align: center;
    img {
      width: 1.78rem;
      height: 1.78rem;
    }
    p {
      font-size: 0.32rem;
      color: #222222;
    }
  }
  .btns {
    display: flex;
    justify-content: center;
    .go-on-Pay,
    .check-order {
      margin-right: 0.32rem;
      height: 0.72rem;
      width: 2.5rem;
      text-align: center;
      line-height: 0.72rem;
      color: #222222;
      border: 1px solid rgba(224, 224, 224, 1);
      border-radius: 0.1rem;
    }
    .back-home {
      height: 0.72rem;
      width: 2.5rem;
      text-align: center;
      line-height: 0.72rem;
      background: #ffcf08;
      color: #333;
      border-radius: 0.1rem;
    }
  }
}
</style>