const app = Vue.createApp({
  data() {
    return {
      statPosts: [],
      strStatus: "",
    };
  },
  methods: {
    add() {
      //push status into statPosts array
      this.statPosts.unshift(this.strStatus);
      this.strStatus = "";
    },
    remove(index) {
      //delete status from statPost using index
      this.statPosts.splice(index, 1);
    },
  },
});
app.mount("#app");
