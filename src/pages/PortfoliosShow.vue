<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      portfolio: null,
    };
  },
  created() {
    // richiesta axios per i dati del post
    // esempio: http://localhost:8000/api/posts/iusto-hic-libero-culpa-sit-similique
    axios
      .get(this.store.baseUrl + "api/portfolios/" + this.$route.params.id)
      .then((response) => (this.portfolio = response.data.results));
  },
};
</script>

<template>
  <h1>{{ portfolio.name }}</h1>
</template>

<style></style>
