// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import{getAuth}from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAD6bXnMt7sdmjRLqBhcxVloixM7TLXD5I",
    authDomain: "fir-with-react-fe860.firebaseapp.com",
    projectId: "fir-with-react-fe860",
    storageBucket: "fir-with-react-fe860.appspot.com",
    messagingSenderId: "458919583181",
    appId: "1:458919583181:web:a0e73673ceac301b323884",
    measurementId: "G-J4TF8MB847"
  };

  
  const fire = initializeApp(firebaseConfig);

export const auth =getAuth(fire)
