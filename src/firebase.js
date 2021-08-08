import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkxMdd8AegIDGJNL2BvmVUvmd2_0zEjwg",
    authDomain: "facebook-clone-7d398.firebaseapp.com",
    projectId: "facebook-clone-7d398",
    storageBucket: "facebook-clone-7d398.appspot.com",
    messagingSenderId: "517877620649",
    appId: "1:517877620649:web:57574d17508d0e2de3aeb8",
    measurementId: "G-PTYCSPL8C1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

    export { auth, provider} 
  export default db