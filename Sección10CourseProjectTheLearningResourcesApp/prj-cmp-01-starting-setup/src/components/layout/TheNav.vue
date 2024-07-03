<template>
  <article>
    <button @click="setSection('MyGoals')">My Goals</button>
    <button @click="setSection('AddGoals')">Add Goals</button>
  </article>
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
  color: white;
  color: white;
  border-radius: 20px;
  background-color: rgb(112, 168, 233);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  
}
article{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-shadow: 0 0 10px rgb(39, 34, 183);
  border-radius: 20px;
  background-color: rgb(60, 121, 190);
  color: white;
  font-weight: bold;
  gap: 25vh;
  padding: 20px;
}
</style>
