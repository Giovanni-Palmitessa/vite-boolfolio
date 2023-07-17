<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  created() {
    // richiesta axios per i dati del post
    // esempio: http://localhost:8000/api/posts/iusto-hic-libero-culpa-sit-similique
    axios
      .get(this.store.baseUrl + "api/portfolios/" + this.$route.params.id)
      .then((response) => console.log(response));
  },
};
</script>

<template>
  <h2>Sono la show</h2>
</template>

<style></style>
