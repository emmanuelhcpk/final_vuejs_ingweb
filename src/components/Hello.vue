<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Smile Fresh</h2>
    <ul>
      <li><a href="/#/pacientes">Crear Pacientes</a></li>
      <li><a href="/#/pacientes">Crear Doctores</a></li>
      <li><a href="/#/pacientes">Crear Citas</a></li>
      <li><a href="/#/pacientes">Ver Pacientes</a></li>
      <li><a href="/#/pacientes">Ver Doctores</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Aplicación de consultorios odontologicos'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
