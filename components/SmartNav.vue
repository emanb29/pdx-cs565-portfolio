<template>
  <b-navbar type="light" class="bg-white border-bottom" toggleable="md" sticky>
    <b-navbar-brand href="#top">Portfolio</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-for="[name, href] in _links"
          :key="href"
          :href="'#' + href"
        >
          {{ name }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    // Should be a list of pairs of name to href
    links: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    _links(): Array<[string, string]> {
      return this.links as Array<[string, string]>
    }
  }
})
</script>

<style></style>
