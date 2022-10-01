import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Carrega o componente inteiro de uma vez.
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // Não carrega o componente de uma vez 
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/marca',
    name: 'marca',
    component: () => import('../views/MarcaVue.vue')
  },
  {
    path: '/carro',
    name: 'carro',
    component: () => import('../views/CarroVue.vue')
  },
  {
    path: '/marca-edicao/:id',
    name: 'marca-edicao',
    component: () => import('../views/MarcaFormVue.vue')
  },
  {
    path: '/carro-edicao/:id',
    name: 'carro-edicao',
    component: () => import('../views/CarroFormVue.vue')
  }
]

const router = createRouter({
  //history: createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),


  routes
})

export default router
