<template>
  <div class="container">
    <h2>Welcome: {{ fname + " " + lname }}</h2>
    <p>What is your name?</p>
    <div class="input-group mb-3 justify-content-center">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">First Name</span>
      </div>
      <input v-model="fname" placeholder="Enter First Name" />
    </div>
    <div class="input-group mb-3 justify-content-center">
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">Last Name</span>
      </div>
      <input v-model="lname" placeholder="Enter Last Name" />
    </div>
    <div class="mb-3">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          id="mountain"
          value="mountain"
          v-model="selectedImage"
        />
        <label class="form-check-label" for="mountain">Mountain</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          id="ocean"
          value="ocean"
          v-model="selectedImage"
        />
        <label class="form-check-label" for="ocean">Ocean</label>
      </div>
    </div>
    <div>
      <img :src="imageUrl" :alt="selectedImage" class="img-fluid" />
      <!-- <img
        src="../assets/mountain.jpg"
        :alt="selectedImage"
        class="img-fluid"
      /> -->
    </div>
  </div>
</template>
<script>
import mountainURL from "../assets/mountain.jpg";
import oceanURL from "../assets/ocean.jpg";
export default {
  name: "HomeMaster",
  props: {
    msg: String,
  },
  data() {
    return {
      fname: "",
      lname: "",
      selectedImage: "mountain", // Default selection
      images: {
        mountain: mountainURL, // Placeholder URL
        ocean: oceanURL, // Placeholder URL
      },
    };
  },
  computed: {
    imageUrl: function () {
      return this.images[this.selectedImage];
    },
  },
};
</script>
