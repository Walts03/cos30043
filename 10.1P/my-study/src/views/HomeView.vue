<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HomeMaster msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMaster from "@/components/HomeMaster.vue";

export default {
  name: "HomeView",
  components: {
    HomeMaster,
  },
};
</script>
