const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name: "",
      formData: "",
      confirmedName: "",
      formName: "",
    };
  },
  methods: {
    increment(num) {
      this.counter += num;
    },
    decrement(num) {
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName; // para acceder al objeto evente usamos target. Para acceder al valor usamos value.
    },
    submitForm(event) {
      //event.preventDefault(); Esta seria la forma antigua con javascript. Con vue, despues de indicar el evento en html podemos porner un . seguido del modificador que queramos.
      alert("Submited!");
      this.formData = "";
    },
    confirmedAct(event) {
      this.confirmedName = this.name;
      this.formName = "";
    },
  },
});

app.mount("#events");
