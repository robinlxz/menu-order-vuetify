<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view />
    </v-content>
    <v-footer color="orange darken-2" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
        <v-col class="orange darken-3 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>SingCafe</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    // HelloWorld
    NavBar
  },
  data: () => ({
    links: ['Home', 'About', 'Contact Us']
  })
}
</script>

<style lang="scss" scoped>
.btn-container {
  display: flex;
  justify-content: space-between;
}
</style>
