<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="showDetailOrNot()">
      {{ showDetails ? "Hide Details" : "Show Details" }}
    </button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["friend"],
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    showDetailOrNot() {
      this.showDetails = !this.showDetails;
    },
  },
  computed: {},
};
</script>

<style src="../styles.css"></style>
