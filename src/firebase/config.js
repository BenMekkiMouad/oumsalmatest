import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDD5sjkF4jSHlXRbqy6Huo1XAu5fvW4EJY",
  authDomain: "ninja-firegram-cea09.firebaseapp.com",
  databaseURL: "https://ninja-firegram-cea09.firebaseio.com",
  projectId: "ninja-firegram-cea09",
  storageBucket: "ninja-firegram-cea09.appspot.com",
  messagingSenderId: "132469848106",
  appId: "1:132469848106:web:1864d53065533bb6b66b53"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };