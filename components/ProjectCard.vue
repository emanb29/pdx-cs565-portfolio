<template>
  <div class="project-card-wrapper px-4 px-sm-0">
    <div class="card project-card d-flex">
      <div
        v-if="year !== null"
        class="badge-container align-self-end position-relative"
      >
        <b-badge pill variant="primary" class="year p-3 position-absolute">
          {{ year }}
        </b-badge>
      </div>
      <div class="card-body text-left">
        <h3 class="card-title">
          <a
            v-if="projectUrl !== null"
            class="project-title link"
            :href="projectUrl"
          >
            {{ displayTitle }}
          </a>
          <span v-else class="project-title nolink">{{ displayTitle }}</span>
        </h3>
        <p>
          <slot></slot>
        </p>
      </div>
      <b-badge class="bg-primary mx-n3 mb-2 py-2 d-block">
        Technologies ribbon
      </b-badge>
      <div v-if="projectSource" class="project-src mb-2">
        (at
        <img :src="projectSource.icon" :alt="projectSource.alt" class="icon" />
        {{ projectSource.name }})
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CardPlugin } from 'bootstrap-vue'
import { ProjectSource } from '~/assets/models/project-sources'
Vue.use(CardPlugin)

export default Vue.extend({
  props: {
    year: {
      type: Number,
      required: false,
      default: null,
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
    },
    projectUrl: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    displayTitle(): String {
      if (this.title === null || this.title === '')
        return `My${this.year ? ' ' + this.year : ''} Project`
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
  .project-src {
    .icon {
      display: inline-block;
      height: 1.5em;
    }
  }
}
</style>
