<template>
  <div class="card project-card d-flex">
    <div class="badge-container align-self-end position-relative">
      <b-badge pill variant="primary" class="year p-3 position-absolute">
        {{ year }}
      </b-badge>
    </div>
    <div class="card-body text-left">
      <h3 class="card-title">{{ displayTitle }}</h3>
      <p>
        <slot></slot>
      </p>
    </div>
    <b-badge class="bg-primary mx-n3 py-2 d-block">
      Technologies ribbon
    </b-badge>
    <img
      v-if="projectSource"
      :src="projectSource.icon"
      :alt="projectSource.alt"
      class="project-src"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CardPlugin } from 'bootstrap-vue'
import { ProjectSource } from '~/assets/project-sources'
Vue.use(CardPlugin)

export default Vue.extend({
  props: {
    year: {
      type: Number,
      required: true,
      validator: (x) => x >= 1000 && x <= 9999 // four digits, please
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    projectSource: {
      type: ProjectSource,
      required: false,
      default: null
    }
  },
  computed: {
    displayTitle(): String {
      if (this.title == null || this.title === '')
        return `My ${this.year} Project`
      else return this.title
    }
  }
})
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/_variables';
.project-card {
  .badge-container {
    height: 0;
    .year {
      right: -1 * $spacer;
      top: map-get($spacers, 1) - map-get($spacers, 3);
    }
  }
}
</style>
