<template>
  <v-app>
    <v-app-bar color="deep-purple accent-4" app dark>
      <router-link :to="{ path:'/'}">
        <v-img alt="Logo" height="60" position="left" src="/static/img/logo.png" :transition="false" contain/>
      </router-link>
      <v-spacer/>
      <router-link style="text-decoration: none" :to="{ path:'/', query: { src: 0 } }">
        <v-btn text>
          <span>Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <router-link style="text-decoration: none" :to="{ path:'/history', query: { src: 0 } }">
        <v-btn text>
          <span>History</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
