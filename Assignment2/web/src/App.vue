<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary"
    style="display: flex; justify-content: space-between"
  >
    <RouterLink to="/">
      <button type="button" class="btn btn-outline-dark">
        <p style="color: black; margin: 0px">Home</p>
      </button>
    </RouterLink>
    <RouterLink to="/ContactUs">
      <button type="button" class="btn btn-outline-dark">
        <p style="color: black; margin: 0px">Contacu us</p>
      </button>
    </RouterLink>
    <RouterLink to="/Signin">
      <button type="button" class="btn btn-outline-dark" style="border: none">
        <img src="/public/image/profile.png" style="height: 30px; border: none" />
        <p style="color: black; margin: 0px">Sign in</p>
      </button>
    </RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
<style scoped></style>
