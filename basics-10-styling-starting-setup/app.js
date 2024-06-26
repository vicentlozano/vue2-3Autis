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
        case "a": {
          this.boxASelected = !this.boxASelected;
          break;
        }
        case "b": {
          this.boxBSelected = !this.boxBSelected;
          break;
        }
        case "c": {
          this.boxCSelected = !this.boxCSelected;
          break;
        }
      }
    },
  },
  computed: {},
});
app.mount("#styling");
