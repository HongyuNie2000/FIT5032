<template>
  <div class="container-sm" style="display: flex; justify-content: center">
    <div class="signin">
      <div><h1>Log in</h1></div>
      <div class="signup">
        Don't have an account?
        <RouterLink to="/Signup">register now</RouterLink>
      </div>
      <div class="inputSection">
        <div class="mb-3">
          <label for="email-address" class="form-label">Email address</label>
          <input
            type="email"
            id="exampleFormControlInput1"
            class="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="email"
            id="exampleFormControlInput1"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary me-2">Sign in</button>
          <button type="button" class="btn btn-secondary" @click="clearForm">
            Forget Password?
          </button>
        </div>
      </div>
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

<script setup></script>

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
  width: 600px;
  border: solid;
}

.signup {
  display: flex;
  justify-content: right;
}
</style>
