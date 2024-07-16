<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <p>
      Tu nombre es: {{ userObject.userName }} y tienes:
      {{ userObject.age }} años
    </p>
    <p>
      Tu nombre es: {{ reactiveObject.userName }} y tienes:
      {{ reactiveObject.age }} años
    </p>
    <button @click="sumeOne">Sum +1</button>
    <p v-if="check">Age is modified</p>

    <div>
      <input type="text" v-model="firstName" placeholder="First Name" />
      <input type="text" v-model="lastName" placeholder="Last Name" />
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';
const check = ref(false);
const age = ref(23);
const firstName = ref('');
const lastName = ref('');
const userObject = ref({ userName: 'Manolo', age: 35 });
const reactiveObject = reactive({
  userName: 'Teresa',
  age: 22,
});
const userName = computed(() => firstName.value + ' ' + lastName.value);
watch([age, userObject, reactiveObject], () => {
  if (age.value > 40) {
    age.value = 0;
  }
  if (userObject.value.age > 40) {
    userObject.value.age = 0;
  }
  if (reactiveObject.age > 40) {
    reactiveObject.age = 0;
  }
});

const changeUser2 = () => {
  reactiveObject.age += 2;
  reactiveObject.userName = 'Sara';
};
const timeout = () => (age.value += 1);
const changeUser = () => {
  userObject.value.age += 2;
  userObject.value.userName = 'Pepe';
};
setTimeout(() => {
  timeout();
  changeUser();
  changeUser2();
}, 2000);

const sumeOne = () => {
  age.value++;
  userObject.value.age++;
  reactiveObject.age++;
  check.value = !check.value;
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
