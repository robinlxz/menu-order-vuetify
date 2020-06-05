<template>
  <div class="order">
    <h1>This is order page</h1>
    <div class="cart">
      <p>In cart:</p>
      <div v-for="(dish, i) in cart" :key="i">
        <h3>{{ dish.title }}</h3>
        <h3 @click="removeFromCart(i)">X</h3>
      </div>
    </div>
    <div class="cart-container">
      <p>{{ cart.length }} items in total.</p>
      <p>Price: ${{ totalPrice }}</p>
    </div>
    <form action>
      <h2>Pickup info</h2>
      <input type="text" placeholder="Extra requirement" />
    </form>
    <!-- <button>Make Order</button> -->
    <input type="button" value="Make Order" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Order',
  computed: {
    ...mapState(['cart']),
    totalPrice() {
      let total = 0
      for (let dish of this.cart) {
        total += dish.price * 10 //To avoid decimal caculation problem
      }
      return total / 10
    }
  },
  methods: {
    removeFromCart(index) {
      this.$store.state.cart.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  background-color: #bbb;

  p {
    margin: 0;
    padding: 0;
  }

  .cart {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
