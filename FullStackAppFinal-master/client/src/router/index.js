import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import Browse from '../components/Browse.vue'
import Login from '../components/Login.vue';
import CreateInstructionGuide from '../components/CreateInstructionGuide.vue'
import ViewInstructionGuide from '../components/ViewInstructionGuide.vue'
import EditInstructionGuide from '../components/EditInstructionGuide.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/browse/create',
    name: 'CreateInstructionGuide',
    component: CreateInstructionGuide
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register
  }
  ,
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/browse',
    name: 'browse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Browse
  },
  {
    path: '/browse/:instructionGuideId',
    name: 'viewinstructionguide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ViewInstructionGuide
  },
  {
    path: '/browse/:instructionGuideId/edit',
    name: 'editinstructionguide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EditInstructionGuide
  }
]

const router = new VueRouter({
  routes
})

export default router
