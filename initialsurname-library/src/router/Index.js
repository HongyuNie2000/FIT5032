import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import AboutView from '../view/AboutView.vue'
import Signin from '@/view/SigninView.vue'
import AddBookView from '@/view/AddBookView.vue'
import FirebaseSigninView from '@/view/FirebaseSigninView.vue'
import FirebaseLogin from '@/view/FirebaseLogin.vue'
import BookList from '@/components/BookList.vue'
import GetBookCountView from '@/view/GetBookCountView.vue'
import WeatherView from '@/view/WeatherView.vue'
import CountBookAPI from '@/view/CountBookAPI.vue'
const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/signin', name: 'Signin', component: Signin },
  { path: '/addbook', name: 'AddBook', component: AddBookView },
  { path: '/FireLogin', name: 'FireLogin', component: FirebaseSigninView },
  { path: '/Login', name: 'Login', component: FirebaseLogin },
  { path: '/BookList', name: 'BookList', component: BookList },
  {path:'/GetBookCount', name:'GetBookCount', component:GetBookCountView},
  {path:'/WeatherCheck', name: 'WeatherCheck', component: WeatherView},
  {
    path:'/CountBookAPI', name:'CountBookAPI', component:CountBookAPI
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
