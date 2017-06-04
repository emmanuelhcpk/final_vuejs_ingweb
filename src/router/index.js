import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Paciente from '@/components/Paciente'
import Doctor from '@/components/Doctor'
import VerDoctores from '@/components/VerDoctores'
import VerPacientes from '@/components/VerPacientes'
import Cita from '@/components/Cita'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/pacientes',
      name: 'pacientes',
      component: Paciente
    },{
      path: '/doctores',
      name: 'doctores',
      component: Doctor
    },{
      path: '/citas',
      name: 'citas',
      component: Cita
    },{
      path: '/lista-doctores',
      name: 'listado de doctores',
      component: VerDoctores
    },{
      path: '/lista-pacientes',
      name: 'listado de pacientes',
      component: VerPacientes
    }
  ]
})
