<template>
  <header>
    <v-app-bar>
      <nuxt-link to="/postlist">
        <v-toolbar-title>
            Textbook-Matcing
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn
        to="login" 
        class="ma-4"
      >
        Sign Out
      </v-btn>
      <v-avatar 
        class="text-right"
        color="green"
        size="56"
      ></v-avatar>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  data(){
    return{
    drawer: false
    }
  }
}
</script>

<style>
 .v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
</style>