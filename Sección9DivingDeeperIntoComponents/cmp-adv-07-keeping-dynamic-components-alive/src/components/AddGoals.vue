// IMPORTANT INFORMATION.
// The tag teleport allows us to move the component it wraps to a different location in the DOM. 
// In this example, we use teleport to move the alertDialog to the end of the body. 
// This approach help us to manage HTML syntax and rendering errors more effectively.

<template>
  <div>
    <h2>Add Goals</h2>
    <input type="text" v-model="newGoal" />
    <button @click="addGoal">Add New Goal</button>
    <teleport to="body">
      <AlertDialog v-if="isEmpty">
        <h2>Input is invalid!</h2>
        <p>Input can't be empty!</p>
      </AlertDialog>
    </teleport>
  </div>
</template>

<script>
import AlertDialog from "./UI/AlertDialog.vue";
export default {
  components: {
    AlertDialog,
  },

  emits: ["myNewGoal"],

  data() {
    return {
      newGoal: "",
      isEmpty: false,
    };
  },

  methods: {
    addGoal() {
      if (this.newGoal) {
        this.$emit("myNewGoal", this.newGoal);
      } else {
        this.isEmpty = true;
        setTimeout(() => {
          this.isEmpty = false;
        }, 5000);
      }
      this.newGoal = "";
    },
  },
};
</script>
