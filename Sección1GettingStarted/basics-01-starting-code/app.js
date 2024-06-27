const app = Vue.createApp({
  data() {
    return {
      courseGoal: ["Finish the cours and learn Vue!", "Learn a lot of Vue.js"],
      vueLink: "https://vuejs.org/",
      myh1goal: "<h1>I will do amazing vue.js apps!</h1>",
    };
  },
  methods: {
    chooseGoal() {
      let number = Math.floor(Math.random() * 2);
      return this.courseGoal[number]; // Para referirnos a las propiedades del objeto( corseGoal, vueLink etc), utilizamos this., como si una propiedad de una clase de java se tratara
    },
  },
});
app.mount("#user-goal");

// Para interpolar datos que tenemos en nuestro objeto que devolvemos, por ejemplo courseGoal, podemos utilizarlo en el html con {{courseGoal}}.
// Podemos ver el ejemplo en el html index.html en la etiqueta <p>
// Cabe destacar que solo funcionara en la parte que tenemos controlada por Vue, en nuestro caso <section id="userGoal"

// Para establecer valores del html, como por ejemplo el del atributo href en la etiqueta del html, utilizamos una sintaxis diferente, v-bind: href.
// En definitiva podemos decir que el contenido que no este entre equiquetas, lo podemos interpolar con {{}},
// y todas las demas interacciones con los valores de los atributos de las etiquetas con esta sintaxi.
