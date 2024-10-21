<template>
  <h1>Sign in</h1>
  <p>
    <input type="text" placeholder="Email" v-model="email" />
  </p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <button @click="signin">Sign in via Firebase</button>
</template>
<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { store } from '@/store/store'
const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()
const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log(auth.currentUser)
      store.commit('Login')
      router.push('/About')
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>
