<template>
  <div class="project-deck">
    <project-card
      v-for="proj in _projects"
      :key="proj.name"
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
      return this.projects as Array<Project>
    }
  }
})
</script>

<style></style>
