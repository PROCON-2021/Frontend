<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-btn color="primary" :disabled="Page < 1" @click="onPrevious" fab dark x-large>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <p class="text-center text-h2 ma-2">{{ this.Score }}点:{{ this.Info }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="text-center text-body-1 ma-n6">
              測定日時&nbsp;{{ this.Date }}
            </p>
          </v-col>
        </v-row>
        <v-row v-for="(graph, i) in Graphs" :key="i">
          <v-col>
            <v-img :src="graph" :transition="false" contain />
          </v-col>
        </v-row>
      </v-col>
      <v-col>
      <v-btn color="primary" :disabled="Page + 1 > Count" @click="onNext" fab dark x-large>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const axios = require('axios').create()
export default {
  name: 'history',
  data () {
    return {
      Page: 0,
      Count: 0,
      Score: 0,
      Info: '',
      Date: '',
      Graphs: ['', '', '']
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
      const response = await axios.get('http://localhost:5000/history/' + this.Page)
      const data = response.data
      this.Count = data.count - 1
      this.Score = data.score
      this.Date = data.date

      const blob1 = new Blob([Uint8Array.from(data.ch1)], { type: 'image/png' })
      const blob2 = new Blob([Uint8Array.from(data.ch2)], { type: 'image/png' })
      const blob3 = new Blob([Uint8Array.from(data.ch3)], { type: 'image/png' })

      this.Graphs[0] = window.URL.createObjectURL(blob1)
      this.Graphs[1] = window.URL.createObjectURL(blob2)
      this.Graphs[2] = window.URL.createObjectURL(blob3)
    }
  }
}
</script>
