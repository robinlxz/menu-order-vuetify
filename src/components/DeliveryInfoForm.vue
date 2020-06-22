<template>
  <div>
    <v-form>
      <v-container>
        <v-row justify="center">
          <v-col cols="6" sm="6" md="4">
            <v-menu
              :close-on-content-click="true"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Date for pickup/delivery"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="6" sm="6">
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="time"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="time" label="Time" readonly v-bind="attrs" v-on="on"></v-text-field>
              </template>
              <v-time-picker v-model="time" full-width @click:minute="$refs.menu.save(time)"></v-time-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="name" :counter="20" label="Name" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="phone" :counter="8" label="Phone No." required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="reqeustInfo" :counter="100" label="Special Request"></v-text-field>
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
      submitErrorAlert: '',
      // date: new Date().toISOString().substr(0, 10),
      date: null,
      time: null,
      reqeustInfo: ''
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
      this.date = null
      this.time = null
      this.reqeustInfo = ''
    },
    sendEmail() {
      this.errors = []
      this.successInfo = ''
      // Validate order
      if (this.$store.state.cart.length == 0) {
        this.errors.push('Seemed your order is empty #_#')
      } else if (this.date == null || this.time == null) {
        this.errors.push('Please pick date and time')
      } else if (this.name == '' || this.phone.length !== 8) {
        if (this.name == '') this.errors.push('Please fill in your name')
        if (this.phone.length !== 8)
          this.errors.push('Please fill in correct contact number')
      } else {
        const templateParams = {
          name: [this.name, this.phone],
          number: this.phone, //emailjs fail to show this in template, idk why
          dishes: this.$store.state.cart.map(d => d.title),
          timestamp: [this.date, this.time],
          requestInfo: [this.reqeustInfo]
        }

        // console.log(templateParams)
        // console.log(typeof this.phone)
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
    },
    notsendEmail() {
      console.log(this.date, this.time)
    }
  }
}
</script>

<style lang="scss" scoped></style>
