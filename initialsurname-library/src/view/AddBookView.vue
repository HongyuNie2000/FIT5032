<template>
  <div>
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

  <div>
    <h1>Update book</h1>
    <div>
      <label for="isbn">ISBN</label>
      <input type="text" v-model="isbn" id="isb" required />
    </div>
    <div>
      <label for="isbn">Update ISBN</label>
      <input type="text" v-model="updateisbn" id="isb" required />
    </div>
    <div>
      <label for="name">Update Name</label>
      <input type="text" v-model="updatename" id="name" required />
    </div>
    <button type="submit" @click="updateBook(isbn, updatename, updateisbn)">Update Book</button>
  </div>

  <div>
    <h1>delete book</h1>
    <div>
      <label for="isbn">ISBN</label>
      <input type="text" v-model="isbn" id="isb" required />
    </div>
    <button type="submit" @click="deleteBookByIsbn(isbn)">Update Book</button>
  </div>

  <div>
    <!--BookList /-->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import db from '../firebase/init.js'
import {
  deleteDoc,
  where,
  query,
  getDocs,
  doc,
  updateDoc,
  collection,
  addDoc
} from 'firebase/firestore'
import BookList from '../components/BookList.vue'
const isbn = ref('')
const name = ref('')
const addBook = async () => {
  try {
    const isbnNumber = Number(isbn.value)
    if (isNaN(isbnNumber)) {
      alert('ISBN must be a valid number')
      return
    }
    await addDoc(collection(db, 'books'), {
      isbn: isbnNumber,
      name: name.value
    })
    isbn.value = ''
    name.value = ''
    alert('Book added successfully')
  } catch (error) {
    console.error('Error adding book: ', error)
  }
}

const updateisbn = ref('')
const updatename = ref('')

const updateBook = async (isbn, updatedName, updatedIsbn) => {
  try {
    // Step 1: Query the book based on ISBN
    const q = query(collection(db, 'books'), where('isbn', '==', Number(isbn))) // Query for the book with this ISBN
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      alert('No book found with that ISBN')
      return
    }

    // Step 2: Get the document ID of the book
    const bookDoc = querySnapshot.docs[0] // Assuming ISBNs are unique, take the first document
    const bookRef = doc(db, 'books', bookDoc.id) // Reference to the specific document by its Firestore ID

    // Step 3: Update the book's fields
    await updateDoc(bookRef, {
      name: updatedName,
      isbn: Number(updatedIsbn) // Ensure ISBN is a number
    })

    alert('Book updated successfully')
  } catch (error) {
    console.error('Error updating book: ', error)
  }
}

const deleteBookByIsbn = async (isbn) => {
  try {
    // Step 1: Query the book by its ISBN
    const q = query(collection(db, 'books'), where('isbn', '==', Number(isbn))) // Ensure ISBN is a number
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      alert('No book found with that ISBN')
      return
    }

    // Step 2: Get the document ID
    const bookDoc = querySnapshot.docs[0] // Assuming ISBNs are unique, take the first document
    const bookRef = doc(db, 'books', bookDoc.id) // Reference to the specific document by its Firestore ID

    // Step 3: Delete the document
    await deleteDoc(bookRef)

    alert('Book deleted successfully')
  } catch (error) {
    console.error('Error deleting book: ', error)
  }
}
</script>
