<template>
  <div class="notice" v-if="showNotice" @click="goDealLog">
    <div class="icon">
      <img src="../img/horn-icon.png" alt="" />
    </div>
    <div class="text">{{ text }}</div>
    <div class="arrows">
      <img src="../img/horn-right.png" alt="" />
    </div>
  </div>
</template>
<script>
import { getNotice } from '@/services/index'
import _get from 'lodash.get'
export default {
  name: 'horn',
  data: () => ({
    text: '',
    hornList: []
  }),
  computed: {
    showNotice() {
      return this.text.length
    }
  },
  methods: {
    goDealLog() {
      this.$router.push({
        name: 'dealLog'
      })
    },
    _getHorn() {
      getNotice().then(res => {
        let { code, messge, data } = _get(res, 'data')
        if (code == 200) {
          this.hornList = _get(res, 'data.data', [])
          this.text = this.hornList[0] || ''
        }
      })
    },
    animation() {
      setInterval(() => {
        this.text = this.hornList.splice(0, 1).toString()
      }, 5000)
    }
  },
  mounted() {
    this._getHorn()
    this.animation()
  }
}
</script>
<style lang="less" scoped>
.notice {
  position: absolute;
  top: 0.48rem;
  left: 0.36rem;
  z-index: 2;
  width: 4.18rem;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.54rem;
  display: flex;
  justify-content: flex-start;
  animation: fadeAnimation 5s ease-in-out infinite;
  .icon {
    margin: 0.02rem;
    width: 0.46rem;
    height: 0.46rem;
    img {
      vertical-align: top;
      width: 100%;
      height: 100%;
    }
  }
  .text {
    padding: 0 0.1rem;
    line-height: 0.5rem;
    width: 3.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
    font-size: 0.24rem;
  }
  .arrows {
    margin: 0.12rem 0.1rem 0 0;
    width: 0.24rem;
    height: 0.24rem;
    img {
      vertical-align: top;
      width: 100%;
      height: 100%;
    }
  }
}
@keyframes fadeAnimation {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
