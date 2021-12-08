<template>
  <div class="count-down-box">
    <label class="label">Countdown to XXXX</label>
    <label class="date">2021-12-15</label>
    <div class="times">
      <div class="item" v-for="(item) in timeList" :key="item.name">
        <div class="value">{{item.value}}</div>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
const END_DATE = new Date('2021/12/15 00:00:00')
export default {
  data () {
    return {
      endDate: END_DATE,
      timeList: []
    }
  },
  mounted () {
    this.calTime(new Date('2021/12/15 00:00:00'))
    this.countDown()
  },
  methods: {
    countDown () {
      const _this = this
      const endDate = END_DATE
      this.intervalTimer = window.setInterval(() => {
        this.calTime(endDate)
      }, 1000)
    },
    calTime (endDate) {
      const curDate = new Date()
      const dis = endDate.getTime() - curDate.getTime() // 时间差的毫秒数
      const days = Math.floor(dis / (24 * 3600 * 1000))

      const leave1 = dis % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
      const hours = Math.floor(leave1 / (3600 * 1000))

      const leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
      const minutes = Math.floor(leave2 / (60 * 1000))

      const leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
      const seconds = Math.round(leave3 / 1000)
      console.log('L__', days + '天 ' + hours + '小时 ' + minutes + ' 分钟' + seconds + ' 秒')
      this.timeList = [days, hours, minutes, seconds]
      this.timeList = [
        { name: 'Days', value: days },
        { name: 'Hours', value: hours },
        { name: 'Minutes', value: minutes },
        { name: 'Seconds', value: seconds }
      ]
    }
  },
  beforeDestroy () {
    window.clearInterval(this.intervalTimer)
  }
}
</script>

<style scoped lang="scss">
.count-down-box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .label {
    color: #444;
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .date {
    color: #444;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .times {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .item {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin: 5%;

      .value, .name {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .value {
        background-color: #444;
        color: white;
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.5;
      }
      .name {
        background-color: yellow;
        color: #444;
        font-size: 0.5rem;
        line-height: 1.4;
      }
    }
  }
}
</style>
