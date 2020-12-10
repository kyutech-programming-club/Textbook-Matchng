<template>
  <header>
  <v-app-bar>

    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <v-toolbar-title>Textbook-Maching</v-toolbar-title>
     
    
       <v-btn
        to="login" 
        class="ma-4">Sign Out</v-btn>

    <v-avatar 
      class="text-right"
      color="green"
      size="56"
    ></v-avatar>
  
  </v-app-bar>

<v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
</v-navigation-drawer>

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