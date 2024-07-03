<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: aliceblue;
  padding: 2rem;
  gap: 10px;
 

}
</style>
