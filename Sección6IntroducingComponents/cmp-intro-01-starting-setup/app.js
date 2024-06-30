const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "73591933H",
          name: "Manuel Lopez",
          phone: "694501662",
          email: "manuel@localhost.com",
        },
        {
          id: "73591233H",
          name: "Julia Jones",
          phone: "694333333",
          email: "julia@localhost.com",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  watch: {},
});
//! Los componentes deben de nombrarse con dos palabra y guion para evitar conflictos con las etiqetas html
app.component("friend-contact", {
  template: ` 
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">
           {{detailsAreVisible? 'Hide' : 'Show'}} Details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "73591933H",
        name: "Manuel Lopez",
        phone: "694501662",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");

