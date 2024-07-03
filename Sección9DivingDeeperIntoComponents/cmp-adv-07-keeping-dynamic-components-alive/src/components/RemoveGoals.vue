<template>
  <div>
    <h2>Remove Goals</h2>
    <input type="text" v-model="nameRemove" />
    <button @click="removeGoal()">Remove Goal</button>
  </div>
</template>

<script>
export default {
  emits: [
"removeYourGoal"
],
  data() {
    return {
      nameRemove: "",
    };
  },
  methods: {
    removeGoal() {
      this.$emit("removeYourGoal", this.nameRemove);
      this.nameRemove = '';
    },
  },
};
</script>
