<template>
  <div class="menu">
    <v-content>
      <!-- v-container class="fill-height" -->
      <v-container fluid>
        <!-- <v-row align="center" justify="center"> -->
        <v-col cols="12" sm="8" md="6">
          <h1>Menu Page</h1>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="dish in dishes"
              :key="dish.id"
              class="dish-container"
              :class="{ selected: dish.id == selectedId }"
              @click="updateSelected(dish.id)"
            >
              <v-expansion-panel-header>{{ dish.title }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                Price: {{ dish.price }}
                <br />
                Size: {{ dish.size }}
                <br />
                Category: {{ dish.category }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <div class="btn-container">
            <v-btn class="primary mt-5" @click="addToCart">Add</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="red lighten-1 mt-5 clear-btn" @click="clearCart">Clear</v-btn>
          </div>
          <CartInfo />
          <router-link :to="{ name: 'order-route' }">
            <v-btn class="primary mt-5">Ordered dishes</v-btn>
          </router-link>
        </v-col>
        <!-- </v-row> -->
      </v-container>
    </v-content>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CartInfo from '@/components/CartInfo.vue'

export default {
  name: 'Menu',
  components: {
    CartInfo
  },
  data() {
    return {
      // cart: [],
      selectedId: 0
    }
  },
  methods: {
    addToCart() {
      if (this.selectedId !== 0) {
        this.cart.push(this.dishes.find(d => d.id == this.selectedId))
      }
    },
    updateSelected(id) {
      this.selectedId = id
      // console.log(id);
    },
    clearCart() {
      this.$store.dispatch('clear_cart_action')
    }
  },
  computed: {
    ...mapState(['cart', 'dishes']),
    totalPrice() {
      let total = 0
      for (let dish of this.cart) {
        total += dish.price * 10 //To avoid decimal caculation problem
      }
      return total / 10
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  * {
    // margin: 0;
    // padding: 0;
  }
  .selected {
    color: #f71;
  }
  .dish-container {
    // background-color: #aaa;
    // &:hover {
    //   color: lightblue;
    // }
    margin: 0.2rem auto;
  }
  .btn-container {
    display: flex;
  }
  .clear-btn {
    color: #fff;
  }
}
</style>
