// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB37sIfucraa1E_LTN1uQko_KnP83FDv70",
  authDomain: "chat-app-c8e00.firebaseapp.com",
  projectId: "chat-app-c8e00",
  storageBucket: "chat-app-c8e00.appspot.com",
  messagingSenderId: "114788652542",
  appId: "1:114788652542:web:e710f097888845244f9caf",
  measurementId: "G-3G38PLWFKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


//const analytics = getAnalytics(app);