<template>
  <dialog open>
    <slot> </slot>
  </dialog>
</template>
<style scoped>
dialog {
  position: fixed;
  top: 20 vh;
  left: 30%;
  width: 40%;
  background-color: rgb(183, 235, 235);
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1 rem;
  margin:0;
  text-align: center;
}
</style>
