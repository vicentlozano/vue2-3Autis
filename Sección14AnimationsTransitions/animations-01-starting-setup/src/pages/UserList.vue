<template>
  <div class="grid">
    <div class="container">
      <input type="text" v-model="addInput" />
      <button @click="addUser">Add user</button>
    </div>
    <transition-group tag="ul" name="list">
      <li v-for="user in users" :key="user">{{ user }}</li>
    </transition-group>
    <div class="container">
      <input type="text" v-model="deleteInput" />
      <button @click="deleteUser">Delete User</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Pepe'],
      addInput: '',
      deleteInput: '',
    };
  },
  methods: {
    addUser() {
      if (this.addInput) {
        this.users.unshift(
          this.addInput.charAt(0).toUpperCase() +
            this.addInput.slice(1).toLowerCase()
        );
        this.addInput = '';
      }
    },
    deleteUser() {
      if (this.deleteInput) {
        // this.users.splice(
        //   this.users.findIndex(
        //     (user) => user.toLowerCase() === this.deleteInput.toLowerCase()
        //   ),
        //   1
        // );
        this.users = this.users.filter(
          (user) => user.toLowerCase() !== this.deleteInput.toLowerCase()
        );
        this.deleteInput = '';
      }
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}
li {
  border: 1px solid salmon;
  text-align: center;
  padding: 0.1rem;
  margin: 0.3rem;
}
input {
  margin: 0.5rem;
  border-radius: 30px;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.list-enter-active {
  transition: all 0.8s ease-in;
}
.list-enter-to {
  opacity: 1;
  transform: translateX(0px);
}

.list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.list-leave-active {
  transition: all 0.8s ease-out;
  position: absolute;
}
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move {
  transition: transform 0.8s ease;
}
</style>
