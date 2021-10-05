<template>
  <v-carousel :show-arrows="!Running" :continuous="false" height="900" hide-delimiters>
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
    <v-carousel-item v-for="([str, img], i) in Items[this.$route.query.mode]" :key="i">
      <v-container v-if="!Running">
        <v-row>
          <v-col>
            <p class="text-center text-h1 mt-2 mb-2" v-text="str"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center" v-if="i < 4">
            <v-img max-height="800" :src="img" :transition="false" contain/>
          </v-col>
          <v-col v-else-if="i == 4">
            <video height="800" width="1761" :src="img" autoplay></video>
          </v-col>
          <v-col v-else class="d-flex justify-center" >
            <v-btn color="primary" @click="run" dark x-large>
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else>
        <v-row>
          <v-col>
            <p class="text-center text-h1 mt-2 mb-2">測定中</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <video height="800" width="1761" :src="Mov" autoplay></video>
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
      Running: 0,
      Mov: '',
      Items: [
        [
          ['センサ全体図', '/static/img/0_0.JPG'],
          ['センサ1の位置', '/static/img/0_1.JPG'],
          ['センサ2の位置', '/static/img/0_2.JPG'],
          ['センサ3の位置', '/static/img/0_3.JPG'],
          ['測定方法', '/static/img/0_m.mp4'],
          ['測定を開始できます', '']
        ],
        [
          ['センサ全体図', '/static/img/1_0.JPG'],
          ['センサ1の位置', '/static/img/1_1.JPG'],
          ['センサ2の位置', '/static/img/1_2.JPG'],
          ['センサ3の位置', '/static/img/1_3.JPG'],
          ['測定方法', '/static/img/1_m.mp4'],
          ['測定を開始できます', '']
        ],
        [
          ['センサ全体図', '/static/img/2_0.JPG'],
          ['センサ1の位置', '/static/img/2_1.JPG'],
          ['センサ2の位置', '/static/img/2_2.JPG'],
          ['センサ3の位置', '/static/img/2_3.JPG'],
          ['測定方法', '/static/img/2_m.mp4'],
          ['測定を開始できます', '']
        ]
      ]
    }
  },
  methods: {
    run () {
      this.Mov = 'static/img/' + this.$route.query.mode + '_m3.mp4'
      setTimeout(this.save, 19000)
      this.Running = 1
    },
    save: async function () {
      await axios.get('http://localhost:5000/save/' + this.$route.query.mode)
      document.location = '/history'
    }
  }
}
</script>
