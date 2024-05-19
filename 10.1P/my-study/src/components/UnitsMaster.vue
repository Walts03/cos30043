<template>
  <div class="row">
    <div class="col-12">
      <h2>My Table</h2>
      <table class="table">
        <caption>
          List of Units
        </caption>
        <thead>
          <tr>
            <th scope="col" id="unitCode">Unit Code</th>
            <th scope="col" id="unitDesc">Unit Description</th>
            <th scope="col" id="unitCP">CP</th>
            <th scope="col" id="unitType">Unit Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unit in paginatedData" :key="unit.code">
            <td headers="unitCode">{{ unit.code }}</td>
            <td headers="unitDesc">{{ unit.desc }}</td>
            <td headers="unitCP">{{ unit.cp }}</td>
            <td headers="unitType">{{ unit.type }}</td>
          </tr>
        </tbody>
      </table>
      <vuejs-paginate
        :page-count="pageCount"
        :container-class="'pagination'"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :active-class="'active'"
        :page-class="'page-item'"
        :page-link-class="'page-link'"
        :prev-class="'page-item'"
        :next-class="'page-item'"
        :prev-link-class="'page-link'"
        :next-link-class="'page-link'"
      ></vuejs-paginate>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage <= 1 }">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              @click.prevent="Callback(currentPage - 1)"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            class="page-item"
            v-for="number in pageCount"
            :class="{ active: number === currentPage }"
            :key="number"
          >
            <a class="page-link" href="#" @click.prevent="Callback(number)">{{
              number
            }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage >= pageCount }">
            <a
              class="page-link"
              href="#"
              aria-label="Next"
              @click.prevent="Callback(currentPage + 1)"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <b
        ><p class="mt-3">Current Page: {{ currentPage }}</p></b
      >
    </div>
  </div>
</template>
<script>
import units from "../assets/units.json";
export default {
  name: "UnitsMaster",
  props: {
    msg: String,
  },
  data() {
    return {
      perPageSize: 5,
      currentPage: 1,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(units.length / this.perPageSize);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPageSize;
      const end = start + this.perPageSize;
      return units.slice(start, end);
    },
  },
  methods: {
    Callback(pageNum) {
      this.currentPage = pageNum;
    },
  },
};
</script>
