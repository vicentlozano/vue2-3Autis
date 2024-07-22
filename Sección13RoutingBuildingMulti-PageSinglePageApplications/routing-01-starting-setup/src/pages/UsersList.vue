<template>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
    <button @click="saveChanges">Save Changes</button>
  </ul>
</template>

<script>
import UserItem from  '../components/users/UserItem.vue'

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changedSaved: false,
    };
  },
  methods: {
    saveChanges() {
      this.changedSaved = true;
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, next, from);
    if (this.changedSaved) {
      next(true);
    } else {
      // alert('Tienes que confirmar los cambios para avanzar!');

      const userWantOrNo = confirm(
        "You haven't confirmed the changes. Are you sure you want to leave this page?"
      );
      next(userWantOrNo);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
