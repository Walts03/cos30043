const app = Vue.createApp({
  data() {
    return {
      units: [],
    };
  },
  mounted() {
    fetch("units.json")
      .then((response) => response.json())
      .then((data) => (this.units = data));
  },
});
app.mount("#app");
