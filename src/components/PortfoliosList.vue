<script>
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
			this.currentPage = page;
			this.getPortfolios();
		},
		getPortfolios() {
			axios
				.get('http://127.0.0.1:8000/api/portfolios', {
					params: {
						page: this.currentPage,
					},
				})
				.then(response => {
					this.arrPortfolios = response.data.data;
					this.nPages = response.data.last_page;
				});
		},
	},
};
</script>

<template>
  <h2>Questa è la lista dei Progetti.</h2>

  <div class="container ">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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
  </div>
</template>

<style lang="scss" scoped></style>
