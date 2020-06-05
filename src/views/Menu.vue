<template>
  <div class="menu">
    <h1>Menu Page</h1>
    <div
      v-for="dish in dishes"
      :key="dish.id"
      class="dish-container"
      :class="{ selected: dish.id == selectedId }"
    >
      <!-- :class="{selected: dish.id==selectedID}" -->
      <h1 @click="updateSelected(dish.id)">{{ dish.title }}</h1>
    </div>
    <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    <div class="cart-container">
      <p>{{ cart.length }} items in total.</p>
      <p>Price: ${{ totalPrice }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Menu',
  components: {},
  data() {
    return {
      // cart: [],
      selectedId: 0
    }
  },
  methods: {
    addToCart() {
      this.cart.push(this.dishes.find(d => d.id == this.selectedId))
    },
    updateSelected(id) {
      this.selectedId = id
      // console.log(id);
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
    margin: 0;
    padding: 0;
  }
  .selected {
    color: #f71;
  }
  .dish-container {
    background-color: #aaa;
    // &:hover {
    //   color: lightblue;
    // }
  }
}
</style>
