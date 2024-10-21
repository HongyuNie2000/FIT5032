<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Home (Week 5)</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/about"
            class="nav-link"
            active-class="active"
            v-if="store.state.isLoggedIn"
            >About</router-link
          >
          <router-link to="/signin" class="nav-link" active-class="active" v-else
            >About</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signin" class="nav-link" active-class="active">Sign in</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireLogin" class="nav-link" active-class="active"
            >Firebase register</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/BookList" class="nav-link" active-class="active">BookList</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active"
            >Get book Count</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active"
            >Get Weather</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active"
            >Count Book API</router-link
          >
        </li>
      </ul>
    </header>
  </div>
</template>
<script setup>
import { store } from '@/store/store'
</script>
