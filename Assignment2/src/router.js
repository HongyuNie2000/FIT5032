import { createMemoryHistory, createRouter } from 'vue-router'
import Signin from './component/Signin.vue'
import Home from './component/Home.vue'
import ContactUs from './component/ContactUs.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Signin', component: Signin },
  { path: '/ContactUs', component: ContactUs }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})
export default router
