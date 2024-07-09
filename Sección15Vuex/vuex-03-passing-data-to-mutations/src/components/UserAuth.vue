<template>
  <button @click="setAuth" v-if="!isAuthOrNo">Log In</button>
  <button @click="setNoAuth" v-if="isAuthOrNo">Log Out</button>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex/dist/vuex.cjs.js';

export default {
  computed: {
    ...mapGetters(['isAuthOrNo']),
  },
  methods: {
    ...mapMutations(['setAuth', 'setNoAuth']),
  },
};
</script>
