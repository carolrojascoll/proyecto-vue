import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   /*  {
       path: '/',
      name: 'home',
      component: HomeView,
    }, */
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../models/contador/components/Contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      component: () => import('../models/listadetareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../models/registro/views/RegistrarViews.vue'),
    },
    {
      path: '/calcular',
      name: 'calcular',
      component: () => import('../models/calcular/views/CalcularViews.vue'),
    },
  ]
})

export default router
