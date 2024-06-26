const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
      color: "",
    };
  },
  watchers: {},
  methods: {
    changeSelected(a) {
      switch (a) {
        case 'a': {
          this.boxASelected === true
            ? (this.boxASelected = false)
            : (this.boxASelected = true);
          break;
        }
        case 'b': {
          this.boxBSelected === true
            ? (this.boxBSelected = false)
            : (this.boxBSelected = true);
          break;
        }
        case 'c': {
          this.boxCSelected === true
            ? (this.boxCSelected = false)
            : (this.boxCSelected = true);
          break;
        }
      }
    },
  },
  computed: {},
});
app.mount("#styling");
