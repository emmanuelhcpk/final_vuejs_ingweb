<template>
  <div class="hello">
    <h2>Doctores</h2>

    <div class="row">
      <div class="container">
        <div class="col-sm-12">
          <form class="form">
            <div class="form-group">
              <label for="">Nombre</label>
              <input type="text" class="form-control"/>
            </div>

            <div class="form-group">
              <label for="">Apellido</label>
              <input type="text" class="form-control"/>
            </div>

            <div class="form-group">
              <label for="">Telefono</label>
              <input type="text" class="form-control"/>
            </div>

            <div class="form-group">
              <label for="">Dirección</label>
              <input type="text" class="form-control"/>
            </div>
            <div class="form-group">
              <label for="">Fecha de Nacimiento</label>
              <input type="date" class="form-control"/>
            </div>

            <div class="form-group">
              <label for="">Especialidad</label>
              <select name="" id="" class="form-control">
                <option value="">----</option>
                <option value="">Cardiologia</option>
                <option value="">Neurologia</option>
                <option value="">Urologia</option>
                <option value="">Pediatria</option>
                <option value="">Oncologia</option>
              </select>
            </div>

            <div class="form-group">
              <label for="">Género</label>
              <input type="text" class="form-control"/>
            </div>
            <button class="btn btn-success">Enviar</button>

          </form>
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
