<template>
  <div class="page position-relative">
    <smart-nav :links="navLinks" />
    <div class="container">
      <div class="w-100">
        <section class="title">
          <h1 class="title display-1">
            Replay My Career
            <br />
            <small class="text-muted">A Card-Based Portfolio</small>
          </h1>
        </section>
        <section id="about" class="about">
          <header class="h1">About Me</header>
          <p class="lead text-left border border-secondary rounded p-3">
            Lifelong learner with a focus on integrating new technologies to
            create powerful and secure applications. Current interests include
            penetration testing, functional programming, and stream processing.
          </p>
        </section>
        <section id="projects" class="projects">
          <header class="h1">My Projects</header>
          <project-deck :projects="projects"></project-deck>
        </section>
        <section id="contact" class="contact">
          <header class="h1">Contact</header>
          <contact-card />
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SmartNav from '~/components/SmartNav.vue'
import ProjectDeck from '~/components/ProjectDeck.vue'
import ContactCard from '~/components/ContactCard.vue'
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
    ProjectDeck,
    ContactCard
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
@import '@/assets/scss/bootstrap_config.scss';
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
section {
  margin-bottom: map-get($spacers, 4);
}
</style>
