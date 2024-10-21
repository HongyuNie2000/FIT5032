<template>
  <div id="app">
   <pre>{{ jsondata }}</pre>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue' // Import ref to manage reactive variables
import axios from 'axios'

// Define reactive variables for count and error
const jsondata = ref(null)
const error = ref(null)

async function getBookCount() {
  try {
    // Replace with the actual API endpoint URL
    const response = await axios.get('http://127.0.0.1:5001/efolio-6eb3a/us-central1/countBooks')
    jsondata.value = response.data // Update reactive variable
    error.value = null // Clear any previous errors
  } catch (err) {
    console.error('Error fetching book count:', err)
    error.value = err // Set the error message
  }
}

onMounted(()=>{
  getBookCount()
})


</script>
