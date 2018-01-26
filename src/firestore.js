import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDWLquvFdZ6T1CSdLrMTZljugC5Qci-Go4",
    authDomain: "bookstore-d2e05.firebaseapp.com",
    databaseURL: "https://bookstore-d2e05.firebaseio.com",
    projectId: "bookstore-d2e05",
    storageBucket: "bookstore-d2e05.appspot.com",
    messagingSenderId: "738336859931"
  };


firebase.initializeApp(config);
const db = firebase.firestore();
export default db;