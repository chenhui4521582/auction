<template>
  <div class="count-down" v-if="showCountDown">
    <div class="item" v-for="(item, index) in countdownTime" :key="index">
      <div class="num">{{item}}</div>
      <div class="separate" v-if="index != countdownTime.length - 1">:</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'countDown',
  props: ['time'],
  data: ()=> ({
    countdownTime: []
  }),
  computed: {
    showCountDown() {
      return this.countdownTime.length
    }
  },
  methods: {
    initTime(info) {
      if (!info) return false
      let date = info / 1000
      let hour = Math.floor(parseInt(date / 60 / 60))
      let minute = Math.floor(parseInt(date / 60) % 60)
      let second = Math.floor(date % 60)
      let countHour = hour >= 10 ? hour : '0' + hour
      let countMinute = minute >= 10 ? minute : '0' + minute
      let countSecond = second >= 10 ? second : '0' + second
      this.countdownTime = [countHour, countMinute, countSecond]
    },
    countDown(info) {
      if (!info) return false
      let date = info / 1000
      this.timer = setInterval(() => {
        date = date - 1
        if (date <= 0) {
          date = 0
          clearInterval(this.timer)
        }
        let hour = Math.floor(parseInt(date / 60 / 60))
        let minute = Math.floor(parseInt(date / 60) % 60)
        let second = Math.floor(date % 60)
        let countHour = hour >= 10 ? hour : '0' + hour
        let countMinute = minute >= 10 ? minute : '0' + minute
        let countSecond = second >= 10 ? second : '0' + second
        this.countdownTime = [countHour, countMinute, countSecond]
      }, 1000)
    }
  },
  mounted() {
    if(this.time > 0) {
      this.timer && clearInterval(this.timer)
      this.initTime(this.time)
      this.countDown(this.time)
    }
  },
  watch: {
    time(value) {
      if(value > 0) {
        this.timer && clearInterval(this.timer)
        this.initTime(this.timer)
        this.countDown(this.time)
      }
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer)
  }
}
</script>
<style scoped lang="less">
.count-down {
  display: flex;
  justify-content: flex-start;
  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .num {
      padding: 0 .05rem;
      height: .44rem;
      text-align: center;
      line-height: .44rem;
      color: #fff;
      font-size: .24rem;
      border-radius: .06rem;
      background: #333333;
    }
    .separate {
      padding: 0 .05rem;
      height: .44rem;
      text-align: center;
      line-height: .44rem;
      font-size: .28rem;
      color: #333333;
    }

  }
}
</style>