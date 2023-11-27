// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
export // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTsL2aEu4AbhUI4XxWa2mVFcr0hsmHMUw",
  authDomain: "inventory-154e2.firebaseapp.com",
  projectId: "inventory-154e2",
  storageBucket: "inventory-154e2.appspot.com",
  messagingSenderId: "468965365084",
  appId: "1:468965365084:web:c9e620a412798abb831d99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize the FirebaseUI Widget using Firebase.
export const auth = getAuth(app);
export const storage = getStorage(app);
