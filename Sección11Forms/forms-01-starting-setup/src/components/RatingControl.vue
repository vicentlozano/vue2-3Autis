<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button @click="activated('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button @click="activated('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button @click="activated('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],

  methods: {
    activated(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: rgb(201, 62, 103);
}
.active button {
  border: 2px solid;
  border-color: rgb(201, 62, 103);
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid grey;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
