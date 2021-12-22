import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomesPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  }
  // Configure new route here!
]

const router = new VueRouter({
  routes
})

export default router
