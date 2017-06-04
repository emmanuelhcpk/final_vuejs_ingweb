import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Paciente from '@/components/Paciente'
import Doctor from '@/components/Doctor'
import Historia from '@/components/Hello'
import Cita from '@/components/Hello'

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
    }
  ]
})
