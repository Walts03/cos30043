<template>
  <div class="container">
    <h1>Status Post</h1>
    <div class="form-group">
      <label for="strStatus" class="form-check-label">Status:</label><br />
      <input
        class="form-control"
        v-model="strStatus"
        type="text"
        placeholder="Enter your Status"
        required
      />
      <button @click="add" class="btn btn-primary mt-2">Post</button>
    </div>

    <div v-if="statPosts.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Status</th>
            <th scope="col">Function</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(str, index) in statPosts" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ str }}</td>
            <td>
              <button @click="remove(index)" class="btn btn-primary">
                Del
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TasksMaster",
  props: {
    msg: String,
  },
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
};
</script>
