<template>
  <div class="page position-relative">
    <smart-nav :links="navLinks" />
    <div class="container">
      <div class="w-100">
        <h1 class="title display-1">
          Replay My Career
          <br />
          <small class="text-muted">A Card-Based Portfolio</small>
        </h1>
        <section id="about" class="about">
          <header class="h1">About Me</header>
          <p class="lead">Here's a bit of stuff about me</p>
        </section>
        <section id="projects" class="projects">
          <header class="h1">My Projects</header>
          <br />
          <project-deck :projects="projects"></project-deck>
        </section>
        <section id="contact" class="contact">
          <header class="h1">Contact</header>
          <p>[Contact info here]</p>
        </section>
        <div class="links mb-3">
          <a href="https://nuxtjs.org/" target="_blank" class="btn btn-primary">
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="btn btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SmartNav from '~/components/SmartNav.vue'
import ProjectDeck from '~/components/ProjectDeck.vue'
import { ProjectSources } from '~/assets/models/project-sources'
import { Project } from '~/assets/models/project'

const navLinks: Array<[string, string]> = [
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Contact', 'contact']
]

export default Vue.extend({
  components: {
    SmartNav,
    ProjectDeck
  },
  data() {
    return {
      navLinks,
      ProjectSources,
      projects: [
        new Project(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores neque, maiores, blanditiis aliquam magni eveniet perspiciatis fugit sapiente vel corporis excepturi fugiat sed rem aut iusto laboriosam qui officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores neque, maiores, blanditiis aliquam magni eveniet perspiciatis fugit sapiente vel corporis excepturi fugiat sed rem aut iusto laboriosam qui officiis.',
          'Example Project',
          2019,
          ['TypeScript', 'CSS', 'Bootstrap', 'Nuxt.JS', 'Vue'],
          ProjectSources.PortlandState
        ),
        new Project(
          "A very empty project. This project is so empty that I have to spend a bunch of space writing about how empty it is. Also it was made in undergrad, so it's from Pacific.",
          null,
          null,
          [],
          ProjectSources.Pacific
        ),
        new Project('A very empty project', null, 2020),
        new Project(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores neque, maiores, blanditiis aliquam magni eveniet perspiciatis fugit sapiente vel corporis excepturi fugiat sed rem aut iusto laboriosam qui officiis.',
          'Example Project',
          2017,
          ['TypeScript', 'CSS', 'Bootstrap', 'Nuxt.JS', 'Vue'],
          ProjectSources.PortlandState
        ),
        new Project(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores neque, maiores, blanditiis aliquam magni eveniet perspiciatis fugit sapiente vel corporis excepturi fugiat sed rem aut iusto laboriosam qui officiis.',
          'Example Project',
          2017,
          ['TypeScript', 'CSS', 'Bootstrap', 'Nuxt.JS', 'Vue'],
          ProjectSources.PortlandState
        )
      ]
    }
  }
})
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
:target {
  padding-top: 57px + 10px; // 57px is the magic value for the height of the navbar
}

.links {
  padding-top: 15px;
}
</style>
