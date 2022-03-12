import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB92bLINqSRC8Y89sxdn84viBT3cnqJxR0",
    authDomain: "nextjs-blog-188fe.firebaseapp.com",
    projectId: "nextjs-blog-188fe",
    storageBucket: "nextjs-blog-188fe.appspot.com",
    messagingSenderId: "312369887050",
    appId: "1:312369887050:web:20f34c2b63bcabc39873b3",
    measurementId: "G-CJ6LWCRYCG"
  };


  if(!firebase.getApps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();