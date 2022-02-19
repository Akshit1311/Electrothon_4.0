import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAqSLe3mW_IDRE0mgrH87xsUO3ICN1Xx_A",
    authDomain: "tonapp-41aa6.firebaseapp.com",
    projectId: "tonapp-41aa6",
    storageBucket: "tonapp-41aa6.appspot.com",
    messagingSenderId: "1031953628323",
    appId: "1:1031953628323:web:f220fdafaf671ceb779316"
  };

   if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)

  const auth  =firebase.auth()
  const db =  firebase.firestore()
  const storage = firebase.storage()
  const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

  export {auth,db,storage,serverTimestamp}