<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TasksMaster msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import TasksMaster from "@/components/TasksMaster.vue";

export default {
  name: "TasksView",
  components: {
    TasksMaster,
  },
};
</script>
