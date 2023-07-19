<script>
import { store } from "../store";
import axios from "axios";
export default {
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      newsletter: true,
    };
  },
  methods: {
    sendLead() {
      axios.post(this.store.baseUrl + "api/leads");
    },
  },
};
</script>
<template>
  <h1>Contact us</h1>

  <form novalidate @submit.prevent="sendLead">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
        v-model="email"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>

    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" v-model="name" />
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">Messaggio</label>
      <textarea
        class="form-control"
        id="message"
        rows="3"
        v-model="message"
      ></textarea>
    </div>

    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="exampleCheck1"
        v-model="newsletter"
      />
      <label class="form-check-label" for="exampleCheck1"
        >Iscriviti ala newsletter</label
      >
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style></style>
