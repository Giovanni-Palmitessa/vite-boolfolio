<script>
export default {
  data() {
    return {
      typeId: null,
    };
  },

  props: {
    types: {
      type: Array,
      required: true,
    },
  },
  watch: {
    types() {
      this.typeId = this.types.length ? this.types[0].id : null;
    },
  },
};
</script>
<template>
  <form class="my-5">
    <h2>Filtra posts</h2>
    <label for="type">Tipo</label>
    <select
      class="form-select"
      id="type"
      @change="$emit('changeType', typeId)"
      v-model="typeId"
    >
      <option v-for="type in types" :key="type.id" :value="type.id">
        {{ type.name }}
      </option>
    </select>
  </form>
</template>

<style></style>
