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
  }
}
</script>

<style lang="scss" scoped>
</style>