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
          <p
            class="lead text-left border border-secondary bg-white rounded p-3"
          >
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
        <section id="attribution" role="contentinfo">
          <small class="text-muted">
            Squirrel watermark courtesy of
            <a href="https://favpng.com/">https://favpng.com/</a>
          </small>
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
          "A Nuxt.JS theme for a porfolio website with a card-based UI, written as part of the CS565 Full Stack Web Development class at PSU. It's this website! Complete with automatic CI/CD via GitHub Actions to Github Pages.",
          'Replay My Career',
          2020,
          ['Bootstrap', 'Vue', 'Nuxt.JS', 'Github Actions'],
          ProjectSources.PortlandState,
          'https://github.com/emanb29/pdx-cs565-portfolio'
        ),
        new Project(
          'An open-source library for manipulating long-packed bits in Scala with a functional interface. Originally written in support of cryptography projects, but has come in handy for all kinds of security and [de]serialization scripts since.',
          'BitChunk',
          2020,
          ['Scala'],
          null,
          'https://github.com/emanb29/BitChunk'
        ),
        new Project(
          `A survey of game-theoretic models for assessing security of cyber-physical systems, resulting in an implementation of Zaruhi Aslanyan's formulation of "Attack-Defense Trees", as well as her efficient algorithm for calculating the most- and least-optimal Pareto frontiers of strategies over those trees.`,
          'Capstone Paper',
          2019,
          ['Game Theory', 'Graph', 'Scala'],
          ProjectSources.Pacific,
          'https://drive.google.com/file/d/17OuRY-ZqcYKEPfIIWdePI3NfISRSTLFt/view?usp=sharing'
        ),
        new Project(
          'A mobile app to download images from clipboard or social media and pad them to squares. Designed to assist in managing Instagram pages.',
          'Posti',
          2019,
          ['Android', 'Kotlin'],
          null,
          'https://play.google.com/store/apps/details?id=me.ethanbell.posti'
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
