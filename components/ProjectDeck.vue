<template>
  <div class="project-deck d-flex flex-row flex-wrap justify-content-around">
    <project-card
      v-for="proj in _projects"
      :key="proj.name + ': ' + proj.description"
      class="col-12 col-md-5 col-xl-3 px-0 my-2"
      :title="proj.name"
      :year="proj.year"
      :project-source="proj.source"
    >
      {{ proj.description }}
    </project-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectCard from '~/components/ProjectCard.vue'
import { Project } from '~/assets/models/project'
export default Vue.extend({
  components: {
    ProjectCard
  },
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    projects: {
      type: Array,
      required: true
    }
  },
  computed: {
    // Gross hack to work around bug https://github.com/vuejs/vetur/issues/1242 in Vetur
    _projects(): Array<Project> {
      // but we can use this to sort to the order we want
      const unsorted = this.projects as Array<Project>
      return unsorted
        .map((project) => {
          return {
            project,
            sortOn: (project.year || 0) as number // if no year is present, use a default of 0 so projects with no year go at the end
          }
        })
        .sort((l, r) => l.sortOn - r.sortOn)
        .map((o) => o.project)
        .reverse() // Date-descending is better for projects lists
    }
  }
})
</script>

<style lang="scss"></style>
