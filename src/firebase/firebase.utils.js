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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      
      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapShot = await userRef.get()

      if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          } catch (error) {
            console.log('error creating user', error.message);
          }
      }
      return userRef;
  }


  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
