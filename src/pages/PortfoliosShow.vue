<script>
import axios from "axios";
import { store } from "../store";
import { DateTime } from "luxon";
import App404 from "./App404.vue";

export default {
  components: {
    App404,
  },
  data() {
    return {
      store,
      portfolio: null,
      DateTime,
      is404: false,
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
          // this.$router.push({ name: "page404" });
          this.is404 = true;
        }
      });
  },
};
</script>

<template>
  <App404 v-if="is404" />
  <template v-else-if="portfolio">
    <div class="d-flex justify-content-center">
      <div class="card m-3" style="width: 30rem">
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
          <li class="list-group-item">
            Nome Cliente: {{ portfolio.client_name }}
          </li>
          <li class="list-group-item">
            Data Inizio: {{ portfolio.pickup_date }}
          </li>
          <li class="list-group-item">
            Data Consegna: {{ portfolio.deploy_date }}
          </li>
          <li class="list-group-item">
            Ultima modifica: {{ this.DateTime.now().toFormat("dd/MM/yyyy") }}
          </li>
        </ul>
      </div>
    </div>
  </template>
</template>

<style></style>
