<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <UnitsMaster msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import UnitsMaster from "@/components/UnitsMaster.vue";

export default {
  name: "HomeView",
  components: {
    UnitsMaster,
  },
};
</script>
