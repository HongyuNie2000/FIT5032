<template>
  <div id="app">
    <h1>Book Counter</h1>
    <button @click="getBookCount">Get Book Count</button>
    <p v-if="count !== null">Toal number of books: {{ count }}</p>
    <p v-if="error">{{ error }}</p>
    
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN</label>
        <input type="text" v-model="isbn" id="isb" required />
      </div>
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue' // Import ref to manage reactive variables
import axios from 'axios'
const isbn = ref('')
const name = ref('')
// Define reactive variables for count and error
const count = ref(null)
const error = ref(null)

async function getBookCount() {
  try {
    // Replace with the actual API endpoint URL
    const response = await axios.get('http://127.0.0.1:5001/efolio-6eb3a/us-central1/countBooks')
    count.value = response.data.count // Update reactive variable
    error.value = null // Clear any previous errors
  } catch (err) {
    console.error('Error fetching book count:', err)
    error.value = err // Set the error message
    count.value = null // Reset count to null on error
  }
}

const addBook = async () => {
  try {
    // Ensure ISBN is a valid number
    const isbnNumber = Number(isbn.value)
    if (isNaN(isbnNumber)) {
      alert('ISBN must be a valid number')
      return
    }
    const response = await axios.post('http://127.0.0.1:5001/efolio-6eb3a/us-central1/addBook', {
      isbn: isbnNumber,
      name: name.value,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (response.status === 200) {
      alert('Book added successfully!')
      isbn.value = ''  
      name.value = ''
    } else {
      alert(`Failed to add book: ${response.data.error}`)
    }
  } catch (error) {
    alert(`Error adding book: ${error.message}`)
    console.error('Error adding book:', error)
  }
}

</script>
