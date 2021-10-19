import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBq7doIVVsZogkgmsiznUeCbODYStvF3js",
  authDomain: "amigas-chat-app.firebaseapp.com",
  projectId: "amigas-chat-app",
  storageBucket: "amigas-chat-app.appspot.com",
  messagingSenderId: "175073178028",
  appId: "1:175073178028:web:262d0b936762e23c114a09",
  measurementId: "G-LRVQEYN348"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }