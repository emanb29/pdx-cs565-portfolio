<template>
  <div class="container">
    <div class="w-100">
      <logo />
      <h1 class="title">
        Replay My Career
      </h1>
      <h2 class="subtitle">
        A Card-Based Portfolio
      </h2>
      <project-deck :projects="projects"></project-deck>
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
import ProjectDeck from '~/components/ProjectDeck.vue'
import { ProjectSources } from '~/assets/models/project-sources'
import { Project } from '~/assets/models/project'

export default Vue.extend({
  components: {
    Logo,
    ProjectDeck
  },
  data() {
    return {
      ProjectSources,
      projects: [
        new Project(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores neque, maiores, blanditiis aliquam magni eveniet perspiciatis fugit sapiente vel corporis excepturi fugiat sed rem aut iusto laboriosam qui officiis.',
          'Example Project',
          2017,
          ProjectSources.PortlandState
        ),
        new Project('A very empty project', null, null, ProjectSources.Pacific),
        new Project('A very empty project', null, 2020)
      ]
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
