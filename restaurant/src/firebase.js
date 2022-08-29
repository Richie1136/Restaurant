import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTJEhJC-msd3A2UNP4Icf7lwhTa3hnXTw",
  authDomain: "restaurant-app-25c21.firebaseapp.com",
  projectId: "restaurant-app-25c21",
  storageBucket: "restaurant-app-25c21.appspot.com",
  messagingSenderId: "444814836789",
  appId: "1:444814836789:web:f5485eb6859e47987f9d7c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }