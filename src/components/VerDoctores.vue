<template>
  <div class="hello">
    <h2>Listado Doctores</h2>

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
              <tr v-for="item in doctores">
                <td>{{item.nombre}}</td>
                <td>{{item.apellido}}</td>
                <td>{{item.telefono}}</td>
                <td><div class="btn btn-info">Opciones</div></td>
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
      doctores:[{nombre:"Juan Fernando",apellido:"Zapata",telefono:"1145677"}]
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    text-align: left !important;
  }
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
