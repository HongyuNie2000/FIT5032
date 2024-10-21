<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-mid-8">
        <h1 class="text -center">Sign up</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="username" class="form-label">User name</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>

            <div class="col-md-6">
              <label for="gender" class="form-label">gender</label>
              <select
                class="form-select"
                id="gender"
                @blur="() => validateGender(true)"
                @input="() => validateGender(false)"
                v-model="formData.gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">other</option>
              </select>
              <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
            </div>
            <div class="col-md-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="text"
                class="form-control"
                id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
            <div class="col-md-6">
              <label for="Confirm password" class="form-label">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                @blur="() => validateConfirmPassword(true)"
                v-model="formData.confirmPassword"
              />
              <div v-if="errors.confirmPassword" class="text-danger">
                {{ errors.confirmPassword }}
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAustralian"
                  v-model="formData.isAustralian"
                />
                <label class="form-check-label" for="isAustralian">isAustralian Resident?</label>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="reason" class="form-label">Reason for joining</label>
            <textarea
              class="form-control"
              id="reason"
              rows="3"
              @blur="() => validateReason(true)"
              @input="() => validateReason(false)"
              v-model="formData.reason"
            ></textarea>
            <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
            <div v-else-if="formData.reason.includes('friend')" style="color: green">
              Great to have a friend
            </div>
          </div>
          <div class="mb-3">
            <label for="reason" class="form-label">Suburb</label>
            <input type="text" class="form-control" id="suburb" v-bind:value="formData.suburb" />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2" @click="register()">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '@/store/store'

function register() {
  validateName(true)
  validatePassword(true)
  validateGender(true)
  validateReason(true)
  validateConfirmPassword(true)
  if (
    !errors.value.email &&
    !errors.value.password &&
    !errors.value.gender &&
    !errors.value.reason &&
    !errors.value.confirmPassword
  ) {
    if (store.state.Users.find((user) => user.username == formData.value.username)) {
      alert('user has exsited')
    } else {
      store.dispatch('register', formData.value)
    }
  } else {
    alert('cannot be empety！')
    clearForm()
  }
}

const validateConfirmPassword = (blur) => {
  if (formData.value.password !== formData.value.confirmPassword) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
  } else {
    errors.value.confirmPassword = null
  }
}

const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  isAustralian: false,
  reason: '',
  gender: '',
  suburb: 'Clayton'
})

function clearForm() {
  formData.value.username = ''
  formData.value.password = ''
  formData.value.confirmPassword = ''
  formData.value.isAustralian = false
  formData.value.reason = ''
  formData.value.gender = ''
}

const errors = ref({
  email: null,
  password: null,
  confirmPassword: null,
  resident: null,
  gender: null,
  reason: null
})

const validateName = (blur) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (formData.value.username == '') {
    if (blur) errors.value.username = 'Email can not be empty'
  } else {
    if (blur) {
      if (!emailPattern.test(formData.value.username))
        errors.value.username = 'Email fomat is not correct'
    } else errors.value.usernamel = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long`
  } else if (!hasUppercase) {
    if (blur) errors.value.password = `Password must contain at least one uppercase letter`
  } else if (!hasLowercase) {
    if (blur) errors.value.password = `Password must contain at least one lowwer letter`
  } else if (!hasNumber) {
    if (blur) errors.value.password = `Password must contain at least one lnumber`
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = `Password must contain at least one special character`
  } else {
    errors.value.password = null
  }
}

const validateGender = (blur) => {
  if (formData.value.gender == '') {
    if (blur) errors.value.gender = 'Gender must be not empty'
  } else errors.value.gender = null
}

const validateReason = (blur) => {
  if (formData.value.reason == '') {
    if (blur) errors.value.reason = 'Reason must be not empty'
  } else if (formData.value.reason.length < 10) {
    if (blur) errors.value.reason = 'Reason must be great than 10 character'
  } else errors.value.reason = null
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
.list-group-item {
  padding: 10px;
}
</style>
