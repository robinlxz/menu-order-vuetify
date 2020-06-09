<template>
  <div class="order">
    <v-content>
      <v-container fluid>
        <v-col cols="12" sm="8" md="6">
          <h1>Your order</h1>
          <v-card v-for="(dish, i) in cart" :key="i" class="mb-2 order-card">
            <div class="order-card-title">{{ dish.title }}</div>
            <v-btn @click="removeFromCart(i)" text>Remove</v-btn>
          </v-card>
        </v-col>

        <CartInfo />
        <DeliveryInfoForm />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CartInfo from '@/components/CartInfo.vue'
import DeliveryInfoForm from '@/components/DeliveryInfoForm.vue'

export default {
  name: 'Order',
  components: {
    CartInfo,
    DeliveryInfoForm
  },
  computed: {
    ...mapState(['cart'])
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
  // background-color: #bbb;

  p {
    margin: 0;
    padding: 0;
  }

  .cart {
    width: 60%;
    margin: 0 auto;
  }

  .order-card {
    display: flex;
    justify-content: space-between;

    .order-card-title {
      margin: auto 0.5rem;
    }
  }
}
</style>
