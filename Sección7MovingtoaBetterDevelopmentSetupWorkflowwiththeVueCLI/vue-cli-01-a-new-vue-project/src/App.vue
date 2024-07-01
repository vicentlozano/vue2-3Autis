<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :friend="friend"
      >
      </friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";

export default {
  components: {
    FriendContact,
  },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "654345543",
          email: "lozanopepe@gmail.com",
        },
        {
          id: "pepe",
          name: "Pepe Lorenz",
          phone: "654345543",
          email: "lozanopepe@gmail.com",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

