<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="name" :counter="20" label="Name" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="phone" :counter="8" label="Phone No." required></v-text-field>
          </v-col>

          <v-col cols="12" md="4" v-if="errors.length">
            <v-alert type="warning" v-for="(error, i) in errors" :key="i">{{ error }}</v-alert>
          </v-col>

          <v-col cols="12" md="4" v-if="successInfo">
            <v-alert type="success">{{ successInfo }}</v-alert>
          </v-col>

          <v-col cols="12" md="4" v-if="submitErrorAlert">
            <v-alert type="error">{{ submitErrorAlert }}</v-alert>
          </v-col>

          <!-- <v-btn color="primary" @click="submitDelieveryForm">Submit</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="sendEmail">Email Test</v-btn>-->
          <v-btn color="primary" @click="sendEmail">Place Order</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'DeliveryInfoForm',
  data() {
    return {
      phone: '',
      name: '',
      errors: [],
      successInfo: '',
      submitErrorAlert: ''
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
    successSubmittedFunc() {
      this.successInfo = 'Order Submitted!'
      this.$store.state.cart = []
      this.name = ''
      this.phone = ''
    },
    sendEmail() {
      this.errors = []
      this.successInfo = ''
      if (this.$store.state.cart.length == 0) {
        this.errors.push('Seemed your order is empty #_#')
      } else if (this.name == '' || this.phone.length !== 8) {
        if (this.name == '') this.errors.push('Please fill in your name')
        if (this.phone.length !== 8)
          this.errors.push('Please fill in correct contact number')
      } else {
        const templateParams = {
          name: this.name,
          contact: toString(this.phone),
          dishes: this.$store.state.cart.map(d => d.title)
        }

        // console.log(templateParams)
        // console.log('No email send at the moment')
        // this.successSubmittedFunc()

        emailjs
          .send(
            'default_service',
            'singhey01',
            templateParams,
            'user_rparbFDX8fAYatj1PKEoO'
          )
          .then(
            response => {
              console.log('SUCCESS!', response.status, response.text)
              if (response.status == 200) this.successSubmittedFunc()
            },
            err => {
              console.log('FAILED...', err)
              this.submitErrorAlert = err
            }
          )
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
