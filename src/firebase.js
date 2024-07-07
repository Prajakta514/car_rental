import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDhhSzUB9BYgp-6B-KXsoqeQ4I4bbmLia4",
  authDomain: "carrental-635ae.firebaseapp.com",
  projectId: "carrental-635ae",
  storageBucket: "carrental-635ae.appspot.com",
  messagingSenderId: "505349756615",
  appId: "1:505349756615:web:6972c59f38fa5779f750e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

