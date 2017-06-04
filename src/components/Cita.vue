<template>
  <div class="hello">
    <h2>Citas de doctores</h2>

    <div class="row">
      <div class="container">
        <div class="col-sm-12">
          <form class="form">
            <div class="form-group">
              <label for="">Fecha</label>
              <input type="date" class="form-control"/>
            </div>

            <div class="form-group">
              <label for="">Valor</label>
              <input type="number" class="form-control"/>
            </div>

            <div class="form-group">
              <label for="">Paciente</label>
              <select name="" id="" class="form-control">
                <option value=""></option>
                <option value="">Juan Perez</option>
                <option value="">David gomez</option>
                <option value="">Laura Valencia</option>
              </select>
            </div>

            <div class="form-group">
              <label for="">Doctor</label>
              <select name="" id="" class="form-control">
                <option value=""></option>
                <option value="">Juan Fernando Zapata</option>
                <option value="">Guillermo Perez</option>
                <option value="">Felipe Roldán</option>
                <option value="">Sebastian Botero</option>
              </select>
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
