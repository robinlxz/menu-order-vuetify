<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">
        <h1>Login</h1>
      </h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Username" prepend-icon="mdi-account-circle"></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          prepend-icon="mdi-lock"
          append-icon="mdi-eye-off"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-action class="btn-container">
      <v-btn color="success mx-2 mb-2">Register</v-btn>
      <v-btn color="info mx-2 mb-2">Login</v-btn>
    </v-card-action>
  </v-card>
</template>

<script>
export default {
  name: 'VuetifyLogin'
}
</script>

<style lang="scss" scoped></style>