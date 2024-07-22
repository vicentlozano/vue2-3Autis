<template>
  <div class="container">
    <input type="text" v-model="valorBuscado" />
    <button @click="buscarAlumnoObjeto">Buscar Alumno Objeto</button>
    <button @click="buscarAlumnoArrayObjetos">Buscar Alumno Array</button>
    <p>VALOR/ES: {{ valor }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valor: '',
      object: {
        alumno1: {
          nombre: 'vicent',
          edad: 30,
        },
        alumno2: {
          nombre: 'pepe',
          edad: 31,
        },
        alumno3: {
          nombre: 'manolo',
          edad: 32,
        },
        alumno4: {
          nombre: 'patri',
          edad: 33,
        },
        alumno5: {
          nombre: 'tere',
          edad: 34,
        },
      },
      object2: [
        {
          nombre: 'vicent',
          edad: 30,
        },
        {
          nombre: 'pepe',
          edad: 31,
        },
        {
          nombre: 'manolo',
          edad: 32,
        },
        {
          nombre: 'patri',
          edad: 33,
        },
        {
          nombre: 'tere',
          edad: 34,
        },
      ],
      valorBuscado: '',
    };
  },
  methods: {
    buscarAlumnoArrayObjetos() {
      this.valor =
        this.object2.find((user) => user.nombre === this.valorBuscado) || '';
      setTimeout(() => {
        this.valor = '';
        this.valorBuscado = '';
      }, 5000);
    },
    buscarAlumnoObjeto() {
      for (let user in this.object) {
        if (this.object[user].nombre === this.valorBuscado) {
          this.valor = this.object[user];
          break;
        }
      }

      setTimeout(() => {
        this.valor = '';
        this.valorBuscado = '';
      }, 5000);
    },
  },
};
</script>
