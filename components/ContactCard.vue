<template>
  <div class="card mx-auto col-12 col-sm-8 text-left">
    <div class="card-body">
      <form action="#">
        <div class="form-group required">
          <label for="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            required
            class="form-control"
            name="name"
          />
        </div>
        <div class="form-group required">
          <label for="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            required
            class="form-control"
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="contact-mesage">Submit your message:</label>
          <textarea
            id="contact-message"
            class="form-control"
            name="message"
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <div class="form-row">
          <div class="col px-1">
            <button type="submit" class="btn btn-primary w-100">
              Submit
            </button>
          </div>
          <div class="col px-1">
            <button type="reset" class="btn btn-secondary w-100">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  </div></template
>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style></style>
