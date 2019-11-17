import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCpq8-65Bb8JBSM25GJbjdvrUU0CVnSJBU",
    authDomain: "ecom-fbd18.firebaseapp.com",
    databaseURL: "https://ecom-fbd18.firebaseio.com",
    projectId: "ecom-fbd18",
    storageBucket: "ecom-fbd18.appspot.com",
    messagingSenderId: "529193073773",
    appId: "1:529193073773:web:4322b2011e4f4f07d69364",
    measurementId: "G-13W4B5L0W3"
  }


  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
