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
// import emailjs from 'emailjs-com'

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
      const templateParams = {
        name: this.name,
        contact: this.phone,
        dishes: this.$store.state.cart.map(d => d.title)
      }

      console.log(templateParams)
      console.log('No email send at the moment')
      // emailjs
      //   .send(
      //     'default_service',
      //     'singhey01',
      //     templateParams,
      //     'user_rparbFDX8fAYatj1PKEoO'
      //   )
      //   .then(
      //     response => {
      //       console.log('SUCCESS!', response.status, response.text)
      //     },
      //     err => {
      //       console.log('FAILED...', err)
      //     }
      //   )
    }
  }
}
</script>

<style lang="scss" scoped></style>
