<template>
  
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
     <v-toolbar dense>
       <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>  -->

      <v-toolbar-title>SPA Forum</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <router-link to="/forum">
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/login">
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </router-link>
        
      
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
      
    
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>