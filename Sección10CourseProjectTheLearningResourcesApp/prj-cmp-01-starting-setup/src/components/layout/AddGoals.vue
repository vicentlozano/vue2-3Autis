<template>
  <form @submit.prevent>
    <span>Title</span>
    <input type="text" v-model="title" />
    <span>Text</span>
    <textarea type="text" v-model="text"></textarea>
    <span>Url</span>
    <input type="urlemail" v-model="link" />
    <button type="submit" @click="sendGoal">Submit</button>
  </form>
</template>

<script>
export default {
  emits: [],
  data() {
    return {
      title: '',
      text: '',
      link: '',
    };
  },
  methods: {
    sendGoal() {
      this.$emit('sendGoal', {
        title: this.title,
        text: this.text,
        link: this.link,
      });
      this.title = '';
      this.text = '';
      this.link = '';
    },
  },
};
</script>
<style scoped>
section,
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 10px rgb(77, 64, 215);
  border-radius: 20px;
  background-color: rgb(60, 121, 190);
  color: white;
  font-weight: bold;
  font-size: 2vh;
  margin-top: 20px;
  text-align: center;
  min-height: 30vh;
  gap: 0.5rem;
}

textarea,
input {
  max-width: 80vh;
  min-width: 40vh;
  max-height: 40vh;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(77, 64, 215);
}
button {
  border-radius: 8px;

  background-color: blue;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  font-size: clamp(1rem, 2vh, 2rem); /* Ajuste del tamaño de la fuente */
}
</style>
