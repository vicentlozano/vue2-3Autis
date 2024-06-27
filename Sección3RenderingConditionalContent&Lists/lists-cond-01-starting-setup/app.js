const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goals2: [],
      goals3: {},
      inputText: "",
      trueOrFalse: false,
      count: 0,
      isUndefined: true,
    };
  },
  methods: {
    addToList() {
      if (this.inputText.trim().length > 0) {
        this.goals.push({ id: this.count++, text: this.inputText });
        this.goals2.push(this.inputText);
        this.goals3["frase" + this.count.toString()] = {
          lon: this.inputText.length,
          text: this.inputText,
        };
        this.inputText = "";
        this.trueOrFalse = !this.trueOrFalse;
        this.isUndefined = false;
      }
    },
    removeToList(id) {
      this.goals.splice(id, 1);
      this.goals2.splice(id * -1, 1);
      delete this.goals3[id];
    },
    isTrue() {
      return this.trueOrFalse;
    },
  },
});

app.mount("#user-goals");
