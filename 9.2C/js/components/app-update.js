// app-putdata component
const PutData = {
  template: `
  <!-- Updating mySQL Table With Name as Key -->
  <v-row>
    <v-col cols="12" md="6 ">

      <v-card class="mx-auto" max-width="90%">
        <v-card-text>
          <!-- Input -->
          <v-form name="myForm2" class="form-horizontal">
          <v-text-field label="Unit Code" v-model="code1" /></v-text-field>
          <v-text-field label="Description" v-model="desc1" /></v-text-field>
         <v-text-field label="CP" v-model="cp1" /></v-text-field>
         <v-text-field label="Type" v-model="type1" /></v-text-field>
            <v-btn depressed v-on:click="putData(code1, desc1, cp1, type1)" color="primary">
              Update
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>

    </v-col>
    <!-- Output -->
    <v-col cols="12" md="6">
      <v-card>
        <v-card-text>
          <p>Output Message : {{msg}}</p>
          <p>Status Code: {{statusVal}}</p>
          <p>Status: {{statusText}}</p>
          <p>Response Headers: {{headers}}</p>
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>

     `,
  //variable initialization
  data: function () {
    return {
      code1: "",
      desc1: "",
      cp1: "",
      type1: "",
      msg: "",
      statusVal: "",
      statusText: "",
      headers: "",
    };
  },
  methods: {
    putData: function (cd, dc, cpoint, tp) {
      var putSQLApiURL = "resources/apis.php/code/" + cd;

      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: cd,
          desc: dc,
          cp: cpoint,
          type: tp,
        }),
      };

      fetch(putSQLApiURL, requestOptions)
        .then((response) => {
          //turning the response into the usable data
          return response.json();
        })
        .then((data) => {
          //This is the data you wanted to get from url
          self.msg = "Successful";
        })
        .catch((error) => {
          self.err = error;
        });
    },
  },
};
