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
    countdownTime: ['00', '10', '00']
  }),
  computed: {
    showCountDown() {
      return this.countdownTime.length
    }
  },
  methods: {
    countDown(time) {
      if (!time) return false
      /** requestAnimationFrame 实例 **/
      this.timer = ''
      if(this.timer) return false
      /** 开始时间 **/
      let startTime = new Date().getTime();
      /** 结束时间 **/
      let endTime = time
      /** 时分秒 **/
      let hours, minute, second, ms
      /** 方法 **/
      const fn = ()=> { 
        /** 当前的时间 **/
        let nowTime = new Date().getTime();
        /** 剩余时间 **/
        let residueTime = endTime - Math.floor(nowTime - startTime);
        /** 时间换算 **/
        hours = Math.floor(parseInt(residueTime / 1000 / 60 / 60))
        minute = Math.floor(parseInt(residueTime / 1000 / 60) % 60)
        second = Math.floor(residueTime / 1000 % 60)
        ms = Math.floor(residueTime % 100);
        hours = hours < 10 ? `0${hours}` : hours;
        minute = minute < 10 ? `0${minute}` : minute;
        second = second < 10 ? `0${second}` : second;
        ms = ms < 10 ? `0${ms}` : ms;
        if (residueTime <= 0) {
          cancelAnimationFrame(this.timer);
          this.countdownTime = ['00', '00', '00'];
          return false
        }
        this.countdownTime = [minute, second, ms];
        /** 循环调用 **/
        this.timer = requestAnimationFrame(fn);
      }
      /** 删除上一个定时器 **/
      cancelAnimationFrame(this.timer)
      this.timer = requestAnimationFrame(fn)
    }
  },
  mounted() {
    if(this.time > 1000) {
      this.$nextTick(res=> {
        this.timer && cancelAnimationFrame(this.timer)
        this.countDown(this.time)
      })
    }
  },
  watch: {
    time(value) {
      if(value > 1000) {
        this.$nextTick(res=> {
          this.timer && cancelAnimationFrame(this.timer)
          this.countDown(this.time)
        })
      }
    }
  },
  beforeDestroy() {
    this.timer && cancelAnimationFrame(this.timer)
  }
}
</script>
<style scoped lang="less">
.count-down {
  display: flex;
  justify-content: center;
  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .num {
      padding: 0 .05rem;
      height: .56rem;
      text-align: center;
      line-height: .56rem;
      color: #fff;
      font-size: .32rem;
      border-radius: .06rem;
      background: #333333;
    }
    .separate {
      padding: 0 .05rem;
      height: .56rem;
      text-align: center;
      line-height: .56rem;
      font-size: .28rem;
      color: #333333;
    }

  }
}
</style>