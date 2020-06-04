<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <h1>This is SingHey homepage</h1>
    <p>Todo list</p>
    <ul class="todolist">
      <li>Menu, not really need 'EventShow' view</li>
      <li>Form to submit order, save in local json as fake db</li>
      <li>Put above system to Google Cloud</li>
      <li>To enable SASS in this project</li>
      <li>*CSS adjustment, materialize maybe</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

<style scoped>
.todolist {
  list-style: none;
}
</style>>
