<template>
  <v-card width="600px" class="mx-auto mt-5">
    <v-card-title>
      <p class="text-center text-h1 ma-2">ログイン</p>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="mdi-account-circle" label="ユーザ名" />
        <v-text-field prepend-icon="mdi-lock" type="password" label="パスワード" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <router-link :to="{ path:'/home' }">
        <v-btn class="info">ログイン</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'login'
}
</script>
