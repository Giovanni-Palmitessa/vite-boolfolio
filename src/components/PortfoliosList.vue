<script>
import axios from "axios";

export default {
  data() {
    return {
      arrPortfolios: [],
      currentPage: 1,
      nPages: 0,
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
        .get("http://127.0.0.1:8000/api/portfolios", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.arrPortfolios = response.data.data;
          this.nPages = response.data.last_page;
        });
    },
    getImageUrl(image) {
      return image
        ? "http://localhost:8000/" + "storage" + image
        : "http://localhost:8000/" + "storage/default.png";
    },
  },
  created() {
    // richiesta dati al server
    axios
      .get("http://127.0.0.1:8000/api/portfolios", {
        params: {
          page: this.currentPage,
        },
      })
      .then((response) => {
        this.arrPortfolios = response.data.data;
        this.nPages = response.data.last_page;
      });
  },
};
</script>

<template>
  <h2>Questa è la lista dei Progetti.</h2>

  <div class="container d-flex gap-5 flex-wrap justify-content-center">
    <div
      class="card p-3"
      style="width: 18rem"
      v-for="portfolio in arrPortfolios"
      :key="portfolio.id"
    >
      <img
        :src="getImageUrl(portfolio.image)"
        class="card-img-top"
        :alt="portfolio.name"
      />
      <div class="card-body">
        <h5 class="card-title">Titolo: {{ portfolio.name }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Nome Cliente: {{ portfolio.client_name }}
        </li>
        <li class="list-group-item">
          Data Inizio: {{ portfolio.pickup_date }}
        </li>
        <li class="list-group-item">
          Data Consegna: {{ portfolio.deploy_date }}
        </li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
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
