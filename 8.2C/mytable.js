const app = Vue.createApp({
  data() {
    return {
      perPageSize: 5,
      currentPage: 1,
      units: [],
    };
  },
  created() {
    fetch("units.json")
      .then((response) => response.json())
      .then((data) => {
        this.units = data;
      });
  },
  computed: {
    pageCount() {
      return Math.ceil(this.units.length / this.perPageSize);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPageSize;
      const end = start + this.perPageSize;
      return this.units.slice(start, end);
    },
  },
  methods: {
    Callback(pageNum) {
      this.currentPage = pageNum;
    },
  },
});
app.mount("#app");
