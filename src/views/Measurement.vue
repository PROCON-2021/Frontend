<template>
  <v-carousel v-if="Running == 0" :continuous="false" height="911" hide-delimiters>
    <template v-slot:prev="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on" fab dark x-large>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on" fab dark x-large>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </template>
    <v-carousel-item v-for="([str, img], i) in items[this.$route.query.mode]" :key="i">
      <v-container>
        <v-row>
          <v-col>
            <p class="text-center text-h1 mt-2 mb-2" v-text="str"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-if="i < 4">
            <v-img max-height="800" :src="img" :transition="false" contain/>
          </v-col>
          <v-col v-if="i == 4">
            <!--測定方法-->
          </v-col>
          <v-col class="d-flex justify-center" v-if="i == 5">
            <v-btn color="primary" @click="run" dark x-large>
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
const axios = require('axios').create()
export default {
  name: 'measurement',
  data () {
    return {
      Mode: -1,
      Running: 0,
      items: [
        [
          ['センサ全体図', '/static/img/DSC05837.jpg'],
          ['センサ1の位置', '/static/img/DSC05844.jpg'],
          ['センサ2の位置', '/static/img/DSC05841.jpg'],
          ['センサ3の位置', '/static/img/DSC05847.jpg'],
          ['測定方法', ''],
          ['測定を開始できます', '']
        ],
        [
          ['センサ全体図', '/static/img/DSC05837.jpg'],
          ['センサ1の位置', '/static/img/DSC05844.jpg'],
          ['センサ2の位置', '/static/img/DSC05841.jpg'],
          ['センサ3の位置', '/static/img/DSC05847.jpg'],
          ['測定方法', ''],
          ['測定を開始できます', '']
        ],
        [
          ['センサ全体図', '/static/img/DSC05837.jpg'],
          ['センサ1の位置', '/static/img/DSC05844.jpg'],
          ['センサ2の位置', '/static/img/DSC05841.jpg'],
          ['センサ3の位置', '/static/img/DSC05847.jpg'],
          ['測定方法', ''],
          ['測定を開始できます', '']
        ]
      ]
    }
  },
  methods: {
    run () {
      setTimeout(this.save, 19000)
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
