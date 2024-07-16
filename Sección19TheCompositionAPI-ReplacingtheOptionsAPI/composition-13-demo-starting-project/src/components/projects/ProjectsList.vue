<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';
import { defineProps, ref, watch, computed } from 'vue';

const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');
const props = defineProps({
  user: Object,
});

watch(enteredSearchTerm, () => {
  setTimeout(() => {
    if (enteredSearchTerm.value === enteredSearchTerm.value) {
      activeSearchTerm.value = enteredSearchTerm.value;
    }
  }, 300);
});

watch(props.user, () => {
  enteredSearchTerm.value = '';
});

const availableProjects = computed(() => {
  if (activeSearchTerm.value) {
    return props.user.projects.filter((prj) =>
      prj.title.includes(activeSearchTerm.value)
    );
  }
  return props.user.projects;
});
const hasProjects = computed(
  () => props.user.projects && availableProjects.value.length > 0
);
const updateSearch = (val) => (enteredSearchTerm.value = val);
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
