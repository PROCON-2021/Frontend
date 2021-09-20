<template>
  <v-container>
    <v-row>
      <v-col>
        <p class="text-center text-h1 ma-2">運動を選択してください</p>
      </v-col>
    </v-row>
    <v-row class="ma-12"/>
    <v-row>
      <v-col v-for="(str, i) in ['腕の運動', '腹筋の運動', 'ももあげの運動']" :key="i">
        <router-link :to="{ path:'/measurement', query: { mode: i } }">
          <v-btn color="primary" height="500" block x-large>
            <p class="text-center text-h2" v-text="str"/>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home'
}
</script>
