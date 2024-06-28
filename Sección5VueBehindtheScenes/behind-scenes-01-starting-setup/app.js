const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount("#app");

// let message = "Hello ";
// let longMessage = message + "World";
// console.log(longMessage);
// message = "Hello!!! ";
// console.log(longMessage);
const data = {
  message: "Hello!",
  longMessage: "Hello! World",
};
const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + "World";
    }
    target.message = value;
  },
};
const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!";
console.log(proxy.longMessage);

//Esto es lo que hace vue.js detras de nuestros ojos, convierte las propiedades normales en propiedades reactivas con la funcion proxy y los argumentos data y handler ...

const app2 = Vue.createApp({
  template: `
  <h1>This my second app</h1>
  <button id="secondButton" @click="scrollToFisrtApp">
    Take me on the fisrt app
  </button>
`,
  data() {
    return {};
  },
  methods: {
    scrollToFisrtApp() {
      window.scrollTo(0, 0);
    },
  },
  computed: {},
  watchers: {},
});

app2.mount("#app2");
