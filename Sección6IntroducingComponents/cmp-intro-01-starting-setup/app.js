const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          name: "Manuel Lopez",
          phone: "694501662",
          email: "manuel@localhost.com",
          show: false,
        },
        {
          name: "Julia Jones",
          phone: "694333333",
          email: "julia@localhost.com",
          show: false,
        },
      ],
    };
  },
  methods: {
    showOrNot(index) {
      this.friends[index].show.value = !this.friends[index].show.value;
    },
  },
  computed: {},
  watch: {},
});
app.mount("#app");
