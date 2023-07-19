<script>
export default {};
</script>
<template>
  <h1>Contact us</h1>

  <form>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>

    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" />
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">Messaggio</label>
      <textarea class="form-control" id="message" rows="3"></textarea>
    </div>

    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style></style>
