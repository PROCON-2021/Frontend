<template>
  <v-container>
    <v-row>
      <v-col>
        <p class="text-center text-h1 mt-2 mb-2">運動を選択してください</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(str, i) in ['腕の運動', '腹筋の運動', 'ももあげの運動']" :key="i">
        <router-link :to="{ path:'/measurement', query: { mode: i } }">
          <v-btn color="primary" block x-large>
            <p class="text-center text-body-1" v-text="str"/>
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
