const app = Vue.createApp({
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    // Use jQuery's getJSON method to fetch data from JsonPlaceholder
    $.getJSON("https://jsonplaceholder.typicode.com/posts", (data) => {
      // Assign fetched data to posts array
      this.posts = data;
    });
  },
});
app.mount("#app");
