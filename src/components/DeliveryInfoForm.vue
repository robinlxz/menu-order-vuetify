<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="name" :counter="20" label="Name" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="phone" label="Phone No." required></v-text-field>
          </v-col>

          <v-btn color="primary" @click="submitDelieveryForm">Submit</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="sendEmail">Email Test</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'DeliveryInfoForm',
  data() {
    return {
      phone: '',
      name: ''
    }
  },
  methods: {
    submitDelieveryForm() {
      const formObj = {
        name: this.name,
        phone: this.phone
      }
      this.$store.dispatch('postOrderAction', { formObj: formObj })
    },
    sendEmail() {
      // emailjs.send()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>