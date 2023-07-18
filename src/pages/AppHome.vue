<script>
import axios from "axios";
import { store } from "../store";
export default {};
</script>

<template>
  <div class="row row-cols-3 g-0">
    <div class="col" v-for="portfolio in arrPortfolios" :key="portfolio.id">
      <router-link
        class="d-block w-100 h-100"
        :to="{ name: 'portfolios.show', params: { id: portfolio.id } }"
      >
        <img
          class="w-100 h-100"
          :src="store.getImageUrl(portfolio.image)"
          :alt="portfolio.title"
        />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* TODO: fix style of grid (center and fill the screen with 100vh) */

.row {
  height: 70vh;
}

.col {
  height: calc(100% / 3);
}

img {
  object-fit: cover;
}
</style>
