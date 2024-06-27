const app = Vue.createApp({
  data() {
    return {
      inputText: "",
      listText: [],
      visibility: true,
      hideShow: "Hide",
    };
  },
  methods: {
    addTask() {
      this.listText.push(this.inputText);
      this.inputText = "";
    },
    hiddenList() {
      this.visibility = !this.visibility;
      this.hideShow === "Hide"
        ? (this.hideShow = "Show")
        : (this.hideShow = "Hide");
    },
  },
  computed: {},
});

app.mount("#assignment");
