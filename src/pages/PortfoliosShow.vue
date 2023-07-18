<script>
import axios from "axios";
import { store } from "../store";
import { DateTime } from "luxon";

export default {
  data() {
    return {
      store,
      portfolio: null,
      DateTime,
    };
  },
  created() {
    // richiesta axios per i dati del post
    // esempio: http://localhost:8000/api/posts/iusto-hic-libero-culpa-sit-similique
    axios
      .get(this.store.baseUrl + "api/portfolios/" + this.$route.params.id)
      .then((response) => {
        if (response.data.success) {
          this.portfolio = response.data.results;
        } else {
          this.$router.push({ name: "page404" });
        }
      });
  },
};
</script>

<template>
  <template v-if="portfolio">
    <h1></h1>
    <h2>Ultima modifica: {{ this.DateTime.now().toFormat("dd/MM/yyyy") }}</h2>

    <div class="card" style="width: 18rem">
      <img
        :src="this.store.getImageUrl(portfolio.image)"
        :alt="portfolio.name"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">Titolo: {{ portfolio.name }}</h5>
        <p class="card-text">
          {{ portfolio.description }}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </template>
</template>

<style></style>
