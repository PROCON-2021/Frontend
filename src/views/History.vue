<template>
  <div class="history">
    <section v-show="Flag">
      <a id="score">{{ this.Score }}点:<br></a>
      <a id="date">測定日時&nbsp;{{ this.Date }}<br></a>

      <img :src="Graph1"/>
      <img :src="Graph2"/>
      <img :src="Graph3"/>
    </section>

    <footer>
      <el-button id="previous" v-show="Page > 0" type="primary" @click="onPrevious">&lt;</el-button>
      <el-button id="next" v-show="Page < Count" type="primary" @click="onNext">&gt;</el-button>
    </footer>
  </div>
</template>

<script>
const axios = require('axios').create()
export default {
  name: 'history',
  data () {
    return {
      Flag: 0,
      Page: 0,
      Count: 0,
      Score: 0,
      Date: '',
      Graph1: '',
      Graph2: '',
      Graph3: ''
    }
  },
  mounted () {
    this.updataData()
  },
  methods: {
    onPrevious () {
      this.Page--
      this.updataData()
    },
    onNext () {
      this.Page++
      this.updataData()
    },
    updataData: async function () {
      this.Flag = 0

      const response = await axios.get('http://localhost:5000/history/' + this.Page)
      const data = response.data
      this.Count = data.count - 1
      this.Score = data.score
      this.Date = data.date

      const blob1 = new Blob([Uint8Array.from(data.ch1)], { type: 'image/png' })
      const blob2 = new Blob([Uint8Array.from(data.ch2)], { type: 'image/png' })
      const blob3 = new Blob([Uint8Array.from(data.ch3)], { type: 'image/png' })
      this.Graph1 = window.URL.createObjectURL(blob1)
      this.Graph2 = window.URL.createObjectURL(blob2)
      this.Graph3 = window.URL.createObjectURL(blob3)

      this.Flag = 1
    }
  }
}
</script>

<style scoped>
#score{
  font-size: xx-large;
}
#date{
  font-size: small;
}
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
}
#previous{
  float: left;
  margin: 0 0 0 50px;
  font-size: 100px;
}
#next{
  float: right;
  margin: 0 50px 0 0;
  font-size: 100px;
}
</style>
