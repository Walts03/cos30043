// app-readmysql component
const ReadMysql = {
  template: `
  <v-row>
    <v-col cols="12" md="12">
      <v-card class="mx-auto" max-width="90%">
        <v-card-title>
          <h2>List of Units in Database</h2>
        </v-card-title>
        <v-card-text>
          <table class="table">
            <caption>List of Units</caption>
            <thead>
              <tr>
                <th scope="col" id="unitCode">Unit Code</th>
                <th scope="col" id="unitDesc">Unit Description</th>
                <th scope="col" id="unitCP">CP</th>
                <th scope="col" id="unitType">Unit Type</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="unit in getItems" :key="unit.code">
                <td headers="unitCode">{{ unit.code }}</td>
                <td headers="unitDesc">{{ unit.desc }}</td>
                <td headers="unitCP">{{ unit.cp }}</td>
                <td headers="unitType">{{ unit.type }}</td>
              </tr>
            </tbody>
          </table>
        </v-card-text>
      </v-card>
      <paginate
        :page-count="getPageCount"
        :page-range="3"
        :margin-pages="1"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :active-class="'currentPage'">
      </paginate>
    </v-col>
  </v-row>
  `,
  data: function () {
    return {
      perPage: 3,
      currentPage: 1,
      units: [],
    };
  },
  components: {
    paginate: VuejsPaginateNext,
  },
  computed: {
    getItems: function () {
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;
      return this.units.slice(start, current);
    },
    getPageCount: function () {
      return Math.ceil(this.units.length / this.perPage);
    },
  },
  methods: {
    clickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
  created() {
    var self = this;
    var readSQLApiURL = "resources/apis.php/"; //define url for api

    // GET request using fetch with error handling

    fetch(readSQLApiURL)
      .then((response) => {
        //turning the response into the usable data
        return response.json();
      })
      .then((data) => {
        //This is the data you wanted to get from url
        self.units = data;
      })
      .catch((error) => {
        self.errorMessage = error;
      });
  },
};
