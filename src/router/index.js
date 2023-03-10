import { createRouter, createWebHistory } from 'vue-router'
import ProductosView from '../views/ProductosView.vue'
import ProductoDetail from '../views/ProductoDetail.vue'
import Contacto from '../views/Contacto.vue'
import PopUp from '../components/popup-modal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductosView,
    children: [
      {
        path: '/',
        name: 'popup',
        component: PopUp,
      }
    ]
  },
  {
    path: '/producto',
    name: 'producto-detail',
    props: true,
    component: ProductoDetail
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
