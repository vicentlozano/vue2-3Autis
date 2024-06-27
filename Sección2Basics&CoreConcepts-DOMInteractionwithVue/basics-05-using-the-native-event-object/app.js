const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      test: "test",
      test2: "test2",
      a: 10,
      b: 20,
      suma: undefined,
    };
  },

  // Como podemos observar, ahora tenemos un nuevo objeto para devolver, las propiedades computadas.
  // Tienen la msima estructura que un metodo pero funcionan de diferente manera.
  // La ventaja de estas propiedades computadas, es que mejorara mucho el rendimiento de nuestra pagina, dado que solo actualizara las propiedades que contenga este metodo,
  // es decir, que la propiedad name solo se actualizara cuando algo este realmente implicada con ella, no asi si fuera un metodo convencional,
  //  ya que se actuializaria cada vez que cualquier propiedad de todo el script cambiara.

  computed: {
    fullnameComputed() {
      if (this.name === "" || this.lastName === "") {
        console.log("running again");
        return "";
      }
      console.log("running again");
      return this.name + " " + this.lastName;
    },
    returnTest() {
      console.log("funcionando");
      return this.a + this.b;
    },
  },
  // Los watchers son utiles pero no en este contexto, ja que con las ppropiedades computadas hacemos lo mismo pero con mismo codigo.
  // Estos seran muy utilies en un contexto como el de el contador, en el qual si supera 50 unidades lo restableceremos.
  // Cada vez que la propiedad name canvie, watch ejecutara lo que le digamos en name.
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },

    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + "Lozano";
    //   }
    // },
  },
  methods: {
    returnTest2() {
      this.suma = this.a + this.b;
      console.log("funcionandoMetodo");
      return this.suma;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
    fullNamed() {
      if (this.name === "") {
        console.log("running again");

        return "";
      }
      console.log("running again");
      return this.name + " " + "Lozano";
    },

    aleatorio() {
      this.a = 50;
    },
  },
});

app.mount("#events");
