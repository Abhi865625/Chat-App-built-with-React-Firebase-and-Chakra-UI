import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8rj0oAhihVr629Bz292G6I4J9KowW7CU",
  authDomain: "chatapp-5fd24.firebaseapp.com",
  projectId: "chatapp-5fd24",
  storageBucket: "chatapp-5fd24.appspot.com",
  messagingSenderId: "376870792440",
  appId: "1:376870792440:web:23ac794ea84a281d171f0d",
  measurementId: "G-ZPKQVW9RDH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
};
export default app;
