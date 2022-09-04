import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDImHYu_U43R4xY1RVY0F6g9UOL2hN5UD4",
    authDomain: "cooking-site-ea123.firebaseapp.com",
    projectId: "cooking-site-ea123",
    storageBucket: "cooking-site-ea123.appspot.com",
    messagingSenderId: "550709609495",
    appId: "1:550709609495:web:143cfe1e1c50cb084a0852"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export {projectFirestore}