<template>
  <GridBase>
    <button @click="setSection('MyGoals')">My Goals</button>
    <button @click="setSection('AddGoals')">Add Goals</button>
  </GridBase>
</template>
<script>
export default {
  data() {
    return {};
  },
  emits: ['sectionRenderize'],
  methods: {
    setSection(section) {
      this.$emit('sectionRenderize', section);
    },
  },
};
</script>
<style scoped>
button {
  background-color: rgb(4, 4, 77);
  color: white;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 2rem;
  font-weight: bold;
}
</style>
