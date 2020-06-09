<template>
  <div>
    <v-card class="mt-5" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Your orders</div>
          <v-list-item-title class="headline mb-1">{{ cart.length }} dishes in total.</v-list-item-title>
          <v-list-item-subtitle>Price: ${{ totalPrice }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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

<style lang="scss" scoped></style>
