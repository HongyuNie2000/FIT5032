// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJx-e3fK3SRIx65g8YnsalVISbLWatmEI',
  authDomain: 'efolio-6eb3a.firebaseapp.com',
  projectId: 'efolio-6eb3a',
  storageBucket: 'efolio-6eb3a.appspot.com',
  messagingSenderId: '985515613040',
  appId: '1:985515613040:web:3c23728fa81888f55a8db5',
  measurementId: 'G-G9NRWGZHB0'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
