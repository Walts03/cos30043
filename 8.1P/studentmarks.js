const app = Vue.createApp({
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        students: [
        {'name': 'Amy', 'mark': 59},
        {'name': 'Bill', 'mark': 60},
        {'name': 'Casey', 'mark': 53},
        {'name': 'David', 'mark': 86},
        {'name': 'Eva', 'mark': 92},
        {'name': 'Frank', 'mark': 58},
        {'name': 'Grace', 'mark': 94},
        {'name': 'Henry', 'mark': 71},
        {'name': 'Isabel', 'mark': 99},
        {'name': 'John', 'mark': 70},
        {'name': 'Kathy', 'mark': 86},
        {'name': 'Liam', 'mark': 51},
        {'name': 'Monica', 'mark': 70},
        {'name': 'Nathan', 'mark': 77},
        {'name': 'Olivia', 'mark': 79},
        {'name': 'Peter', 'mark': 58},
        {'name': 'Quincy', 'mark': 53},
        {'name': 'Rachel', 'mark': 76},
        {'name': 'Sam', 'mark': 55},
        {'name': 'Tina', 'mark': 81},
        {'name': 'Ursula', 'mark': 78},
        {'name': 'Victor', 'mark': 57},
        {'name': 'Wendy', 'mark': 99},
        {'name': 'Xavier', 'mark': 78},
        {'name': 'Yasmin', 'mark': 66},
        {'name': 'Zack', 'mark': 60}
        ]
      };
    },
    computed: {
      pageCount() {
        return Math.ceil(this.students.length / this.perPage)
      },
      paginatedData(){
        const start = (this.currentPage - 1) * this.perPage
        const end = start + this.perPage
        return this.students.slice(start, end)
      }
    },
    methods: {
        Callback(pageNum){
            this.currentPage = pageNum
        }
    }
  });
  app.mount("#app");
  