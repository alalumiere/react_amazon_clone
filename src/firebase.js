import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCz4iXn8j9aLI__pPtnzvBW489I8nU9b7c",
  authDomain: "clone-d000f.firebaseapp.com",
  databaseURL: "https://clone-d000f.firebaseio.com",
  projectId: "clone-d000f",
  storageBucket: "clone-d000f.appspot.com",
  messagingSenderId: "420529442360",
  appId: "1:420529442360:web:bbc179102e7cff064160cd",
  measurementId: "G-ZRYRF1BHF9",
};

const firebaseApp = firebase.default.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
