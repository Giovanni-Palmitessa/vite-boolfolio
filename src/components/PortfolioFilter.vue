<script>
export default {
  props: {
    types: {
      type: Array,
      required: true,
    },
  },
};
</script>
<template>
  <form class="my-5">
    <h2>Filtra posts</h2>
    <label for="type">Tipo</label>
    <select class="form-select" id="type">
      <option v-for="type in arrTypes" :key="type.id" :value="type.id">
        {{ type.name }}
      </option>
    </select>
  </form>
</template>

<style></style>
