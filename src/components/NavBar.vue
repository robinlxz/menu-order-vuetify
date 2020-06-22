<template>
  <!-- <div id="nav" class="nav"></div> -->
  <v-app-bar app color="orange darken-2" dark>
    <v-toolbar-title>SingHey</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'hey-menu-route' }">
      <v-btn text rounded>HeyMenu</v-btn>
    </router-link>
    <router-link :to="{ name: 'menu-route' }">
      <v-btn text rounded>Menu</v-btn>
    </router-link>
    <router-link :to="{ name: 'order-route' }">
      <v-btn text rounded>Order</v-btn>
    </router-link>

    <!-- Original Router-link -->
    <!-- <v-menu>
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'menu-route' }">Menu</router-link>|
      <router-link :to="{ name: 'order-route' }">Order</router-link>
    </v-menu>-->
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
* {
  text-decoration: none;
}
</style>
