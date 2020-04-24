<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Replay My Career
      </h1>
      <h2 class="subtitle">
        A Card-Based Portfolio
      </h2>
      <project-card
        title="Example Project"
        :year="2020"
        :project-source="ProjectSources.PortlandState"
        project-url="https://github.com/emanb29"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic
        suscipit dicta pariatur laborum aliquam libero ullam facilis amet
        quidem? Quibusdam eos aperiam maxime dolores, ex quidem dicta possimus
        placeat!
      </project-card>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import ProjectCard from '~/components/ProjectCard.vue'
import { ProjectSources } from '~/assets/project-sources'

export default Vue.extend({
  components: {
    Logo,
    ProjectCard
  },
  data() {
    return {
      ProjectSources
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
