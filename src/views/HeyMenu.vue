<template>
  <div class="hey-menu">
    <!-- <h1>This is HeyMenu</h1> -->
    <br />
    <v-card v-for="(dish, i) in dishes" :key="i" class="mx-auto" max-width="344">
      <v-img :src="dish.image" height="200px"></v-img>

      <v-card-title>{{ dish.title }}</v-card-title>

      <v-card-subtitle>Price: {{ dish.price }}</v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange darken-2" text @click="addDishToCart(dish)">Add</v-btn>

        <!-- <v-btn color="purple" text>Explore</v-btn> -->

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HeyMenu',
  data: () => ({
    show: false
  }),
  computed: {
    ...mapState(['dishes', 'cart'])
  },
  methods: {
    addDishToCart(dish) {
      this.cart.push(dish)
    }
  }
}
</script>

<style lang="scss" scoped>
.hey-menu {
  h1 {
    text-align: center;
    color: red;
  }
}
</style>
