<script>
import axios from "axios";
import { store } from "../store";
import PortfolioCard from "./PortfolioCard.vue";
import PortfolioFilter from "./PortfolioFilter.vue";

export default {
  components: {
    PortfolioCard,
    PortfolioFilter,
  },
  data() {
    return {
      arrPortfolios: [],
      arrTypes: [],
      currentPage: 1,
      nPages: 0,
      store,
    };
  },
  methods: {
    changePage(page) {
      if (page === "next") {
        if (this.currentPage < this.nPages) {
          this.currentPage++;
        }
      } else if (page === "previous") {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      } else {
        this.currentPage = page;
      }
      this.getPortfolios();
    },
    getPortfolios() {
      axios
        .get(this.store.baseUrl + "api/portfolios", {
          params: {
            page: this.currentPage,
            q: new URLSearchParams(window.location.search).get("q"),
          },
        })
        .then((response) => {
          this.arrPortfolios = response.data.results.data;
          this.nPages = response.data.results.last_page;
        });
    },
    getImageUrl(image) {
      return image
        ? this.store.baseUrl + "storage" + image
        : this.store.baseUrl + "storage/default.png";
    },
    getTypes() {
      axios.get(this.store.baseUrl + "api/types").then((response) => {
        this.arrTypes = response.data.results;
      });
    },
  },
  created() {
    // richiesta dati al server
    this.getPortfolios();
    this.getTypes();
  },
};
</script>

<template>
  <PortfolioFilter :types="arrTypes" />
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
    <div class="col" v-for="portfolio in arrPortfolios" :key="portfolio.id">
      <PortfolioCard :objPortfolio="portfolio" />
    </div>
  </div>

  <div class="container my-4">
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" @click="changePage('previous')">Previous</a>
        </li>

        <li
          v-for="page in nPages"
          :key="page"
          class="page-item"
          :class="{ active: page == currentPage }"
        >
          <a class="page-link" @click="changePage(page)">
            {{ page }}
          </a>
        </li>

        <li class="page-item">
          <a class="page-link" @click="changePage('next')">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
li {
  cursor: pointer;
}
</style>
