import { createMemoryHistory, createRouter } from 'vue-router'
import Signin from '../view/Signin.vue'
import Home from '../view/Home.vue'
import ContactUs from '../view/ContactUs.vue'
import Signup from '@/view/Signup.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Signin', component: Signin },
  { path: '/ContactUs', component: ContactUs },
  { path: '/Signup', component: Signup }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})
export default router
