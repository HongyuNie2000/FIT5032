<template>
  <div
    v-if="!store.state.isLoggedIn"
    class="container-sm"
    style="display: flex; justify-content: center"
  >
    <div class="signin">
      <div><h1>Log in</h1></div>
      <div class="signup">
        Don't have an account?
        <RouterLink to="/">register now</RouterLink>
      </div>
      <form @submit.prevent="submitForm">
        <div class="inputSection">
          <div class="mb-3">
            <label for="email-address" class="form-label">User name</label>
            <input
              type="username"
              id="exampleFormControlInput1"
              class="form-control"
              placeholder="User name"
              v-model="formData.username"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="exampleFormControlInput1"
              class="form-control"
              placeholder="Password"
              v-model="formData.password"
            />
          </div>
        </div>
        <div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2" @click="signin()">Sign in</button>
            <button type="submit" class="btn btn-primary me-2" @click="router.push('/Login')">
              Via Firebase
            </button>
          </div>
        </div>
      </form>
      <div
        class="text-center"
        style="
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          unicode-bidi: isolate;
          color: #ced4da;
        "
      >
        or
      </div>

      <div class="other-method"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { store } from '@/store/store'
import router from '../router/Index'

const formData = ref({
  username: '',
  password: ''
})

function signin() {
  if (formData.value.username !== '' && formData.value.password !== '') {
    const user = store.state.Users.find((user) => user.username == formData.value.username)
    if (user === undefined) alert('User is not existed')
    else {
      if (formData.value.password !== user.password) alert('Possword is not correct')
      else {
        store.state.isLoggedIn = true
        alert('Successful')
        clear()
        router.push('/about')
      }
    }
  }
}

function clear() {
  formData.value.username = ''
  formData.value.password = ''
}
</script>

<style scoped>
.other-method {
}
.inputSection {
}
.signin {
  position: relative;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  border: solid;
}

.signup {
  display: flex;
  justify-content: right;
}
</style>
