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
    <h1>{{ portfolio.name }}</h1>
    <h2>Ultima modifica: {{ this.DateTime.now().toFormat("dd/MM/yyyy") }}</h2>
  </template>
</template>

<style></style>
