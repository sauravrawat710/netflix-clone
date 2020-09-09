import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCpx26qmHbwRtGZQciJ7VBRvSM3v7Vqr5I",
  authDomain: "instagram-clone-a0bdb.firebaseapp.com",
  databaseURL: "https://instagram-clone-a0bdb.firebaseio.com",
  projectId: "instagram-clone-a0bdb",
  storageBucket: "instagram-clone-a0bdb.appspot.com",
  messagingSenderId: "133767477669",
  appId: "1:133767477669:web:9ce9e9f34f59729570904c",
  measurementId: "G-TF7WFY5L8H",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
