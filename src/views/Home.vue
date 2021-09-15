<template>
  <div class="home">
    <section v-if="Mode == -1">
      <el-button id="mode" type="primary" @click="Mode = 0">腕の運動</el-button><br>
      <el-button id="mode" type="primary" @click="Mode = 1">腹筋の運動</el-button><br>
      <el-button id="mode" type="primary" @click="Mode = 2">ももあげの運動</el-button>
    </section>

    <!--腕の運動-->
    <section v-if="Mode == 0">
      <article v-show="Page == 0">
        <h1>センサ全体図</h1>
        <img src="/static/img/DSC05837.jpg">
      </article>

      <article v-show="Page == 1">
        <h1>センサ1の位置</h1>
        <img src="/static/img/DSC05844.jpg">
      </article>

      <article v-show="Page == 2">
        <h1>センサ2の位置</h1>
        <img src="/static/img/DSC05841.JPG">
      </article>

      <article v-show="Page == 3">
        <h1>センサ3の位置</h1>
        <img src="/static/img/DSC05847.JPG">
      </article>

      <article v-show="Page == 4">
        <h1>測定方法</h1>
        <video src="/static/img/Idea2.mp4"></video>
      </article>

      <article v-show="Page == 5">
        <h1 v-show="Running == 0">測定可能</h1>
        <h1 v-show="Running == 1">測定中</h1>
        <el-button id="run" v-show="Running == 0" type="primary" @click="run">測定開始</el-button>
      </article>

      <footer v-show="Running == 0">
        <el-button id="previous" v-show="Page != 0" type="primary" @click="onPrevious">&lt;</el-button>
        <el-button id="next" v-show="Page != 5" type="primary" @click="onNext">&gt;</el-button>
      </footer>
    </section>

    <!--腹筋の運動-->
    <section v-if="Mode == 1">
      <article v-show="Page == 0">
        <h1>センサ全体図</h1>
        <img src="/static/img/DSC05837.jpg">
      </article>

      <article v-show="Page == 1">
        <h1>センサ1の位置</h1>
        <img src="/static/img/DSC05844.jpg">
      </article>

      <article v-show="Page == 2">
        <h1>センサ2の位置</h1>
        <img src="/static/img/DSC05841.JPG">
      </article>

      <article v-show="Page == 3">
        <h1>センサ3の位置</h1>
        <img src="/static/img/DSC05847.JPG">
      </article>

      <article v-show="Page == 4">
        <h1>測定方法</h1>
        <video src="/static/img/Idea2.mp4"></video>
      </article>

      <article v-show="Page == 5">
        <h1 v-show="Running == 0">測定可能</h1>
        <h1 v-show="Running == 1">測定中</h1>
        <el-button id="run" v-show="Running == 0" type="primary" @click="run">測定開始</el-button>
      </article>

      <footer v-show="Running == 0">
        <el-button id="previous" v-show="Page != 0" type="primary" @click="onPrevious">&lt;</el-button>
        <el-button id="next" v-show="Page != 5" type="primary" @click="onNext">&gt;</el-button>
      </footer>
    </section>

    <!--ももあげの運動-->
    <section v-if="Mode == 2">
      <article v-show="Page == 0">
        <h1>センサ全体図</h1>
        <img src="/static/img/DSC05837.jpg">
      </article>

      <article v-show="Page == 1">
        <h1>センサ1の位置</h1>
        <img src="/static/img/DSC05844.jpg">
      </article>

      <article v-show="Page == 2">
        <h1>センサ2の位置</h1>
        <img src="/static/img/DSC05841.JPG">
      </article>

      <article v-show="Page == 3">
        <h1>センサ3の位置</h1>
        <img src="/static/img/DSC05847.JPG">
      </article>

      <article v-show="Page == 4">
        <h1>測定方法</h1>
        <video src="/static/img/Idea2.mp4"></video>
      </article>

      <article v-show="Page == 5">
        <h1 v-show="Running == 0">測定可能</h1>
        <h1 v-show="Running == 1">測定中</h1>
        <el-button id="run" v-show="Running == 0" type="primary" @click="run">測定開始</el-button>
      </article>

      <footer v-show="Running == 0">
        <el-button id="previous" v-show="Page != 0" type="primary" @click="onPrevious">&lt;</el-button>
        <el-button id="next" v-show="Page != 5" type="primary" @click="onNext">&gt;</el-button>
      </footer>
    </section>

    <!--測定終了時-->
    <section v-if="Mode == 3">
      <h1>測定終了</h1>
    </section>
  </div>
</template>

<script>
const axios = require('axios').create()
export default {
  name: 'home',
  data () {
    return {
      Mode: -1,
      Page: 0,
      Running: 0
    }
  },
  methods: {
    onPrevious () {
      this.Page--
    },
    onNext () {
      this.Page++
    },
    run () {
      setTimeout(() => { this.save() }, 19000)
      this.Running = 1
    },
    save: async function () {
      this.Mode = 3

      await axios.get('http://localhost:5000/save/' + this.Mode)
      document.location = '/history'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 40px;
}
img {
  height: 600px;
}
video {
  height: 600px;
}
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
}
#mode{
  float: center;
  margin: 4%;
  font-size: 100px;
}
#run{
  float: center;
  font-size: 50px;
}
#previous{
  float: left;
  margin: 0 0 0 300px;
  font-size: 100px;
}
#next{
  float: right;
  margin: 0 300px 0 0;
  font-size: 100px;
}
</style>
