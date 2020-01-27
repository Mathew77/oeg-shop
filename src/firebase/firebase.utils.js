import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-Iu6BTRbQlmu7ywp8HsPSKm7yMe8n4N8",
    authDomain: "eog-shop.firebaseapp.com",
    databaseURL: "https://eog-shop.firebaseio.com",
    projectId: "eog-shop",
    storageBucket: "eog-shop.appspot.com",
    messagingSenderId: "1027832970247",
    appId: "1:1027832970247:web:8052a2a779ee4dd246fea2",
    measurementId: "G-3EJB5FL27Y"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase ;