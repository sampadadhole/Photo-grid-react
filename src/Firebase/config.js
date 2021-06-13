// Your web app's Firebase configuration

//importing firebase package
import firebase from "firebase/app"
import 'firebase/storage'
import 'firebase/firestore'

//script from firebase
var firebaseConfig = {
    apiKey: "AIzaSyAW4EI83tb06yYdFHhCxZRimPaBogXWxBk",
    authDomain: "gallery-firegram-35995.firebaseapp.com",
    projectId: "gallery-firegram-35995",
    storageBucket: "gallery-firegram-35995.appspot.com",
    messagingSenderId: "819974026920",
    appId: "1:819974026920:web:6ca3beed4626fb9634349d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore ,projectStorage, timestamp}