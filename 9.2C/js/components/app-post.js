// app-postdata component
const PostData = {
  template: `
  <v-row>
    <v-col cols="12" md="6 " >

    <v-card
       class="mx-auto"
       max-width="90%"
       >

       <v-card-text>
   	<v-form>
          <v-text-field label="Unit Code" v-model="code1" /></v-text-field>
   				<v-text-field label="Description" v-model="desc1" /></v-text-field>
          <v-text-field label="CP" v-model="cp1" /></v-text-field>
          <v-text-field label="Type" v-model="type1" /></v-text-field>



        <v-btn
        depressed
        v-on:click="postData(code1, desc1, cp1, type1)"
        color="primary">
        Add
      </v-btn>

   	</v-form>
    </v-card-text>

    </v-card>

    </v-col >
      <!-- Output -->
        <v-col cols="12"
            md="6">
    <v-card
       class="mx-auto"
       max-width="90%"
       >
       <v-card-text>
        <p>Output Message : {{ msg }}</p>
   			<p>Status Code: {{statusVal}}</p>
   			<p>Status: {{statusText}}</p>
   			<p>Response Headers: {{headers}}</p>
   	</v-card-text>
</v-card>
</v-col>
</v-row>

   `,
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
      savingSuccessful: false,
    };
  },
  methods: {
    postData: function (cd, dc, cpoint, tp) {
      var postSQLApiURL = "resources/apis.php/";

      var self = this;
      const requestOptions = {
        method: "POST",
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

      fetch(postSQLApiURL, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok: " + response.statusText
            );
          }
          return response.text();
        })
        .then((text) => {
          return text ? JSON.parse(text) : {};
        })
        .then((data) => {
          self.msg = "Data Inserted Successfully.";
          self.statusVal = "Success";
          self.statusText = "OK";
        })
        .catch((error) => {
          self.msg = "There was an error! " + error;
          self.statusVal = "Failed";
          self.statusText = error.message;
        });
    },
  },
};
