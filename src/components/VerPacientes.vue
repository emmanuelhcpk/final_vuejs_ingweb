<template>
  <div class="hello">
    <h2>Listado Pacientes</h2>

    <div class="row">
      <div class="container">
        <div class="col-sm-12">
          <table class="table table-striped">
            <thead>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Opciones</th>
            </thead>
            <tbody>
            <tr v-for="item in pacientes">
              <td>{{item.nombre}}</td>
              <td>{{item.apellido}}</td>
              <td>{{item.telefono}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data ()
  {
    return {
      pacientes:[{nombre:"David",apellido:"Gomez",telefono:"N/a"},{nombre:"Juan",apellido:"Perez",telefono:"4456789"}]
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
