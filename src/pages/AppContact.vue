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
      showSucces: false,
      isSending: false,
      hasError: false,
      errors: {},
    };
  },
  methods: {
    sendLead() {
      this.isSending = true;
      this.showSucces = false;
      this.hasError = false;
      this.errors = {};

      axios
        .post(this.store.baseUrl + "api/leads", {
          email: this.email,
          name: this.name,
          message: this.message,
          newsletter: this.newsletter,
        })
        .then((response) => {
          this.isSending = false;

          if (response.data.success) {
            this.showSucces = true;
            this.resetForm();
          } else {
            this.hasError = true;
            this.errors = response.data.errors;
          }
        });
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.newsletter = true;
    },
  },
};
</script>
<template>
  <h1>Contact us</h1>

  <div
    v-if="showSucces"
    class="alert alert-success alert-dismissible fade show"
    role="alert"
  >
    Messaggio inviato con successo!
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
      @click="showSucces = false"
    ></button>
  </div>

  <div
    v-if="hasError"
    class="alert alert-danger alert-dismissible fade show"
    role="alert"
  >
    Errore nell'invio del messaggio!
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
      @click="hasError = false"
    ></button>
  </div>

  <form novalidate @submit.prevent="sendLead">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors.email }"
        id="email"
        aria-describedby="emailHelp"
        v-model="email"
      />
      <div class="invalid-feedback">
        <p v-for="errorMessage in errors.email" :key="errorMessage">
          {{ errorMessage }}
        </p>
      </div>
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>

    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors.name }"
        id="name"
        v-model="name"
      />
      <div class="invalid-feedback">
        <p v-for="errorMessage in errors.message" :key="errorMessage">
          {{ errorMessage }}
        </p>
      </div>
      <div class="invalid-feedback">
        <p v-for="errorMessage in errors.name" :key="errorMessage">
          {{ errorMessage }}
        </p>
      </div>
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">Messaggio</label>
      <textarea
        class="form-control"
        :class="{ 'is-invalid': errors.message }"
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
    <button type="submit" class="btn btn-primary" :disabled="isSending">
      Submit
    </button>
  </form>
</template>

<style></style>
