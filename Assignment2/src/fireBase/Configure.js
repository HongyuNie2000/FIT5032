// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBbu857nwVWe54_k1amAJUtHfXan7N2F7A',
  authDomain: 'assignment1-fit5032.firebaseapp.com',
  projectId: 'assignment1-fit5032',
  storageBucket: 'assignment1-fit5032.appspot.com',
  messagingSenderId: '523072803348',
  appId: '1:523072803348:web:cfdac4fd1be2b723f8cd01',
  measurementId: 'G-TJ36VMKQSJ'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)
